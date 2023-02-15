const express=require('express')
const ejs=require('ejs')
const mongoose=require('mongoose')
const flash=require('connect-flash')
const session=require('express-session')
const jwt=require('jsonwebtoken')
const cookie_parser=require('cookie-parser')
const bcryptjs=require('bcryptjs')
const app=express()


app.use(session({
    cookie: { maxAge: 60000 },
    secret: 'nabendu',
    resave: false,
    saveUninitialized: false
}))
app.use(flash());
app.use(cookie_parser())
app.use(express.urlencoded({
    extended: true
}));
app.use(express.urlencoded({extended:true}))

app.set('view engine','ejs')
app.set('views','views')

const webroute=require('./route/userroute')
app.use(webroute)
// port = process.env.PORT || 9008;
const port=4300;

const dbDriver = "mongodb+srv://nabendumongodb:2h6KGtyXamQHxF6J@cluster0.k1maidj.mongodb.net/user";
mongoose.connect(dbDriver,{useNewUrlParser:true,useUnifiedTopology:true})
.then(result=>{
    app.listen(port,(req,res)=>{
        console.log("DB connected....");
        console.log(`server is running http://localhost:${port}`);
    })
}).catch(err=>{
    console.log(err);
})

