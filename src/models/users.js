const dbPool = require('../config/database');

const CreateUser = (body)=>{
    SQLQuery = `INSERT INTO users (name, email, address) 
                VALUES ('${body.name}', '${body.email}', '${body.address}')`;

    return dbPool.execute(SQLQuery);
}

const GetAllUsers = ()=>{
    const SQLQuery = 'SELECT * FROM users';

    return dbPool.execute(SQLQuery);
}

const UpdateUser = (body, idUser)=>{
    const SQLQuery = `UPDATE users 
                        SET name='${body.name}', email='${body.email}', address='${body.address}' 
                        WHERE id=${idUser}`;

    return dbPool.execute(SQLQuery);
}

const DeleteUser = (idUser)=>{
    SQLQuery = `DELETE FROM users WHERE id=${idUser}`;
    return dbPool.execute(SQLQuery);
}

module.exports = {
    GetAllUsers,
    CreateUser,
    UpdateUser,
    DeleteUser
}