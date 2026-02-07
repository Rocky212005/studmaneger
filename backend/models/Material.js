const mongoose = require("mongoose");

const materialSchema = new mongoose.Schema({
  title: String,
  subject: String,
  description: String,
  filePath: String,
  uploadedBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User"
  },
  downloads: {
    type: Number,
    default: 0
  }
}, { timestamps: true });

module.exports = mongoose.model("Material", materialSchema);
