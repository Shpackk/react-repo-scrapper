function RepoCardSigle(props: any) {
  const { setSingleView, data } = props;
  return (
    <div>
      <header className='Header'>
        <button onClick={() => setSingleView(false)}> Back </button>
      </header>
      <div>{JSON.stringify(data, undefined, 4)}</div>
    </div>
  );
}

export { RepoCardSigle };
