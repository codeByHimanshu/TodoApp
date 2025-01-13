const express = require('express')
const app = express()
const dotenv = require('dotenv')
const {creatTodo} = require("./models/todoSchema")
const {todo} = require('./config/db')
dotenv.config()
app.use(express.json())


app.get('/gettodo',function (req,res) {
    
})

app.post('/craete', function(req,res){
const craetePayload = req.body
const parsepayload = creatTodo.safeParse(craetePayload)
if (! parsepayload.success) {
    res.status(404).json({
        msg:"invali inputs are provided"
    })
    return
}
})

app.put('/update',function(req,res) {
    const craetePayload = req.body
const parsepayload = creatTodo.safeParse(craetePayload)
if (! parsepayload.success) {
    res.status(404).json({
        msg:"invali inputs are provided"
    })
    return
}
})
const port = process.env.PORT
app.listen(port, () => {
    console.log(`server is running on the port ${port}`);
});


