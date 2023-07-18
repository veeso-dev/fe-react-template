import * as React from 'react';

const Base = (props: React.HTMLProps<HTMLDivElement>) => {
  return (
    <div className={`${props.className} w-screen min-h-screen`}>
      {props.children}
    </div>
  );
};

export default {
  Base,
};
