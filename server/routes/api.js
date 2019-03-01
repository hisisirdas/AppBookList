const express = require('express');
const router = express.Router();
let mongojs = require('mongojs'),
    db = mongojs('mongodb://127.0.0.1:27017/dbBooksList');
/* GET api listing. */
 
router.get('/', (req, res) => {
  res.send('api works test');
});
 
 
// Get Todos
router.get('/booksList', function(req, res, next){
    db.booksList.find(function(err, booksList){
        if(err){
           res.send(err);
        } else {
           res.json(booksList);
        }
    });
});
 
module.exports = router;