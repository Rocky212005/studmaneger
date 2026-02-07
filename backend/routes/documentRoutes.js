const express = require("express");
const authMiddleware = require("../middleware/authMiddleware");
const documentUpload = require("../middleware/documentMiddleware");


const {
  uploadDocument,
  getMyDocuments,
  downloadDocument,
} = require("../controllers/documentController");

const router = express.Router();


// get document 
router.get("/",authMiddleware,getMyDocuments);

//upload doc

router.post("/upload",authMiddleware,documentUpload.single("document"),uploadDocument);

//download doc

router.get("/download/:id",authMiddleware,downloadDocument);

module.exports=router;