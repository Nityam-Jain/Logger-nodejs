const express = require('express')
const router = express.Router();
const logger = require('./Loggers/winston')

router.delete('/delete:id', async (req, res) => {
    try {
        let userID =  req.params.id
      const userRemoved = await user.findOneAndDelete({_id:userID});
      res.status(200).send({status:"sucesfully removed" , message:userRemoved });
    } catch (error) {
      logger.info(`(Route:) /read, (File:) read.js, (Error:1) ` + error + new Date());
      return res.status(500).send({ status: "error", message: "Something went wrong, please try again." });
  }
  });
  module.exports=router