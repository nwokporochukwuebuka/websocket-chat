const express = require("express");
const router = express.Router(); 

router.get("/",(req,res)=>{
    res.send("Server for chat messenger is up and running"); 
}); 

module.exports = router; 