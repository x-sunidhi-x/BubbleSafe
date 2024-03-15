//bcrypt, jwt, cookie, otp-generator
const jwt = require("jsonwebtoken")
const bcrypt = require("bcrypt")
const { v4: uuid } = require("uuid")
//const OTPgen=require("otp-generator")
//email otp function
function emailOTP(from, to, subject, text) {
    let mailDetails = {
      from: from,
      to: to,
      subject: subject,
      text: text,
    };
  
    mailTransporter.sendMail(mailDetails, (err, data) => {
      if (err) {
        console.log("Email not sent...Error - user:" + to + " err:" + err);
      } else {
        console.log("Email sent successfully - user:" + to);
      }
    });
  }
  
  const OTPstore = new Map()
//get otp
// const getOTP= async(email)=>{
//      
// }

//verify otp function
  //call getSecretKey function
  //secretkey="voldemort"
const createUserToken = (user) => {
    const accessToken = jwt.sign(
      { email: user.email, token_id: uuid() },
      secretkey
    )
    return accessToken
  }


  
  const validateUserToken = (req, res, next) => {
    try {
      const accessToken = req.cookies?.user
      const validToken = jwt.verify(accessToken, secretkey)
      req.user = validToken
      next()
    } catch (err) {
      return res.json({ message: "User not logged in", error: err, status: 500 })
    }
  }

  
module.exports = { createUserToken, validateUserToken }