import express from 'express'
import dotenv from 'dotenv'
import { connectDB } from './config/db';

const app = express();
app.use(express.json());
dotenv.config();

app.use(cors({
    origin: '*'
}));

app.use("/", (req, res) => {
    res.send("Hello from Backend")
})

connectDB();

app.listen(port, () => {
    console.log(`app is listening on port${port}`);
})
