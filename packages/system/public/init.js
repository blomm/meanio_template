'use strict';


angular.element(document).ready(function() {
  //Fixing facebook bug with redirect
  if (window.location.hash === '#_=_') window.location.hash = '#!';

  //Then strap the app
  //https://docs.angularjs.org/guide/bootstrap
  //so we don't need ng-app
  angular.bootstrap(document, ['mean']);

});

// Dynamically add angular modules declared by packages
var packageModules = [];
for (var index in window.modules) {
  angular.module(window.modules[index].module, window.modules[index].angularDependencies || []);
  packageModules.push(window.modules[index].module);
}

// Default modules
var modules = ['ngCookies', 'ngResource', 'ui.bootstrap', 'ui.router'];
modules = modules.concat(packageModules);

// Combined modules
angular.module('mean', modules);
