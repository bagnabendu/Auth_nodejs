const express=require('express')
const route=express.Router();
const controller=require('../controller/usercontroller')

route.get('/',controller.register)
route.post('/register',controller.create_register)
route.get('/login',controller.login)
module.exports=route