const express = require('express');
const app = express();
const path = require("path");

app.use(express.urlencoded({ extended: true}));
app.use(express.json());
app.set('view engine', 'ejs');
app.set('views',path.join(__dirname,"/views"))

const comments = [
    {
       username : 'Todd',
       comment : "Lol that is the funniest thing i've ever heard" 
    },
    {
        username : "Lalu",
        comment : 'lolololol' 
     },
     {
        username : 'munna',
        comment : 'i dont know anything about that <_<' 
     },
     {
        username : 'munni',
        comment : 'thats not even funny ' 
     },
     {
        username : 'Jay_Jay',
        comment : 'RIP sence of humour' 
     },
     {
        username : 'hlka-halka-swag1234',
        comment : 'BINOD' 
     },
     {
        username : 'Nakli-Chandler',
        comment : 'I am GOD of Sarcasm' 
     }
];

app.get('/comments' ,(req,res) => {
    res.render("comments/index", { comments })

})

app.get('/comments/new',(req,res) =>
{
    res.render('comments/new')
})

app.post('/comments',(req,res)=>{
    console.log(req.body);
    const { username, comment } = req.body;
    comments.push({ username, comment });
    res.send('it worked')
})


app.listen(3000,()=>{
    console.log("listening on port 3000");
})