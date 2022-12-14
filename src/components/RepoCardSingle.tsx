import RepoObject from "../interfaces/repo";

type Props = {
  repository?: RepoObject,
  setRepoName: (name: string) => void
}

function RepoCardSigle(props: Props) {
  const { setRepoName, repository } = props;
  return (
    <div>
      <header className='Header'>
        <button className="button" onClick={() => setRepoName('')}> Back </button>
      </header>
      <div> <pre>{JSON.stringify(repository, undefined, 2)}</pre></div>
    </div>
  );
}

export { RepoCardSigle };
