/**
 * Handlebars Helpers: {{twitter}}
 * Copyright (c) 2013 Jon Schlinkert
 * Licensed under the MIT License (MIT).
 */

// Export helpers
module.exports.register = function (Handlebars, options, params) {

  'use strict';

  var opts = options;

  /**
   * {{tweet}}
   * => {{tweet url="http://assemble.io" via="assemblejs" related="jonschlinkert:Assemble core team"}}
   */
  exports.tweet = function (options) {
    options = options || {};
    options.hash = options.hash || {};

    // Defaults
    var url = options.hash.url || 'http://assemble.io';
    var via = options.hash.via || 'assemblejs';
    var related = options.hash.related || 'jonschlinkert:Assemble core team';

    var btn = '<a href="https://twitter.com/share" class="twitter-share-button" data-url="' + url + '" data-count="horizontal" data-via="' + via + '" data-related="' + related + '">Tweet</a>';
    return new Handlebars.SafeString(btn);
  };

  /**
   * {{follow}}
   * => {{follow user="assemblejs"}}
   */
  exports.follow = function (options) {
    options = options || {};
    options.hash = options.hash || {};

    // Defaults
    var user = options.hash.user || 'assemblejs';
    var color = options.hash.color || '#0069D6';
    var showCount = options.hash.count || 'true';

    var btn = '<a href="https://twitter.com/' + user + '" class="twitter-follow-button" data-link-color="' + color + '" data-show-count="' + showCount + '">Follow @' + user + '</a>';
    return new Handlebars.SafeString(btn);
  };

  for (var helper in exports) {
    if (exports.hasOwnProperty(helper)) {
      Handlebars.registerHelper(helper, exports[helper]);
    }
  }
};




// <style type="text/css" media="screen">
//   #custom-tweet-button > a {
//     float: right;
//     display: inline-block;
//     padding: 8px 16px 8px 36px;
//     margin: 15px 0 0 0;
//     background: url('https://twitter.com/favicons/favicon.ico') 15px center no-repeat;
//     background-color: transparent;
//     border: none;
//     border-radius: 4px;
//   }
//   #custom-tweet-button > a:hover {
//     text-decoration: none;
//     background-color: rgba(255,255,255,.07);
//   }
// </style>
// <div id="custom-tweet-button">
//   <a href="https://twitter.com/intent/tweet?screen_name=assemblejs" data-related="jonschlinkert:Creator of Assemble" data-lang="en" target="_blank">&nbsp;Tweet</a>
//   <script>
//     ! function(d, s, id) {
//       var js, fjs = d.getElementsByTagName(s)[0];
//       if (!d.getElementById(id)) {
//         js = d.createElement(s);
//         js.id = id;
//         js.src = "https://platform.twitter.com/widgets.js";
//         fjs.parentNode.insertBefore(js, fjs);
//       }
//     }(document, "script", "twitter-wjs");
//   </script>
// </div>