import axios from 'axios';


const getGameDetails = async (id: string) => {
    try {
      const response = await axios.get(`/api/games/${id}`);
      return response.data;
    } catch (error) {
      if (error instanceof Error) {
        console.error('Error fetching games:', error.message);
      } else {
        console.error('An unknown error occurred:', error);
      }
      throw error;
    }
  };

export { getGameDetails }