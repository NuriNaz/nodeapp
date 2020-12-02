const express=require('express');
const app=express();
const bodyParser=require('body-parser')
const db=require('./mongodb/mongodb.js');
app.use(bodyParser.json());
const postsRoute=require('./rot/post.js');

app.use('/posts',postsRoute);

app.get('/',(req,res)=>{
    res.send('we are using node');
});


/*app.get('/posts',(req,res)=>{
    res.send('we are using posts');
});*/



app.listen(3000);
console.log("success")