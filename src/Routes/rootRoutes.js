import express from 'express';
import likeController from './likeRoutes.js';
import rateController from './rateRoutes.js';
import orderController from './orderRoutes.js';

const rootRouter = express.Router();

// Đối tượng restaurant
rootRouter.use("/res", [likeController, rateController]);

// Đối tượng order
rootRouter.use("/order", orderController);

export default rootRouter;
