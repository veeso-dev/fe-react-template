import * as React from 'react';
import Container from './Container';

const BlankPage = (props: React.HTMLProps<HTMLDivElement>) => {
  return (
    <div
      className={`${props.className} w-screen min-h-screen mt-[80px] sm:mt-[120px] pb-12 bg-zinc-50`}
    >
      {props.children}
    </div>
  );
};

const BrandPage = (props: React.HTMLProps<HTMLDivElement>) => {
  return (
    <BlankPage
      className={`${props.className} relative mt-[80px] sm:mt-[120px] bg-brand py-32`}
    >
      <Container.Container className="z-1 relative">
        {props.children}
      </Container.Container>
    </BlankPage>
  );
};

const Body = (props: React.HTMLProps<HTMLDivElement>) => (
  <Container.Container className="w-page sm:w-full sm:px-2 mx-auto bg-inherit">
    {props.children}
  </Container.Container>
);

export default {
  BlankPage,
  BrandPage,
  Body,
};
