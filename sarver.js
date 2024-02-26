import fs from 'fs'
import os from 'os';

var user =os.userInfo();
console.log(user)
console.log(user.username);

fs.appendFile("greeting.txt","hi " + user.username+'\n',()=>{
console.log("file is created")
})
import './db.js';
import express from 'express';
import  person from './model/shema.js';
const port =3000
const app=express();

import bodyParser from 'body-parser';
app.use(bodyParser.json())

app.listen(port, () => {
  console.log(`Server is running at http://localhost:3000`);
});



// function add(a,b){
//     return a+b;
// }

// var add=function(a,b){return a+b}


//var add=(a,b)=>{return a+b}

// var add=(a,b) => a+b;
// var res=add(16,9)
// console.log(res);

// callback function
// function callback(){
//     console.log(`callback function is called`);
// }

// const add =(a,b,callback)=>{
//     var res=a+b;
//     console.log(`ressult`+res);
//     callback();
//}

// add(3,4,function(){
//     console.log(`callback is run`)
// })


// add(3,4,()=>console.log(`completed`))
