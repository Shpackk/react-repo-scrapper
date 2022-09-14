import RepoObject from "../interfaces/repo";

const extractSingle = (repos: RepoObject[], name: string) => {
  return repos.find((repo: RepoObject) => repo.full_name === name);
};

export { extractSingle };
