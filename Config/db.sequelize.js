import {Sequelize} from 'sequelize'
import dotevn from 'dotenv'
dotevn.config()

const sequelize = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASSWORD,
    {
        host: process.env.DB_HOST,
        port: process.env.DB_PORT,
        dialect: "mysql"
    }
)

export {sequelize}