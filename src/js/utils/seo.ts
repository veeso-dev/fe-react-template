import { Route } from './routes';

interface SeoPages {
  [key: string]: SeoData;
}

interface SeoData {
  title: string;
  description: string;
  ogSiteName?: string;
}

const PAGE_TITLES: SeoPages = {
  '/': {
    title: '',
    description: '',
  },
};

const seoData = (pathname: string | Route): SeoData | undefined => {
  const url = Route.isRoute(pathname) ? Route.url(pathname as Route) : pathname;

  if (!PAGE_TITLES[url]) {
    return undefined;
  }

  return PAGE_TITLES[url];
};

export const pageTitle = (pathname: string | Route): string => {
  const data = seoData(pathname);
  return data ? data.title : '404 Not found';
};

export const pageDescription = (pathname: string | Route): string => {
  const data = seoData(pathname);
  return data ? data.description : 'Page could not be found on the website';
};

export const pageOgSiteName = (pathname: string | Route): string => {
  const data = seoData(pathname);
  return data?.ogSiteName ? data.ogSiteName : pageTitle(pathname);
};

export const isPageNotFound = (pathname: string | Route): boolean =>
  seoData(pathname) === undefined;

export const noIndex = (): boolean => false;
