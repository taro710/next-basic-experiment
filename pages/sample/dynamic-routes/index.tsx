import type { NextPage } from 'next';

const DynamicRoutes: NextPage = () => {
  return (
    <>
      <p>
        pages配下のファイル名orディレクトリ名を[]で囲うことでパスパラメータのように扱える機能
      </p>
    </>
  );
};

export default DynamicRoutes;
