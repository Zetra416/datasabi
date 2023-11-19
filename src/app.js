// app.js

import express from "express";
import serverless from "serverless-http";
import { fileURLToPath } from "url";
import { dirname } from "path";

const app = express();
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

app.set("view engine", "ejs");

app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
    res.render("index");
});

app.post("/login", (req, res) => {
    const { username, password } = req.body;

    // Basic authentication (replace with secure authentication in a real app)
    if (username === "user" && password === "password") {
        res.send("Login Successful!");
    } else {
        res.send("Login Failed. Please check your credentials.");
    }
});

// Handle all other routes
app.use("*", (req, res) => {
    res.status(404).send("Page not found");
});

export const handler = serverless(app);
