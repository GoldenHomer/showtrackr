angular.module('ShowTrackrApp')
  .factory('Show', ['$resource', function($resource) {
    return $resource('/api/shows/:_id');
  }]);

  // This very simple service brought to you by $resource