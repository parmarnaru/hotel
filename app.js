import './db.js';
import express from 'express';
const app=express();

const port =3000


import bodyParser from 'body-parser';
app.use(bodyParser.json())

//export an dimport
import userRouter from './routes/userrouter.js';
app.use("/person",userRouter);

// import menuitem
import menuRouter from './routes/menurouter.js';
app.use("/menu",menuRouter)
app.listen(port, () => {
  console.log(`Server is running at http://localhost:3000`);
});