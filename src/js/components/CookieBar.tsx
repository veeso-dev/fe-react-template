import * as React from "react";
import { FormattedMessage } from "react-intl";
import styled from "styled-components";
import { useNavigate, Link } from "react-router-dom";

import { acceptAllCookies } from "../utils/cookies";
import { setGaConsent } from "../utils/ga";
import { Route } from "../utils/routes";

const Container = styled.div`
  background-color: white;
  border: 1px solid #ddd;
  border-radius: 3em;
  bottom: 0;
  padding: 32px;
  margin: 0 5% 32px 5%;
  position: fixed;
  width: calc(90% - 64px);
`;

const Form = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;

  @media screen and (max-width: 640px) {
    flex-direction: column;
  }
`;

const Title = styled.h2`
  color: #444;
  font-weight: 700;
`;

const Description = styled.p`
  color: #888;
  padding: 8px;
  text-align: justify;
`;

const TextArea = styled.div`
  max-width: 80%;

  @media screen and (max-width: 640px) {
    max-width: 100%;
  }
`;

const ButtonArea = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  justify-content: space-around;
`;

const Button = styled.button`
  background: #333;
  border: 1px solid #ccc;
  border-radius: 1em;
  color: white;
  display: block;
  font-size: 1.1em;
  font-weight: 700;
  padding: 12px 16px;

  :hover {
    background: #222;
  }
`;

interface Props {
  onClose: () => void;
}

const CookieBar = (props: Props) => {
  const navigate = useNavigate();

  const onAcceptAll = () => {
    acceptAllCookies();
    props.onClose();
    setGaConsent(false, true);
  };

  const onGoToPolicy = () => {
    navigate(Route.COOKIE_POLICY);
    props.onClose();
  };

  return (
    <Container>
      <Form>
        <TextArea>
          <Title>
            <FormattedMessage id="cookies.bar.title" />
          </Title>
          <Description>
            <FormattedMessage id="cookies.bar.body" />{" "}
            <Link to={Route.url(Route.COOKIE_POLICY)}>Cookie Policy</Link>
          </Description>
        </TextArea>
        <ButtonArea>
          <Button onClick={onAcceptAll}>
            <FormattedMessage id="cookies.bar.acceptAll" />
          </Button>
          <Button onClick={onGoToPolicy}>
            <FormattedMessage id="cookies.bar.customise" />
          </Button>
        </ButtonArea>
      </Form>
    </Container>
  );
};

export default CookieBar;
