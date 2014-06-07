




<!DOCTYPE html>
<html class="   ">
  <head prefix="og: http://ogp.me/ns# fb: http://ogp.me/ns/fb# object: http://ogp.me/ns/object# article: http://ogp.me/ns/article# profile: http://ogp.me/ns/profile#">
    <meta charset='utf-8'>
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    
    
    <title>angular-strap/dist/angular-strap.tpl.js at master · mgcrea/angular-strap</title>
    <link rel="search" type="application/opensearchdescription+xml" href="/opensearch.xml" title="GitHub" />
    <link rel="fluid-icon" href="https://github.com/fluidicon.png" title="GitHub" />
    <link rel="apple-touch-icon" sizes="57x57" href="/apple-touch-icon-114.png" />
    <link rel="apple-touch-icon" sizes="114x114" href="/apple-touch-icon-114.png" />
    <link rel="apple-touch-icon" sizes="72x72" href="/apple-touch-icon-144.png" />
    <link rel="apple-touch-icon" sizes="144x144" href="/apple-touch-icon-144.png" />
    <meta property="fb:app_id" content="1401488693436528"/>

      <meta content="@github" name="twitter:site" /><meta content="summary" name="twitter:card" /><meta content="mgcrea/angular-strap" name="twitter:title" /><meta content="angular-strap - AngularJS 1.2+ native directives for Twitter Bootstrap 3." name="twitter:description" /><meta content="https://avatars0.githubusercontent.com/u/108273?s=400" name="twitter:image:src" />
<meta content="GitHub" property="og:site_name" /><meta content="object" property="og:type" /><meta content="https://avatars0.githubusercontent.com/u/108273?s=400" property="og:image" /><meta content="mgcrea/angular-strap" property="og:title" /><meta content="https://github.com/mgcrea/angular-strap" property="og:url" /><meta content="angular-strap - AngularJS 1.2+ native directives for Twitter Bootstrap 3." property="og:description" />

    <link rel="assets" href="https://assets-cdn.github.com/">
    <link rel="conduit-xhr" href="https://ghconduit.com:25035">
    <link rel="xhr-socket" href="/_sockets" />

    <meta name="msapplication-TileImage" content="/windows-tile.png" />
    <meta name="msapplication-TileColor" content="#ffffff" />
    <meta name="selected-link" value="repo_source" data-pjax-transient />
      <meta name="google-analytics" content="UA-3769691-2">

    <meta content="collector.githubapp.com" name="octolytics-host" /><meta content="collector-cdn.github.com" name="octolytics-script-host" /><meta content="github" name="octolytics-app-id" /><meta content="32A15176:512C:230DFD8:53924CA6" name="octolytics-dimension-request_id" /><meta content="5625419" name="octolytics-actor-id" /><meta content="GoldenHomer" name="octolytics-actor-login" /><meta content="5ebb8cc8e5821ef41d02fb9ddd2bc32e1792b150b06215cd513de9102c434544" name="octolytics-actor-hash" />
    

    
    
    <link rel="icon" type="image/x-icon" href="https://assets-cdn.github.com/favicon.ico" />


    <meta content="authenticity_token" name="csrf-param" />
<meta content="VkkUEubkLaXV9otU24GE22vVm+2ilgXR03n6dDF27qiWNnLYXMpBF7SS25R0vWI0F370yZf3zl9v41yRRvdXYQ==" name="csrf-token" />

    <link href="https://assets-cdn.github.com/assets/github-60205a535d197db61740a88542c95f8052fbd432.css" media="all" rel="stylesheet" type="text/css" />
    <link href="https://assets-cdn.github.com/assets/github2-989250fa8021ddd96df113102c87dc3449d7a656.css" media="all" rel="stylesheet" type="text/css" />
    


    <meta http-equiv="x-pjax-version" content="868da0bc9485d31508b2861e22527172">

      
  <meta name="description" content="angular-strap - AngularJS 1.2+ native directives for Twitter Bootstrap 3." />

  <meta content="108273" name="octolytics-dimension-user_id" /><meta content="mgcrea" name="octolytics-dimension-user_login" /><meta content="5718947" name="octolytics-dimension-repository_id" /><meta content="mgcrea/angular-strap" name="octolytics-dimension-repository_nwo" /><meta content="true" name="octolytics-dimension-repository_public" /><meta content="false" name="octolytics-dimension-repository_is_fork" /><meta content="5718947" name="octolytics-dimension-repository_network_root_id" /><meta content="mgcrea/angular-strap" name="octolytics-dimension-repository_network_root_nwo" />
  <link href="https://github.com/mgcrea/angular-strap/commits/master.atom" rel="alternate" title="Recent Commits to angular-strap:master" type="application/atom+xml" />

  </head>


  <body class="logged_in  env-production macintosh vis-public page-blob">
    <a href="#start-of-content" tabindex="1" class="accessibility-aid js-skip-to-content">Skip to content</a>
    <div class="wrapper">
      
      
      
      


      <div class="header header-logged-in true">
  <div class="container clearfix">

    <a class="header-logo-invertocat" href="https://github.com/">
  <span class="mega-octicon octicon-mark-github"></span>
</a>

    
    <a href="/notifications" aria-label="You have unread notifications" class="notification-indicator tooltipped tooltipped-s" data-hotkey="g n">
        <span class="mail-status unread"></span>
</a>

      <div class="command-bar js-command-bar  in-repository">
          <form accept-charset="UTF-8" action="/search" class="command-bar-form" id="top_search_form" method="get">

<div class="commandbar">
  <span class="message"></span>
  <input type="text" data-hotkey="s, /" name="q" id="js-command-bar-field" placeholder="Search or type a command" tabindex="1" autocapitalize="off"
    
    data-username="GoldenHomer"
      data-repo="mgcrea/angular-strap"
      data-branch="master"
      data-sha="fbaac8694d969a6158c1a42fe153e306d74b24e5"
  >
  <div class="display hidden"></div>
</div>

    <input type="hidden" name="nwo" value="mgcrea/angular-strap" />

    <div class="select-menu js-menu-container js-select-menu search-context-select-menu">
      <span class="minibutton select-menu-button js-menu-target" role="button" aria-haspopup="true">
        <span class="js-select-button">This repository</span>
      </span>

      <div class="select-menu-modal-holder js-menu-content js-navigation-container" aria-hidden="true">
        <div class="select-menu-modal">

          <div class="select-menu-item js-navigation-item js-this-repository-navigation-item selected">
            <span class="select-menu-item-icon octicon octicon-check"></span>
            <input type="radio" class="js-search-this-repository" name="search_target" value="repository" checked="checked" />
            <div class="select-menu-item-text js-select-button-text">This repository</div>
          </div> <!-- /.select-menu-item -->

          <div class="select-menu-item js-navigation-item js-all-repositories-navigation-item">
            <span class="select-menu-item-icon octicon octicon-check"></span>
            <input type="radio" name="search_target" value="global" />
            <div class="select-menu-item-text js-select-button-text">All repositories</div>
          </div> <!-- /.select-menu-item -->

        </div>
      </div>
    </div>

  <span class="help tooltipped tooltipped-s" aria-label="Show command bar help">
    <span class="octicon octicon-question"></span>
  </span>


  <input type="hidden" name="ref" value="cmdform">

</form>
        <ul class="top-nav">
          <li class="explore"><a href="/explore">Explore</a></li>
            <li><a href="https://gist.github.com">Gist</a></li>
            <li><a href="/blog">Blog</a></li>
          <li><a href="https://help.github.com">Help</a></li>
        </ul>
      </div>

    


  <ul id="user-links">
    <li>
      <a href="/GoldenHomer" class="name">
        <img alt="Jose Contreras" class=" js-avatar" data-user="5625419" height="20" src="https://avatars1.githubusercontent.com/u/5625419?s=140" width="20" /> GoldenHomer
      </a>
    </li>

    <li class="new-menu dropdown-toggle js-menu-container">
      <a href="#" class="js-menu-target tooltipped tooltipped-s" aria-label="Create new...">
        <span class="octicon octicon-plus"></span>
        <span class="dropdown-arrow"></span>
      </a>

      <div class="new-menu-content js-menu-content">
      </div>
    </li>

    <li>
      <a href="/settings/profile" id="account_settings"
        class="tooltipped tooltipped-s"
        aria-label="Account settings ">
        <span class="octicon octicon-tools"></span>
      </a>
    </li>
    <li>
      <form class="logout-form" action="/logout" method="post">
        <button class="sign-out-button tooltipped tooltipped-s" aria-label="Sign out">
          <span class="octicon octicon-sign-out"></span>
        </button>
      </form>
    </li>

  </ul>

<div class="js-new-dropdown-contents hidden">
  

<ul class="dropdown-menu">
  <li>
    <a href="/new"><span class="octicon octicon-repo"></span> New repository</a>
  </li>
  <li>
    <a href="/organizations/new"><span class="octicon octicon-organization"></span> New organization</a>
  </li>


    <li class="section-title">
      <span title="mgcrea/angular-strap">This repository</span>
    </li>
      <li>
        <a href="/mgcrea/angular-strap/issues/new"><span class="octicon octicon-issue-opened"></span> New issue</a>
      </li>
