// This script detects the browser's language and redirects to the appropriate locale path
// SEO-friendly version that respects search engines and user preferences
(function() {
  // Skip in development mode (when using yarn start)
  if (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1') {
    return;
  }

  // Only run this script on the root path
  if (window.location.pathname !== '/' && !window.location.pathname.endsWith('/index.html')) {
    return;
  }

  // Function to detect search engine bots
  function isBot() {
    const botPattern = "(googlebot\/|bot|Googlebot-Mobile|Googlebot-Image|Google favicon|Mediapartners-Google|bingbot|slurp|java|wget|curl|Commons-HttpClient|Python-urllib|libwww|httpunit|nutch|phpcrawl|msnbot|jyxobot|FAST-WebCrawler|FAST Enterprise Crawler|biglotron|teoma|convera|seekbot|gigablast|exabot|ngbot|ia_archiver|GingerCrawler|webmon |httrack|webcrawler|grub.org|UsineNouvelleCrawler|antibot|netresearchserver|speedy|fluffy|bibnum.bnf|findlink|msrbot|panscient|yacybot|AISearchBot|IOI|ips-agent|tagoobot|MJ12bot|dotbot|woriobot|yanga|buzzbot|mlbot|yandexbot|purebot|Linguee Bot|Voyager|CyberPatrol|voilabot|baiduspider|citeseerxbot|spbot|twengabot|postrank|turnitinbot|scribdbot|page2rss|sitebot|linkdex|Adidxbot|blekkobot|ezooms|dotbot|Mail.RU_Bot|discobot|heritrix|findthatfile|europarchive.org|NerdByNature.Bot|sistrix crawler|ahrefsbot|Aboundex|domaincrawler|wbsearchbot|summify|ccbot|edisterbot|seznambot|ec2linkfinder|gslfbot|aihitbot|intelium_bot|facebookexternalhit|yeti|RetrevoPageAnalyzer|lb-spider|sogou|lssbot|careerbot|wotbox|wocbot|ichiro|DuckDuckBot|lssrocketcrawler|drupact|webcompanycrawler|acoonbot|openindexspider|gnam gnam spider|web-archive-net.com.bot|backlinkcrawler|coccoc|integromedb|content crawler spider|toplistbot|seokicks-robot|it2media-domain-crawler|ip-web-crawler.com|siteexplorer.info|elisabot|proximic|changedetection|blexbot|arabot|WeSEE:Search|niki-bot|CrystalSemanticsBot|rogerbot|360Spider|psbot|InterfaxScanBot|Lipperhey SEO Service|CC Metadata Scaper|g00g1e.net|GrapeshotCrawler|urlappendbot|brainobot|fr-crawler|binlar|SimpleCrawler|Livelapbot|Twitterbot|cXensebot|smtbot|bnf.fr_bot|A6-Indexer|ADmantX|Facebot|Twitterbot|OrangeBot|memorybot|AdvBot|MegaIndex|SemanticScholarBot|ltx71|nerdybot|xovibot|BUbiNG|Qwantify|archive.org_bot|Applebot|TweetmemeBot|crawler4j|findxbot|SemrushBot|yoozBot|lipperhey|y!j-asr|Domain Re-Animator Bot|AddThis)";
    return new RegExp(botPattern, 'i').test(navigator.userAgent);
  }

  // Skip for search engine bots
  if (isBot()) {
    return;
  }

  // Check if we've already redirected (to prevent redirect loops)
  function getCookie(name) {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop().split(';').shift();
    return null;
  }

  // If we've already set a language preference cookie, respect it
  const langCookie = getCookie('preferredLanguage');
  if (langCookie) {
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

  // If the browser language is supported and not the default locale, redirect after a small delay
  if (supportedLocales.includes(primaryLang) && primaryLang !== defaultLocale) {
    // Set a cookie to remember this redirection
    const expirationDate = new Date();
    expirationDate.setMonth(expirationDate.getMonth() + 1); // Cookie expires in 1 month
    document.cookie = `preferredLanguage=${primaryLang}; expires=${expirationDate.toUTCString()}; path=/; SameSite=Lax`;

    // Add a small delay before redirecting (better for user experience and SEO)
    setTimeout(function() {
      window.location.replace(`${baseUrl}/${primaryLang}/`);
    }, 50);
  }
})();
