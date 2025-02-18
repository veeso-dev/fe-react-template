'use client';

import * as React from 'react';
import * as FiIcons from 'react-icons/fi';

import Container from './Container';

interface Props {
  className?: string;
  text: string;
  children: React.ReactNode;
}

const Copy = ({ className, text, children }: Props) => {
  const [copied, setCopied] = React.useState(false);
  const [timer, setTimer] = React.useState<NodeJS.Timeout>();

  const onCopy = () => {
    if (navigator && navigator.clipboard) {
      navigator.clipboard.writeText(text);
      setCopied(true);
    }
  };

  // timer to reset the copied state
  React.useEffect(() => {
    if (copied) {
      const timer = setTimeout(() => {
        setCopied(false);
      }, 2000);
      setTimer(timer);
    }
  }, [copied]);

  React.useEffect(() => {
    return () => {
      if (timer) {
        clearTimeout(timer);
      }
    };
  }, [timer]);

  return (
    <Container.Container className={className}>
      <Container.Container className="inline">{children}</Container.Container>
      <span onClick={onCopy} className="inline hover:cursor-pointer">
        {copied ? (
          <FiIcons.FiCheck className="inline text-gray-500" size={20} />
        ) : (
          <FiIcons.FiClipboard className="inline text-gray-500" size={20} />
        )}
      </span>
    </Container.Container>
  );
};

export default Copy;
