describe('MODELS', function() {
	
	var todo,
		fetchTodo,
		saveTodo;

	beforeEach(function() {
		todo = new app.Todo({name : 'TEST'});
		saveTodo = new app.Todo();
		fetchTodo = new app.Todo({id : 0});
		spyOn(fetchTodo, 'fetch');
		spyOn(fetchTodo, 'destroy');
	});

	describe('Model Todo', function() {

		it('todo is defined', function() {
		    expect(todo).toBeDefined();
		});

		it('todo has a cid', function() {
		    expect(todo.cid).toBeDefined();
		});

		it('get : name has value TEST.', function() {
		    expect(todo.get('name')).toBe('TEST');
		});

		it('set : value changed and is now HAUS.', function() {
		    todo.set({name : 'HAUS'});
		    expect(todo.get('name')).toBe('HAUS');
		    expect(todo.hasChanged()).toBe(true);
		});

	});


	describe('Model saveTodo', function() {
		
		it('save : should return a valdationError if intialized with no name value', function(){
			saveTodo.save();
			expect(saveTodo.validationError).toBe('no name');
		});

	});


	describe('Model saveTodo', function() {


		it('fetch : should call the models fetch method', function() {
			fetchTodo.fetch();
            expect(fetchTodo.fetch).toHaveBeenCalled();
		});


		it('destroy : should call the models destroy method', function(){
			fetchTodo.destroy();
			expect(fetchTodo.destroy).toHaveBeenCalled();
		});
	});


});