const UsersModel = require('../models/users.js');

const CreateUser = async (req, res)=>{
    
    if (!body.name || !body.email || !body.address) {
        return res.status(400).json({
            message: 'data tidak lengkap',
            data: null
        });
    }

    const {body} = req;

    try {
        await UsersModel.CreateUser(body);
        res.status(201).json({
            message: 'Create user success',
            data: body
        })
    } catch (error) {
        res.status(500).json({
            message: 'Server error',
            serverMessage: error,
        })
    }

}

const GetAllUsers = async (req, res)=>{
    try{
        const [data] = await UsersModel.GetAllUsers();
    
        res.json({
            message: 'GET all users success',
            data: data
        })

    }catch(error){
        res.status(500).json({
            message: 'Server error',
            serverMessage: error,
        })
    }

}

const UpdateUser = async (req, res)=>{
    const {idUser} = req.params;
    const {body} = req;

    try {
        await UsersModel.UpdateUser(body, idUser);
        res.json({
            message: 'UPDATE users success',
            data: {
                id: idUser,
                ...body
            },
        })
    } catch (error) {
        res.status(500).json({
            message: 'Server error',
            serverMessage: error,
        })
    }
}

const DeleteUser = async(req, res)=>{
    const {idUser} = req.params; 
    try {
        await UsersModel.DeleteUser(idUser);
        res.json({
            message:'DELETE users success',
            data: null
        })
    } catch (error) {
        res.status(500).json({
            message: 'Server error',
            serverMessage: error,
        })
    }
}

module.exports = {
    GetAllUsers,
    CreateUser,
    UpdateUser,
    DeleteUser
}