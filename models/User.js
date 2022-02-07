const { Model, DataTypes } = require('sequelize');
const bcrypt = require('bcrypt');
const sequelize = require('../config/connection');

class User extends Model {
    checkPassword(login) {
        return bcrypt.compareSync(login, this.password)
    }
}

User.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        username: {
            type: DataTypes.STRING, 
            allowNull: false
        }, 
        password: {
            type: DataTypes.STRING, 
            allowNull: false, 
            validate: {
                len: [5]
            }
        }
    }, 
    {
    hooks: {
        beforeCreate: async (newUserData) => {
            newUserData.password = await bcrypt.hash(newUserData.password, 3);
            return newUserData
        } 
    },
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'users',
    }
);

module.exports = User;