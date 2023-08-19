import express from "express";
import { createOrder } from "../Controllers/orderController.js";
const orderController = express.Router();

orderController.post("/create-order", createOrder);

export default orderController