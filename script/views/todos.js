
var app = app || {};
console.log('app : ',app);
app.TodosView = Backbone.View.extend({
    el: '#todo-list',
    events : {
    	'click .addTodo' : 'makeTodo'
    },
    initialize: function( initialTodos ) {
        this.$errors = $('.error'),
        this.$addTodo = $('#addTodo');

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
            $(event.target).attr('disabled', 'disabled');
        }
        this.model.save(null, {
            success: function(model, response){
                that.addTodo(model);
                that.$addTodo.val('');
                $(event.target).removeAttr('disabled');
            },
            error: function(){
                console.log('error');
            }
        });
    },
    addTodo: function(todo){
        var view = new app.TodoView({ model: todo });
        this.$el.append( view.render().el );
    }
});