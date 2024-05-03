const express = require('express');
const dotenv = require("dotenv");
const cors = require("cors");
import connectDb from "./config/dbConfig";
import shortUrl from "./routes/shortUrl";
dotenv.config();

connectDb();
const PORT = 5001;
const app = express();
app.use(express.json());
app.use(express.urlencoded({extened: true}));
app.use(cors());

app.use("/api/",shortUrl);
app.listen(PORT, () => {
    // console.log(`${process.env.CONNECTION_STRING}`)
    console.log(`Server listening on ${PORT}`);
});