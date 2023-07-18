import * as React from 'react';

const Default = (props: React.HTMLProps<HTMLParagraphElement>) => (
  <p className={`${props.className} w-full mb-3 text-justify text-gray-600`}>
    {props.children}
  </p>
);

const Leading = (props: React.HTMLProps<HTMLParagraphElement>) => (
  <p
    className={`${props.className} w-full mb-3 text-lg text-justify text-brand`}
  >
    {props.children}
  </p>
);

const Center = (props: React.HTMLProps<HTMLParagraphElement>) => (
  <p
    className={`${props.className} w-full mb-3 text-lg md:text-xl text-center text-gray-600`}
  >
    {props.children}
  </p>
);

export default {
  Center,
  Default,
  Leading,
};
