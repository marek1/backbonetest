  var app = app || {};

  app.TestView = Backbone.View.extend({

    el: $('#view'),

    template: _.template( $('#testTemplate').html() ),
    
    initialize: function() {
        console.log('just a testview');
        this.render();
    },

    render: function() {
      this.$el.html( this.template );
    }

  });
