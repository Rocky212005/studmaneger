const express=require("express")
const authMiddleware=require("../middleware/authMiddleware")
const avatarUpload=require("../middleware/avatarUpload")
const {uploadAvatar}=require("../controllers/userController")

const router=express.Router();

router.post(
    "/avatar",
    authMiddleware,
    avatarUpload.single("avatar"),
    uploadAvatar
);

module.exports=router;

