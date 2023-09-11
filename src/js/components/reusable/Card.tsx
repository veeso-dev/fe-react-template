import * as React from 'react';

const Card = (props: React.HTMLProps<HTMLDivElement>) => (
  <div
    itemProp={props.itemProp}
    itemScope={props.itemScope}
    itemType={props.itemType}
    className={`${props.className} p-6 bg-white border border-gray-200 rounded-lg shadow`}
  >
    {props.children}
  </div>
);

export default Card;
