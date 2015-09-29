describe('Router ', function() {
		
		var router;

		beforeEach(function(){
			spyOn(app.Router.prototype, 'start');
		    spyOn(app.Router.prototype, 'test'); 

			
			router = new app.Router();
		    Backbone.history.start();
			
		});

		afterEach(function(){
			Backbone.history.stop();
		});

		it('has a "home" route', function () {
            expect(router.routes['']).toEqual('start');
        });

		it('has a "test" route', function () {
            expect(router.routes['test']).toEqual('test');
        });
       
		it('navigates to / route', function(){
			Backbone.history.navigate('', {trigger:true});
			expect(app.Router.prototype.start).toHaveBeenCalled();
		});

		it('navigates to /#test route', function(){
			Backbone.history.navigate('test', {trigger:true});
			expect(app.Router.prototype.test).toHaveBeenCalled();
		});

});