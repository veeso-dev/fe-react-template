import * as React from 'react';

const Unordered = (props: React.HTMLProps<HTMLUListElement>) => (
  <ul className={`px-8 list-disc sm:px-0 ${props.className}`}>
    {props.children}
  </ul>
);

const Item = (props: React.HTMLProps<HTMLDivElement>) => (
  <li className="text-lg py-2">{props.children}</li>
);

export default {
  Item,
  Unordered,
};
