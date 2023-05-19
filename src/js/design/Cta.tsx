import * as React from 'react';
import styled from 'styled-components';

const Button = styled.button`
  border: 1px solid #ccc;
  border-radius: 0.5em;
  color: white;
  font-size: 1.5em;
  height: fit-content;
  line-height: 2.5em;
  padding: 0 24px;
  width: 100%;

  :hover {
    filter: brightness(90%);
  }

  :disabled {
    filter: brightness(40%);
    cursor: not-allowed;
  }

  :disabled:hover {
    filter: brightness(40%) !important;
  }
`;

interface Props {
  onClick: () => void;
  disabled?: boolean;
  children: JSX.Element | JSX.Element[] | string;
  transparent?: boolean;
}

const Cta = (props: Props) => {
  const style = props.disabled
    ? {}
    : {
        backgroundColor: props.transparent ? 'rgba(0,0,0,0)' : '#1e2331',
      };

  return (
    <Button style={style} disabled={props.disabled} onClick={props.onClick}>
      {props.children}
    </Button>
  );
};

export default Cta;
