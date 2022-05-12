import React, { useRef, useEffect } from 'react';
class Child extends React.Component {
  someFunc = () => {
    return 'sample';
  };

  render() {
    return <div></div>;
  }
}

const Component = () => {
  const ins = useRef(null);

  useEffect(() => {
    // クラスコンポーネントでしか出来ない
    console.log(ins.current);
    console.log(ins.current.someFunc());
  }, []);

  return <Child ref={ins} />;
};

export default Component;
