const express = require("express");
const mongoose = require("mongoose");
const ShortUrl = require("./models/shortUrl");

// Creating an Express application:
const app = express();

// Connecting to the MongoDB database:
mongoose.connect("mongodb://localhost:27017/url", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Configuring the application
app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(express.urlencoded({ extended: false }));

// Handling the root route ("/")
app.get("/", async (req, res) => {
  try {
    const shortUrls = await ShortUrl.find();
    res.render("index", { shortUrls });
  } catch (error) {
    console.error(error);
    res.sendStatus(500);
  }
});

// Handling the "/search_url" route
app.get("/about", async (req, res) => {
  try {
    res.render("about")
  } catch (error) {
    console.error(error);
    res.sendStatus(500);
  }
});

// Handling form submissions ("/shortUrls")
app.post("/shortUrls", async (req, res) => {
  try {
    const { fullUrl, shortUrl } = req.body;
    await ShortUrl.create({
      full: fullUrl,
      short: shortUrl,
      notes: req.body.notes,
    });
    res.redirect("/");
  } catch (error) {
    console.error(error);
    res.sendStatus(500);
  }
});

// Redirecting short URLs
app.get("/:shortUrl", async (req, res) => {
  try {
    const { shortUrl } = req.params;
    const shortUrlDoc = await ShortUrl.findOne({ short: shortUrl });
    if (!shortUrlDoc) {
      return res.sendStatus(404);
    }
    shortUrlDoc.clicks++;
    await shortUrlDoc.save();
    res.redirect(shortUrlDoc.full);
  } catch (error) {
    console.error(error);
    res.sendStatus(500);
  }
});

// Starting the server
app.listen(process.env.PORT || 3000, () => {
  console.log("Server is running on http://localhost:3000");
});
