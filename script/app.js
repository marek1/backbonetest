var app = app || {};

(function() {
	var x = new app.Router();
	Backbone.history.start();

			x.navigate('#test', {trigger: true});	
}());