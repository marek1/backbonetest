var app = app || {};

app.Todos = Backbone.Collection.extend({
    model: app.Todo,
    url : 'http://0.0.0.0:3000/todos',
    getByName: function(name){
       return this.filter(function(val) {
          return val.get("name") === name;
        })
    }
});
