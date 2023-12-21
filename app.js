const express = require('express');
const { result } = require('lodash');
const mongoose = require('mongoose');
const Blog=require('./modules/blogs');
const blogRoutes=require('./Router/blogRoutes');
const authRoutes =require('./Router/authRoutes');
const cookieParser=require('cookie-parser');
const User=require('./modules/user');
const jwt = require('jsonwebtoken')
const app = express();
const {requireAuth, checkUser}=require('./middleware/authmiddleware');
app.set('view engine','ejs');
// app.listen(8000);
const port=process.env.PORT||5000
app.listen(`${port}`);


app.use(express.static('publik'));
app.use(cookieParser());
app.use(express.urlencoded({extended:true}));

//middlware for storing temporatry data of json form and convert them in JS for our use
app.use(express.json());
 
 //for taking any file from that folderwhich is mentioned in public without path here we are adding the css in header 
 
const dburl="mongodb+srv://Sakshi:aq12wsde3@task-manager.yps1ehg.mongodb.net/?retryWrites=true&w=majority";
mongoose.connect(dburl,{useNewUrlParser:true,useUnifiedTopology:true})
.then((result)=>console.log('connected to db'))
.catch((err)=>console.log(err));

// app.get('/',(req,res)=>{
//     // res.redirect('/blogs');
//     res.render('hhome',{title: 'Home'});
    
// });

app.get('*', checkUser);
app.get('/',requireAuth,(req,res)=>{
    // res.redirect('/blogs');
    res.render('homepage');
});
app.get('/tree',requireAuth,(req,res)=>{
    // res.redirect('/blogs');
    res.render('tree');
});
app.get('/DP',requireAuth,(req,res)=>{
    // res.redirect('/blogs');
    res.render('DP');
});
app.get('/Arrays',requireAuth,(req,res)=>{
    // res.redirect('/blogs');
    res.render('Arrays');
});
app.get('/Backtracking',requireAuth,(req,res)=>{
    // res.redirect('/blogs');
    res.render('BackTracking');
});
app.get('/BitManipulation',requireAuth,(req,res)=>{
    // res.redirect('/blogs');
    res.render('BitManipulation');
});
app.get('/Graphs',requireAuth,(req,res)=>{
    // res.redirect('/blogs');
    res.render('Graphs');
});
app.get('/Greedy',requireAuth,(req,res)=>{
    // res.redirect('/blogs');
    res.render('Greedy');
});
app.get('/Hashing',requireAuth,(req,res)=>{
    // res.redirect('/blogs');
    res.render('Hashing');
});
app.get('/Linkedlist',requireAuth,(req,res)=>{
    // res.redirect('/blogs');
    res.render('Linkedlist');
});
app.get('/TimeComplexity',requireAuth,(req,res)=>{
    // res.redirect('/blogs');
    res.render('TimeComplexity');
});
app.get('/Queue',requireAuth,(req,res)=>{
    // res.redirect('/blogs');
    res.render('Queue');
});
app.get('/Stacks',requireAuth,(req,res)=>{
    // res.redirect('/blogs');
    res.render('Stacks');
});


app.get('/about',requireAuth,(req,res)=>{
    //  res.sendFile('./views/about.html',{root:__dirname});
    res.render('about', {title: 'ABOUT'})
});


app.get('/createBlog',requireAuth,(req,res)=>{
    res.render('createBlog', { title: 'Blog'});
});
app.get('/topics',requireAuth,(req,res)=>{
    res.render('topics');
})
app.get('/homepage',requireAuth,(req,res)=>{
    res.render('homepage');
})
app.get('/programming',requireAuth,(req,res)=>{
    res.render('programming');
})
app.get('/aptitude',requireAuth,(req,res)=>{
    res.render('aptitude');
})
app.get('/hr',requireAuth,(req,res)=>{
    res.render('hr');
})

   app.use(authRoutes);
   app.use('/blogs',blogRoutes);
    //error wala
    // if reaches this line means uper wala koi nhi h desired


// app.use((req,res)=>{
//    // res.sendFile('/views/err.html',{root:__dirname});
//    res.render('404');
// });
