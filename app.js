import express from "express";
import serverless from "serverless-http";
import { fileURLToPath } from "url";
import { dirname } from "path";

const app = express();
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const serviceRouter = express.Router({ mergeParams: true });

app.use("/dist", express.static(__dirname + "/dist"));
app.use("/src", express.static(__dirname + "/src"));
app.use("/views", express.static(__dirname + "/views"));

app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("index");
});

app.get("/about", (req, res) => {
  res.status(200).send("about");
});

app.get("/portfolios", (req, res) => {
  res.status(200).send("porto");
});

serviceRouter.route("/:serviceId").get(function (req, res) {
  res.status(200).send("hello user " + req.params.serviceId);
});

app.use("/services", serviceRouter);

// All other routes handled by this function
app.use((req, res) => {
  res.status(404).send("Page not found");
});

export const handler = serverless(app);
