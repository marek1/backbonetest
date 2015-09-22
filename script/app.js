var app = app || {};

$(function() {
    var tasks = [
        { name: 'Learn Backbone', completed : 0 },
        { name: 'See Whistler', completed : 0 },
        { name: 'Go kart', completed : 0 },
        { name: 'See Portland', completed : 0 }
    ];

    new app.TodosView( tasks );
});