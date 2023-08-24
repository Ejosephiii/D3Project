import axios from "axios";

const fetchGames = async () => {
  try {
    const response = await axios.get("https://api.igdb.com/v4/games"); // Update the URL
    return response.data;
  } catch (error) {
    console.error("Error fetching games:", error);
    return [];
  }
};

export default fetchGames;
