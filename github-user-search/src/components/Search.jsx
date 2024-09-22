import React, { useState } from 'react';
import { fetchUserData } from './services/githubService';

const Search = () => {
  const [username, setUsername] = useState(''); 
  const [location, setLocation] = useState(''); 
  const [minRepos, setMinRepos] = useState(''); 
  const [users, setUsers] = useState([]); 
  const [isLoading, setIsLoading] = useState(false); 
  const [error, setError] = useState(null); 
  const [page, setPage] = useState(1); 
  const [totalCount, setTotalCount] = useState(0); 

  const handleSubmit = async (e) => {
    e.preventDefault();  
    setIsLoading(true); 
    setError(null); 
    setUsers([]); 
    setPage(1);

    try {
      const { items, total_count } = await fetchUserData(username, location, minRepos, 1);
      setUsers(items);
      setTotalCount(total_count);
    } catch (error) {
        if(error.response && error.response.status === 403){
            setError('Looks like we cant find any users');
        } else {
            setError('Looks like we cant find any users. Please check your input.');
        }
    } finally {
      setIsLoading(false); 
    }
  };

  const loadMore = async () => {
    setIsLoading(true);
    try {
      const { items } = await fetchUserData(username, location, minRepos, page + 1);
      setUsers(prevUsers => [...prevUsers, ...items]);
      setPage(prevPage => prevPage + 1);
    } catch (error) {
      setError('Failed to load more users');
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

      {users.length > 0 && (
        <div className="mt-6 space-y-4">
          {users.map(user => (
            <div key={user.id} className="bg-gray-100 p-4 rounded-lg">
              <img src={user.avatar_url} alt={user.login} className="w-20 h-20 rounded-full mx-auto" loading='lazy' />
              <h2 className="text-xl font-bold mt-2 text-center">{user.login}</h2>
              <p className="text-center">Location: {user.location || 'N/A'}</p>
              <p className="text-center">Public Repositories: {user.public_repos}</p>
              <a
                href={user.html_url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 mt-2 block text-center"
              >
                Visit GitHub Profile
              </a>
            </div>
          ))}
        </div>
      )}

      {users.length < totalCount && (
        <button
          onClick={loadMore}
          className="w-full bg-green-500 text-white px-4 py-2 rounded mt-4"
        >
          Load More
        </button>
      )}
    </div>
  );
};

export default Search;
