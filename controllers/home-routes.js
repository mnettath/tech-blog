const router = require("express").Router();

// http://localhost:3001
router.get("/", async (req, res) => {
  try {
    res.render("homepage");
  } catch (error) {
    console.log(err);
    res.status(500).json(err);
  }
});

// http://localhost:3001/login
router.get("/login", async (req, res) => {
  try {
    res.render("login");
  } catch (error) {
    console.log(err);
    res.status(500).json(err);
  }
});

// http://localhost:3001/signup
router.get("/signup", async (req, res) => {
  try {
    res.render("signup");
  } catch (error) {
    console.log(err);
    res.status(500).json(err);
  }
});

// http://localhost:3001/dashboard
router.get("/dashboard", async (req, res) => {
  try {
    res.render("dashboard");
  } catch (error) {
    console.log(err);
    res.status(500).json(err);
  }
});

module.exports = router;
