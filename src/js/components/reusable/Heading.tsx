import * as React from 'react';

const H1 = (props: React.HTMLProps<HTMLHeadingElement>) => (
  <h1
    className={`${props.className} py-4 text-2xl text-center text-brand tracking-wide font-normal leading-10`}
  >
    {props.children}
  </h1>
);

const H2 = (props: React.HTMLProps<HTMLHeadingElement>) => (
  <h2
    className={`${props.className} py-3 text-xl text-left text-brand font-normal leading-2`}
  >
    {props.children}
  </h2>
);

const H3 = (props: React.HTMLProps<HTMLHeadingElement>) => (
  <h3
    className={`${props.className} text-lg py-2 text-left text-brand font-normal`}
  >
    {props.children}
  </h3>
);

const H4 = (props: React.HTMLProps<HTMLHeadingElement>) => (
  <h4
    className={`${props.className} text-base text-left text-brand font-normal`}
  >
    {props.children}
  </h4>
);

const Jumbo = (props: React.HTMLProps<HTMLHeadingElement>) => (
  <h1 className={`${props.className} text-3xl text-left font-normal`}>
    {props.children}
  </h1>
);

export default {
  H1,
  H2,
  H3,
  H4,
  Jumbo,
};
