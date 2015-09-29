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
        expect(view.$el.children().length).toBe(1);
    });

    it('should contain text "Learn Backbone"', function() {
        expect(view.$el.html()).toContain('Drink');
    });

    //TEST : deleteTodo (its asynchonous)

    it('should delete the todo when pressing deleteTodo and make a server request"', function() {
            
        spyOn($,'ajax');

        view.$el.find('.deleteTodo').click();

        expect($.ajax).toHaveBeenCalled();

    });

    it('should delete the todo when pressing deleteTodo and delete the model"', function() {
    

        spyOn($, 'ajax').and.callFake(function() {
            console.log('yo!');
            return '{}';
        });
        console.log('view.model : ',view.model);
        view.$el.find('.deleteTodo').click();

 /*
        //prepare reponse text
        var serverResponse = '';
        //prime the server to respond with particular text on a certain URL
        this.server = sinon.fakeServer.create();
        this.server.respondWith("DELETE", "http://0.0.0.0:3000/todo/1", [200, {"Content-Type":"application/json"}, serverResponse]);
        //force the server to respond
        this.server.respond();
*/

        expect(view.$el.html()).not.toContain('Drink');

    });

    afterEach(function() {
        view.remove();
    });
});
