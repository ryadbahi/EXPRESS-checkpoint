const express = require("express");
const app = express();
const workingHours = require("./middleware/workingHours");

app.use(express.static("public"));
app.set("view engine", "ejs");

// Apply middleware to all routes
app.use(workingHours);

// Routes
app.get("/", (req, res) => res.render("home"));
app.get("/services", (req, res) => res.render("services"));
app.get("/contact", (req, res) => res.render("contact"));

// Start server
app.listen(3000, () => console.log("Server running on http://localhost:3000"));
