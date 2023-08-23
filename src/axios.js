import axios from "axios";

const fetchGames = async () => {
  try {
    const response = await axios.get("/games"); // Make a request to your server-side proxy
    return response.data;
  } catch (error) {
    console.error("Error fetching games:", error);
    return [];
  }
};

export default fetchGames;
