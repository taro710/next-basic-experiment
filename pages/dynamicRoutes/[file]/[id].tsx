import { useRouter } from 'next/router';

const Id = () => {
  const router = useRouter();
  const { id, file } = router.query;

  return (
    <>
      {id}/{file}
    </>
  );
};
export default Id;
