var app = app || {};

$(function() {
    var tasks = [
        { id:1 , name: 'Learn Backbone', completed : 0 },
        { id:2, name: 'See Whistler', completed : 0 },
        { id:3, name: 'Go kart', completed : 0 },
        { id:7, name: 'See Portland', completed : 0 }
    ];

    new app.TodosView(  );
});