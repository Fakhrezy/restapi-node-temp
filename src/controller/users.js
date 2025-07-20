const UsersModel = require('../models/users.js');

const CreateUser = (req, res)=>{
    console.log(req.body);
    res.json({
        message: 'Create user success',
        data: req.body
    })
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

const UpdateUser = (req, res)=>{
    const {idUser} = req.params;
    console.log('idUser : ', idUser);
    res.json({
        message: 'UPDATE users success',
        data: req.body,
    })
}

const DeleteUser = (req, res)=>{
    const {idUser} = req.params; 
    res.json({
        message:'DELETE users success',
        data:{
            id: idUser,
            name: 'jajang suyana',
            email: 'suyajanang@gmail.com',
            address:'tasikmalaya'
        }
    })
}

module.exports = {
    GetAllUsers,
    CreateUser,
    UpdateUser,
    DeleteUser
}