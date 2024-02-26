import  express from "express";
const router=express.Router();
import  UserSchemaModal from '../model/shema.js';


router.post("/",async(req,res)=>{
    try{
      const userdetails=req.body //aswing the request body catni the persion data
      // cret a new person document usin the mongoos model
      const newpersan= new UserSchemaModal(userdetails);
      const response=await newpersan.save();
      console.log("succfully saved data in the database...");
      res.status(200).json(response)
  }
    catch(err){
       console.log(err);
       res.status(500).json({err:"internal error"})
    }
  })
  // getmethod in data find
  router.get("/",async(req,res)=>{
    try{
          const userdetails= await UserSchemaModal.find();
          console.log("succfully saved data in the database...");
      res.status(200).json(userdetails);
    }
    catch(err){
      console.log(err);
       res.status(500).json({err:"internal error"})
      }
  })
  
  export default router;