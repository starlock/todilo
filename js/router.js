// Filename: router.js
define([
  'jquery',
  'underscore',
  'backbone',
  'views/listview' 
], function($, _, Backbone, listView){
	// ROUTE FROM URL TO VIEW
	var Router = Backbone.Router.extend({
		routes: {
			"": "start",
			".*": "start"			
		}
	});

	var initialize = function(){
		console.log("init");
		// Create router and apply functions
		var router = new Router();
		debugger;
		router.on("route:start",function(){
			console.log("start");
			var list_view = new listView();
			list_view.render();

			
		});
  	  	Backbone.history.start();
	}

	return {
		initialize: initialize
	};

  });
