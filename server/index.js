// import dependencies
import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";

// import routers
import postRoutes from "./routes/posts.js"

const app = express();

app.use("/posts", postRoutes)

app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

const CONNECTION_URL = "mongodb+srv://yannWe:U2rvBsktR3wPOFhu@cluster0.embsp.mongodb.net/?retryWrites=true&w=majority"
const PORT = process.env.PORT || 5000;

    mongoose.connect(CONNECTION_URL).then(()=> app.listen(PORT, () => console.log(`Server running on PORT: ${PORT}`)))