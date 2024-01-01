import Users from '../controllers/user';
import Lists from '../controllers/list';
import Tasks from '../controllers/task';

export default(app)=>{
    app.get('/api',(req, res)=> res.status(200).send({
        message: "api created"
    }))

    app.post('/api/signup', Users.userCreate);

    app.get('/api/users', Users.allUser);
    app.post('/api/:userid/createlist', Lists.listCreate);
    app.get('/api/list', Lists.allList);
    app.get('/api/:userid/listbyid', Lists.listByUserId);
    app.put('/api/:listid/listmodify', Lists.modify);
    app.delete('/api/:listid/listdelete', Lists.deleteList);
    app.post('/api/:listid/createtask', Tasks.taskCreate);
    app.get('/api/tasks', Tasks.alltask);
    app.get('/api/:listid/taskbylistid',Tasks.taskByListId);
    app.put('/api/taskmodify', Tasks.modify);
    app.delete('/api/:taskid/deletetask', Tasks.deleteTask)
}