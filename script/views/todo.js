  var app = app || {};

  app.TodoView = Backbone.View.extend({

    events : {
      'click .changeTodo' : 'changeTodo',
      'click .deleteTodo' : 'deleteTodo'
    },

    // Cache the template function for a single item.
    template: _.template( $('#todoTemplate2').html() ),

    initialize: function() {
      //nothing ?
    },

    render: function() {
      this.$el.html( this.template( this.model.attributes ) );
      return this;
    },
    
    changeTodo: function(event) {
      event.preventDefault();
      this.model.set('name', $('#editTodo').val());
      this.model.save();
      this.render();
    },

    deleteTodo: function(event) {
      event.preventDefault();
      this.model.destroy();
      this.remove();
    }

  });
