require("dotenv").config();
require("./config/database").connect();
const express = require("express");
const axios = require("axios");
const InstagramStrategy = require("passport-instagram").Strategy;
const bodyParser = require("body-parser");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const Campaignanswer = require("./models/CampaignAnswer");
// const twilioClient = require('twilio')(process.env.TWILIO_ACCOUNT_SID, process.env.TWILIO_AUTH_TOKEN, {
//   lazyLoading: true,
// })
// const verifyToken = require("./middleware/auth");
const twilio = require("twilio");
const Answer = require("./models/Answer");
const verifyToken = require("./middleware/auth");
const User = require("./models/User");
const OTP = require("./models/OTP");
const InstaUser = require("./models/instaUser");
const PHANTOM_BUSTER_API_KEY = "FogJTU3LFYRXV8KDHYhfn4BW2g9W3YaPFYbOAgB6Rc0";
const PHANTOM_ID = "2667624912907048";
const cors = require("cors");
const cookieParser = require("cookie-parser");

const twilioClient = twilio(
  process.env.TWILIO_ACCOUNT_SID,
  process.env.TWILIO_AUTH_TOKEN
);

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(cookieParser());

// Checking the backend Code 
// app.get('/test',async(req,res) => {
//   try{
//     console.log("heeeeee");
//     const data = {
//       name : "Pooja",
//     };
//     return res.json({data});
//   }catch(error){
//     res.status(500).send("error");
//   }
// })

// Signup endpoint
app.post("/signup", async (req, res,next) => {
  try {
    console.log("Received signup request");
    const { email, phone, password } = req.body;
    console.log(email);

    if (!(email && password && phone)) {
      return res.status(200).json({success : false, message:"All input is required"});
    }
    // 1029mukul38@gmail.com

    const existingUser = await User.findOne({ $or: [{ email }, { phone }] });
    if (existingUser) {
      return res
        .status(200)
        .json({ success: false, message: "Email or phone already registered" });
    }
    const otp = Math.floor(100000 + Math.random() * 900000).toString();
    const salt = await bcrypt.genSalt();
    const hashedPassword = await bcrypt.hash(password, salt);
    const newUser = new User({
      email,
      phone,
      password: hashedPassword,
      otp,
    });

    // console.log("he;;");

    twilioClient.messages
      .create({
        body: `Your OTP is: ${otp}`,
        // from: '+14065055627',
        from: "+15186258419",
        to: `+91 ${phone}`,
      })
      .then((message) => {
        console.log(message.sid);
        res.status(201).json({ message: "User created. OTP sent to phone." });
        // console.log("Pooojaaaa132")
        // res.redirect('/main')
      })
      .catch((err) => {
        console.error(err);
        console.log("hello12");
        res.status(500).json({ error: "Failed to send OTP" });
      });

    // verifyToken(req,res,next);
    req.user = newUser._id;
    await newUser.save();
    // twilioClient.
    // console.log("hdawidnkaw");
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server error" });
  }
  return null;
});

app.post("/verifyPhone", async (req, res) => {
  // const { phone, otp } = req.body;
  // console.log("hello");
  // console.log(req.body);

  // twilioClient.verify.services('VA5812c0edc066492fb40eb84766ad9e49')
  //   .verificationChecks
  //   .create({ to: phone, code })
  //   .then((verificationCheck) => {
  //     if (verificationCheck.status === 'approved') {
  //       // Code is valid, perform further actions (e.g., save user in database)
  //       res.json({ message: 'Phone number verified successfully.' })
  //     } else {
  //       res.status(400).json({ error: 'Invalid verification code.' })
  //     }
  //   })
  //   .catch((error) => {
  //     console.error('Error verifying code:', error)
  //     res.status(500).json({ error: 'Failed to verify the code.' })
  //   })

  const { phoneNum, numOtp } = req.body;

  const phone = Number(phoneNum);
  const otp = Number(numOtp);

  const user = await User.findOne({ phone });
  console.log(user);
  if (!user) {
    // If the user doesn't exist, create a new user
    // Give Error to that User
    res.status(200).json({
      success: false,
      message: "Phone number does not Exist.",
    });
    return;
  }
  console.log(otp);
  console.log(user.otp);
  if (Number(user.otp) !== otp) {
    console.log("Otp is wrong");
    res.status(200).json({
      success: false,
      message: "Otp is Invalid",
    });
    return;
  }
  // console.log("hello2");
  const token = jwt.sign( {...user.email}, process.env.JWT_SECRET_KEY, {
    expiresIn: "2h",
  });
  // console.log(token);
  // res.status(200).cookie("token", token).json({
  //   success: true,
  //   user,
  //   token,
  // });
  // console.log(token);
  res.status(200).cookie("token", token).json({
    success: true,
    message : "Otp is Verified",
    user,
    token,
  });
});
// const bycryptPass = async function(user){
//   return await bcrypt.compare(email, user.password);
// }