</ul>

</div>


    
  </div>
</div>

      

        



      <div id="start-of-content" class="accessibility-aid"></div>
          <div class="site" itemscope itemtype="http://schema.org/WebPage">
    <div id="js-flash-container">
      
    </div>
    <div class="pagehead repohead instapaper_ignore readability-menu">
      <div class="container">
        

<ul class="pagehead-actions">

    <li class="subscription">
      <form accept-charset="UTF-8" action="/notifications/subscribe" class="js-social-container" data-autosubmit="true" data-remote="true" method="post"><div style="margin:0;padding:0;display:inline"><input name="authenticity_token" type="hidden" value="zvsx7HQmAk5Q6T2qZnke+IubFd0ZBSruv4EquQYDmANT47gi5ui5N4oZCw9LaeX5LpxbolEhdnXnKx9QDsfDyQ==" /></div>  <input id="repository_id" name="repository_id" type="hidden" value="5718947" />

    <div class="select-menu js-menu-container js-select-menu">
      <a class="social-count js-social-count" href="/mgcrea/angular-strap/watchers">
        195
      </a>
      <span class="minibutton select-menu-button with-count js-menu-target" role="button" tabindex="0" aria-haspopup="true">
        <span class="js-select-button">
          <span class="octicon octicon-eye"></span>
          Watch
        </span>
      </span>

      <div class="select-menu-modal-holder">
        <div class="select-menu-modal subscription-menu-modal js-menu-content" aria-hidden="true">
          <div class="select-menu-header">
            <span class="select-menu-title">Notification status</span>
            <span class="octicon octicon-x js-menu-close"></span>
          </div> <!-- /.select-menu-header -->

          <div class="select-menu-list js-navigation-container" role="menu">

            <div class="select-menu-item js-navigation-item selected" role="menuitem" tabindex="0">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <div class="select-menu-item-text">
                <input checked="checked" id="do_included" name="do" type="radio" value="included" />
                <h4>Not watching</h4>
                <span class="description">You only receive notifications for conversations in which you participate or are @mentioned.</span>
                <span class="js-select-button-text hidden-select-button-text">
                  <span class="octicon octicon-eye"></span>
                  Watch
                </span>
              </div>
            </div> <!-- /.select-menu-item -->

            <div class="select-menu-item js-navigation-item " role="menuitem" tabindex="0">
              <span class="select-menu-item-icon octicon octicon octicon-check"></span>
              <div class="select-menu-item-text">
                <input id="do_subscribed" name="do" type="radio" value="subscribed" />
                <h4>Watching</h4>
                <span class="description">You receive notifications for all conversations in this repository.</span>
                <span class="js-select-button-text hidden-select-button-text">
                  <span class="octicon octicon-eye"></span>
                  Unwatch
                </span>
              </div>
            </div> <!-- /.select-menu-item -->

            <div class="select-menu-item js-navigation-item " role="menuitem" tabindex="0">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <div class="select-menu-item-text">
                <input id="do_ignore" name="do" type="radio" value="ignore" />
                <h4>Ignoring</h4>
                <span class="description">You do not receive any notifications for conversations in this repository.</span>
                <span class="js-select-button-text hidden-select-button-text">
                  <span class="octicon octicon-mute"></span>
                  Stop ignoring
                </span>
              </div>
            </div> <!-- /.select-menu-item -->

          </div> <!-- /.select-menu-list -->

        </div> <!-- /.select-menu-modal -->
      </div> <!-- /.select-menu-modal-holder -->
    </div> <!-- /.select-menu -->

</form>
    </li>

  <li>
  

  <div class="js-toggler-container js-social-container starring-container on">

    <form accept-charset="UTF-8" action="/mgcrea/angular-strap/unstar" class="js-toggler-form starred" data-remote="true" method="post"><div style="margin:0;padding:0;display:inline"><input name="authenticity_token" type="hidden" value="xKTxCYcHo+uB7eYSiF+TpeKUrZxL4f/ATeDlbpi16030rJbK16/baQhpWa5QKy2gV2TiqwX0pRxTq2neQM0k5A==" /></div>
      <button
        class="minibutton with-count js-toggler-target star-button"
        aria-label="Unstar this repository" title="Unstar mgcrea/angular-strap">
        <span class="octicon octicon-star"></span><span class="text">Unstar</span>
      </button>
        <a class="social-count js-social-count" href="/mgcrea/angular-strap/stargazers">
          3,639
        </a>
</form>
    <form accept-charset="UTF-8" action="/mgcrea/angular-strap/star" class="js-toggler-form unstarred" data-remote="true" method="post"><div style="margin:0;padding:0;display:inline"><input name="authenticity_token" type="hidden" value="oAQaC8g0eZdX3wZRFh9uHFbxhBGiOLsF4PwuOhIoNqM/tfNcLSkAMJqF8eByASfDOEWDi2sJP2HcDg/X1+v0Aw==" /></div>
      <button
        class="minibutton with-count js-toggler-target star-button"
        aria-label="Star this repository" title="Star mgcrea/angular-strap">
        <span class="octicon octicon-star"></span><span class="text">Star</span>
      </button>
        <a class="social-count js-social-count" href="/mgcrea/angular-strap/stargazers">
          3,639
        </a>
</form>  </div>

  </li>


        <li>
          <a href="/mgcrea/angular-strap/fork" class="minibutton with-count js-toggler-target fork-button lighter tooltipped-n" title="Fork your own copy of mgcrea/angular-strap to your account" aria-label="Fork your own copy of mgcrea/angular-strap to your account" rel="nofollow" data-method="post">
            <span class="octicon octicon-repo-forked"></span><span class="text">Fork</span>
          </a>
          <a href="/mgcrea/angular-strap/network" class="social-count">694</a>
        </li>


</ul>

        <h1 itemscope itemtype="http://data-vocabulary.org/Breadcrumb" class="entry-title public">
          <span class="repo-label"><span>public</span></span>
          <span class="mega-octicon octicon-repo"></span>
          <span class="author"><a href="/mgcrea" class="url fn" itemprop="url" rel="author"><span itemprop="title">mgcrea</span></a></span><!--
       --><span class="path-divider">/</span><!--
       --><strong><a href="/mgcrea/angular-strap" class="js-current-repository js-repo-home-link">angular-strap</a></strong>

          <span class="page-context-loader">
            <img alt="" height="16" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-32.gif" width="16" />
          </span>

        </h1>
      </div><!-- /.container -->
    </div><!-- /.repohead -->

    <div class="container">
      <div class="repository-with-sidebar repo-container new-discussion-timeline js-new-discussion-timeline  ">
        <div class="repository-sidebar clearfix">
            

<div class="sunken-menu vertical-right repo-nav js-repo-nav js-repository-container-pjax js-octicon-loaders">
  <div class="sunken-menu-contents">
    <ul class="sunken-menu-group">
      <li class="tooltipped tooltipped-w" aria-label="Code">
        <a href="/mgcrea/angular-strap" aria-label="Code" class="selected js-selected-navigation-item sunken-menu-item" data-hotkey="g c" data-pjax="true" data-selected-links="repo_source repo_downloads repo_commits repo_releases repo_tags repo_branches /mgcrea/angular-strap">
          <span class="octicon octicon-code"></span> <span class="full-word">Code</span>
          <img alt="" class="mini-loader" height="16" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-32.gif" width="16" />
</a>      </li>

        <li class="tooltipped tooltipped-w" aria-label="Issues">
          <a href="/mgcrea/angular-strap/issues" aria-label="Issues" class="js-selected-navigation-item sunken-menu-item js-disable-pjax" data-hotkey="g i" data-selected-links="repo_issues /mgcrea/angular-strap/issues">
            <span class="octicon octicon-issue-opened"></span> <span class="full-word">Issues</span>
            <span class='counter'>131</span>
            <img alt="" class="mini-loader" height="16" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-32.gif" width="16" />
</a>        </li>

      <li class="tooltipped tooltipped-w" aria-label="Pull Requests">
        <a href="/mgcrea/angular-strap/pulls" aria-label="Pull Requests" class="js-selected-navigation-item sunken-menu-item js-disable-pjax" data-hotkey="g p" data-selected-links="repo_pulls /mgcrea/angular-strap/pulls">
            <span class="octicon octicon-git-pull-request"></span> <span class="full-word">Pull Requests</span>
            <span class='counter'>9</span>
            <img alt="" class="mini-loader" height="16" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-32.gif" width="16" />
</a>      </li>


        <li class="tooltipped tooltipped-w" aria-label="Wiki">
          <a href="/mgcrea/angular-strap/wiki" aria-label="Wiki" class="js-selected-navigation-item sunken-menu-item js-disable-pjax" data-hotkey="g w" data-selected-links="repo_wiki /mgcrea/angular-strap/wiki">
            <span class="octicon octicon-book"></span> <span class="full-word">Wiki</span>
            <img alt="" class="mini-loader" height="16" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-32.gif" width="16" />
