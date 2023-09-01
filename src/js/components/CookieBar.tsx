import * as React from 'react';
import { FormattedMessage } from 'react-intl';
import { useNavigate, Link } from 'react-router-dom';

import { acceptAllCookies } from '../utils/cookies';
import { setGaConsent } from '../utils/ga';
import { Route } from '../utils/routes';
import Container from './reusable/Container';
import Heading from './reusable/Heading';
import Paragraph from './reusable/Paragraph';
import Cta from './reusable/Cta';

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
    navigate(Route.url(Route.COOKIE_POLICY));
    props.onClose();
  };

  return (
    <Container.Container className="bg-white fixed right-0 left-0 mx-auto rounded-3xl border bottom-0 p-10 m-10 w-11/12">
      <Container.FlexResponsiveRow className="justify-between">
        <Container.Container className="w-8/12">
          <Heading.H2>
            <FormattedMessage id="cookies.bar.title" />
          </Heading.H2>
          <Paragraph.Leading>
            <FormattedMessage id="cookies.bar.body" />{' '}
            <Link to={Route.url(Route.COOKIE_POLICY)}>Cookie Policy</Link>
          </Paragraph.Leading>
        </Container.Container>
        <Container.FlexCols className="justify-around gap-4">
          <Cta onClick={onAcceptAll}>
            <FormattedMessage id="cookies.bar.acceptAll" />
          </Cta>
          <Cta onClick={onGoToPolicy}>
            <FormattedMessage id="cookies.bar.customise" />
          </Cta>
        </Container.FlexCols>
      </Container.FlexResponsiveRow>
    </Container.Container>
  );
};

export default CookieBar;
