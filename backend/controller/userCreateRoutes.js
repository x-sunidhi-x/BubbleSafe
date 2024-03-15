const express = require("express")
const userCreateRoutes=express.Router()
const UserSchema = require("../model/UserSchema")

userCreateRoutes.get("/", (req, res) => {
    UserSchema.find()
      .then(data => {
        res.json(data);
      })
      .catch(err => {
        res.status(500).json({ error: err.message });
      });
  });

  userCreateRoutes.post("/signup", (req, res) => {
    const { name, email, password} = req.body
    UserSchema.create(
      {
        name: name,
        email: email,
        password: password,
      })
      .then(data=>{
          res.json({ message: "Success" })
      })
      .catch(err=>{
        res.json({ error: err, status: 500 })
      })
  });
  
  userCreateRoutes.post("/login", (req, res) => {
    const { email, password } = req.body
    UserSchema.findOne({ email: email }, (err, user) => {
      //check if user exists
      if (err) {
        res.json({ error: "Unable to fetch user", status: 500 })
      } else {
        if (!user) {
          res.json({ error: "User does not exist", status: 500 })
        } else {
          //compare email and password with stored values
          UserSchema.findOne({email:email,password:password},(err,user)=>{
            if (err) {
              res.json({ error: "Unable to fetch user", status: 500 })
            } else {
            if(!user){
              res.json({error:"Invalid login details", status:500})
            }
            else{
              res.json({message:"success"});
            }
          }
          })
        }
      }
    })
  })
  
  module.exports = userCreateRoutes
