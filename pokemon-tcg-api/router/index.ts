import { Router } from "express";
import cardsRouter from "./cards";
import setsRouter from "./sets";

const router = Router();

router.use("/sets", setsRouter);
router.use("/cards", cardsRouter);


export default router;