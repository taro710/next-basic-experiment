import React, { useRef, useEffect } from 'react';

// forwardRef
// el.currentで親コンポーネントから子コンポーネントを介してdiv要素にアクセスすることができる。
// HOC(Higher-Order Component)などでコンポーネントを関数で囲む際などに、refをそのまま受け渡すという目的で利用する。
// アプリケーションが複雑になればなるほど重宝する機能。

/* eslint-disable react/display-name */
const Child = React.forwardRef((_props, ref) => <div ref={ref}>DOM</div>);

const Component = () => {
  const el = useRef(null);

  useEffect(() => {
    console.log(el.current);
  }, []);

  return <Child ref={el} />;
};

export default Component;