</a>        </li>
    </ul>
    <div class="sunken-menu-separator"></div>
    <ul class="sunken-menu-group">

      <li class="tooltipped tooltipped-w" aria-label="Pulse">
        <a href="/mgcrea/angular-strap/pulse" aria-label="Pulse" class="js-selected-navigation-item sunken-menu-item" data-pjax="true" data-selected-links="pulse /mgcrea/angular-strap/pulse">
          <span class="octicon octicon-pulse"></span> <span class="full-word">Pulse</span>
          <img alt="" class="mini-loader" height="16" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-32.gif" width="16" />
</a>      </li>

      <li class="tooltipped tooltipped-w" aria-label="Graphs">
        <a href="/mgcrea/angular-strap/graphs" aria-label="Graphs" class="js-selected-navigation-item sunken-menu-item" data-pjax="true" data-selected-links="repo_graphs repo_contributors /mgcrea/angular-strap/graphs">
          <span class="octicon octicon-graph"></span> <span class="full-word">Graphs</span>
          <img alt="" class="mini-loader" height="16" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-32.gif" width="16" />
</a>      </li>

      <li class="tooltipped tooltipped-w" aria-label="Network">
        <a href="/mgcrea/angular-strap/network" aria-label="Network" class="js-selected-navigation-item sunken-menu-item js-disable-pjax" data-selected-links="repo_network /mgcrea/angular-strap/network">
          <span class="octicon octicon-repo-forked"></span> <span class="full-word">Network</span>
          <img alt="" class="mini-loader" height="16" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-32.gif" width="16" />
</a>      </li>
    </ul>


  </div>
</div>

              <div class="only-with-full-nav">
                

  

<div class="clone-url open"
  data-protocol-type="http"
  data-url="/users/set_protocol?protocol_selector=http&amp;protocol_type=clone">
  <h3><strong>HTTPS</strong> clone URL</h3>
  <div class="clone-url-box">
    <input type="text" class="clone js-url-field"
           value="https://github.com/mgcrea/angular-strap.git" readonly="readonly">
    <span class="url-box-clippy">
    <button aria-label="copy to clipboard" class="js-zeroclipboard minibutton zeroclipboard-button" data-clipboard-text="https://github.com/mgcrea/angular-strap.git" data-copied-hint="copied!" type="button"><span class="octicon octicon-clippy"></span></button>
    </span>
  </div>
</div>

  

<div class="clone-url "
  data-protocol-type="ssh"
  data-url="/users/set_protocol?protocol_selector=ssh&amp;protocol_type=clone">
  <h3><strong>SSH</strong> clone URL</h3>
  <div class="clone-url-box">
    <input type="text" class="clone js-url-field"
           value="git@github.com:mgcrea/angular-strap.git" readonly="readonly">
    <span class="url-box-clippy">
    <button aria-label="copy to clipboard" class="js-zeroclipboard minibutton zeroclipboard-button" data-clipboard-text="git@github.com:mgcrea/angular-strap.git" data-copied-hint="copied!" type="button"><span class="octicon octicon-clippy"></span></button>
    </span>
  </div>
</div>

  

<div class="clone-url "
  data-protocol-type="subversion"
  data-url="/users/set_protocol?protocol_selector=subversion&amp;protocol_type=clone">
  <h3><strong>Subversion</strong> checkout URL</h3>
  <div class="clone-url-box">
    <input type="text" class="clone js-url-field"
           value="https://github.com/mgcrea/angular-strap" readonly="readonly">
    <span class="url-box-clippy">
    <button aria-label="copy to clipboard" class="js-zeroclipboard minibutton zeroclipboard-button" data-clipboard-text="https://github.com/mgcrea/angular-strap" data-copied-hint="copied!" type="button"><span class="octicon octicon-clippy"></span></button>
    </span>
  </div>
</div>


<p class="clone-options">You can clone with
      <a href="#" class="js-clone-selector" data-protocol="http">HTTPS</a>,
      <a href="#" class="js-clone-selector" data-protocol="ssh">SSH</a>,
      or <a href="#" class="js-clone-selector" data-protocol="subversion">Subversion</a>.
  <span class="help tooltipped tooltipped-n" aria-label="Get help on which URL is right for you.">
    <a href="https://help.github.com/articles/which-remote-url-should-i-use">
    <span class="octicon octicon-question"></span>
    </a>
  </span>
</p>

  <a href="http://mac.github.com" data-url="github-mac://openRepo/https://github.com/mgcrea/angular-strap" class="minibutton sidebar-button js-conduit-rewrite-url" title="Save mgcrea/angular-strap to your computer and use it in GitHub Desktop." aria-label="Save mgcrea/angular-strap to your computer and use it in GitHub Desktop.">
    <span class="octicon octicon-device-desktop"></span>
    Clone in Desktop
  </a>


                <a href="/mgcrea/angular-strap/archive/master.zip"
                   class="minibutton sidebar-button"
                   aria-label="Download mgcrea/angular-strap as a zip file"
                   title="Download mgcrea/angular-strap as a zip file"
                   rel="nofollow">
                  <span class="octicon octicon-cloud-download"></span>
                  Download ZIP
                </a>
              </div>
        </div><!-- /.repository-sidebar -->

        <div id="js-repo-pjax-container" class="repository-content context-loader-container" data-pjax-container>
          


<a href="/mgcrea/angular-strap/blob/a65e89cf1cee5515fadfee029e930f05c1a2eb4a/dist/angular-strap.tpl.js" class="hidden js-permalink-shortcut" data-hotkey="y">Permalink</a>

<!-- blob contrib key: blob_contributors:v21:385be0b17ace4673f5fcbd058160843f -->

<p title="This is a placeholder element" class="js-history-link-replace hidden"></p>

<a href="/mgcrea/angular-strap/find/master" data-pjax data-hotkey="t" class="js-show-file-finder" style="display:none">Show File Finder</a>

<div class="file-navigation">
  

