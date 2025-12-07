import express from "express";
import {
  getAllMoUs,
  createMoU,
  updateStatus
} from "../controllers/mou.controller.js";

const router = express.Router();

router.get("/all", getAllMoUs);
router.post("/create", createMoU);
router.patch("/status/:id", updateStatus);

export default router;