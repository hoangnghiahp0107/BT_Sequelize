import  express  from "express";
import { createRateRes, getRateByResID, getRateByUserID, getRateByResAndUserID } from "../Controllers/rateController.js";
const rateController = express.Router();

rateController.post("/create-rate", createRateRes);
rateController.get("/rate-by-res-id/:id", getRateByResID)
rateController.get("/rate-by-user-id/:id", getRateByUserID)
rateController.get("/rate-by-res-and-user/:resID/:userID", getRateByResAndUserID);


export default rateController;