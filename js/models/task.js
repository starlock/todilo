// Filename: models/project
define([
  'underscore',
  'backbone'
], function(_, Backbone){
  var Task = Backbone.Model.extend({
  		defaults : {
  			checked : false
  		}
  });
  // Return the model for the module
  return Task;
});