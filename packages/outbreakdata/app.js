'use strict';

/*
 * Defining the Package
 */
var Module = require('meanio').Module;

var Outbreakdata = new Module('outbreakdata');

/*
 * All MEAN packages require registration
 * Dependency injection is used to define required modules
 */
Outbreakdata.register(function(app, auth, database) {

  //We enable routing. By default the Package Object is passed to the routes
  Outbreakdata.routes(app, auth, database);

  //We are adding a link to the main menu for all authenticated users
  Outbreakdata.menus.add({
    title: 'outbreakdata example page',
    link: 'outbreakdata example page',
    roles: ['admin'],
    menu: 'main'
  });

  /**
    //Uncomment to use. Requires meanio@0.3.7 or above
    // Save settings with callback
    // Use this for saving data from administration pages
    Outbreakdata.settings({
        'someSetting': 'some value'
    }, function(err, settings) {
        //you now have the settings object
    });

    // Another save settings example this time with no callback
    // This writes over the last settings.
    Outbreakdata.settings({
        'anotherSettings': 'some value'
    });

    // Get settings. Retrieves latest saved settigns
    Outbreakdata.settings(function(err, settings) {
        //you now have the settings object
    });
    */

  return Outbreakdata;
});
