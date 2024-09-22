import axios from 'axios';

const GITHUB_API_BASE_URL = 'https://api.github.com/search/users?q';

export const fetchUserData = async (username, location = '', minRepos = '', page = 1) => {
  let query = `q=${username}`;

  if (location) {
    query += `+location:${encodeURIComponent(location)}`;
  }

  if (minRepos) {
    query += `+repos:>${minRepos}`;
  }

  query += `&page=${page}&per_page=10`;

  try {
    const response = await axios.get(`${GITHUB_API_BASE_URL}?${query}`);
    return response.data;
  } catch (error) {
    throw new Error('Failed to fetch user data: ' + error.message);
  }
};
