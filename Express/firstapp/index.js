const express = require("express");
const app = express()
// console.dir(app) 

// app.use((req,res) => {
//     console.log("WE GOT A NEW REQUEST!!")
//     res.send("we got your request")
// })

app.get('/cats', (req,res) => {
    console.log("CAT REQUEST!!")
    res.send("<h1> Meow <\h1>")
})

app.get('/', (req,res) => {
    console.log("REQUEST!!")
    res.send("<h1> Home Page <\h1>")
})

app.get('/dogs', (req,res) => {
    console.log("Dog REQUEST!!")
    res.send("<h1> WOOF <\h1>")
})

app.listen(3000, () => {
    console.log("Listening on Port 3000");
})  