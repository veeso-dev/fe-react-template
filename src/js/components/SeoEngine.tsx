import * as React from "react";
import { useLocation } from "react-router-dom";
import { Helmet } from "react-helmet";

import { pageDescription, pageTitle } from "../utils/seo";
import { getNavigatorLanguage } from "../utils/translations";

const SeoEngine = () => {
  const { pathname } = useLocation();
  // states
  const [title, setTitle] = React.useState(pageTitle(pathname));
  const [description, setDescription] = React.useState(
    pageDescription(pathname)
  );

  React.useEffect(() => {
    document.documentElement.lang = getNavigatorLanguage();

    setTitle(pageTitle(pathname));
    setDescription(pageDescription(pathname));
  }, [pathname]);

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
    </Helmet>
  );
};

export default SeoEngine;
