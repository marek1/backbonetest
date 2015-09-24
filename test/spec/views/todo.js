describe('VIEWS : TodoView', function() {

    var task = { id:1 , name: 'Drink coffee', completed : 0 },
    model,
    view;

    beforeEach(function() {
        model = new app.Todo(task); 
        view = new app.TodoView({model : model});
        view.render();
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
        expect(view.el.id).toBe('');
    });

    it('should have no children elements', function() {
        expect(view.$el.children().length).toBe(0);
    });

    it('should contain text "Learn Backbone"', function() {
        console.log('view.$el.html()  ',view.$el);
        expect(view.$el.html()).toContain('Drink');
    });

    afterEach(function() {
        view.remove();
    });
});