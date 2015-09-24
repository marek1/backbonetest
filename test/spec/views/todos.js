describe('VIEWS : TodosView', function() {

    var tasks = [
        { id:1 , name: 'Learn Backbone', completed : 0 },
        { id:2, name: 'See Whistler', completed : 0 },
        { id:3, name: 'Go kart', completed : 0 },
        { id:7, name: 'See Portland', completed : 0 }
    ],
    view;


    beforeEach(function() {
        $('body').append('<div><div id="todo-list"></div></div>');
		view = new app.TodosView(tasks);
    });

    it('should be defined', function() {
	    expect(view).toBeDefined();
	});

    it('should have a corresponding DOM element', function() {
	    expect(view.$el.length).toBe(1);
	});

    it('should have an element : in our case a div', function() {
	    expect(view.el.tagName.toLowerCase()).toBe('div');
	});
 
 	it('should have an element with id todo-list', function() {
    	expect(view.el.id).toBe('todo-list');
	});
    
    it('should have 4 children elements which represent each task', function() {
    	expect(view.$el.children().length).toBe(4);
	});

    it('should contain a task "Go kart"', function() {
    	expect(view.$el.html()).toContain('Go kart');
	});

    it('should contain a task "Learn Backbone"', function() {
    	expect(view.$el.children().first().html()).toContain('Learn Backbone');
	});

    afterEach(function() {
        view.remove();
        $('#todo-list').remove();
    });
});