import model from '../models';
const {List}=model;

class Lists{
    static listCreate(req, res) {
        const {name}= req.body
        const {userid}= req.params
        return List.create({name, userid}).then(listData=>res.status(201).send({
            success: true, 
            message: "List Created",
            listData
        }))
    }

    static allList(req, res){
        return List.findAll().then(lists=>res.status(200).send(lists))


    }

    static listByUserId(req, res){
        const {userid}=req.params
        return List.findAll({
            where: {
                userid: userid
            }
        }).then(lists=>res.status(200).send(lists))
    }

    static modify(req, res){
        const {name}=req.body
        return List.findByPk(req.params.listid).then((list)=>list.update({
            name: name || list.name
        })).then((updateList)=>{
            res.status(200).send({
                message: "List Modified",
                data: {name: name || updateList.name}
            }).catch(error=>res.status(400).send(error))
        }).catch(error=>res.status(400).send(error))
    }

    static deleteList(req, res){
        return List.findByPk(req.params.listid).then(lists=>{
            if(!lists){
                return res.status(400).send({
                    message: "List Not Found"
                })
            }
            return lists.destroy().then(()=>res.status(200).send({
                message: "Deleted"
            })).catch(error=>res.status(400).send(error))

        }).catch(error=>res.status(400).send(error))
    }


}

export default Lists;