// login endpoint


app.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    console.log(req.body);
    if (!(email && password)) {
      console.log("i/o are req");
      return res
        .status(200)
        .json({ success: false, error: "Provide Email and Password" });
    }

    const user = await User.findOne({ email: email });
    // console.log(user);
    if(!user){
      console.log("user is not found");
       return res
         .status(200)
         .json({ success: false, error: "User is Not Found" });
    }
    

    // console.log(user);
    // const isPassword = await bycryptPass()
    // console.log(await bcrypt.compare(password, user.password));
    if (
      !(await bcrypt.compare(password, user.password))
    ) {
      console.log("password is IC");
      // throw new Error("Password is  Incorrect")
      return res.status(200).json({success : false,error : "Password is Incorrect"});
    }

    const token = jwt.sign({ email }, process.env.JWT_SECRET_KEY, {
      expiresIn: "2h",
    });

    res.status(200).cookie("token", token).json({
      success: true,
      user,
      token,
    });
  } catch (err) {
    console.log(err);
  }
  return null;
});
// login with phone
app.post("/login/phone", async (req, res) => {
  try {
    const { phoneNumber } = req.body;
    const phone = phoneNumber;

    // Check if the user exists in the database
    let user = await User.findOne({ phone });

    if (!user) {
      // If the user doesn't exist, create a new user
      // Give Error to that User
      res.status(200).json({
        success : false,
        message :"Phone number does not Exist."
      })
      return;
    }
    // const otp = Math.floor(1000 + Math.random() * 9000).toString();
    const otp = Math.floor(100000 + Math.random() * 900000).toString();
    user.otp = otp;
    await user.save();

    // Send OTP to the user's phone number
     twilioClient.messages
       .create({
         body: `Your OTP is: ${otp}`,
         // from: '+14065055627',
         from: "+15186258419",
         to: `+91 ${phone}`,
       })
       .then((message) => {
         console.log(message.sid);
        //  res.status(201).json({ message: "User created. OTP sent to phone." });
         // console.log("Pooojaaaa132")
         // res.redirect('/main')
       })
       .catch((err) => {
         console.error(err);
         console.log("hello12");
         res.status(500).json({ success : false,error: "Failed to send OTP" });
       });

    // twilioClient.messages.create({
    //   body: `Your OTP is: ${otp}`,
    //   from: "+14065055627",
    //   to: phone,
    // });

    res.status(200).json({success: true, message: "OTP sent successfully" });
  } catch (error) {
    console.error("Error during login:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});
// forgot-password endpoint
app.post("/forgotPassword", async(req, res) => {
  try{
  let { phone } = req.body;

  // const phoneNum = 

  const otp = Math.floor(100000 + Math.random() * 900000);


  // console.log(otp);70

    const user = await User.findOne({ phone });
    if (!user) {
      res.status(200).json({
        success: false,
        message: "Phone number does not Exist.",
      });
      return;
    }

    twilioClient.messages
      .create({
        body: `Your OTP is: ${otp}`,
        // from: '+14065055627',
        from: "+15186258419",
        to: `+91 ${Number(phone)}`,
      })
      .then((message) => {
        console.log(message.sid);
        res.status(201).json({ message: "User created. OTP sent to phone." });
        // console.log("Pooojaaaa132")
        // res.redirect('/main').
      })
      .catch((err) => {
        // console.error(err + "dakwdhukawkd");
        // res.status(200).json({ success : false, error: "Failed to send OTP" });
      });

      user.otp = String(otp);

      await user.save();
      
     res.status(200).json({ success : true, message: "OTP sent to phone." });

  }catch(error){
    console.error("Error retrieving OTP from database:", error);
    res.status(500).json({ success: false, message: "Failed to verify OTP" });
  }

});
  app.post("/createPassword",async(req,res) => {

    try {
      
          const {phone,password} = req.body;  
      
          const user = await User.findOne({phone})

          if (!user) {
    // If the user doesn't exist, create a new user
    // Give Error to that User
    res.status(200).json({
      success: false,
      message: "Phone number does not Exist.",
    });
    return;
  }

          const salt = await bcrypt.genSalt();
          const hashedPassword = await bcrypt.hash(password, salt);
      
          user.password = hashedPassword;
          
          await user.save();

          res.status(200).json({
            success : true,
            message : "User password is Changed Successfully"
          })
          
    } catch (error) {
      res.status(400).json({
        success :false,
        message : "Cant Able to change the Password"
      })
      
    }


  });



  // OTP.create({ phone, otp })
  //   .then(() => {
  //     // Send the OTP via SMS using Twilio
  //     twilioClient.messages
  //       .create({
  //         body: `Your OTP for password reset: ${otp}`,
  //         from: +14065055627,
  //         to: phone,
  //       })
  //       .then(() => {
  //         res.json({ success: true, message: "OTP sent successfully" });
  //       })
  //       .catch((error) => {
  //         console.error("Error sending SMS:", error);
  //         res
  //           .status(500)
  //           .json({ success: false, message: "Failed to send OTP" });
  //       });
  //   })
  //   .catch((error) => {
  //     console.error("Failed to store OTP in database:", error);
  //     res.status(500).json({ success: false, message: "Failed to store OTP" });
  //   });


// verify-otp
app.post("/verify-otp", (req, res) => {
  const { phone, otp } = req.body;

  // Retrieve the stored OTP for the given phoneNumber from the database
  OTP.findOne({ phone })
    .then((storedOTP) => {
      if (storedOTP && storedOTP.otp === otp) {
        res.json({ success: true, message: "OTP verified successfully" });
      } else {
        res.status(401).json({ success: false, message: "Invalid OTP" });
      }
    })
    .catch((error) => {
      console.error("Error retrieving OTP from database:", error);
      res.status(500).json({ success: false, message: "Failed to verify OTP" });
    });
});

// //answer of brand details
// app.post("/answers", async (req, res) => {
//   try {
//     const { brandName, yourName, contact } = req.body;
//     const newAnswer = new Answer({
//       brandName,
//       yourName,
//       contact,
//     });
//     await newAnswer.save();
//     res.status(201).json({ message: "Answer saved successfully" });
//   } catch (error) {
//     console.log("error", error);
//     res.status(500).json({ error: "Failed to save answer" });
//   }
// });

// //answers of brand-details1
// app.post("/answers1", async (req, res) => {
//   try {
//     const { shortDescription, userEmail, brandUSPs } = req.body;
//     const newAnswer = new Answer({
//       shortDescription,
//       userEmail,
//       brandUSPs,
//     });
//     await newAnswer.save();
//     res.status(201).json({ message: "Answer saved successfully" });
//   } catch (error) {
//     console.log("error", error);
//     res.status(500).json({ error: "Failed to save answer" });
//   }
// });

// //answers of brand-details2
// app.post("/answers2", async (req, res) => {
//   try {
//     const { shortDescription, brandUSPs } = req.body;
//     console.log(req.body);

//     // Assuming you have a MongoDB model called "Answer"
//     const newAnswer = new Answer({
//       shortDescription,
//       brandUSPs,
//     });

//     await newAnswer.save();
//     res.status(201).json({ message: "Answer saved successfully" });
//   } catch (error) {
//     console.log("error", error);
//     res.status(500).json({ error: "Failed to save answer" });
//   }
// });

// //campaign-form answers

// app.post("/answers", async (req, res) => {
//   try {
//     const { answer } = req.body;
//     const newAnswer = new Answer({ answer });
//     await newAnswer.save();
//     res.status(201).json({ message: "Answer saved successfully" });
//   } catch (error) {
//     console.log("error", error);
//     res.status(500).json({ error: "Failed to save answer" });
//   }
// });

app.post("/answers",async(req,res,next) => {
  try{
    // verifyToken(req,res,next);
    const data = req.body;
    // console.log(data);
    // let userAnswer = await Answer.findOne({userId : req.user});
    // if(!userAnswer){
    //   userAnswer = new Answer({userId : req.user});
    // }
    // const newAnswer = new Answer({userId : req.user});
    // console.log(userAnswer);

    const userAnswer = await Answer.create({...data.answer});
    await userAnswer.save();
     res.status(201).json({ message: "Answer saved successfully" });
  }catch(error){
    console.log("error", error);
    res.status(500).json({ error: "Failed to save answer" });
  }
});

app.post("/ans", async(req, res, next) => {
  try {
    // verifyToken(req,res,next);
    console.log("hello");

    const data = req.body;
    // console.log(data);
    // let userAnswer = await Answer.findOne({userId : req.user});
    // if(!userAnswer){
    //   userAnswer = new Answer({userId : req.user});
    // }
    // const newAnswer = new Answer({userId : req.user});
    // console.log(userAnswer);
    console.log(data);

    const CampaignAnswer = await Campaignanswer.create({ ...data.campaignAns });
    await CampaignAnswer.save();
    res.status(201).json({ message: "Answer saved successfully" });
  } catch (error) {
    console.log("error", error);
    res.status(500).json({ error: "Failed to save CampaignAnswer" });
  }
});

app.post("/test1",async(req,res,next) => {
  try{
    
    console.log("hello");
    console.log(req.body);
    res.status(200).json({
      success : "true"
    });
  }catch(error){
    console.log(error);
    res.status(500).json({ error: "Failed to save CampaignAnswer" });
  }
});

app.get("/welcome", verifyToken, (req, res) => {
  res.status(200).send("Welcome");
});
module.exports = app;
