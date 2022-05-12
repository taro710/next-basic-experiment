import React from 'react';
import { useDnDSort } from '../../../hooks/useDnDSort';
// import { render } from 'react-dom';

type Style<T extends HTMLElement> = React.HTMLAttributes<T>['style'];

const bodyStyle: Style<HTMLDivElement> = {
  height: '100vh',
  display: 'flex',
  overflow: 'hidden',
  alignItems: 'center',
  justifyContent: 'center',
};

const containerStyle: Style<HTMLDivElement> = {
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'space-between',
  width: '100%',
  maxWidth: '350px',
  maxHeight: '500px',
};

const imageCardStyle: Style<HTMLDivElement> = {
  cursor: 'grab',
  userSelect: 'none',
  width: '100px',
  height: '130px',
  overflow: 'hidden',
  borderRadius: '5px',
  margin: 3,
};

const imageStyle: Style<HTMLImageElement> = {
  pointerEvents: 'none',
  objectFit: 'cover',
  width: '100%',
  height: '100%',
};

// 並び替えしたい画像URLの配列
const imageList: string[] = [
  'https://picsum.photos/400/400',
  'https://picsum.photos/400/400',
  'https://picsum.photos/400/400',
  'https://picsum.photos/400/400',
  'https://picsum.photos/400/400',
  'https://picsum.photos/400/400',
  'https://picsum.photos/400/400',
  'https://picsum.photos/400/400',
  'https://picsum.photos/400/400',
];

// ドラッグ＆ドロップ並び替えサンプルのコンポーネント
const SortSampleApp = () => {
  // useDnDSort()を使って並び替え処理を実装する
  const results = useDnDSort(imageList);

  return (
    <div style={bodyStyle}>
      <div style={containerStyle}>
        {results.map((item) => (
          <div key={item.key} style={imageCardStyle} {...item.events}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={item.value} alt="ソート可能な画像" style={imageStyle} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default SortSampleApp;

// let rootElement = document.getElementById('root');

// // rootElementが無ければ作成してdocument.bodyに追加する
// if (!rootElement) {
//   rootElement = document.createElement('div');
//   rootElement.id = 'root';
//   document.body.appendChild(rootElement);
// }

// // SortSampleAppコンポーネントを表示する
// render(<SortSampleApp />, rootElement);
