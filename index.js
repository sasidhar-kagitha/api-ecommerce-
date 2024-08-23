const express= require("express");

const app = express();
app.use(express.json());
const path = require("path");
const {open}= require("sqlite");

const sqlite3 = require("sqlite3");

const dbpath = path.join(__dirname,"productDb");
let db;

app.get("/",async(req,res)=>{
  const getAllproduct = `select *from product;`;
  const result = await db.all(getAllproduct);
  res.send(result);

});
let initializeDb =async ()=>{
    try{
       db=await open(
       {
        filename:dbpath,
        driver:sqlite3.Database,
       }
       );
       app.listen(8001,()=>{console.log("server running")});
    }
    catch(e)
    {
        console.log(e);
    }


}

initializeDb();
