const router = require('express').Router();

// http://localhost:3001/api/users/login
router.post("/login", async (req, res) => {
    try {
      res.status(200).json("This action will check to see if the users login credentials are valid!");
    } catch (error) {
      console.log(err);
      res.status(500).json(err);
    }
  });

  // http://localhost:3001/api/users/signup
router.post("/signup", async (req, res) => {
    try {
      res.status(200).json("This action will create a new user!");
    } catch (error) {
      console.log(err);
      res.status(500).json(err);
    }
  });

module.exports = router;