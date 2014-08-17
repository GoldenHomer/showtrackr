var express = require('express'),
    path = require('path'),
    logger = require('morgan'),
    cookieParser = require('cookie-parser'),
    bodyParser = require('body-parser'),
    async = require('async'),
    request = require('request'),
    xml2js = require('xml2js'),
    _ = require('lodash'),
    session = require('express-session'),
    passport = require('passport'),
    LocalStrategy = require('passport-local').Strategy,
    agenda = require('agenda')({ db: { address: 'localhost:27017/test' } }),
    sugar = require('sugar'),
    nodemailer = require('nodemailer'),
    mongoose = require('mongoose'),
    bcrypt = require('bcryptjs');
    csso = require('gulp-csso'),
    uglify = require('gulp-uglify'),
    concat = require('gulp-concat'),
    templateCache = require('gulp-angular-templatecache'),
    compress = require('compression');

var showSchema = new mongoose.Schema({
  _id: Number,
  name: String,
  airsDayOfWeek: String,
  airsTime: String,
  firstAired: Date,
  genre: [String],
  network: String,
  overview: String,
  rating: Number,
  ratingCount: Number,
  status: String,
  poster: String,
  subscribers: [{
    type: mongoose.Schema.Types.ObjectId, ref: 'User' // subscribers is an array of user object IDs
  }],
  episodes: [{
      season: Number,
      episodeNumber: Number,
      episodeName: String,
      firstAired: Date,
      overview: String
  }]
});

//Passport (keep user logged in)
passport.serializeUser(function(user, done) {
  done(null, user.id);
});

passport.deserializeUser(function(id, done) {
  User.findById(id, function(err, user) {
    done(err, user);
  });
});

var app = express();
var oneDay = 86400000; // One day in milliseconds

app.set('port', process.env.PORT || 3000);
app.use(compress());
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.use(cookieParser());
app.use(session({ secret: 'babaganoosh' }));
app.use(passport.initialize());
app.use(passport.session());
app.use(express.static(path.join(__dirname, 'public'), {maxAge: oneDay}));
app.use(function(req, res, next) {
  req.user ? res.cookie('user', JSON.stringify(req.user)) : next(); // Create cookie for newly authenticated user.
});

//Routes


app.post('/api/login', passport.authenticate('local'), function(req, res) { // Security risk here but there's nothing crucial data with tracking shows.
  res.cookie('user', JSON.stringify(req.user));
  res.send(req.user);
});

app.get('/api/logout', function(req, res, next) {
  req.logout();
  res.send(200);
});

app.post('/api/signup', function(req, res, next) {
  var user = new User({
    email: req.body.email,
    password: req.body.password
  });
  user.save(function(err) {
    if (err) return next(err);
    res.send(200);
  });
});

app.get('/api/shows', function(req, res, next) {
  var query = Show.find();
  if (req.query.genre) {
    query.where({ genre: req.query.genre });
  } 
  else if (req.query.alphabet) {
    query.where({ name: new RegExp('^' + '[' + req.query.alphabet + ']', 'i') });
  } 
  else {
    query.limit(12);
  }
  
  query.exec(function(err, shows) {
    if (err) return next(err); // If there is an error, pass to error middleware.
    res.send(shows);
  });
});

app.get('/api/shows/:id', function(req, res, next) {
  Show.findById(req.params.id, function(err, show) {
    if (err) return next(err);
    res.send(show);
  });
});

app.post('/api/shows', function(req, res, next) {
  var apiKey = '9EF1D1E7D28FDA0B';
  var parser = xml2js.Parser({
    explicitArray: false,
    normalizeTags: true
  });
  
  var seriesName = req.body.showName
    .toLowerCase()
    .replace(/ /g, '_')
    .replace(/[^\w-]+/g, '');
  
  async.waterfall([ // https://github.com/caolan/async#waterfalltasks-callback
    function(callback) {
      request.get('http://thetvdb.com/api/GetSeries.php?seriesname=' + seriesName, function(error, response, body) {
        if (error) return next(error);
        parser.parseString(body, function(err, result) {
          if(!result.data.series){
            return res.send(404, {message: req.body.showName + ' was not found.'});
          }

          var seriesId = result.data.series.seriesid || result.data.series[0].seriesid;
          callback(err, seriesId);
        });
      });
    },
    function(seriesId, callback) {
      request.get('http://thetvdb.com/api/' + apiKey + '/series/' + seriesId + '/all/en.xml', function(error, response, body) {
        if (error) return next(error);
        parser.parseString(body, function(err, result) {
          var series = result.data.series;
          var episodes = result.data.episode;
          var show = new Show({
            _id: series.id,
            name: series.seriesname,
            airsDayOfWeek: series.airs_dayofweek,
            airsTime: series.airs_time,
            firstAired: series.firstaired,
            genre: series.genre.split('|').filter(Boolean),
            network: series.network,
            overview: series.overview,
            rating: series.rating,
            ratingCount: series.ratingcount,
            runtime: series.runtime,
            status: series.status,
            poster: series.poster,
            episodes: []
          });
          _.each(episodes, function(episode) {
            show.episodes.push({
              season: episode.seasonnumber,
              episodeNumber: episode.episodenumber,
              episodeName: episode.episodename,
              firstAired: episode.firstaired,
              overview: episode.overview
            });
          });
          callback(err, show);
        });
      });
    },
    function(show, callback) {
      var url = 'http://thetvdb.com/banners/' + show.poster;
      request({ url: url, encoding: null }, function(error, response, body) {
        show.poster = 'data:' + response.headers['content-type'] + ';base64,' + body.toString('base64');
        callback(error, show);
      });
    }
  ], function(err, show) {
    if (err) return next(err);
    show.save(function(err) {
      if (err){
        if(err.code == 11000){ // 11000 is the duplicate error in Mongo
          return res.send(409, {message: show.name + ' already exists'});
        }
        return next(err);
      } 
      var alertDate = Date.create('Next ' + show.airsDayOfWeek + ' at ' + show.airsTime).rewind({ hour: 2});
      agenda.schedule(alertDate, 'send email alert', show.name).repeatEvery('1 week'); // Start agenda task for each show added to DB.

      res.send(200);
    });
  });

});

