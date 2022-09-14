import { Props } from "../App";

function RepoCard(props: Props) {
  const {
    repo: { name, full_name, pushed_at, updated_at },
    setRepoName,
  } = props;
  return (
    <div className='Box'>
      <p className='RepoName'>{name}</p>
      <p>Was Created At: {pushed_at}</p>
      <p>Last Update At: {updated_at}</p>
      <button className="button"
        onClick={() => {
          setRepoName(full_name);
        }}>
        More Info
      </button>
    </div>
  );
}

export { RepoCard };
