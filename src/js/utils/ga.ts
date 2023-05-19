import { isAnalyticsCookiesConsentGiven } from './cookies';

const pushGA4Event = (eventName: string, parameters: any) => {
  const canUseGa4 =
    window.gtag !== undefined && isAnalyticsCookiesConsentGiven();

  if (canUseGa4) {
    window.gtag('event', eventName, parameters);
  }
};

const consent = (flag: boolean): 'granted' | 'denied' =>
  flag ? 'granted' : 'denied';

export const initGaConsent = (
  adStorage: boolean,
  analyticsStorage: boolean,
) => {
  if (window.gtag) {
    window.gtag('consent', 'default', {
      ad_storage: consent(adStorage),
      analytics_storage: consent(analyticsStorage),
    });
  }
};

export const setGaConsent = (adStorage: boolean, analyticsStorage: boolean) => {
  if (window.gtag) {
    window.gtag('consent', 'update', {
      ad_storage: consent(adStorage),
      analytics_storage: consent(analyticsStorage),
    });
  }
};
