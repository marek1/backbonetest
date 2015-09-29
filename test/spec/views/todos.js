describe('VIEWS : TodosView', function() {

    var tasks = [
        { id:1 , name: 'Learn Backbone', completed : 0 },
        { id:2, name: 'See Whistler', completed : 0 },
        { id:3, name: 'Go kart', completed : 0 },
        { id:7, name: 'See Portland', completed : 0 }
    ],
    taskToAdd = { id: 8, name : 'Drink coffee bier' },
    view;


    beforeEach(function() {
       
		view = new app.TodosView(tasks);

    });

    it('should be defined', function() {
	    expect(view).toBeDefined();
	});

    it('should have a corresponding DOM element', function() {
    	console.log('view.$el : ',view.$el);
	    expect(view.$el.length).toBe(1);
	});

    it('should have an element : in our case a div', function() {
	    expect(view.el.tagName.toLowerCase()).toBe('div');
	});
 
 	it('should have an element with id todo-list', function() {
    	expect(view.el.id).toBe('view');
	});
    
    it('should have 4 children elements which represent each task', function() {
    	console.log('todo-list ? ',view.$el.find('#todo-list'));
    	expect(view.$el.find('#todo-list').children().length).toBe(5);
	});

    it('should contain a task "Go kart"', function() {
    	expect(view.$el.html()).toContain('Go kart');
	});

    it('last task to be "See Portland"', function() {
    	expect(view.$el.children().last().html()).toContain('See Portland');
	});

	//TEST : addTodo function

	it('should add a task - and collection size should be 5 ', function() {
		var newTask = new app.Todo(taskToAdd);
		view.addTodo(newTask);
    	expect(view.$el.find('#todo-list').children().length).toBe(6);
	});

	it('should add a task - and collection should contain "Drink coffee beer"', function() {
		var newTask = new app.Todo(taskToAdd);
		view.addTodo(newTask);
    	expect(view.$el.html()).toContain('Drink coffee bier');
	});

	//TEST : makeTodo

	it('add an invalid ToDo -> should throw an error : "no name" as we are trying to save an empty to-do', function() {
		$('#addTodo').val();
		$('.addTodo').click();
    	expect($('.error').html()).toBe('no name');
	});


	it('add a valid ToDo -> should make a server request', function() {

		// Spy on jQuery's ajax method
		spyOn($, 'ajax');

		$('#addTodo').val('TEST');
		$('.addTodo').click();

		//expect(view.makeTodo).toHaveBeenCalled();

  		expect($.ajax).toHaveBeenCalled();

    });


    afterEach(function() {
    	//view.remove();
    	$('#todo-list').empty();
    });

});
	
