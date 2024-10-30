import { createInstance, i18n } from 'i18next';
import resourcesToBackend from 'i18next-resources-to-backend';
import { initReactI18next } from 'react-i18next/initReactI18next';
import { getOptions } from './settings';

type TranslationOptions = {
  keyPrefix?: string;
};

const initI18next = async (lng: string, ns: string): Promise<i18n> => {
  const i18nInstance = createInstance();
  await i18nInstance
    .use(initReactI18next)
    .use(
      resourcesToBackend(
        (language: string, namespace: string) =>
          import(`./locales/${language}/${namespace}.json`)
      )
    )
    .init(getOptions(lng, ns));
  return i18nInstance;
};

export async function useTranslation(
  lng: string,
  ns: string | string[],
  options: TranslationOptions = {}
): Promise<{
  t: (key: string, options?: TranslationOptions) => string;
  i18n: i18n;
}> {
  const i18nextInstance = await initI18next(
    lng,
    Array.isArray(ns) ? ns[0] : ns
  );

  return {
    t: (key: string, opts?: TranslationOptions) =>
      i18nextInstance.t(key, { ...opts, keyPrefix: options.keyPrefix }),
    i18n: i18nextInstance
  };
}
