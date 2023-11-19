import express from "express";
import serverless from "serverless-http";
import { fileURLToPath } from "url";
import { dirname } from "path";

const app = express();
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

app.use(express.urlencoded({ extended: true }));
app.set("view engine", "ejs");

// Render login page
app.get("/", (req, res) => {
  res.render("index");
});

// Handle login form submission
app.post("/login", (req, res) => {
  const { username, password } = req.body;

  // Perform authentication logic (this is a placeholder)
  // For a real application, you'd check the credentials against a database
  if (username === "demo" && password === "password") {
    res.send("Login successful!");
  } else {
    res.send("Invalid credentials. Please try again.");
  }
});

// Handle all other routes
app.use("*", (req, res) => {
  res.status(404).send("Page not found");
});

export const handler = serverless(app);
