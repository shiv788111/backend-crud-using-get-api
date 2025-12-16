import { Router } from "express";
import { createData, deleteData, getData, getSingleData, updateData } from "../controller/studentController.js";

const router=Router();

router.get("/create",createData)
router.get("/get-all",getData)
router.get("/get",getSingleData)
router.get("/update",updateData)
router.get("/delete",deleteData)

export default router;
