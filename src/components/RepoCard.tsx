function RepoCard(props: any) {
  const {
    repo: { name, full_name, pushed_at, updated_at },
    setSingleView,
  } = props;
  return (
    <div className='Box'>
      <p className='RepoName'>{name}</p>
      <button
        onClick={() => {
          setSingleView(full_name);
        }}>
        More Info
      </button>
      <p>Was Created At: {pushed_at}</p>
      <p>Last Update At: {updated_at}</p>
    </div>
  );
}

export { RepoCard };
