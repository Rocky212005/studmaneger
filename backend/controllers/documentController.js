const Document=require("../models/Document")
const path=require("path")

exports.uploadDocument=async(req,res)=>{
    try{
        const {title,docType}=req.body;

        if(!req.file){
            return res.status(400).json({message:"File is required"})

        }
         const document = await Document.create({
              title,
              docType,
              filePath: req.file.path.replace(/\\/g, "/"),
             uploadedBy: req.user.id,
        });
        res.status(201).json({
            message:"Document upload successfully",
            document,
        });

    }catch(err){
        res.status(500).json({error:err.message})

    }
}
exports.getMyDocuments = async (req, res) => {
  try {
    const documents = await Document.find({
      uploadedBy: req.user.id,
    }).sort({ createdAt: -1 });

    res.json(documents);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Download document
exports.downloadDocument = async (req, res) => {
  try {
    const document = await Document.findOne({
      _id: req.params.id,
      uploadedBy: req.user.id,
    });

    if (!document) {
      return res.status(404).json({ message: "Document not found" });
    }

    const absolutePath = path.join(
      __dirname,
      "..",
      document.filePath
    );

    res.download(absolutePath);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
