import { db } from "../connect.js";
import jwt from "jsonwebtoken";

export const getUsers = (req, res) => {
  const userId = req.params.userId;
  const q = "SELECT * FROM users WHERE id = ?";

  db.query(q, [userId], (err, result) => {
    if (err) return res.status(500).json(err);
    const { password, ...others } = result[0];
    res.status(200).json(others);
  });
};

export const updateUsers = (req, res) => {
  const token = req.cookies.accessToken;
  if (!token) return res.status(401).json("You are not authenticated!");

  jwt.verify(token, "secretkey", (err, user) => {
    if (err) return res.status(403).json("Token is not valid!");
    const q =
      "UPDATE users SET `name`=?,`email`=?,  `profile_pic`=?  WHERE id = ?";

    db.query(
      q,
      [req.body.name, req.body.email, req.body.profilePic, user.id],
      (err, result) => {
        if (err) return res.status(500).json(err);
        if (result.affectedRows === 0)
          return res.status(404).json("User not found!");
        return res.status(200).json("User updated!");
      }
    );
  });
};
