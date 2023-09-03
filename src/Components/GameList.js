import React, { useState, useEffect } from "react";
import axios from "axios";

const igdbAPI = axios.create({
  baseURL: "/api",
  headers: {
    "Client-ID": process.env.CLIENT_ID,
    Authorization: `Bearer ${process.env.ACCESS_TOKEN}`,
  },
});

const GameList = () => {
  const [games, setGames] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await igdbAPI.get("games", {
          fields: "name,rating; sort rating desc",
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
