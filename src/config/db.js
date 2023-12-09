import { Sequelize } from "sequelize";
import UserModel from "../models/user.js";

const sequelize = new Sequelize(
  process.env.MYSQLDB_DATABASE,
  process.env.MYSQLDB_USER,
  process.env.MYSQLDB_ROOT_PASSWORD,
  {
    host: process.env.MYSQLDB_HOST,
    dialect: "mysql",
  }
);

const User = UserModel(sequelize, Sequelize);

sequelize.sync({ force: false }).then(() => {
  console.log("Tablas sincronizadas");
});

export default User;
