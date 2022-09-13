const extractSingle = (repos: any, name: string): object[] => {
  return repos.find((repo: any) => repo.full_name === name);
};

export { extractSingle };
