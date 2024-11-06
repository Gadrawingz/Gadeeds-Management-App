const express = require('express')

const app = express()
const port = 3005


app.get('/', (req, res)=> {
    res.send("Hello")
})

app.listen(port, ()=> {
    console.log('...Under the port'+port+'!')
})