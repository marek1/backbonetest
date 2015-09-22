  // js/views/todos.js

  var app = app || {};

  // Todo Item View
  // --------------

  // The DOM element for a todo item...
  app.TodoView = Backbone.View.extend({

    //... is a list tag.
    tagName: 'li',

    events : {
      'click .changeTodo' : 'changeTodo',
      'click .deleteTodo' : 'deleteTodo'
    },

    // Cache the template function for a single item.
    template: _.template( $('#todo-template').html() ),

    initialize: function() {
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
