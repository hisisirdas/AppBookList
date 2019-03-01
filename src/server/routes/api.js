const express = require('express');
const router = express.Router();
var mongojs = require('mongojs');
var db = mongojs('mongodb://mongodb://localhost:27017/dbBooksList');
 
router.get('/', (req, res) => {
  res.send('api works');
});
 
 
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