import express from "express";
import axios from "axios";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

const API_URL = "https://www.thecocktaildb.com/api/json/v1/1";

app.get("/", async (req, res) => {
  res.render("index.ejs");
});

app.get("/searchRandom", async (req, res) => {
  try {
    const response = await axios.get(API_URL + "/random.php");
    const result = response.data.drinks;
    console.log(result);
    res.render("index.ejs", { data: result });
  } catch (error) {
    console.error("Failed to make request:", error.message);
    res.render("index.ejs", {
      error: error.message,
    });
  }
});

app.post("/searchCocktailName", async (req, res) => {
  const cocktailName = req.body;
  console.log(cocktailName);
  try {
    const response = await axios.get(
      API_URL + "/search.php?s=" + cocktailName.cocktailName
    );
    const result = response.data.drinks;
    console.log(result);
    res.render("index.ejs", { data: result });
  } catch (error) {
    res.render("index.ejs", { content: JSON.stringify(error.response.data) });
  }
});

app.post("/searchAlcoholType", async (req, res) => {
  const alcoholType = req.body;
  console.log(alcoholType);
  try {
    const response = await axios.get(
      API_URL + "/search.php?s=" + alcoholType.alchoholType
    );
    const result = response.data.drinks;
    console.log(result);
    res.render("index.ejs", { data: result });
  } catch (error) {
    res.render("index.ejs", { content: JSON.stringify(error.response.data) });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
