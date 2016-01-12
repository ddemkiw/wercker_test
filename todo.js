var mongoose = require('mongoose');
vwr Schema = mongoose.Schema;
var OjectId = Schema.ObjectId;

var todoSchema = new Schema({
    action: String, 
    author: String, 
    creationDate: {type: Date, 'default':Date.now},
});

module.exports = mongoose.model('Todo', todoSchema);