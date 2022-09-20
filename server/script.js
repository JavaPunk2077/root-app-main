const express = require('express');
const app = express();
const { v4: uuidv4 } = require('uuid');
var cors = require('cors')
const {mongoose} = require('mongoose')
const {MongoClient} = require('mongodb')
const Item = require('./models/item.model')
require('dotenv').config()

mongoose.connect('Set your mongodb command palette')

app.use(cors());

app.use(express.json({limit: "100mb",extended:true}));

app.listen(4001);

console.log('Server is online.');

const url= "https://images.pexels.com/photos/1389429/pexels-photo-1389429.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"

app.post('/creater/item', async (req, res) => {
    console.log(req.body.typeitem)
        if(req.body.title === '' || req.body.base === null || req.body.type === ''){
            res.json({ status: 'Fail', Fail: "You didn't input in label or etc."})
        }
        else{
            if(req.body.typeitem==="Audio"){
                try{    
                    Item.create({
                        itemid: uuidv4(),
                        title: req.body.title,
                        image: url,
                        base64: req.body.base,
                        author: req.body.email,
                        type: req.body.typeitem,
                    })
                    res.json({ status: 'Sucsess'})
                }
                catch(error){       
                    res.json({ status: 'Fail', error: error})}
            }
            else{
                try{    
                    Item.create({
                        itemid: uuidv4(),
                        title: req.body.title,
                        image: req.body.base,
                        base64: req.body.base,
                        author: req.body.email,
                        type: req.body.typeitem,
                    })
                    res.json({ status: 'Sucsess'})
                }
                catch(error){       
                    res.json({ status: 'Fail', error: error})}
            }
        }
})

app.post('/', async (req, res) => {
    Test = req.body.email
})

app.get('/creater/image', async (req, res) => {
    console.log('get image')
    try {
        const item =await Item.find({type: "Image"})
        res.status(200).json(item);
    } catch (error) {
        res.status(404).json({ message: error.message });

    }
})

app.get('/creater/audio', async (req, res) => {
    console.log('get audio')
    try {
        const item =await Item.find({type: "Audio"})
        res.status(200).json(item);
    } catch (error) {
        res.status(404).json({ message: error.message });

    }
})

app.get('/creater/video', async (req, res) => {
    console.log('get video')
    try {
        const item =await Item.find({type: "Video"})
        res.status(200).json(item);
    } catch (error) {
        res.status(404).json({ message: error.message });

    }
})

app.post('/creater/post/image', async (req, res) => {
    console.log('get image')
    console.log(req.body.email)
    console.log(req.body.type)
    try {
        const item =await Item.find({author: req.body.email, type: req.body.type})
        res.status(200).json(item);
    } catch (error) {
        res.status(404).json({ message: error.message });

    }
})

app.post('/creater/post/audio', async (req, res) => {
    console.log('get audio')
    console.log(req.body.email)
    console.log(req.body.type)
    try {
        const item =await Item.find({author: req.body.email, type: req.body.type})
        res.status(200).json(item);
    } catch (error) {
        res.status(404).json({ message: error.message });

    }
})

app.post('/creater/post/video', async (req, res) => {
    console.log('get video')
    console.log(req.body.email)
    console.log(req.body.type)
    try {
        const item =await Item.find({author: req.body.email, type: req.body.type})
        res.status(200).json(item);
    } catch (error) {
        res.status(404).json({ message: error.message });

    }
})

app.post('/creater/post/item', async (req, res) => {
    console.log('get item')
    console.log(req.body.email)
    try {
        const item =await Item.find({author: req.body.email})
        res.status(200).json(item);
    } catch (error) {
        res.status(404).json({ message: error.message });

    }
})

app.post('/creater/delete', async (req, res) => {
    console.log(req.body.id)
    try {
        const query = { itemid: req.body.id };
        const result = await Item.deleteOne(query);
        if (result.deletedCount === 1) {
          console.log("Successfully deleted one document.");
          res.status(200).json({status: "DELETE"});
        } else {
          console.log("No documents matched the query. Deleted 0 documents.");
        }
      }catch(error){
        console.log(error)
      }
})