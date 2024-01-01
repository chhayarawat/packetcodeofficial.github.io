import model from '../models';
const {User}=model;

class Users{
    static userCreate(req, res) {
        const {username, password}= req.body
        return User.create({username, password}).then(userData=>res.status(201).send({
            success: true, 
            message: "User Created",
            userData
        }))
    }

    static allUser(req, res){
        return User.findAll().then(users=>res.status(200).send(users))
    }

    static findUserByName(req, res){
        const {username}= req.body
        return User.findOne({
            where: {
                username: username
            }
        }).then(users=>res.status(200).send(users))
    }


}

export default Users;

