/* Database connection using sequelize */

const Sequelize= require("sequelize")
const sequelize = new Sequelize('sosdb2', 'root', '', {
  host: 'localhost',
  dialect:'mysql',
  define: {
    timestamps: false
  }
});

module.exports=sequelize
global.sequelize=sequelize
