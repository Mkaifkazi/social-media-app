import jwt from "jsonwebtoken";

export const verifyToken = async (req, res, next) => {
  try {
    let token = req.header("Authorization");

    if (!token) {
      return res.status(403).send("Access Denied");
    }

    if (token.startsWith("Bearer ")) {
<<<<<<< HEAD
      token = token.slice(7, token.length).trimStart();
=======
      token = token.slice(7, token.length).trimLeft();
>>>>>>> 7b8c6a1d2ac3344ae4d89c14395ee93afd4e6b31
    }

    const verified = jwt.verify(token, process.env.JWT_SECRET);
    req.user = verified;
    next();
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