<div class="select-menu js-menu-container js-select-menu" >
  <span class="minibutton select-menu-button js-menu-target" data-hotkey="w"
    data-master-branch="master"
    data-ref="master"
    role="button" aria-label="Switch branches or tags" tabindex="0" aria-haspopup="true">
    <span class="octicon octicon-git-branch"></span>
    <i>branch:</i>
    <span class="js-select-button">master</span>
  </span>

  <div class="select-menu-modal-holder js-menu-content js-navigation-container" data-pjax aria-hidden="true">

    <div class="select-menu-modal">
      <div class="select-menu-header">
        <span class="select-menu-title">Switch branches/tags</span>
        <span class="octicon octicon-x js-menu-close"></span>
      </div> <!-- /.select-menu-header -->

      <div class="select-menu-filters">
        <div class="select-menu-text-filter">
          <input type="text" aria-label="Filter branches/tags" id="context-commitish-filter-field" class="js-filterable-field js-navigation-enable" placeholder="Filter branches/tags">
        </div>
        <div class="select-menu-tabs">
          <ul>
            <li class="select-menu-tab">
              <a href="#" data-tab-filter="branches" class="js-select-menu-tab">Branches</a>
            </li>
            <li class="select-menu-tab">
              <a href="#" data-tab-filter="tags" class="js-select-menu-tab">Tags</a>
            </li>
          </ul>
        </div><!-- /.select-menu-tabs -->
      </div><!-- /.select-menu-filters -->

      <div class="select-menu-list select-menu-tab-bucket js-select-menu-tab-bucket" data-tab-filter="branches">

        <div data-filterable-for="context-commitish-filter-field" data-filterable-type="substring">


            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/mgcrea/angular-strap/blob/gh-pages/dist/angular-strap.tpl.js"
                 data-name="gh-pages"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="gh-pages">gh-pages</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/mgcrea/angular-strap/blob/legacy/dist/angular-strap.tpl.js"
                 data-name="legacy"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="legacy">legacy</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item selected">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/mgcrea/angular-strap/blob/master/dist/angular-strap.tpl.js"
                 data-name="master"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="master">master</a>
            </div> <!-- /.select-menu-item -->
        </div>

          <div class="select-menu-no-results">Nothing to show</div>
      </div> <!-- /.select-menu-list -->

      <div class="select-menu-list select-menu-tab-bucket js-select-menu-tab-bucket" data-tab-filter="tags">
        <div data-filterable-for="context-commitish-filter-field" data-filterable-type="substring">


            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/mgcrea/angular-strap/tree/v2.0.3/dist/angular-strap.tpl.js"
                 data-name="v2.0.3"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v2.0.3">v2.0.3</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/mgcrea/angular-strap/tree/v2.0.2/dist/angular-strap.tpl.js"
                 data-name="v2.0.2"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v2.0.2">v2.0.2</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/mgcrea/angular-strap/tree/v2.0.1/dist/angular-strap.tpl.js"
                 data-name="v2.0.1"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v2.0.1">v2.0.1</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/mgcrea/angular-strap/tree/v2.0.0-rc.4/dist/angular-strap.tpl.js"
                 data-name="v2.0.0-rc.4"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v2.0.0-rc.4">v2.0.0-rc.4</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/mgcrea/angular-strap/tree/v2.0.0-rc.3/dist/angular-strap.tpl.js"
                 data-name="v2.0.0-rc.3"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v2.0.0-rc.3">v2.0.0-rc.3</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/mgcrea/angular-strap/tree/v2.0.0-rc.2/dist/angular-strap.tpl.js"
                 data-name="v2.0.0-rc.2"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v2.0.0-rc.2">v2.0.0-rc.2</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/mgcrea/angular-strap/tree/v2.0.0-rc.1/dist/angular-strap.tpl.js"
                 data-name="v2.0.0-rc.1"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v2.0.0-rc.1">v2.0.0-rc.1</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/mgcrea/angular-strap/tree/v2.0.0-beta.4/dist/angular-strap.tpl.js"
                 data-name="v2.0.0-beta.4"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v2.0.0-beta.4">v2.0.0-beta.4</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/mgcrea/angular-strap/tree/v2.0.0-beta.3/dist/angular-strap.tpl.js"
                 data-name="v2.0.0-beta.3"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v2.0.0-beta.3">v2.0.0-beta.3</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/mgcrea/angular-strap/tree/v2.0.0-beta.2/dist/angular-strap.tpl.js"
                 data-name="v2.0.0-beta.2"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v2.0.0-beta.2">v2.0.0-beta.2</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/mgcrea/angular-strap/tree/v2.0.0-beta.1/dist/angular-strap.tpl.js"
                 data-name="v2.0.0-beta.1"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v2.0.0-beta.1">v2.0.0-beta.1</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/mgcrea/angular-strap/tree/v2.0.0/dist/angular-strap.tpl.js"
                 data-name="v2.0.0"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v2.0.0">v2.0.0</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/mgcrea/angular-strap/tree/v0.7.8/dist/angular-strap.tpl.js"
                 data-name="v0.7.8"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v0.7.8">v0.7.8</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/mgcrea/angular-strap/tree/v0.7.7/dist/angular-strap.tpl.js"
                 data-name="v0.7.7"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v0.7.7">v0.7.7</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/mgcrea/angular-strap/tree/v0.7.6/dist/angular-strap.tpl.js"
                 data-name="v0.7.6"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v0.7.6">v0.7.6</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/mgcrea/angular-strap/tree/v0.7.5/dist/angular-strap.tpl.js"
                 data-name="v0.7.5"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v0.7.5">v0.7.5</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/mgcrea/angular-strap/tree/v0.7.4/dist/angular-strap.tpl.js"
                 data-name="v0.7.4"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v0.7.4">v0.7.4</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/mgcrea/angular-strap/tree/v0.7.3/dist/angular-strap.tpl.js"
                 data-name="v0.7.3"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v0.7.3">v0.7.3</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/mgcrea/angular-strap/tree/v0.7.2/dist/angular-strap.tpl.js"
                 data-name="v0.7.2"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v0.7.2">v0.7.2</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/mgcrea/angular-strap/tree/v0.7.1/dist/angular-strap.tpl.js"
                 data-name="v0.7.1"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v0.7.1">v0.7.1</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/mgcrea/angular-strap/tree/v0.7.0/dist/angular-strap.tpl.js"
                 data-name="v0.7.0"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v0.7.0">v0.7.0</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/mgcrea/angular-strap/tree/v0.6.6/dist/angular-strap.tpl.js"
                 data-name="v0.6.6"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v0.6.6">v0.6.6</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/mgcrea/angular-strap/tree/v0.6.5/dist/angular-strap.tpl.js"
                 data-name="v0.6.5"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v0.6.5">v0.6.5</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/mgcrea/angular-strap/tree/v0.6.4/dist/angular-strap.tpl.js"
                 data-name="v0.6.4"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v0.6.4">v0.6.4</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/mgcrea/angular-strap/tree/v0.6.3/dist/angular-strap.tpl.js"
                 data-name="v0.6.3"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v0.6.3">v0.6.3</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/mgcrea/angular-strap/tree/v0.6.2/dist/angular-strap.tpl.js"
                 data-name="v0.6.2"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v0.6.2">v0.6.2</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/mgcrea/angular-strap/tree/v0.6.1/dist/angular-strap.tpl.js"
                 data-name="v0.6.1"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v0.6.1">v0.6.1</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/mgcrea/angular-strap/tree/v0.6.0/dist/angular-strap.tpl.js"
                 data-name="v0.6.0"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v0.6.0">v0.6.0</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/mgcrea/angular-strap/tree/v0.5.10/dist/angular-strap.tpl.js"
                 data-name="v0.5.10"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v0.5.10">v0.5.10</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/mgcrea/angular-strap/tree/v0.5.9/dist/angular-strap.tpl.js"
                 data-name="v0.5.9"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v0.5.9">v0.5.9</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/mgcrea/angular-strap/tree/v0.5.8/dist/angular-strap.tpl.js"
                 data-name="v0.5.8"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v0.5.8">v0.5.8</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/mgcrea/angular-strap/tree/v0.5.7/dist/angular-strap.tpl.js"
                 data-name="v0.5.7"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v0.5.7">v0.5.7</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/mgcrea/angular-strap/tree/v0.5.6/dist/angular-strap.tpl.js"
                 data-name="v0.5.6"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v0.5.6">v0.5.6</a>
            </div> <!-- /.select-menu-item -->
        </div>

        <div class="select-menu-no-results">Nothing to show</div>
      </div> <!-- /.select-menu-list -->

    </div> <!-- /.select-menu-modal -->
  </div> <!-- /.select-menu-modal-holder -->
</div> <!-- /.select-menu -->

  <div class="breadcrumb">
    <span class='repo-root js-repo-root'><span itemscope="" itemtype="http://data-vocabulary.org/Breadcrumb"><a href="/mgcrea/angular-strap" data-branch="master" data-direction="back" data-pjax="true" itemscope="url"><span itemprop="title">angular-strap</span></a></span></span><span class="separator"> / </span><span itemscope="" itemtype="http://data-vocabulary.org/Breadcrumb"><a href="/mgcrea/angular-strap/tree/master/dist" data-branch="master" data-direction="back" data-pjax="true" itemscope="url"><span itemprop="title">dist</span></a></span><span class="separator"> / </span><strong class="final-path">angular-strap.tpl.js</strong> <button aria-label="copy to clipboard" class="js-zeroclipboard minibutton zeroclipboard-button" data-clipboard-text="dist/angular-strap.tpl.js" data-copied-hint="copied!" type="button"><span class="octicon octicon-clippy"></span></button>
  </div>
</div>


  <div class="commit file-history-tease">
      <img alt="Olivier Louvignes" class="main-avatar js-avatar" data-user="108273" height="24" src="https://avatars3.githubusercontent.com/u/108273?s=140" width="24" />
      <span class="author"><a href="/mgcrea" rel="author">mgcrea</a></span>
      <time datetime="2014-05-30T20:06:17+02:00" is="relative-time">May 30, 2014</time>
      <div class="commit-title">
          <a href="/mgcrea/angular-strap/commit/a65e89cf1cee5515fadfee029e930f05c1a2eb4a" class="message" data-pjax="true" title="chore(release): cut the v2.0.3 release">chore(release): cut the v2.0.3 release</a>
      </div>

    <div class="participation">
      <p class="quickstat"><a href="#blob_contributors_box" rel="facebox"><strong>1</strong>  contributor</a></p>
      
    </div>
    <div id="blob_contributors_box" style="display:none">
      <h2 class="facebox-header">Users who have contributed to this file</h2>
      <ul class="facebox-user-list">
          <li class="facebox-user-list-item">
            <img alt="Olivier Louvignes" class=" js-avatar" data-user="108273" height="24" src="https://avatars3.githubusercontent.com/u/108273?s=140" width="24" />
            <a href="/mgcrea">mgcrea</a>
          </li>
      </ul>
    </div>
  </div>

<div class="file-box">
  <div class="file">
    <div class="meta clearfix">
      <div class="info file-name">
        <span class="icon"><b class="octicon octicon-file-text"></b></span>
        <span class="mode" title="File Mode">file</span>
        <span class="meta-divider"></span>
          <span>101 lines (87 sloc)</span>
          <span class="meta-divider"></span>
        <span>8.574 kb</span>
      </div>
      <div class="actions">
        <div class="button-group">
            <a class="minibutton tooltipped tooltipped-w js-conduit-openfile-check"
               href="http://mac.github.com"
               data-url="github-mac://openRepo/https://github.com/mgcrea/angular-strap?branch=master&amp;filepath=dist%2Fangular-strap.tpl.js"
               aria-label="Open this file in GitHub for Mac"
               data-failed-title="Your version of GitHub for Mac is too old to open this file. Try checking for updates.">
                <span class="octicon octicon-device-desktop"></span> Open
            </a>
                <a class="minibutton tooltipped tooltipped-n js-update-url-with-hash"
                   aria-label="Clicking this button will automatically fork this project so you can edit the file"
                   href="/mgcrea/angular-strap/edit/master/dist/angular-strap.tpl.js"
                   data-method="post" rel="nofollow">Edit</a>
          <a href="/mgcrea/angular-strap/raw/master/dist/angular-strap.tpl.js" class="button minibutton " id="raw-url">Raw</a>
            <a href="/mgcrea/angular-strap/blame/master/dist/angular-strap.tpl.js" class="button minibutton js-update-url-with-hash">Blame</a>
          <a href="/mgcrea/angular-strap/commits/master/dist/angular-strap.tpl.js" class="button minibutton " rel="nofollow">History</a>
        </div><!-- /.button-group -->

            <a class="minibutton danger empty-icon tooltipped tooltipped-s"
               href="/mgcrea/angular-strap/delete/master/dist/angular-strap.tpl.js"
               aria-label="Fork this project and delete file"
               data-method="post" data-test-id="delete-blob-file" rel="nofollow">

          Delete
        </a>
      </div><!-- /.actions -->
    </div>
      
  <div class="blob-wrapper data type-javascript js-blob-data">
       <table class="file-code file-diff tab-size-8">
         <tr class="file-code-line">
           <td class="blob-line-nums">
             <span id="L1" rel="#L1">1</span>
