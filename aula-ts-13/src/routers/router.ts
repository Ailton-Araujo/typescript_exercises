import { Router } from "express";
import { controller } from "@/controllers";

const router = Router();
router.get("/", controller.getInfo);

export { router };
