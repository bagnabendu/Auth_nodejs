const user=require('../model/user')
const bcrypt=require('bcryptjs')

const register=(req,res)=>{
    res.render('register',{

    })
}
const create_register=(req,res)=>{
    user({
        userName:req.body.userName,
        email:req.body. email,
        password:bcrypt.hashSync(req.body.password,bcrypt.genSaltSync(10))
    }).save((err,user)=>{
        if(!err){
            console.log("user added");
            res.redirect('/login')
        }else{
         console.log("user data not added");
        }
    })
}
const login=(req,res)=>{
    res.render('login',{
     
    })
}
module.exports={
    register,create_register,login
}