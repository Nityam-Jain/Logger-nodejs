const express = require('express')
const router = express.Router();
const logger = require('./Loggers/winston')

router.post('/create', async (req, res) => {
  try {
    const userCreated = await user.create({
    name: "Aman",
    age:23,
    occupation: "IT engineer"
    });
    res.status(200).send({ message:userCreated , status:"sucess"});
  } catch (error) {
    logger.info(`(Route:) /read, (File:) read.js, (Error:1) ` + error + new Date());
    return res.status(500).send({ status: "error", message: "Something went wrong, please try again." });
}
});

module.exports = router;