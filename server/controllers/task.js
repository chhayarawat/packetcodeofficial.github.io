import model from '../models';
const {Task}=model;

class Tasks{
    static taskCreate(req, res) {
        const {taskname,discription,state}= req.body
        const {listid}= req.params
        return Task.create({taskname,discription,state, listid}).then(taskData=>res.status(201).send({
            success: true, 
            message: "Task Created",
            taskData
        }))
    }

    static alltask(req, res){
       
        return Task.findAll().then(tasks=>res.status(200).send(tasks))

    }

    static taskByListId(req, res){
        const {listid}=req.params
        return Task.findAll({
            where: {
                listid: listid
            }
        }).then(tasks=>res.status(200).send(tasks))
    }

    static modify(req, res){
        const {taskname, discription, state}=req.body
        return Task.findByPk(req.params.taskid).then((task)=>task.update({
            taskname: taskname || task.taskname,
            discription: discription || task.discription,
            state: state || task.state
        })).then((updateTask)=>{
            res.status(200).send({
                message: "Task Modified",
                data: {
                    taskname: taskname || updateTask.taskname,
                    discription: discription || updateTask.discription,
                    state: state || updateTask.state

                }
            }).catch(error=>res.status(400).send(error))
        }).catch(error=>res.status(400).send(error))
    }

    static deleteTask(req, res){
        return Task.findByPk(req.params.taskid).then(tasks=>{
            if(!tasks){
                return res.status(400).send({
                    message: "task Not Found"
                })
            }
            return tasks.destroy().then(()=>res.status(200).send({
                message: "Deleted"
            })).catch(error=>res.status(400).send(error))

        }).catch(error=>res.status(400).send(error))
    }


}

export default Tasks;