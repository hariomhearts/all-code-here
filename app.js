const express = require("express");
const path = require("path");
const { open } = require("sqlite");
const sqlite3 = require("sqlite3");
const app = express();

const dbPath = path.join(__dirname, "moviesData.db");

let db = null;
const initialiseDbServer = async () => {
  try {
    db = await open({
      filename: dbPath,
      driver: sqlite3.Database,
    });
    app.listen(3000, () => {
      console.log("running at localhost:3000");
    });
  } catch (e) {
    console.log(e.message);
    process.exit(1);
  }
};
initialiseDbServer();

// API 1
app.get("/movies/", async (req, res) => {
  const movieQuery = `
    SELECT * FROM movie;`;

  const movie = await db.all(movieQuery);
  res.send(movie);
});



