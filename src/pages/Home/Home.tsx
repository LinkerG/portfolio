// src/pages/Home/home.tsx
import React, { useEffect, useState } from 'react';
import { fetchPinnedRepos } from '../../app/api';

const Home = () => {
  const [repos, setRepos] = useState<any>();
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetchPinnedRepos();
      setRepos(response);
    };
    
    fetchData();
  }, []);

  return (
    <main>
      <h1 className="text-lav-600">Hola</h1>
      <div>
        {repos && repos.map((repo) => (
          <div key={repo.url} className="repo">
            <h2>{repo.name}</h2>
            <p>{repo.description}</p>
            <a href={repo.url} target="_blank" rel="noopener noreferrer">Ver en GitHub</a>
          </div>
        ))}
      </div>
    </main>
  );
};

export default Home;
