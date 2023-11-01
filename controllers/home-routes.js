const router = require("express").Router();

router.get("/", async (req, res) => {
  try {
    res.status(200).json("This is the home route!");
  } catch (error) {
    console.log(err);
    res.status(500).json(err);
  }
});

module.exports = router;