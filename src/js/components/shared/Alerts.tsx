import * as React from 'react';

const Danger = (props: React.HTMLProps<HTMLDivElement>) => (
  <div
    className="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 800 400"
    role="alert"
  >
    {props.children}
  </div>
);

export default {
  Danger,
};
