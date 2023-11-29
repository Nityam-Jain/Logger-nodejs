const express = require('express')
const readApi = require('./Router/read')
const createApi = require('./Router/create')
const deleteApi = require('./Router/delete')
const updateApi = require('./Router/update')
const app = express();
app.use(express.json());
require('dotenv').config();

//calling Api
app.use('/api',readApi)
app.use('/api',createApi)
app.use('/api',deleteApi)
app.use('/api',updateApi)
PORT = process.env.PORT
app.listen(PORT,()=>{
    console.log(`PORT is running on ${PORT}`)
});