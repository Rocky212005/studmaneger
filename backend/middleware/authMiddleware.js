const jwt = require("jsonwebtoken");

module.exports = (req, res, next) => {
  const authHeader = req.headers.authorization;

  console.log("AUTH HEADER:", authHeader);
  console.log("JWT SECRET:", process.env.JWT_SECRET);

  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return res.status(401).json({ message: "No token provided" });
  }

  try {
    const token = authHeader.split(" ")[1];
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    req.user = decoded;
    next();
  } catch (err) {
    console.error("JWT ERROR:", err.message);
    return res.status(401).json({ message: "invalid token" });
  }
};
