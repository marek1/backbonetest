  var app = app || {};

  app.TodoView = Backbone.View.extend({

    events : {
      'click .deleteTodo' : 'deleteTodo'
    },

    // Cache the template function for a single item.
    template: _.template( $('#todoTemplate').html() ),

    initialize: function() {
      //nothing ?
    },

    render: function() {
      this.$el.html( this.template( this.model.attributes ) );
      return this;
    },
    
    deleteTodo: function(event) {
      event.preventDefault();
      var that = this;
      this.model.destroy({
            success: function(model, response){
                console.log('success');
                
            },
            error: function(){
                console.log('error');
            },
            wait : true
        });
      this.remove();
    }

  });
