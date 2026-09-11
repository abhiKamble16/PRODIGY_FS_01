const express = require("express");

const { registerUser, loginUser } = require("../controllers/authController");

const protect = require("../middleware/authMiddleware");

const router = express.Router();

router.post("/register", registerUser);
router.post("/login", loginUser);

router.get("/profile", protect, async (req, res) => {
  res.json({
    message: "You can access this protected route",
    userId: req.userId,
  });
});

module.exports = router;
