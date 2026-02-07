const Material = require("../models/Material");
const path = require("path");
exports.uploadMaterial = async (req, res) => {
  try {
    const { title, subject, description } = req.body;

    if (!req.file) {
      return res.status(400).json({ message: "PDF file required" });
    }

    const material = await Material.create({
      title,
      subject,
      description,
      filePath: req.file.path.replace(/\\/g,"/"),
      uploadedBy: req.user.id
    });

    res.status(201).json({
      message: "Material uploaded successfully ✅",
      material
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
exports.getMaterials = async (req, res) => {
  try {
    const { subject } = req.query;
    let filter = {};
    if (subject) {
      filter.subject = subject;
    }
    const materials = await Material.find(filter).sort({ createdAt: -1 });
    res.json(materials);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};


exports.downloadMaterial = async (req, res) => {
  try {
    const material = await Material.findById(req.params.id);

    if (!material) {
      return res.status(404).json({ message: "Material not found" });
    }

    // increment downloads
    material.downloads += 1;
    await material.save();

    // IMPORTANT: use filePath, not fileUrl
    const absolutePath = path.join(
      __dirname,
      "..",
      material.filePath // e.g. uploads/abc123.pdf
    );

    res.download(absolutePath);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
