const mongoose = require('mongoose');
const Task = mongoose.model('Task');
const Category = mongoose.model('Category');

module.exports = {
    index: (req, res) => {
        Task.find()
            .then(allTasks => {
                console.log("Got all Tasks");
                res.json({allTasks: allTasks})
            })
            .catch(err => console.log({error: err}));
    },

    Show: (req, res) => {
        const { id } = req.params;
        Task.findOne({_id: id})
            .then(task => {
                console.log("Found one task.")
                res.json({status: true, task: task})
            })
            .catch(fail => {
                console.log("Failed to find one task.")
                const errors = [];
                for(var key in fail.errors){
                    errors.push(fail.errors[key].message)
                }
                res.json({status: false, errors: errors})
            })
    },

    Create: (req, res) => {
        console.log("*************** Got to the tasks.js file in the Create function *************")
        Task.create(req.body, function(err, createdTask){
            if(err){
                errors = [];
                for(var key in err.errors){
                    errors.push(err.errors[key].message);
                }
                res.json({status: false, errors: errors});
            }
            else{
                console.log("************ Task should have been created, now inside the push to category section **************")
                //if(createdTask.length > 2){
                    Category.findOneAndUpdate({_id: createdTask.categoryid}, {$push: {tasks: createdTask}}, function(err, data){
                        if(err){
                            console.log("Error in the Task controller file..." + err);
                        }
                        else{
                            console.log("Task successfully added to category.")
                        }
                    })
                //}
                
            }
        }
        )},

    Update: (req, res) => {
        Task.findOne({_id: req.params.id})
            .then(task => {
                task.title = req.body.title;
                task.note = req.body.note;
                task.due = req.body.due;
                task.category = req.body.category;
                task.completed = req.body.completed;
                return task.save();
            })
            .then(saveResult => {
                res.json({status: true, result: saveResult})
            })
            .catch(err => {
                const errors = [];
                for(var key in err.errors){
                    errors.push(err.errors[key].message);
                    }
                res.json({status: false, errors: errors})
                })
},

remove: (req, res) => {
    Task.deleteOne({_id: req.params.id})
            .then(() => res.json({status: true}))
            .catch(() => res.json({status: false}))
},
}
