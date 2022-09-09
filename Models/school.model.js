import {sequelize} from '../Config/db.sequelize.js'
import {DataTypes, Model} from 'sequelize'

class SchoolModel extends Model {}

SchoolModel.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    name: {
        type: DataTypes.CHAR,
        allowNull: false,
    },
    address: {
        type: DataTypes.CHAR,
        allowNull: false,

    },
    zip: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    city: {
        type: DataTypes.CHAR,
        allowNull: false,
    },
    telefon: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    email: {
        type: DataTypes.CHAR,
        allowNull: false,
    },
    desciption: {
        type: DataTypes.CHAR,
        allowNull: false,
    },
    image: {
        type: DataTypes.CHAR,
        allowNull: true,
    },

},{
    sequelize,
    modelName: 'school',
    freezeTableName: true,
    underscored: true ,
    createdAt: true,
    updatedAt: true
})

export default SchoolModel