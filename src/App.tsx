import './App.css';
import { useState } from 'react';
import { RepoCard } from './components/RepoCard';
import { RepoCardSigle } from './components/RepoCardSingle';
import { extractSingle } from './helpers/dataMutation';
import { Loading } from './components/Loading'
import { useRepo } from './hooks/useRepos'
import RepoObject from './interfaces/repo';

export type Props = {
  repo: RepoObject,
  setRepoName: (name: string) => void;
}

function App() {
  const {repos} = useRepo()
  const [repoName, setRepoName] = useState<string>('');

  if(!repos) return <Loading/>

  return repoName ? (
    <RepoCardSigle repository={extractSingle(repos, repoName)} setRepoName={setRepoName} />
  ) : (
    <>
    {repos.map((repo: RepoObject) => <RepoCard key={repo.name} repo={repo} setRepoName={setRepoName} />)}
    </>
  );
}
export default App;
