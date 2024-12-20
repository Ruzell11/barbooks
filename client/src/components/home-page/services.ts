// services/homepage/getAllGames.js
import axios from 'axios';
import { config } from '../../config';

const getAllGames = async (platform?: string, category?: string, sortBy?: string) => {
  try {
    // Construct query parameters
    const params: Record<string, string> = {};
    if (platform) params.platform = platform;
    if (category) params.category = category;
    if (sortBy) params['sort-by'] = sortBy;

    // Send GET request with parameters
    const response = await axios.get(`/api/games`, { params });
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

const getAllCategories = async () => {
    try {
      const response = await axios.get(`/api/games/categories`);
      return response.data;
    } catch (error) {
      if (error instanceof Error) {
        console.error('Error fetching categories:', error.message);
      } else {
        console.error('An unknown error occurred:', error);
      }
      throw error;
    }
}

const getAllFilterGames = async (platform?: string, category?: string[], sortBy?: string) => {
  try {
    // Construct query parameters
    const params: Record<string, string> = {};

    if (platform) params.platform = platform;
    
    // Check if category is provided, and join them if necessary
    console.log(category)
    if (category && category.length > 0) {
      params.tag = category.join('.');
    }

    if (sortBy) params['sort-by'] = sortBy;

    // Send GET request with parameters
    const response = await axios.get(`/api/games/filter`, { params });
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


export { getAllGames, getAllCategories, getAllFilterGames } ;
