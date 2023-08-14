import express from "express";
import connectDatabase from './database/connectionDB.js';
import path from 'path';
import web from './routes/web.js';

const app = express();
const port = process.env.PORT || 3000;
const DATABASE_URL = process.env.DATABASE_URL || "mongodb://127.0.0.1:27017";

// Database connection
connectDatabase(DATABASE_URL);

app.use(express.urlencoded({ extended: false }));

// Static files
app.use("/", express.static(path.join(process.cwd(), "public")));
app.use("/edit", express.static(path.join(process.cwd(), "public")));

// Set Template engine (EJS)
app.set("view engine", "ejs");

app.use("/", web);

app.listen(port, () => {
  console.log(`Server listening on http://localhost:${port}`);
});
