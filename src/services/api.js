import axios from 'axios';



const apiData = {
  animeData: [],
  topAnime: [],

};

export const AnimeCall = async () => {
    try {
      const response = await axios.get('https://api.jikan.moe/v4/anime');
      return response.data.data;
    } catch (error) {
      console.error('Error fetching anime data:', error);
      throw error;
    }
  };
  

  export const TopAnime = async () => {
    try {
      const response = await axios.get('https://api.jikan.moe/v4/top/anime');
      console.log(response.data.data); // Log the fetched data
      return response.data.data;
    } catch (error) {
      console.error('Error fetching anime data:', error);
      throw error;
    }
  };
  export const getAnimeById= async (id) => {
    try {
      const response = await axios.get(`https://api.jikan.moe/v4/anime/${id}`);
      return response.data.data;
    } catch (error) {
      console.error('Error fetching anime data:', error);
      throw error;
    }
  };
  export const getAnimeCharacters= async (id) => {
    try {
      const response = await axios.get(`https://api.jikan.moe/v4/anime/${id}/characters`);
      return response.data.data;
    } catch (error) {
      console.error('Error fetching anime data:', error);
      throw error;
    }
  };
  
  export const getSeasonalAnimes = async () => {
    try {
      const response = await axios.get('https://api.jikan.moe/v4/seasons/now');
      console.log(response.data.data); // Log the fetched data
      return response.data.data;
    } catch (error) {
      console.error('Error fetching anime data:', error);
      throw error;
    }
  };

export default apiData;


