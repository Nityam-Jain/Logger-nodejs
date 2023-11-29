const express =require ('express')
const router = express.Router()
const logger = require('./Loggers/winston')

router.get('/read', async(req,res,)=>{
    try{
    let data = userCreated;
       res.status(200).send({status:"success",message:data})
    }
    catch(err){
        logger.info(`(Route:) /read, (File:) read.js, (Error:1) ` + err + new Date());
        return res.status(500).send({ status: "error", message: "Something went wrong, please try again." });
    }
})
module.exports= router;
