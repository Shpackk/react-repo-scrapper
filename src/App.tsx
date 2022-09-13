import './App.css';
import { useEffect, useState } from 'react';
import { RepoCard } from './components/RepoCard';
import { RepoCardSigle } from './components/RepoCardSingle';
import { extractSingle } from './helpers/dataMutation';
import { fetchRepo } from './hooks/useRepo';

function SingleRepo(props: any) {
  const [data, setData] = useState<object>({});

  useEffect(() => {
    (() => {
      setData(props.repo);
    })();
  }, [props.repo]);
  return <RepoCardSigle data={data} setSingleView={props.setSingleView} />;
}

function App() {
  const [repos, setRepos] = useState<any>([{}]);
  const [isSingleView, setSingleView] = useState<string>('');

  useEffect(() => {
    fetchRepo().then(repositories => setRepos(repositories));
  }, []);

  return isSingleView ? (
    <SingleRepo repo={extractSingle(repos, isSingleView)} setSingleView={setSingleView} />
  ) : (
    repos.map((repo: any) => <RepoCard repo={repo} setSingleView={setSingleView} />)
  );
}
export default App;
