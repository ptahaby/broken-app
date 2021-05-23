const Sequelize = require('sequelize');
var { DATA_BASE, USER_NAME_DB, PASSWORD_DB, PORT_DB } = require('./common/config');

                                //database username   password
const sequelize = new Sequelize(DATA_BASE, USER_NAME_DB, PASSWORD_DB, {
    host: 'localhost',
    dialect: 'postgres',
    port: PORT_DB,
})

sequelize.authenticate().then(
    function success() {
        console.log("Connected to DB");
    },

    function fail(err) {
        console.log(`Error: ${err}`);
    }
)

module.exports = sequelize; // error: export sequelize(3) 