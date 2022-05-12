import React, { useRef, useEffect } from 'react';

// https://qiita.com/tonio0720/items/c265b9b65db3bb76f2d3
// https://off.tokyo/blog/react-ref/
const Component = () => {
  const el = useRef(null);

  useEffect(() => {
    console.log(el.current);
  }, []);

  return <div ref={el}>DOM</div>;
};

export default Component;
