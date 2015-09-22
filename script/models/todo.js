var app = app || {};

app.Todo = Backbone.Model.extend({
	defaults : {
		name : '',
		completed : 0
	},
	url : function() {
	  var base = 'http://0.0.0.0:3000/todo';
	  if (this.isNew()) return base;
	  return base + (base.charAt(base.length - 1) == '/' ? '' : '/') + this.id;
	},

	initialize: function(){
      	console.log('this model gets cid ',this.cid);
      	this.on('change', function(){
      		console.log('changed -> can be listened to');
      	});  
  	},
  	validate: function() {
  		
  		//Version 0.0.1:
  		if (this.attributes.name.toString().length<1) {
			return 'no name';		
  		}
  		
  		//Version 0.0.2:
  		/* 
  		var errors = [];
  		if (this.attributes.name.toString().length<1) {
			errors.push('no name');		
  		}
  		return errors.length>0 ? errors : null;
		*/
  	}
});
