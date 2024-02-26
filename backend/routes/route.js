// const express = require('express');
import express from "express";
// const { fetchHospitalInfo } = require('../controller/hospital-controller');
import { fetchHospitalInfo } from "../controller/hospital-controller.js";
import {
  fetchAmbulanceInfo,
  fetchAmbulanceInfoById,
} from "../controller/Ambulance-controller.js";

const router = express.Router();

// Hospital info

router.get("/", fetchHospitalInfo);
router.get("/hospitalInfo", fetchHospitalInfo);
router.get("/ambulanceInfo", fetchAmbulanceInfo);
router.get("/hospitalInfo/:id", fetchAmbulanceInfoById);

export default router;
