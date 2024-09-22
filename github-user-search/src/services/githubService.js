import axios from 'axios';

const GITHUB_API_BASE_URL = 'https://api.github.com/search/users';

export const fetchUserData = async (username, location = '', minRepos = '') => {
  let query = `q=${username}`;

  if (location) {
    query += `+location:${encodeURIComponent(location)}`;
  }

  if (minRepos) {
    query += `+repos:>${minRepos}`;
  }

  try {
    const response = await axios.get(`${GITHUB_API_BASE_URL}?${query}`);
    if (response.data.total_count > 0) {
      return response.data.items[0]; 
    } else {
      throw new Error('No user found');
    }
  } catch (error) {
    throw new Error('Failed to fetch user data: ' + error.message);
  }
};
