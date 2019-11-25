const Tasks = require('./../controllers/Tasks');
const Categories = require('./../controllers/Categories');
const path = require('path');




module.exports = (app) => {
    app.get('/api/tasks', Tasks.index);
    app.get('/api/tasks/:id', Tasks.Show);
    app.post('/api/tasks', Tasks.Create);
    app.put('/api/tasks/:id', Tasks.Update);
    app.delete('/api/tasks/:id', Tasks.remove);
    app.get('/api/categories', Categories.index);
    app.get('/api/categories/:id', Categories.Show);
    app.post('/api/categories', Categories.Create);
    app.put('/api/categories/:id', Categories.Update);
    app.delete('/api/categories/:id', Categories.remove);
    app.all('*', (req,res,next) => {
        res.sendFile(path.resolve("./public/dist/public/index.html"))
      });
}