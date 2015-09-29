var app = app || {};

app.Router = Backbone.Router.extend({
	routes: {
		'' : 'start',
		'test' : 'test'
	},
	initialize : function() {
		this.on('route:test', function(){
			console.log('route changed to test');
			this.blah();
		});
	},
	start : function() {
		new app.TodosView();
	},
	test: function(){
		new app.TestView();
	},
	blah: function(){
		console.log('blah clla');
	}
});