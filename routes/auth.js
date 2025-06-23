const router = require("express").Router();
const User = require("../models/User");

const bcrypt = require("bcrypt");





//REGISTER
router.post("/register", async (req, res) => {
  try {
    const salt = await bcrypt.genSalt(10);
    const hashedPass = await bcrypt.hash(req.body.password, salt);
    const newUser = new User({
      username: req.body.username,
      email: req.body.email,
      password: hashedPass,
    });

    const user = await newUser.save();
    res.status(200).json(user);
  } catch (err) {
    res.status(500).json(err);
  }
});

//LOGIN


router.post("/login", async (req, res) => {
  try {
    // Find the user by username
    const user = await User.findOne({ username: req.body.username });



    // Check if the user exists
    if (!user) {
      return res.status(400).json("Wrong credentials!");
    }

    // Compare the password using bcrypt
    const validated = await bcrypt.compare(req.body.password, user.password);

    // If the password is incorrect, return an error
    if (!validated) {
      return res.status(400).json("Wrong credentials!");
    }

    // If authentication is successful, send user data without the password field
    const { password, ...userWithoutPassword } = user._doc;
    
    res.status(200).json(userWithoutPassword);
  } catch (err) {
    res.status(500).json(err);
  }
});


module.exports = router;
