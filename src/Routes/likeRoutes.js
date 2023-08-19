import  express  from "express";
import { createLikeRes, unlikeRes ,getLikeByResID, getLikeByUserID, getLikeByResAndUserID } from "../Controllers/likeController.js";

const likeController = express.Router();

likeController.post("/create-like-res", createLikeRes);
likeController.delete("/unlike-res", unlikeRes);
likeController.get("/like-by-res-id/:id", getLikeByResID)
likeController.get("/like-by-user-id/:id", getLikeByUserID)
likeController.get("/like-by-res-and-user/:resID/:userID", getLikeByResAndUserID);



export default likeController;