const express = require('express')
const router = express.Router();
const logger = require('./Loggers/winston')

router.put('/update:id',async(req,res)=>{
    try{
    const userID = req.params.Id;
    const updateUser = await user.findByIdAndUpdate( userID,
         {
            name: "Vinay",
            age:24,
            occupation: "Mechanical engineer"
          },
         { new: true } // Return the updated document
         );
         res.status(200).send({ status:"sucesfully updated", message:updateUser });
        }catch(error){
            logger.info(`(Route:) /read, (File:) read.js, (Error:1) ` + error + new Date());
            return res.status(500).send({ status: "error", message: "Something went wrong, please try again." });
        }
})
module.exports=router;