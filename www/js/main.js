// Sets the require.js configuration for your application.
require.config( {

  baseUrl: "../www/",

  // 3rd party script alias names
  paths: {

    // Core Libraries
    "jquery": "components/jquery/jquery.min",
    "jquerymobile": "components/jquery-mobile-bower/js/jquery.mobile-1.4.1.min",
    "underscore": "components/underscore/underscore",
    "backbone": "components/backbone/backbone",
    "app": "js"
  },

  // Sets the configuration for your third party scripts that are not AMD compatible
  shim: {

    "backbone": {
      "deps": [ "underscore", "jquery" ],
      "exports": "Backbone"
    }

  }

});

// Includes File Dependencies
require([
  "jquery",
  "backbone",
  "app/routers/mobileRouter"
], function ( $, Backbone, Mobile ) {

  $( document ).on( "mobileinit",

    // Set up the "mobileinit" handler before requiring jQuery Mobile's module
    function () {

      // Prevents all anchor click handling including the addition of active button state and alternate link bluring.
      $.mobile.linkBindingEnabled = false;

      // Disabling this will prevent jQuery Mobile from handling hash changes
      $.mobile.hashListeningEnabled = false;
    }
  )

  require( [ "jquerymobile" ], function () {

    // Instantiates a new Backbone.js Mobile Router
    this.router = new Mobile();
  });
});