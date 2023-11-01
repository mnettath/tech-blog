const router = require("express").Router();

// http://localhost:3001
router.get("/", async (req, res) => {
  try {
    res.status(200).json("This is the home route!");
  } catch (error) {
    console.log(err);
    res.status(500).json(err);
  }
});

// http://localhost:3001/login
router.get("/login", async (req, res) => {
  try {
    res.status(200).json("This will display the login page!");
  } catch (error) {
    console.log(err);
    res.status(500).json(err);
  }
});

// http://localhost:3001/signup
router.get("/signup", async (req, res) => {
  try {
    res.status(200).json("This will display the sign up page!");
  } catch (error) {
    console.log(err);
    res.status(500).json(err);
  }
});

// http://localhost:3001/dashboard
router.get("/dashboard", async (req, res) => {
  try {
    res.status(200).json("This will display the dashboard page!");
  } catch (error) {
    console.log(err);
    res.status(500).json(err);
  }
});

module.exports = router;
