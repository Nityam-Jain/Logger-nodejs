const express =require ('express')
const logger = require('./logger')
const app = express()
require('dotenv').config();
app.get('/read', async(req,res,)=>{
    try{
    let data = "Testing Logger";
    res.send(data)
    }
    catch(err){
        logger.error("Error Occured",err)
        res.status(500).send('Internal Server Error');
    }
})
PORT = process.env.PORT
app.listen(PORT,()=>{
    console.log(`PORT is running on ${PORT}`)
})