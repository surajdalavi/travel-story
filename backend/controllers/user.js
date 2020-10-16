const express = require('express');
const router = express.Router();

const User = require('../models/user');

router.post('/register',(req,res)=>{
    // get info from client side 
    const user = new User({
        name: req.body.name,
        email:req.body.email,   
        password: req.body.password,
        username:req.body.username
    });
    //store it in mongodb
    user.save()
    .then((result) => {
        res.status(200).json({
          message: "User created!",
          result: result,
        });
      })
      .catch((err) => {
        res.status(500).json({
          message: "invalid authentication credentials"
        });
      });
})
module.exports = router;