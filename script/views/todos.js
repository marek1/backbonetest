
var app = app || {};

app.TodosView = Backbone.View.extend({
    el: $('#view'),

    template: _.template( $('#todosTemplate').html() ),

    events : {
    	'click .addTodo' : 'makeTodo'
    },
    initialize: function( initialTodos ) {
        this.$errors = $('.error');

        if (typeof initialTodos === 'undefined') {
            this.collection = new app.Todos();
            this.collection.fetch({reset: true});
        } else {
            this.collection = new app.Todos(initialTodos);
        }
        
        this.render();
        this.listenTo( this.collection, 'reset', this.render ); 
        
    },
    render: function(){
        this.$el.html( this.template() );
        this.$addTodo = this.$el.find('#addTodo');
        this.collection.each(this.addTodo, this);
        return this;
    },
    makeTodo: function(event){
        this.model = new app.Todo({name : this.$addTodo.val()}); 

        var errors = this.model.validate();
        this.$errors.empty();
        var that = this;
        if (errors) {
            _.each(errors, function(x){
                that.$errors.append(x);
            });
        } else  {
            console.log('event.taget : ',event.target);
            $(event.target).attr('disabled', 'disabled');
        }
        this.model.save(null, {
            success: function(model, response){
                console.log('success');
                that.addTodo(model);
                that.$addTodo.val('');
                $(event.target).removeAttr('disabled');
            },
            error: function(){
                console.log('error');
                that.$errors.html('could not be saved');
            }
        });
    },
    addTodo: function(todo){
        var view = new app.TodoView({ model: todo });
        $('#todo-list').append( view.render().el );
    }
});