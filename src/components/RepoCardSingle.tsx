function RepoCardSigle(props: any) {
  const { setSingleView, data } = props;
  return (
    <div>
      <header className='Header'>
        <button className="button" onClick={() => setSingleView(false)}> Back </button>
      </header>
      <div>{JSON.stringify(data, undefined, 2)}</div>
    </div>
  );
}

export { RepoCardSigle };
