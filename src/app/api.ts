// src/app/api.ts

import axios from 'axios';
import config from './config';

const apiClient = axios.create({
    baseURL: config.BACKEND_URL
});

export const getPokemon = async () => {
    const response = await apiClient.get('/pokemon/1');
    return response.data;
};

export const fetchPinnedRepos = async () => {
  console.log(config.GITHUB_TOKEN);
  
  const token = config.GITHUB_TOKEN;
  const query = `
    {
      user(login: "LinkerG") {
        pinnedItems(first: 6, types: REPOSITORY) {
          nodes {
            ... on Repository {
              name
              url
              stargazerCount
              primaryLanguage {
                name
                color
              }
              description
              createdAt
              forkCount
              homepageUrl
            }
          }
        }
      }
    }
  `;

  try {
    const response = await axios.post(
      'https://api.github.com/graphql',
      { query },
      {
        headers: {
          Authorization: `Bearer ${token}`
        }
      }
    );

    return response.data.data.user.pinnedItems.nodes;
  } catch (error) {
    console.error('Error fetching pinned repositories', error);
  }
};
