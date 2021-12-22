import { useRouter } from 'next/router';

const Id = () => {
  const router = useRouter();
  const { id } = router.query;

  return <>{id}</>;
};
export default Id;
