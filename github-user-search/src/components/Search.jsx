import React, { useState } from 'react';
import { fetchUserData } from './services/githubService';

const Search = () => {
  const [username, setUsername] = useState(''); 
  const [userData, setUserData] = useState(null); 
  const [isLoading, setIsLoading] = useState(false); 
  const [error, setError] = useState(null); 

  const handleSearch = async () => {
    setIsLoading(true); 
    setError(null); 
    setUserData(null);

    try {
      const data = await fetchUserData(username); 
      setUserData(data); 
    } catch (error) {
      setError('Looks like we can\'t find the user'); 
    } finally {
      setIsLoading(false); 
    }
  };

  return (
    <div className="space-y-4">
      <input
        type="text"
        placeholder="Enter GitHub username"
        value={username}
        onChange={(e) => setUsername(e.target.value)} 
        className="border border-gray-300 px-4 py-2 rounded w-full"
      />
      <button
        onClick={handleSearch} 
        className="bg-blue-500 text-white px-4 py-2 rounded"
      >
        Search
      </button>


      {isLoading && <p>Loading...</p>} 


      {error && <p className="text-red-500">{error}</p>} 


      {userData && (
        <div className="bg-gray-100 p-4 rounded">
          <img src={userData.avatar_url} alt={userData.login} className="w-20 h-20 rounded-full" />
          <h2 className="text-xl font-bold">{userData.name}</h2>
          <p>{userData.bio}</p>
          <a
            href={userData.html_url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500"
          >
            Visit GitHub Profile
          </a>
        </div>
      )}
    </div>
  );
};

export default Search;
