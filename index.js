const express = require('express')
const dotenv = require('dotenv')
dotenv.config()
const cors=require("cors")
const mongoose=require('mongoose')

const staffRoute = require("./routes/staffRoute")



const app = express()
const port=3500
app.use(express.json())
app.use(cors())



app.get('/', function (req, res) {
  res.send('Tamizh Company Staff list  ')
})

app.use("/staff", staffRoute)



mongoose.connect(process.env.mongo_url).then(()=>{console.log("Mongoose is connected")
app.listen(port,()=>console.log("server started on the port:",port))
}).catch((error)=>{
    console.log("Error",error)
})