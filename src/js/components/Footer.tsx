import * as React from "react";
import styled from "styled-components";
import CONTACTS from "../data/contacts";

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
  font-size: 0.8em;
  line-height: 2em;
  text-align: center;
`;

const VeesoDev = styled.a`
  text-decoration: none;
`;

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer>
      <Container>
        <Border />
        <Copyright>
          Copyright © Christian Visintin {year} | P.IVA {CONTACTS.authorVat} |{" "}
          <VeesoDev href="https://veeso.dev" target="_blank">
            www.veeso.dev
          </VeesoDev>
        </Copyright>
      </Container>
    </footer>
  );
};

export default Footer;
