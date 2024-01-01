'use strict';
module.exports=(sequelize,DataTypes)=>{
    const Task=sequelize.define(
        'Task',{
            taskname: DataTypes.STRING,
            discription: DataTypes.STRING,
            state: DataTypes.STRING,
            listid: DataTypes.INTEGER
        }
    );
    Task.associate=function(models){
        Task.belongsTo(models.List, {
            foreignKey: 'listid',
            onDelete: 'CASCAD'
        })
    }
    return Task;
    }