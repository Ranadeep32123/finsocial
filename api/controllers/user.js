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
