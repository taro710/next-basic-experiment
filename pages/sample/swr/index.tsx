import type { NextPage } from 'next';
import useSWR from 'swr';

const fetcher = (url: string) => fetch(url).then((res) => res.json());

const Home: NextPage = () => {
  const { data, error } = useSWR('http://localhost:3004/orders', fetcher);

  if (error) return <div>An error has occurred.</div>;
  if (!data) return <div>Loading...</div>;

  return (
    <div>
      <h1>{data.menu}</h1>
    </div>
  );
};

export default Home;
