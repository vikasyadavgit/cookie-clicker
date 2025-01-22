import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import connectDB from './src/db/connection.js';
import gameRoutes from "./src/routes/gameRoutes.js";

// App setup
const app = express();
app.use(cors());
app.use(bodyParser.json());

// Connect to MongoDB Atlas
connectDB();

app.use("/api", gameRoutes);


// Start server
const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
