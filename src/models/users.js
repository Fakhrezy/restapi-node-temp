const dbPool = require('../config/database');

const GetAllUsers = ()=>{
    const SQLQuery = 'SELECT * FROM users';

    return dbPool.execute(SQLQuery);
}

module.exports = {
    GetAllUsers,
}