const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const authRoutes=require("./routes/authRoutes");
const materialRoutes=require("./routes/materialRoutes");
const documentRoutes = require("./routes/documentRoutes");
const path = require("path");

require("dotenv").config();

const app = express();
//middleware
app.use(cors());
app.use(express.json());
app.use("/uploads", express.static(path.join(__dirname, "uploads")));


//routes
app.use("/api/auth",authRoutes);
app.use("/api/materials",materialRoutes);
app.use("/api/documents", documentRoutes);

//database
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB Connected"))
  .catch(err => console.error(err));


app.get("/", (req, res) => {
  res.send("Student Material Manager API Running");
});
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => 
    console.log(`Server running on port ${PORT}`)
);
