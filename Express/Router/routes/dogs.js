const express = require("express");
const router = express.Router();

router.use((req, res, next) => {
  router.use((req, res, next) => {
    if (req.query.isAdmin) {
      return next();
    }
    return res.send("SORRY NOT AN ADMIN!");
  });
});

router.get("/", (req, res) => {
  res.send("All Dogs");
});

router.post("/", (req, res) => {
  res.send("Creating Dog");
});

router.get("/:id", (req, res) => {
  res.send("Viewing One Dog");
});

router.get("/:id/edit", (req, res) => {
  res.send("Editing one Dog");
});

module.exports = router;
