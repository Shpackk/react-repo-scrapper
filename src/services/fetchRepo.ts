import { Octokit } from '@octokit/core';
import RepoObject from '../interfaces/repo';
import { dummyData } from '../services/dataGen';

interface GitRes {
  data: RepoObject[];
}

async function fetchRepo() {
  let repos: GitRes;
  try {
    const lurkedKeys = dummyData.map((key: string) => lurkKey(new Octokit({ auth: key })));
    const responses = await Promise.allSettled(lurkedKeys);
    const rawRepos = responses.find(res => res.status === 'fulfilled');
    repos = (rawRepos?.status === 'fulfilled' && rawRepos.value) as GitRes;
    return repos.data ? repos.data : undefined;
  } catch (error) {
    console.error(error);
  }
}

const lurkKey = (client: Octokit) => {
  return new Promise((resolve, reject) => {
    const response = client.request('GET /user/repos');
    response instanceof Error ? reject(null) : resolve(response);
  });
};

export { fetchRepo };
