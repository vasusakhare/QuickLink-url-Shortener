const express = require("express");
const mongoose = require("mongoose");
const ShortUrl = require("./models/shortUrl");

// Creating an Express application:
const app = express();

//connect to MONGODB
const MONGO_URI ="mongodb+srv://vasusakhare:wod6NTN7flsDDXMk@cluster0.itxjjy6.mongodb.net/URL-Shortener?retryWrites=true&w=majority"
//you can replace with your cloud database uri or your local database uri(mongodb://localhost:27017)
  mongoose.connect(MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log('🌟 Connected to MongoDB! 🚀');
  })
  .catch((error) => {
    console.error('❌ Error connecting to MongoDB:', error);
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
    res.render("about");
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
app.listen(3000, () => {
  console.log("Server is running on http://localhost:3000 !🚀");
});
