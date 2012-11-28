// Filename: models/project
define([
  'underscore',
  'backbone',
  'models/task'
], function(_, Backbone, Task){
  var Tasks = Backbone.Collection.extend({
  	model : Task
  });
  // Return the model for the module
  return Tasks;
});