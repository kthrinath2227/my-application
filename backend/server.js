const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const cors = require('cors');

const App = express();

App.use(cors());
App.use(bodyParser.json());
mongoose.connect('mongodb://localhost:27017/mydatabase',{useNewUrlParser:true,useUnifiedTopology:true})
    .then(() => console.log('MongoDb Connected'))
    .catch(err => console.log(err));


const DataSchema = mongoose.Schema({
    input1:String,
    input2:String,
    input3:String,
    input4:String,
    input5:String,
    input6:String,
})
const DataModel = mongoose.model('Data', DataSchema);
App.post('/save',async (req, res) => {
    try {
        const data= new DataModel(req.body);
        await data.save();
        res.json({message:'Data Saved Sucessfully'});
    } catch (error) {
        res.status(500).json({message:'Internal server error'});
    }
});
App.post('/getdata',async (req, res) => {
    try {
        const data= new DataModel(req.body);
        await data.save();
        res.json({message:'Data Saved Sucessfully'});
    } catch (error) {
        res.status(500).json({message:'Internal server error'});
    }
});
const PORT = 5000;
App.listen(PORT,() => console.log(`Server started on Port ${PORT}`));