<span id="L2" rel="#L2">2</span>
<span id="L3" rel="#L3">3</span>
<span id="L4" rel="#L4">4</span>
<span id="L5" rel="#L5">5</span>
<span id="L6" rel="#L6">6</span>
<span id="L7" rel="#L7">7</span>
<span id="L8" rel="#L8">8</span>
<span id="L9" rel="#L9">9</span>
<span id="L10" rel="#L10">10</span>
<span id="L11" rel="#L11">11</span>
<span id="L12" rel="#L12">12</span>
<span id="L13" rel="#L13">13</span>
<span id="L14" rel="#L14">14</span>
<span id="L15" rel="#L15">15</span>
<span id="L16" rel="#L16">16</span>
<span id="L17" rel="#L17">17</span>
<span id="L18" rel="#L18">18</span>
<span id="L19" rel="#L19">19</span>
<span id="L20" rel="#L20">20</span>
<span id="L21" rel="#L21">21</span>
<span id="L22" rel="#L22">22</span>
<span id="L23" rel="#L23">23</span>
<span id="L24" rel="#L24">24</span>
<span id="L25" rel="#L25">25</span>
<span id="L26" rel="#L26">26</span>
<span id="L27" rel="#L27">27</span>
<span id="L28" rel="#L28">28</span>
<span id="L29" rel="#L29">29</span>
<span id="L30" rel="#L30">30</span>
<span id="L31" rel="#L31">31</span>
<span id="L32" rel="#L32">32</span>
<span id="L33" rel="#L33">33</span>
<span id="L34" rel="#L34">34</span>
<span id="L35" rel="#L35">35</span>
<span id="L36" rel="#L36">36</span>
<span id="L37" rel="#L37">37</span>
<span id="L38" rel="#L38">38</span>
<span id="L39" rel="#L39">39</span>
<span id="L40" rel="#L40">40</span>
<span id="L41" rel="#L41">41</span>
<span id="L42" rel="#L42">42</span>
<span id="L43" rel="#L43">43</span>
<span id="L44" rel="#L44">44</span>
<span id="L45" rel="#L45">45</span>
<span id="L46" rel="#L46">46</span>
<span id="L47" rel="#L47">47</span>
<span id="L48" rel="#L48">48</span>
<span id="L49" rel="#L49">49</span>
<span id="L50" rel="#L50">50</span>
<span id="L51" rel="#L51">51</span>
<span id="L52" rel="#L52">52</span>
<span id="L53" rel="#L53">53</span>
<span id="L54" rel="#L54">54</span>
<span id="L55" rel="#L55">55</span>
<span id="L56" rel="#L56">56</span>
<span id="L57" rel="#L57">57</span>
<span id="L58" rel="#L58">58</span>
<span id="L59" rel="#L59">59</span>
<span id="L60" rel="#L60">60</span>
<span id="L61" rel="#L61">61</span>
<span id="L62" rel="#L62">62</span>
<span id="L63" rel="#L63">63</span>
<span id="L64" rel="#L64">64</span>
<span id="L65" rel="#L65">65</span>
<span id="L66" rel="#L66">66</span>
<span id="L67" rel="#L67">67</span>
<span id="L68" rel="#L68">68</span>
<span id="L69" rel="#L69">69</span>
<span id="L70" rel="#L70">70</span>
<span id="L71" rel="#L71">71</span>
<span id="L72" rel="#L72">72</span>
<span id="L73" rel="#L73">73</span>
<span id="L74" rel="#L74">74</span>
<span id="L75" rel="#L75">75</span>
<span id="L76" rel="#L76">76</span>
<span id="L77" rel="#L77">77</span>
<span id="L78" rel="#L78">78</span>
<span id="L79" rel="#L79">79</span>
<span id="L80" rel="#L80">80</span>
<span id="L81" rel="#L81">81</span>
<span id="L82" rel="#L82">82</span>
<span id="L83" rel="#L83">83</span>
<span id="L84" rel="#L84">84</span>
<span id="L85" rel="#L85">85</span>
<span id="L86" rel="#L86">86</span>
<span id="L87" rel="#L87">87</span>
<span id="L88" rel="#L88">88</span>
<span id="L89" rel="#L89">89</span>
<span id="L90" rel="#L90">90</span>
<span id="L91" rel="#L91">91</span>
<span id="L92" rel="#L92">92</span>
<span id="L93" rel="#L93">93</span>
<span id="L94" rel="#L94">94</span>
<span id="L95" rel="#L95">95</span>
<span id="L96" rel="#L96">96</span>
<span id="L97" rel="#L97">97</span>
<span id="L98" rel="#L98">98</span>
<span id="L99" rel="#L99">99</span>
<span id="L100" rel="#L100">100</span>

           </td>
           <td class="blob-line-code"><div class="code-body highlight"><pre><div class='line' id='LC1'><span class="cm">/**</span></div><div class='line' id='LC2'><span class="cm"> * angular-strap</span></div><div class='line' id='LC3'><span class="cm"> * @version v2.0.3 - 2014-05-30</span></div><div class='line' id='LC4'><span class="cm"> * @link http://mgcrea.github.io/angular-strap</span></div><div class='line' id='LC5'><span class="cm"> * @author Olivier Louvignes (olivier@mg-crea.com)</span></div><div class='line' id='LC6'><span class="cm"> * @license MIT License, http://www.opensource.org/licenses/MIT</span></div><div class='line' id='LC7'><span class="cm"> */</span></div><div class='line' id='LC8'><span class="p">(</span><span class="kd">function</span><span class="p">(</span><span class="nb">window</span><span class="p">,</span> <span class="nb">document</span><span class="p">,</span> <span class="kc">undefined</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC9'><span class="s1">&#39;use strict&#39;</span><span class="p">;</span></div><div class='line' id='LC10'><br/></div><div class='line' id='LC11'><span class="c1">// Source: alert.tpl.js</span></div><div class='line' id='LC12'><span class="nx">angular</span><span class="p">.</span><span class="nx">module</span><span class="p">(</span><span class="s1">&#39;mgcrea.ngStrap.alert&#39;</span><span class="p">).</span><span class="nx">run</span><span class="p">([</span></div><div class='line' id='LC13'>&nbsp;&nbsp;<span class="s1">&#39;$templateCache&#39;</span><span class="p">,</span></div><div class='line' id='LC14'>&nbsp;&nbsp;<span class="kd">function</span> <span class="p">(</span><span class="nx">$templateCache</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC15'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">$templateCache</span><span class="p">.</span><span class="nx">put</span><span class="p">(</span><span class="s1">&#39;alert/alert.tpl.html&#39;</span><span class="p">,</span> <span class="s1">&#39;&lt;div class=&quot;alert&quot; tabindex=&quot;-1&quot; ng-class=&quot;[type ? \&#39;alert-\&#39; + type : null]&quot;&gt;&lt;button type=&quot;button&quot; class=&quot;close&quot; ng-if=&quot;dismissable&quot; ng-click=&quot;$hide()&quot;&gt;&amp;times;&lt;/button&gt; &lt;strong ng-bind=&quot;title&quot;&gt;&lt;/strong&gt;&amp;nbsp;&lt;span ng-bind-html=&quot;content&quot;&gt;&lt;/span&gt;&lt;/div&gt;&#39;</span><span class="p">);</span></div><div class='line' id='LC16'>&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC17'><span class="p">]);</span></div><div class='line' id='LC18'><br/></div><div class='line' id='LC19'><span class="c1">// Source: aside.tpl.js</span></div><div class='line' id='LC20'><span class="nx">angular</span><span class="p">.</span><span class="nx">module</span><span class="p">(</span><span class="s1">&#39;mgcrea.ngStrap.aside&#39;</span><span class="p">).</span><span class="nx">run</span><span class="p">([</span></div><div class='line' id='LC21'>&nbsp;&nbsp;<span class="s1">&#39;$templateCache&#39;</span><span class="p">,</span></div><div class='line' id='LC22'>&nbsp;&nbsp;<span class="kd">function</span> <span class="p">(</span><span class="nx">$templateCache</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC23'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">$templateCache</span><span class="p">.</span><span class="nx">put</span><span class="p">(</span><span class="s1">&#39;aside/aside.tpl.html&#39;</span><span class="p">,</span> <span class="s1">&#39;&lt;div class=&quot;aside&quot; tabindex=&quot;-1&quot; role=&quot;dialog&quot;&gt;&lt;div class=&quot;aside-dialog&quot;&gt;&lt;div class=&quot;aside-content&quot;&gt;&lt;div class=&quot;aside-header&quot; ng-show=&quot;title&quot;&gt;&lt;button type=&quot;button&quot; class=&quot;close&quot; ng-click=&quot;$hide()&quot;&gt;&amp;times;&lt;/button&gt;&lt;h4 class=&quot;aside-title&quot; ng-bind=&quot;title&quot;&gt;&lt;/h4&gt;&lt;/div&gt;&lt;div class=&quot;aside-body&quot; ng-bind=&quot;content&quot;&gt;&lt;/div&gt;&lt;div class=&quot;aside-footer&quot;&gt;&lt;button type=&quot;button&quot; class=&quot;btn btn-default&quot; ng-click=&quot;$hide()&quot;&gt;Close&lt;/button&gt;&lt;/div&gt;&lt;/div&gt;&lt;/div&gt;&lt;/div&gt;&#39;</span><span class="p">);</span></div><div class='line' id='LC24'>&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC25'><span class="p">]);</span></div><div class='line' id='LC26'><br/></div><div class='line' id='LC27'><span class="c1">// Source: datepicker.tpl.js</span></div><div class='line' id='LC28'><span class="nx">angular</span><span class="p">.</span><span class="nx">module</span><span class="p">(</span><span class="s1">&#39;mgcrea.ngStrap.datepicker&#39;</span><span class="p">).</span><span class="nx">run</span><span class="p">([</span></div><div class='line' id='LC29'>&nbsp;&nbsp;<span class="s1">&#39;$templateCache&#39;</span><span class="p">,</span></div><div class='line' id='LC30'>&nbsp;&nbsp;<span class="kd">function</span> <span class="p">(</span><span class="nx">$templateCache</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC31'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">$templateCache</span><span class="p">.</span><span class="nx">put</span><span class="p">(</span><span class="s1">&#39;datepicker/datepicker.tpl.html&#39;</span><span class="p">,</span> <span class="s1">&#39;&lt;div class=&quot;dropdown-menu datepicker&quot; ng-class=&quot;\&#39;datepicker-mode-\&#39; + $mode&quot; style=&quot;max-width: 320px&quot;&gt;&lt;table style=&quot;table-layout: fixed; height: 100%; width: 100%&quot;&gt;&lt;thead&gt;&lt;tr class=&quot;text-center&quot;&gt;&lt;th&gt;&lt;button tabindex=&quot;-1&quot; type=&quot;button&quot; class=&quot;btn btn-default pull-left&quot; ng-click=&quot;$selectPane(-1)&quot;&gt;&lt;i class=&quot;{{$iconLeft}}&quot;&gt;&lt;/i&gt;&lt;/button&gt;&lt;/th&gt;&lt;th colspan=&quot;{{ rows[0].length - 2 }}&quot;&gt;&lt;button tabindex=&quot;-1&quot; type=&quot;button&quot; class=&quot;btn btn-default btn-block text-strong&quot; ng-click=&quot;$toggleMode()&quot;&gt;&lt;strong style=&quot;text-transform: capitalize&quot; ng-bind=&quot;title&quot;&gt;&lt;/strong&gt;&lt;/button&gt;&lt;/th&gt;&lt;th&gt;&lt;button tabindex=&quot;-1&quot; type=&quot;button&quot; class=&quot;btn btn-default pull-right&quot; ng-click=&quot;$selectPane(+1)&quot;&gt;&lt;i class=&quot;{{$iconRight}}&quot;&gt;&lt;/i&gt;&lt;/button&gt;&lt;/th&gt;&lt;/tr&gt;&lt;tr ng-show=&quot;showLabels&quot; ng-bind-html=&quot;labels&quot;&gt;&lt;/tr&gt;&lt;/thead&gt;&lt;tbody&gt;&lt;tr ng-repeat=&quot;(i, row) in rows&quot; height=&quot;{{ 100 / rows.length }}%&quot;&gt;&lt;td class=&quot;text-center&quot; ng-repeat=&quot;(j, el) in row&quot;&gt;&lt;button tabindex=&quot;-1&quot; type=&quot;button&quot; class=&quot;btn btn-default&quot; style=&quot;width: 100%&quot; ng-class=&quot;{\&#39;btn-primary\&#39;: el.selected}&quot; ng-click=&quot;$select(el.date)&quot; ng-disabled=&quot;el.disabled&quot;&gt;&lt;span ng-class=&quot;{\&#39;text-muted\&#39;: el.muted}&quot; ng-bind=&quot;el.label&quot;&gt;&lt;/span&gt;&lt;/button&gt;&lt;/td&gt;&lt;/tr&gt;&lt;/tbody&gt;&lt;/table&gt;&lt;/div&gt;&#39;</span><span class="p">);</span></div><div class='line' id='LC32'>&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC33'><span class="p">]);</span></div><div class='line' id='LC34'><br/></div><div class='line' id='LC35'><span class="c1">// Source: dropdown.tpl.js</span></div><div class='line' id='LC36'><span class="nx">angular</span><span class="p">.</span><span class="nx">module</span><span class="p">(</span><span class="s1">&#39;mgcrea.ngStrap.dropdown&#39;</span><span class="p">).</span><span class="nx">run</span><span class="p">([</span></div><div class='line' id='LC37'>&nbsp;&nbsp;<span class="s1">&#39;$templateCache&#39;</span><span class="p">,</span></div><div class='line' id='LC38'>&nbsp;&nbsp;<span class="kd">function</span> <span class="p">(</span><span class="nx">$templateCache</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC39'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">$templateCache</span><span class="p">.</span><span class="nx">put</span><span class="p">(</span><span class="s1">&#39;dropdown/dropdown.tpl.html&#39;</span><span class="p">,</span> <span class="s1">&#39;&lt;ul tabindex=&quot;-1&quot; class=&quot;dropdown-menu&quot; role=&quot;menu&quot;&gt;&lt;li role=&quot;presentation&quot; ng-class=&quot;{divider: item.divider}&quot; ng-repeat=&quot;item in content&quot;&gt;&lt;a role=&quot;menuitem&quot; tabindex=&quot;-1&quot; ng-href=&quot;{{item.href}}&quot; ng-if=&quot;!item.divider &amp;&amp; item.href&quot; target=&quot;{{item.target || \&#39;\&#39;}}&quot; ng-bind=&quot;item.text&quot;&gt;&lt;/a&gt; &lt;a role=&quot;menuitem&quot; tabindex=&quot;-1&quot; href=&quot;javascript:void(0)&quot; ng-if=&quot;!item.divider &amp;&amp; item.click&quot; ng-click=&quot;$eval(item.click);$hide()&quot; ng-bind=&quot;item.text&quot;&gt;&lt;/a&gt;&lt;/li&gt;&lt;/ul&gt;&#39;</span><span class="p">);</span></div><div class='line' id='LC40'>&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC41'><span class="p">]);</span></div><div class='line' id='LC42'><br/></div><div class='line' id='LC43'><span class="c1">// Source: modal.tpl.js</span></div><div class='line' id='LC44'><span class="nx">angular</span><span class="p">.</span><span class="nx">module</span><span class="p">(</span><span class="s1">&#39;mgcrea.ngStrap.modal&#39;</span><span class="p">).</span><span class="nx">run</span><span class="p">([</span></div><div class='line' id='LC45'>&nbsp;&nbsp;<span class="s1">&#39;$templateCache&#39;</span><span class="p">,</span></div><div class='line' id='LC46'>&nbsp;&nbsp;<span class="kd">function</span> <span class="p">(</span><span class="nx">$templateCache</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC47'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">$templateCache</span><span class="p">.</span><span class="nx">put</span><span class="p">(</span><span class="s1">&#39;modal/modal.tpl.html&#39;</span><span class="p">,</span> <span class="s1">&#39;&lt;div class=&quot;modal&quot; tabindex=&quot;-1&quot; role=&quot;dialog&quot;&gt;&lt;div class=&quot;modal-dialog&quot;&gt;&lt;div class=&quot;modal-content&quot;&gt;&lt;div class=&quot;modal-header&quot; ng-show=&quot;title&quot;&gt;&lt;button type=&quot;button&quot; class=&quot;close&quot; ng-click=&quot;$hide()&quot;&gt;&amp;times;&lt;/button&gt;&lt;h4 class=&quot;modal-title&quot; ng-bind=&quot;title&quot;&gt;&lt;/h4&gt;&lt;/div&gt;&lt;div class=&quot;modal-body&quot; ng-bind=&quot;content&quot;&gt;&lt;/div&gt;&lt;div class=&quot;modal-footer&quot;&gt;&lt;button type=&quot;button&quot; class=&quot;btn btn-default&quot; ng-click=&quot;$hide()&quot;&gt;Close&lt;/button&gt;&lt;/div&gt;&lt;/div&gt;&lt;/div&gt;&lt;/div&gt;&#39;</span><span class="p">);</span></div><div class='line' id='LC48'>&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC49'><span class="p">]);</span></div><div class='line' id='LC50'><br/></div><div class='line' id='LC51'><span class="c1">// Source: popover.tpl.js</span></div><div class='line' id='LC52'><span class="nx">angular</span><span class="p">.</span><span class="nx">module</span><span class="p">(</span><span class="s1">&#39;mgcrea.ngStrap.popover&#39;</span><span class="p">).</span><span class="nx">run</span><span class="p">([</span></div><div class='line' id='LC53'>&nbsp;&nbsp;<span class="s1">&#39;$templateCache&#39;</span><span class="p">,</span></div><div class='line' id='LC54'>&nbsp;&nbsp;<span class="kd">function</span> <span class="p">(</span><span class="nx">$templateCache</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC55'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">$templateCache</span><span class="p">.</span><span class="nx">put</span><span class="p">(</span><span class="s1">&#39;popover/popover.tpl.html&#39;</span><span class="p">,</span> <span class="s1">&#39;&lt;div class=&quot;popover&quot;&gt;&lt;div class=&quot;arrow&quot;&gt;&lt;/div&gt;&lt;h3 class=&quot;popover-title&quot; ng-bind=&quot;title&quot; ng-show=&quot;title&quot;&gt;&lt;/h3&gt;&lt;div class=&quot;popover-content&quot; ng-bind=&quot;content&quot;&gt;&lt;/div&gt;&lt;/div&gt;&#39;</span><span class="p">);</span></div><div class='line' id='LC56'>&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC57'><span class="p">]);</span></div><div class='line' id='LC58'><br/></div><div class='line' id='LC59'><span class="c1">// Source: select.tpl.js</span></div><div class='line' id='LC60'><span class="nx">angular</span><span class="p">.</span><span class="nx">module</span><span class="p">(</span><span class="s1">&#39;mgcrea.ngStrap.select&#39;</span><span class="p">).</span><span class="nx">run</span><span class="p">([</span></div><div class='line' id='LC61'>&nbsp;&nbsp;<span class="s1">&#39;$templateCache&#39;</span><span class="p">,</span></div><div class='line' id='LC62'>&nbsp;&nbsp;<span class="kd">function</span> <span class="p">(</span><span class="nx">$templateCache</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC63'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">$templateCache</span><span class="p">.</span><span class="nx">put</span><span class="p">(</span><span class="s1">&#39;select/select.tpl.html&#39;</span><span class="p">,</span> <span class="s1">&#39;&lt;ul tabindex=&quot;-1&quot; class=&quot;select dropdown-menu&quot; ng-show=&quot;$isVisible()&quot; role=&quot;select&quot;&gt;&lt;li role=&quot;presentation&quot; ng-repeat=&quot;match in $matches&quot; ng-class=&quot;{active: $isActive($index)}&quot;&gt;&lt;a style=&quot;cursor: default&quot; role=&quot;menuitem&quot; tabindex=&quot;-1&quot; ng-click=&quot;$select($index, $event)&quot;&gt;&lt;span ng-bind=&quot;match.label&quot;&gt;&lt;/span&gt; &lt;i class=&quot;{{$iconCheckmark}} pull-right&quot; ng-if=&quot;$isMultiple &amp;&amp; $isActive($index)&quot;&gt;&lt;/i&gt;&lt;/a&gt;&lt;/li&gt;&lt;/ul&gt;&#39;</span><span class="p">);</span></div><div class='line' id='LC64'>&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC65'><span class="p">]);</span></div><div class='line' id='LC66'><br/></div><div class='line' id='LC67'><span class="c1">// Source: tab.tpl.js</span></div><div class='line' id='LC68'><span class="nx">angular</span><span class="p">.</span><span class="nx">module</span><span class="p">(</span><span class="s1">&#39;mgcrea.ngStrap.tab&#39;</span><span class="p">).</span><span class="nx">run</span><span class="p">([</span></div><div class='line' id='LC69'>&nbsp;&nbsp;<span class="s1">&#39;$templateCache&#39;</span><span class="p">,</span></div><div class='line' id='LC70'>&nbsp;&nbsp;<span class="kd">function</span> <span class="p">(</span><span class="nx">$templateCache</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC71'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">$templateCache</span><span class="p">.</span><span class="nx">put</span><span class="p">(</span><span class="s1">&#39;tab/tab.tpl.html&#39;</span><span class="p">,</span> <span class="s1">&#39;&lt;ul class=&quot;nav nav-tabs&quot;&gt;&lt;li ng-repeat=&quot;pane in panes&quot; ng-class=&quot;{active: $index == active}&quot;&gt;&lt;a data-toggle=&quot;tab&quot; ng-click=&quot;setActive($index, $event)&quot; data-index=&quot;{{$index}}&quot; ng-bind-html=&quot;pane.title&quot;&gt;&lt;/a&gt;&lt;/li&gt;&lt;/ul&gt;&lt;div class=&quot;tab-content&quot;&gt;&lt;div ng-repeat=&quot;pane in panes&quot; class=&quot;tab-pane&quot; ng-class=&quot;[$index == active ? \&#39;active\&#39; : \&#39;\&#39;]&quot; ng-include=&quot;pane.template || \&#39;$pane\&#39;&quot;&gt;&lt;/div&gt;&lt;/div&gt;&#39;</span><span class="p">);</span></div><div class='line' id='LC72'>&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC73'><span class="p">]);</span></div><div class='line' id='LC74'><br/></div><div class='line' id='LC75'><span class="c1">// Source: timepicker.tpl.js</span></div><div class='line' id='LC76'><span class="nx">angular</span><span class="p">.</span><span class="nx">module</span><span class="p">(</span><span class="s1">&#39;mgcrea.ngStrap.timepicker&#39;</span><span class="p">).</span><span class="nx">run</span><span class="p">([</span></div><div class='line' id='LC77'>&nbsp;&nbsp;<span class="s1">&#39;$templateCache&#39;</span><span class="p">,</span></div><div class='line' id='LC78'>&nbsp;&nbsp;<span class="kd">function</span> <span class="p">(</span><span class="nx">$templateCache</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC79'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">$templateCache</span><span class="p">.</span><span class="nx">put</span><span class="p">(</span><span class="s1">&#39;timepicker/timepicker.tpl.html&#39;</span><span class="p">,</span> <span class="s1">&#39;&lt;div class=&quot;dropdown-menu timepicker&quot; style=&quot;min-width: 0px;width: auto&quot;&gt;&lt;table height=&quot;100%&quot;&gt;&lt;thead&gt;&lt;tr class=&quot;text-center&quot;&gt;&lt;th&gt;&lt;button tabindex=&quot;-1&quot; type=&quot;button&quot; class=&quot;btn btn-default pull-left&quot; ng-click=&quot;$moveIndex(-1, 0)&quot;&gt;&lt;i class=&quot;{{$iconUp}}&quot;&gt;&lt;/i&gt;&lt;/button&gt;&lt;/th&gt;&lt;th&gt;&amp;nbsp;&lt;/th&gt;&lt;th&gt;&lt;button tabindex=&quot;-1&quot; type=&quot;button&quot; class=&quot;btn btn-default pull-left&quot; ng-click=&quot;$moveIndex(-1, 1)&quot;&gt;&lt;i class=&quot;{{$iconUp}}&quot;&gt;&lt;/i&gt;&lt;/button&gt;&lt;/th&gt;&lt;/tr&gt;&lt;/thead&gt;&lt;tbody&gt;&lt;tr ng-repeat=&quot;(i, row) in rows&quot;&gt;&lt;td class=&quot;text-center&quot;&gt;&lt;button tabindex=&quot;-1&quot; style=&quot;width: 100%&quot; type=&quot;button&quot; class=&quot;btn btn-default&quot; ng-class=&quot;{\&#39;btn-primary\&#39;: row[0].selected}&quot; ng-click=&quot;$select(row[0].date, 0)&quot; ng-disabled=&quot;row[0].disabled&quot;&gt;&lt;span ng-class=&quot;{\&#39;text-muted\&#39;: row[0].muted}&quot; ng-bind=&quot;row[0].label&quot;&gt;&lt;/span&gt;&lt;/button&gt;&lt;/td&gt;&lt;td&gt;&lt;span ng-bind=&quot;i == midIndex ? timeSeparator : \&#39; \&#39;&quot;&gt;&lt;/span&gt;&lt;/td&gt;&lt;td class=&quot;text-center&quot;&gt;&lt;button tabindex=&quot;-1&quot; ng-if=&quot;row[1].date&quot; style=&quot;width: 100%&quot; type=&quot;button&quot; class=&quot;btn btn-default&quot; ng-class=&quot;{\&#39;btn-primary\&#39;: row[1].selected}&quot; ng-click=&quot;$select(row[1].date, 1)&quot; ng-disabled=&quot;row[1].disabled&quot;&gt;&lt;span ng-class=&quot;{\&#39;text-muted\&#39;: row[1].muted}&quot; ng-bind=&quot;row[1].label&quot;&gt;&lt;/span&gt;&lt;/button&gt;&lt;/td&gt;&lt;td ng-if=&quot;showAM&quot;&gt;&amp;nbsp;&lt;/td&gt;&lt;td ng-if=&quot;showAM&quot;&gt;&lt;button tabindex=&quot;-1&quot; ng-show=&quot;i == midIndex - !isAM * 1&quot; style=&quot;width: 100%&quot; type=&quot;button&quot; ng-class=&quot;{\&#39;btn-primary\&#39;: !!isAM}&quot; class=&quot;btn btn-default&quot; ng-click=&quot;$switchMeridian()&quot; ng-disabled=&quot;el.disabled&quot;&gt;AM&lt;/button&gt; &lt;button tabindex=&quot;-1&quot; ng-show=&quot;i == midIndex + 1 - !isAM * 1&quot; style=&quot;width: 100%&quot; type=&quot;button&quot; ng-class=&quot;{\&#39;btn-primary\&#39;: !isAM}&quot; class=&quot;btn btn-default&quot; ng-click=&quot;$switchMeridian()&quot; ng-disabled=&quot;el.disabled&quot;&gt;PM&lt;/button&gt;&lt;/td&gt;&lt;/tr&gt;&lt;/tbody&gt;&lt;tfoot&gt;&lt;tr class=&quot;text-center&quot;&gt;&lt;th&gt;&lt;button tabindex=&quot;-1&quot; type=&quot;button&quot; class=&quot;btn btn-default pull-left&quot; ng-click=&quot;$moveIndex(1, 0)&quot;&gt;&lt;i class=&quot;{{$iconDown}}&quot;&gt;&lt;/i&gt;&lt;/button&gt;&lt;/th&gt;&lt;th&gt;&amp;nbsp;&lt;/th&gt;&lt;th&gt;&lt;button tabindex=&quot;-1&quot; type=&quot;button&quot; class=&quot;btn btn-default pull-left&quot; ng-click=&quot;$moveIndex(1, 1)&quot;&gt;&lt;i class=&quot;{{$iconDown}}&quot;&gt;&lt;/i&gt;&lt;/button&gt;&lt;/th&gt;&lt;/tr&gt;&lt;/tfoot&gt;&lt;/table&gt;&lt;/div&gt;&#39;</span><span class="p">);</span></div><div class='line' id='LC80'>&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC81'><span class="p">]);</span></div><div class='line' id='LC82'><br/></div><div class='line' id='LC83'><span class="c1">// Source: tooltip.tpl.js</span></div><div class='line' id='LC84'><span class="nx">angular</span><span class="p">.</span><span class="nx">module</span><span class="p">(</span><span class="s1">&#39;mgcrea.ngStrap.tooltip&#39;</span><span class="p">).</span><span class="nx">run</span><span class="p">([</span></div><div class='line' id='LC85'>&nbsp;&nbsp;<span class="s1">&#39;$templateCache&#39;</span><span class="p">,</span></div><div class='line' id='LC86'>&nbsp;&nbsp;<span class="kd">function</span> <span class="p">(</span><span class="nx">$templateCache</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC87'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">$templateCache</span><span class="p">.</span><span class="nx">put</span><span class="p">(</span><span class="s1">&#39;tooltip/tooltip.tpl.html&#39;</span><span class="p">,</span> <span class="s1">&#39;&lt;div class=&quot;tooltip in&quot; ng-show=&quot;title&quot;&gt;&lt;div class=&quot;tooltip-arrow&quot;&gt;&lt;/div&gt;&lt;div class=&quot;tooltip-inner&quot; ng-bind=&quot;title&quot;&gt;&lt;/div&gt;&lt;/div&gt;&#39;</span><span class="p">);</span></div><div class='line' id='LC88'>&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC89'><span class="p">]);</span></div><div class='line' id='LC90'><br/></div><div class='line' id='LC91'><span class="c1">// Source: typeahead.tpl.js</span></div><div class='line' id='LC92'><span class="nx">angular</span><span class="p">.</span><span class="nx">module</span><span class="p">(</span><span class="s1">&#39;mgcrea.ngStrap.typeahead&#39;</span><span class="p">).</span><span class="nx">run</span><span class="p">([</span></div><div class='line' id='LC93'>&nbsp;&nbsp;<span class="s1">&#39;$templateCache&#39;</span><span class="p">,</span></div><div class='line' id='LC94'>&nbsp;&nbsp;<span class="kd">function</span> <span class="p">(</span><span class="nx">$templateCache</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC95'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">$templateCache</span><span class="p">.</span><span class="nx">put</span><span class="p">(</span><span class="s1">&#39;typeahead/typeahead.tpl.html&#39;</span><span class="p">,</span> <span class="s1">&#39;&lt;ul tabindex=&quot;-1&quot; class=&quot;typeahead dropdown-menu&quot; ng-show=&quot;$isVisible()&quot; role=&quot;select&quot;&gt;&lt;li role=&quot;presentation&quot; ng-repeat=&quot;match in $matches&quot; ng-class=&quot;{active: $index == $activeIndex}&quot;&gt;&lt;a role=&quot;menuitem&quot; tabindex=&quot;-1&quot; ng-click=&quot;$select($index, $event)&quot; ng-bind=&quot;match.label&quot;&gt;&lt;/a&gt;&lt;/li&gt;&lt;/ul&gt;&#39;</span><span class="p">);</span></div><div class='line' id='LC96'>&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC97'><span class="p">]);</span></div><div class='line' id='LC98'><br/></div><div class='line' id='LC99'><br/></div><div class='line' id='LC100'><span class="p">})(</span><span class="nb">window</span><span class="p">,</span> <span class="nb">document</span><span class="p">);</span></div></pre></div></td>
         </tr>
       </table>
  </div>

  </div>
</div>

<a href="#jump-to-line" rel="facebox[.linejump]" data-hotkey="l" class="js-jump-to-line" style="display:none">Jump to Line</a>
<div id="jump-to-line" style="display:none">
  <form accept-charset="UTF-8" class="js-jump-to-line-form">
    <input class="linejump-input js-jump-to-line-field" type="text" placeholder="Jump to line&hellip;" autofocus>
    <button type="submit" class="button">Go</button>
  </form>
</div>

        </div>

      </div><!-- /.repo-container -->
      <div class="modal-backdrop"></div>
    </div><!-- /.container -->
  </div><!-- /.site -->


    </div><!-- /.wrapper -->

      <div class="container">
  <div class="site-footer">
    <ul class="site-footer-links right">
      <li><a href="https://status.github.com/">Status</a></li>
      <li><a href="http://developer.github.com">API</a></li>
      <li><a href="http://training.github.com">Training</a></li>
      <li><a href="http://shop.github.com">Shop</a></li>
      <li><a href="/blog">Blog</a></li>
      <li><a href="/about">About</a></li>

    </ul>

    <a href="/">
      <span class="mega-octicon octicon-mark-github" title="GitHub"></span>
    </a>

    <ul class="site-footer-links">
      <li>&copy; 2014 <span title="0.05607s from github-fe117-cp1-prd.iad.github.net">GitHub</span>, Inc.</li>
        <li><a href="/site/terms">Terms</a></li>
        <li><a href="/site/privacy">Privacy</a></li>
        <li><a href="/security">Security</a></li>
        <li><a href="/contact">Contact</a></li>
    </ul>
  </div><!-- /.site-footer -->
</div><!-- /.container -->


    <div class="fullscreen-overlay js-fullscreen-overlay" id="fullscreen_overlay">
  <div class="fullscreen-container js-fullscreen-container">
    <div class="textarea-wrap">
      <textarea name="fullscreen-contents" id="fullscreen-contents" class="fullscreen-contents js-fullscreen-contents" placeholder="" data-suggester="fullscreen_suggester"></textarea>
    </div>
  </div>
  <div class="fullscreen-sidebar">
    <a href="#" class="exit-fullscreen js-exit-fullscreen tooltipped tooltipped-w" aria-label="Exit Zen Mode">
      <span class="mega-octicon octicon-screen-normal"></span>
    </a>
    <a href="#" class="theme-switcher js-theme-switcher tooltipped tooltipped-w"
      aria-label="Switch themes">
      <span class="octicon octicon-color-mode"></span>
    </a>
  </div>
</div>



    <div id="ajax-error-message" class="flash flash-error">
      <span class="octicon octicon-alert"></span>
      <a href="#" class="octicon octicon-x close js-ajax-error-dismiss"></a>
      Something went wrong with that request. Please try again.
    </div>


      <script crossorigin="anonymous" src="https://assets-cdn.github.com/assets/frameworks-e87aa86ffae369acf33a96bb6567b2b57183be57.js" type="text/javascript"></script>
      <script async="async" crossorigin="anonymous" src="https://assets-cdn.github.com/assets/github-41a23288068e4484cfbf360335086f7062a5c29f.js" type="text/javascript"></script>
      
      
        <script async src="https://www.google-analytics.com/analytics.js"></script>
  </body>
</html>

