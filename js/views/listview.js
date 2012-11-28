// Filename: views/project/list
define([
  'jquery',
  'underscore',
  'backbone',
  'models/task',
  'collections/tasks',
   'text!templates/task.js'
], function($, _, Backbone, Task, Tasks, liTemplate){

	var listView = Backbone.View.extend({
		el : $("#list"),
		render : function(){

			var task1 = new Task({label : "Task1" , checked : true, pos : "1"});
			var task2 = new Task({label : "Task2" , pos : "2"});
			var task3 = new Task({label : "Task3" , checked : true, pos : "3"});

			var tasks = new Tasks([task1,task2,task3]);

			_.each(tasks,function(task){
					console.log(this.task);
			});

		}
	});
	return listView;

});