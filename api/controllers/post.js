import { db } from "../connect.js";
import jwt from "jsonwebtoken";
import moment from "moment";

export const getPosts = (req, res) => {
  const userId = req.query.userId;
  const token = req.cookies.accessToken;
  if (!token) return res.status(401).json("Not logged in!");
  jwt.verify(token, "secretkey", (err, userInfo) => {
    if (err) return res.status(403).json("Token is not valid!");

    const q = userId
      ? `SELECT p.* , name, profile_pic FROM posts AS p JOIN users AS u ON (p.user_id = u.id) WHERE p.user_id= ? `
      : `SELECT p.* , name, profile_pic FROM posts AS p JOIN users AS u ON (p.user_id = u.id) LEFT JOIN relations AS  r ON (p.user_id = r.followedUserId) WHERE r.followerUserId = ?  OR p.user_id= ? ORDER BY p.createdAt DESC`;

    const values = userId ? [userId] : [userInfo.id, userInfo.id];

    db.query(q, values, (err, result) => {
      if (err) {
        return res.status(500).send(err);
      } else {
        // console.log(result);
        console.log(userInfo.id);
        return res.status(200).send(result);
      }
    });
  });
};

export const addPost = (req, res) => {
  const token = req.cookies.accessToken;
  if (!token) return res.status(401).json("Not logged in!");

  jwt.verify(token, "secretkey", (err, userInfo) => {
    if (err) return res.status(403).json("Token is not valid!");
    const q =
      "INSERT INTO posts(`desc`, `img`, `user_Id`, `createdAt`) VALUES (?)";

    const values = [
      req.body.desc,
      req.body.img,
      userInfo.id,
      moment(Date.now()).format("YYYY-MM-DD HH:mm:ss"),
    ];

    db.query(q, [values], (err, data) => {
      if (err) return res.status(500).json(err);
      return res.status(200).json("Post has been created.");
    });
  });
};
