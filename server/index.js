const express = require('express');
const app = express();
var cors = require('cors')
var jwt = require('jsonwebtoken');
const {mongoose} = require('mongoose')
const { v4: uuidv4 } = require('uuid');
const User = require('./models/user.model')
var base64 = require('base-64');
var base32 = require('base32')
var bcrypt = require('bcryptjs');
require('dotenv').config()

mongoose.connect('Set your mongodb command palette')
app.use(cors());

app.use(express.json({limit: "100mb",extended:true}));

app.listen(4000);

console.log('Server is online.');

app.post('/register', async (req, res) => {
    try{
        const find = await User.findOne({fname: req.body.fname, 
        lname: req.body.lname, email: req.body.email})
        const newPassword = await bcrypt.hash(req.body.password, 10)
        var pwd1  = base32.encode(req.body.fname);
        var pwd2 = base64.encode(req.body.lname);
        var pwd3 = await bcrypt.hash(req.body.email, 10)
        var pwd4 = base32.encode(req.body.type);
        var text = pwd1 + pwd2 + pwd3  + pwd4
        if(find){ res.json({ status: 'SAME', error: 'Same Name'})}
        else{ 
            await User.create({
               userid: uuidv4(),
               fname: req.body.fname,
               lname: req.body.lname,
               email: req.body.email,
               password: newPassword,
               type: req.body.type
           })
           const token = jwt.sign({
            text: text
        }, 'secret123')
           res.json({ status: 'OK', user: {
            token: token, fname: req.body.fname, lname: req.body.lname, email: req.body.email
        }})
        }

    }catch(err){
        res.json({ status: 'ERROR', error: err})
    }
})

app.post('/contributor', async (req, res) => {
    try{
        const find = await User.findOne({fname: req.body.fname, 
        lname: req.body.lname, email: req.body.email})
        const newPassword = await bcrypt.hash(req.body.password, 10)
        var pwd1  = base32.encode(req.body.fname);
        var pwd2 = base64.encode(req.body.lname);
        var pwd3 = await bcrypt.hash(req.body.email, 10)
        var pwd4 = base32.encode(req.body.type);
        var text = pwd1 + pwd2 + pwd3  + pwd4
        if(find){ res.json({ status: 'SAME', error: 'Same Name'})}
        else{ 
            await User.create({
               userid: uuidv4(),
               fname: req.body.fname,
               lname: req.body.lname,
               email: req.body.email,
               password: newPassword,
               type: req.body.type
           })
           const token = jwt.sign({
            text: text
        }, 'secret123')
           res.json({ status: 'OK',user: {
            token: token, fname: req.body.fname, lname: req.body.lname, email: req.body.email
        }})
        }

    }catch(err){
        res.json({ status: 'ERROR', error: err})
    }
})

app.post('/login', async (req, res) => {
        const user = await User.findOne({email: req.body.email})
        const isPasswordValid = await bcrypt.compare(req.body.password, user.password)
        var pwd1  = base32.encode(user.fname );
        var pwd2 = base64.encode(user.lname);
        var pwd3 = await bcrypt.hash(user.email, 10)
        var pwd4 = base32.encode(user.type);
        var text = pwd1 + pwd2 + pwd3 + pwd4
        if(user && isPasswordValid){ 
            const token = jwt.sign({
                text: text
            }, 'secret123')
            return res.json({ status: 'OK', user: {
                token: token, fname: user.fname, lname: user.lname, type:user.type, email: user.email
            }}) 
        }
        else{ return res.json({ status: 'ERROR', user: false}) }
})

