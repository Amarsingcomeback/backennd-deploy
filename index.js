require('dotenv').config()

const express = require('express')
const app = express()
const port = 3000

app.get('/', function (req, res) {
  res.send('Hello World')
})

app.get('/twiter',function(req,res){
 res.send("amar singh")
})
app.get('/amar',(req,res)=>{
    res.send("<h1>Wellcome amar sing</h1>")
})
app.listen(process.env.PORT,() =>{
    console.log(`Example app listening on port ${port}`);
})