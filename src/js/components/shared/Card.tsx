import * as React from 'react';

const Card = (props: React.HTMLProps<HTMLDivElement>) => (
  <div
    className={`${props.className} p-6 bg-white border border-gray-200 rounded-lg shadow 800 700`}
  >
    {props.children}
  </div>
);

export default Card;
