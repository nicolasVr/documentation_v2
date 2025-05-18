// This script detects the browser's language and redirects to the appropriate locale path
(function() {
  // Skip in development mode (when using yarn start)
  if (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1') {
    return;
  }

  // Only run this script on the root path
  if (window.location.pathname !== '/' && !window.location.pathname.endsWith('/index.html')) {
    return;
  }

  // Get the browser's language
  const browserLang = navigator.language || navigator.userLanguage;

  // Extract the primary language code (e.g., 'fr' from 'fr-FR')
  const primaryLang = browserLang.split('-')[0].toLowerCase();

  // Get the current URL
  const currentUrl = window.location.href;
  const baseUrl = window.location.origin;

  // Define the supported locales from the Docusaurus config
  const supportedLocales = ['en', 'fr'];
  const defaultLocale = 'en';

  // Don't redirect if we're already on a localized path
  const currentPath = window.location.pathname;
  for (const locale of supportedLocales) {
    if (currentPath.startsWith(`/${locale}/`)) {
      return;
    }
  }

  // If the browser language is supported and not the default locale, redirect
  if (supportedLocales.includes(primaryLang) && primaryLang !== defaultLocale) {
    window.location.replace(`${baseUrl}/${primaryLang}/`);
  }
})();
