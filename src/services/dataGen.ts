const gitHubkey = process.env.REACT_APP_GH_KEY;

const dummyData: string[] = Array(4)
  .fill(1)
  .map(() => Math.random().toString().substring(1));

dummyData.push(gitHubkey ? gitHubkey : 'Man Its Supraaaa');

export { dummyData };