//Fix HTML5 pushState on client-side
app.get('*', function(req, res) {
  res.redirect('/#' + req.originalUrl);
});

app.post('/api/subscribe', ensureAuthenticated, function(req, res, next) {
  Show.findById(req.body.showId, function(err, show) {
    if (err) return next(err);
    show.subscribers.push(req.user.id);
    show.save(function(err) {
      if (err) return next(err);
      res.send(200);
    });
  });
});

app.post('/api/unsubscribe', ensureAuthenticated, function(req, res, next) {
  Show.findById(req.body.showId, function(err, show) {
    if (err) return next(err);
    var index = show.subscribers.indexOf(req.user.id);
    show.subscribers.splice(index, 1);
    show.save(function(err) {
      if (err) return next(err);
      res.send(200);
    });
  });
});

// End routes

// Protect routes from unauthenticated requests
function ensureAuthenticated(req, res, next) {
  req.isAuthenticated() ? next() : res.send(401); // Ternary (may not work)
};

//Error Middleware
app.use(function(err, req, res, next) {
  console.error(err.stack);
  res.send(500, { message: err.message });
});


// MongoDB
var User = mongoose.model('User', userSchema);
var Show = mongoose.model('Show', showSchema);
mongoose.connect('localhost');
mongoose.connection.on('error', function(){
  console.error('Do not forget to run Mongo!');
});

var userSchema = new mongoose.Schema({
  email: { type: String, unique: true },
  password: String
});

userSchema.pre('save', function(next) { // Mongoose serial pre-type middleware that executes one after another, when each middleware calls next.
  var user = this;
  if (!user.isModified('password')) {
    return next();
  }

  bcrypt.genSalt(10, function(err, salt) {
    if (err){
      return next(err); // here
    }

    bcrypt.hash(user.password, salt, function(err, hash) {
      if (err) {
        return next(err); // and here.
      }
      user.password = hash;
      next();
    });
  });
});


userSchema.methods.comparePassword = function(candidatePassword, cb) {
  bcrypt.compare(candidatePassword, this.password, function(err, isMatch) {
    if (err) return cb(err);
    cb(null, isMatch);
  });
}; // The userSchema code taken from https://github.com/jaredhanson/passport-local


// Email alerts for shows
agenda.define('send email alert', function(job, done) {
  Show.findOne({ name: job.attrs.data }).populate('subscribers').exec(function(err, show) {
    var emails = show.subscribers.map(function(user) {
      return user.email;
    });

    var upcomingEpisode = show.episodes.filter(function(episode) {
      return new Date(episode.firstAired) > new Date();
    })[0];

    var smtpTransport = nodemailer.createTransport('SMTP', {
      service: 'SendGrid',
      auth: { user: 'hslogin', pass: 'hspassword00' }
    });

    var mailOptions = {
      from: 'Fred Foo ✔ <foo@blurdybloop.com>',
      to: emails.join(','),
      subject: show.name + ' is starting soon!',
      text: show.name + ' starts in less than 2 hours on ' + show.network + '.\n\n' +
        'Episode ' + upcomingEpisode.episodeNumber + ' Overview\n\n' + upcomingEpisode.overview
    };

    smtpTransport.sendMail(mailOptions, function(error, response) {
      console.log('Message sent: ' + response.message);
      smtpTransport.close();
      done();
    });
  });
});

agenda.start();

agenda.on('start', function(job) {
  console.log("Job %s starting", job.attrs.name);
});

agenda.on('complete', function(job) {
  console.log("Job %s finished", job.attrs.name);
});



app.listen(app.get('port'), function() {
  console.log('Express server listening on port ' + app.get('port'));
});
