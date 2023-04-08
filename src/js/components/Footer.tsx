import * as React from "react";
import styled from "styled-components";

const Container = styled.div`
  background: #1e2331;
  border-top: 4px solid darkviolet;
  color: white;
  margin: 0;
  padding: 24px;

  a {
    color: white;
    :hover {
      text-decoration: underline;
    }
  }
`;

const Border = styled.div`
  background-color: #aaa;
  content: "";
  height: 2px;
  margin-left: 10%;
  width: 80%;

  @media screen and (max-width: 640px) {
    margin-left: 10%;
    width: 80%;
  }
`;

const Copyright = styled.h5`
  color: white;
  font-size: 0.7em;
  text-align: center;
`;

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer>
      <Container>
        <Border />
        <Copyright>Copyright © Christian Visintin {year}</Copyright>
      </Container>
    </footer>
  );
};

export default Footer;
