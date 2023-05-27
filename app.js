const dotenv = require("dotenv");
const path = require("path");
const express = require("express");
const expressLayout = require("express-ejs-layouts");
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Static files directory
app.use(express.static("public"));

// Templating engine middleware
app.use(expressLayout);
app.set("layout", "./layouts/main");
app.set("view engine", "ejs");

app.use("/", require(path.join(__dirname, "/server/routes/main")));

app.listen(PORT, () => console.log(`App running on http://localhost:${PORT}`));
