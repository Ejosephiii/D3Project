const express = require("express");
const axios = require("axios");
require("dotenv").config;

const app = express();
const port = 3001; // Choose an appropriate port

const CLIENT_ID = process.env.CLIENT_ID;
const AUTHORIZATION_TOKEN = process.env.AUTHORIZATION_TOKEN;

app.get("/games", async (req, res) => {
  try {
    const igdbResponse = await axios.post(
      "https://api.igdb.com/v4/games",
      `fields name,rating,cover.url; where rating >= 75; limit 10;`,
      {
        headers: {
          "Client-ID": CLIENT_ID,
          Authorization: `Bearer ${AUTHORIZATION_TOKEN}`,
          "Content-Type": "text/plain",
        },
      }
    );
    console.log(res.json);
    res.json(igdbResponse.data);
    console.log(res.json);
  } catch (error) {
    console.error(error);
    res.status(500).send("An error occurred while fetching games.");
  }
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
