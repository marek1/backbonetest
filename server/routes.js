var json = [
        { id: 0, name: 'Learn Backbone', completed : 0 },
        { id: 1, name: 'See Whistler', completed : 0 },
        { id: 2, name: 'Go kart', completed : 0 },
        { id: 3, name: 'See Portland', completed : 0 }
    ];
var findEntry = function(id){
	var returnValue = -1;
	for (var i = 0; i<json.length; i++){
		if (parseInt(json[i].id) === parseInt(id)) {
			returnValue = i;
		}
	}
	return returnValue;
}
var express = require('express');
var router = express.Router();
/* Collection. */
router.get('/todos', function(req, res, next) {
  res.end(JSON.stringify(json));
});
/* Model */
router.get('/todo/:id', function(req, res, next) {
	var id = req.params.id;
	res.end(JSON.stringify(json[findEntry(id)]));
});

router.post('/todo', function(req, res, next) {	
	var newBook = req.body;
	newBook.id = json.length;
	json.push(newBook);
	res.end(JSON.stringify(newBook));
});
router.put('/todo', function(req, res, next) {
	console.log('req.body : ',findEntry(req.body.id));
	json.push(req.body);
	res.sendStatus(200);
});
router.delete('/todo', function(req, res, next) {
	console.log('req.body : ',findEntry(req.body.id));
	json.splice(findEntry(req.body.id),1);
	res.sendStatus(200);
});
module.exports = router;