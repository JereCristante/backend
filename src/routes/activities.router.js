import { Router } from "express";
import {
  create,
  read
} from "../controllers/activityController.js";

const router = Router();

router.post("/", create);
router.get("/", read);

export default router;