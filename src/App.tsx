import './App.css';
import { useState } from 'react';
import { RepoCard } from './components/RepoCard';
import { RepoCardSigle } from './components/RepoCardSingle';
import { extractSingle } from './helpers/dataMutation';
import { Loading } from './components/Loading'
import { useRepo } from './hooks/useRepos'


function App() {
  const {repos} = useRepo()
  const [isSingleView, setSingleView] = useState<string>('');

  if(!repos) return <Loading/>

  return isSingleView ? (
    <RepoCardSigle data={extractSingle(repos, isSingleView)} setSingleView={setSingleView} />
  ) : (
    repos.map((repo: any) => <RepoCard repo={repo} setSingleView={setSingleView} />)
  );
}
export default App;
