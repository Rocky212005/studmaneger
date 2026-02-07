const User = require("../models/User");

exports.uploadAvatar = async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ message: "Image required" });
    }

    const user = await User.findById(req.user.id);

    user.avatar = req.file.path.replace(/\\/g, "/");
    await user.save();

    res.json({
      message: "Profile photo updated",
      avatar: user.avatar,
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
