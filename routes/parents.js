var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Parent = require('../models/parent.model');


/* SAVE User */
router.post('/saveParent', function(req, res, next) {
  Parent.create(req.body, function (err, resutLists) {
    if(err){
      console.log('req body result :'+ req.body.parent_task);
      console.log(err);
    }
    else {
      res.json(resutLists);
    }
  });
});

// Defined get data(index or listing) route
router.route('/parentList').get(function (req, res) {
  Parent.find(function (err, resutLists){
    if(err){
      console.log(err);
    }
    else {
      res.json(resutLists);
    }
});
});




module.exports = router;