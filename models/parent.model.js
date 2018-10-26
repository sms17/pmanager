var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ParentSchema = new mongoose.Schema({
    parent_task: {type: String, required: true, unique: true, dropDups: true}
  });

  module.exports = mongoose.model('Parent', ParentSchema);

