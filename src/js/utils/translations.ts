import { flatten } from "flat";

import EnTranslations from "../../lang/en.json";
import ItTranslations from "../../lang/it.json";

const LANG_ITALIAN = "it";
const LANG_ENGLISH = "en";

export type Language = typeof LANG_ITALIAN | typeof LANG_ENGLISH;

export interface Translations {
  en: Record<string, string>;
  it: Record<string, string>;
  [key: string]: Record<string, string>;
}

const TRANSLATIONS: Translations = {
  en: flatten(EnTranslations),
  it: flatten(ItTranslations),
};

const getPureNavigatorLanguage = (): Language => {
  let lang = navigator.language;
  // Complete lang
  if (languageSupported(lang)) {
    return lang as Language;
  }
  // Reduced lang
  lang = lang.split(/[-_]/)[0] || "en";
  if (!languageSupported(lang)) {
    return "en";
  }
  return lang as Language;
};

export const getNavigatorLanguage = (): Language => getPureNavigatorLanguage();

const languageSupported = (lang: string): boolean =>
  [LANG_ENGLISH, LANG_ITALIAN].includes(lang);

export default TRANSLATIONS;
