const mongoose = require('mongoose');
const CategorySchema = require('./Category.js');

const TaskSchema = new mongoose.Schema({
    title: {type: String, required: [true, "Please enter a title for your task."], minlength: [2, "Task title must be longer than 2 characters."]},
    due: {type: Date},
    categoryid: {type: String},
    completed: {type: Boolean},
    flag: {type: Boolean},
    }, {timestamps: true}
);

mongoose.model('Task', TaskSchema);