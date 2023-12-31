import React, { useState, useEffect } from "react";
import axios from "axios";
require('dotenv').config


const igdbAPI = axios.create({
  baseURL: "/api",
  headers: {
    Client_ID: process.env.CLIENT_ID,

    Authorization: `Bearer ${process.env.ACCESS_TOKEN}`,
  },
});

const GameList = () => {
  const [games, setGames] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await igdbAPI.post("/games", {
          fields: "fields name,rating; sort rating asc;",
          limit: 10,
        });
        console.log("API Response:", response); // Log the API response
        setGames(response.data);
      } catch (error) {
        console.error("Error fetching data:", error); // Log any errors
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>Top 10 Games</h1>
      <ul>
        {games.map((game, index) => (
          <li key={index}>
            {game.name} - Rating: {game.rating}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default GameList;
