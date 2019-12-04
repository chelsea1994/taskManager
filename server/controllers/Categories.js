const mongoose = require('mongoose');
const Category = mongoose.model('Category');

module.exports = {
    index: (req, res) => {
        Category.find()
            .then(allCats => {
                console.log("Got all Categories");
                res.json({allCats: allCats})
            })
            .catch(err => console.log({error: err}));
    },

    Show: (req, res) => {
        const { id } = req.params;
        Category.findOne({_id: id})
            .then(category => {
                console.log("Found one category.");
                res.json({status: true, category: category});
            })
            .catch(fail => {
                console.log("Failed to find one category.");
                const errors = [];
                for(var key in fail.errors){
                    errors.push(fail.errors[key].message);
                }
                res.json({status: false, errors: errors});
            })
    },

    Create: (req, res) => {
        const cat = req.body;
        Category.create(cat)
            .then(success => {
                console.log("Created a new category.")
                res.json({status: true, result: success})
            })
            .catch(fail => {
                console.log("Failed to create a new category.")
                const errors = [];
                for(var key in fail.errors){
                    errors.push(fail.errors[key].message)
                }
                res.json({status: false, errors: errors})
            })
    },

    Update: (req, res) => {
        Category.findOne({_id: req.params.id})
            .then(cat => {
                cat.name = req.body.name;
                cat.tasks = req.body.tasks;
                return cat.save();
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
        Category.deleteOne({_id: req.params.id})
                .then(() => res.json({status: true}))
                .catch(() => res.json({status: false}))
        },
}