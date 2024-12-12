import * as React from 'react';
import { Route as RouterRoute, Routes, useLocation } from 'react-router-dom';

import { getIdFromHash, Route } from './js/utils/routes';
import CookieBar from './js/components/CookieBar';
import Fallback from './js/pages/Fallback';
import Footer from './js/components/Footer';
import SeoEngine from './js/components/SeoEngine';
import Topbar from './js/components/Topbar';

const Home = React.lazy(() => import('./js/pages/Home'));
const NotFound = React.lazy(() => import('./js/pages/NotFound'));

const App = () => {
  const { pathname } = useLocation();

  React.useEffect(() => {
    const hash = getIdFromHash();
    if (!hash) {
      window.scrollTo(0, 0);
    } else {
      document.getElementById(hash)?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [pathname]);

  return (
    <>
      <SeoEngine />
      <Topbar />
      <React.Suspense fallback={<Fallback />}>
        <main>
          <Routes>
            <RouterRoute path={Route.url(Route.HOME)} element={<Home />} />
            {/* catch all */}
            <RouterRoute path="/*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
        <CookieBar />
      </React.Suspense>
    </>
  );
};

export default App;
