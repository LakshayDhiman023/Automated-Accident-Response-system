// const express = require('express');
import express from "express";
// const { fetchHospitalInfo } = require('../controller/hospital-controller');
import { fetchHospitalInfo, fetchHospitalInfoById, updateHospitalInfo } from "../controller/hospital-controller.js";
import {
  fetchAmbulanceInfo,
} from "../controller/Ambulance-controller.js";

const router = express.Router();

// Hospital info

router.get("/", fetchHospitalInfo);
router.get("/hospitalInfo", fetchHospitalInfo);
router.get("/ambulanceInfo", fetchAmbulanceInfo);
router.get("/hospitalInfo/:id", fetchHospitalInfoById);
router.post("/hospitalInfo/:id", updateHospitalInfo);

export default router;
