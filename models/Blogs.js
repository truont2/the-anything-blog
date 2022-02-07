const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Blogs extends Model {};

Blogs.init(
    {
        id: {
            type: DataTypes.INTEGER, 
            allowNull: false, 
            primaryKey: true, 
            autoIncrement: true
        }, 
        name: {
            type: DataTypes.STRING, 
            allowNull: false
        }, 
        content: {
            type: DataTypes.STRING, 
            allowNull: false
        }
    }, 
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'blogs',
    }
    
); 

module.exports = Blogs;