const mongoose = require('mongoose');
const TaskSchema = require('./Task.js');


const CategorySchema = new mongoose.Schema({
    name: {type: String, required: [true, "Please enter a name for your category."], minlength: [2, "Category name must be longer than 2 characters."]},
    tasks: [TaskSchema],
    }
);

mongoose.model('Category', CategorySchema);