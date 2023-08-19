import express from 'express';
const app = express();
app.use(express.json()) 

import cors from 'cors';
app.use(cors()); //

app.listen(8080); 


import rootRoutes from './Routes/rootRoutes.js';

app.use("/api",rootRoutes)



