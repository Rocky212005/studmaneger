const express = require("express");
const authMiddleware = require("../middleware/authMiddleware");
const upload = require("../middleware/uploadMiddleware"); // ✅ import upload
const {
  uploadMaterial,
  getMaterials,downloadMaterial
} = require("../controllers/materialController"); // ✅ import controller

const router = express.Router();

// Test protected route
router.get("/protected", authMiddleware, (req, res) => {
  res.json({
    message: "you accessed a protected route",
    userId: req.user.id
  });
});

// Get all materials (public)
router.get("/", getMaterials);

//download material
router.get("/download/:id",downloadMaterial);

// Upload material (protected)
router.post(
  "/upload",
  authMiddleware,
  upload.single("pdf"),
  uploadMaterial
);

module.exports = router;
