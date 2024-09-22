import React, { useState } from 'react';
import { fetchUserData } from './services/githubService';

const Search = () => {
  const [username, setUsername] = useState(''); 
  const [location, setLocation] = useState(''); 
  const [minRepos, setMinRepos] = useState(''); 
  const [userData, setUserData] = useState(null); 
  const [isLoading, setIsLoading] = useState(false); 
  const [error, setError] = useState(null); 

  const handleSubmit = async (e) => {
    e.preventDefault();  
    setIsLoading(true); 
    setError(null); 
    setUserData(null); 

    try {
      const data = await fetchUserData(username, location, minRepos);
 
      
      if (
        (location && data.location !== location) || 
        (minRepos && data.public_repos < parseInt(minRepos))
      ) {
        setError('No user found with the specified criteria.');
      } else {
        setUserData(data);
      }
    } catch (error) {
      setError('Looks like we cant find the user'); 
    } finally {
      setIsLoading(false); 
    }
  };

  return (
    <div className="max-w-lg mx-auto mt-8 p-4 bg-white shadow-md rounded-lg">
      <form onSubmit={handleSubmit} className="space-y-4">
        <h1 className="text-2xl font-bold text-center mb-6">GitHub User Search</h1>
        
        <div className="space-y-2">
          <label htmlFor="username" className="block font-medium">GitHub Username</label>
          <input
            type="text"
            id="username"
            placeholder="Enter GitHub username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="border border-gray-300 px-4 py-2 rounded w-full"
          />
        </div>

        <div className="space-y-2">
          <label htmlFor="location" className="block font-medium">Location</label>
          <input
            type="text"
            id="location"
            placeholder="Enter location (optional)"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            className="border border-gray-300 px-4 py-2 rounded w-full"
          />
        </div>

        <div className="space-y-2">
          <label htmlFor="minRepos" className="block font-medium">Minimum Repositories</label>
          <input
            type="number"
            id="minRepos"
            placeholder="Enter minimum repositories (optional)"
            value={minRepos}
            onChange={(e) => setMinRepos(e.target.value)}
            className="border border-gray-300 px-4 py-2 rounded w-full"
          />
        </div>

        <button
          type="submit"  
          className="w-full bg-blue-500 text-white px-4 py-2 rounded mt-4"
        >
          Search
        </button>
      </form>

      {isLoading && <p className="text-center mt-4">Loading...</p>} 
      {error && <p className="text-red-500 text-center mt-4">{error}</p>} 

      {userData && (
        <div className="bg-gray-100 p-4 mt-4 rounded-lg text-center">
          <img src={userData.avatar_url} alt={userData.login} className="w-20 h-20 rounded-full mx-auto" />
          <h2 className="text-xl font-bold mt-4">{userData.name || userData.login}</h2>
          <p>{userData.bio}</p>
          <p>Location: {userData.location || 'N/A'}</p>
          <p>Public Repositories: {userData.public_repos}</p>
          <a
            href={userData.html_url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 mt-2 block"
          >
            Visit GitHub Profile
          </a>
        </div>
      )}
    </div>
  );
};

export default Search;
