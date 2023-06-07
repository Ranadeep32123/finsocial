import Express from "express";
import { getUsers, updateUsers } from "../controllers/user.js";

const router = Express.Router();

router.get("/find/:userId", getUsers);
router.put("/", updateUsers);

export default router;
