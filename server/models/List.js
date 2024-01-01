'use strict';
module.exports=(sequelize,DataTypes)=>{
    const List=sequelize.define(
        'List',{
            name: DataTypes.STRING,
            userid: DataTypes.INTEGER
        }
    );
    List.associate=function(models){
        List.belongsTo(models.User, {
            foreignKey: 'userid',
            onDelete: 'CASCADE'
        });
        List.hasMany(models.Task,{
            foreignKey: 'listid'
        })
    }
    return List;
    }