const express = require('express');
const app = express();
const path = require("path");
const { v4: uuid } = require('uuid');
uuid();

app.use(express.urlencoded({ extended: true}));
app.use(express.json());
app.set('view engine', 'ejs');
app.set('views',path.join(__dirname,"/views"))

const comments = [
    {
       id:uuid() ,
       username : 'Todd',
       comment : "Lol that is the funniest thing i've ever heard" 
    },
    { id: uuid(),
        username : "Lalu",
        comment : 'lolololol' 
     },
     { id: uuid(),
        username : 'munna',
        comment : 'i dont know anything about that <_<' 
     },
     { id: uuid(),
        username : 'munni',
        comment : 'thats not even funny ' 
     },
     { id: uuid(),
        username : 'Jay_Jay',
        comment : 'RIP sence of humour' 
     },
     { id: uuid(),
        username : 'hlka-halka-swag1234',
        comment : 'BINOD' 
     },
     { id: uuid(),
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

app.get('/comments/:id',(req,res)=>{
   const {id} =req.params;
   const comment = comments.find(c => c.id === id);
   res.render('comments/show',{ comment })
})

app.post('/comments',(req,res)=>{
    console.log(req.body);
    const { username, comment } = req.body;
    comments.push({ username, comment, id:uuid() });
    res.redirect('/comments')
})

app.patch('/comments/:id',(req,res)=>{
   // res.send('updating')
   const {id} =req.params;
   const newCommentText = req.body.comment;
   const foundComment = comments.find(c => c.id === id);
   foundComment.comment = newCommentText;
   res.redirect('/comments');
})


app.listen(3000,()=>{
    console.log("listening on port 3000");
})