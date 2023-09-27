import express from "express";
import axios from "axios";

const app = express();
const port = 3000;

app.use(express.static("public"));

app.get("/", (req, res) => {
  res.render("index.ejs");
});

/*
app.get("/searchRandom", (req, res) => {
    try {
    const response = await axios.get("www.thecocktaildb.com/api/json/v1/1/random.php");
    const result = response.data;
    res.render("index.ejs", { data: result });
  } catch (error) {
    console.error("Failed to make request:", error.message);
    res.render("index.ejs", {
      error: error.message,
    });
  }
});*/

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
