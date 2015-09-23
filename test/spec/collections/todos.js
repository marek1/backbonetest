describe('COLLECTIONS', function() {
	
	var json = [
	        { id: 0, name: 'Learn Backbone', completed : 0 },
	        { id: 1, name: 'See Whistler', completed : 0 },
	        { id: 2, name: 'Go kart', completed : 0 },
	        { id: 3, name: 'See Portland', completed : 0 }
	    ],
	    someTodo = {id: 999, name: 'Chill out'},
	    todos,
	    fetchTodos;

	beforeEach(function() {
		todos = new app.Todos(json);
		fetchTodos = new app.Todos();
		spyOn(fetchTodos, 'fetch');
	});

	describe('Collection Todo', function() {

		it('todos to be defined', function() {
		    expect(todos).toBeDefined();
		    console.log('todos : ',todos);
		});

		it('todos should contain 4 models', function() {
		    expect(todos.length).toBe(4);
		});

		it('get : model where id 1 (should have name "See Whistler")', function() {
		    expect(todos.get(1)).toBeDefined();
		    expect(todos.get(1).get('name')).toBe('See Whistler');
		});

		it('at : should get second model (index starts with 0) where name is "See Whistler"', function() {
		    expect(todos.at(1).get('name')).toBe('See Whistler');
		});

		it('add : should add one model to then contain 5 models (should have name "Chill out")', function() {
		    todos.add(new app.Todo(someTodo));
		    expect(todos.length).toBe(5);
		    expect(todos.get(999).get('name')).toBe('Chill out');
		});

		it('push : should add one model to then contain 5 models (should have name "Chill out")', function() {
		    todos.push(new app.Todo(someTodo));
		    expect(todos.length).toBe(5);
		    expect(todos.get(999).get('name')).toBe('Chill out');
		});

		it('pop : should remove the last model, hence only 3 models are left in the collection', function() {
		    todos.pop();
		    expect(todos.length).toBe(3);
		});

		it('reset : should reset collection to then contain 0 models', function() {
		    todos.reset();
		    expect(todos.length).toBe(0);
		});

		it('remove : should remove the first model, hence the number of models is now 3', function() {
		    todos.remove(todos.at(0));
		    expect(todos.length).toBe(3);
		});

		it('sort : will sort the collection by name, therefore first model should have name "Go Kart"', function() {
			todos.comparator = 'name';
		    todos.sort();
		    expect(todos.at(0).get('name')).toBe('Go kart');
		});

	});

	describe('Collection fetchTodo', function() {

		it('fetch : should call the collections fetch method', function() {
			fetchTodos.fetch();
			expect(fetchTodos.fetch).toHaveBeenCalled();
		});

	});

});