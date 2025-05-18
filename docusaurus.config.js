// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */

const config = {
    title: 'TiBillet',
    tagline: "Outils coopératifs",
    favicon: 'img/design/favicon.svg',

    // Set the production url of your site here
    url: 'https://tibillet.org/',
    // Set the /<baseUrl>/ pathname under which your site is served
    // For GitHub pages deployment, it is often '/<projectName>/'
    baseUrl: '/',
    scripts: [
      {src: 'https://plausible.codecommun.co/js/script.js', defer: true, 'data-domain': 'tibillet.org'},
      // Browser language detection script
      {
        src: '/js/detectBrowserLanguage.js',
        async: true,
      },
    ],


    // Structured data for better SEO
    headTags: [
        {
            tagName: 'script',
            attributes: {
                type: 'application/ld+json',
            },
            innerHTML: JSON.stringify({
                '@context': 'https://schema.org',
                '@type': 'Organization',
                name: 'TiBillet',
                url: 'https://tibillet.org',
                logo: 'https://tibillet.org/img/design/icon-color.svg',
                description: 'TiBillet - Outils coopératifs de billetterie et cashless open source',
                sameAs: [
                    'https://github.com/TiBillet',
                    'https://discord.gg/7FJvtYx',
                    'https://pouet.chapril.org/@tibillet',
                    'https://matrix.to/#/#tibillet:tiers-lieux.org',
                ],
            }),
        },
        // hreflang tags for better multilingual SEO
        {
            tagName: 'link',
            attributes: {
                rel: 'alternate',
                href: 'https://tibillet.org/',
                hreflang: 'en',
            },
        },
        {
            tagName: 'link',
            attributes: {
                rel: 'alternate',
                href: 'https://tibillet.org/fr/',
                hreflang: 'fr',
            },
        },
        {
            tagName: 'link',
            attributes: {
                rel: 'alternate',
                href: 'https://tibillet.org/',
                hreflang: 'x-default',
            },
        },
    ],

    // GitHub pages deployment config.
    // If you aren't using GitHub pages, you don't need these.
    organizationName: 'TiBillet', // Usually your GitHub org/user name.
    projectName: 'documentation_v2', // Usually your repo name.
    trailingSlash: true,

    onBrokenLinks: 'throw',
    onBrokenMarkdownLinks: 'warn',

    // Even if you don't use internationalization, you can use this field to set
    // useful metadata like html lang. For example, if your site is Chinese, you
    // may want to replace "en" with "zh-Hans".
    i18n: {
        defaultLocale: 'en',
        locales: ['en', 'fr'],
        localeConfigs: {
            en: {
                htmlLang: 'en-GB',
            },
            // Vous pouvez omettre une locale (par exemple, fr) si vous n'avez pas besoin de modifier les paramètres par défaut.
            fr: {
                htmlLang: 'fr-FR',
                path: 'fr',
            },
        },
    },

    markdown: {
        mermaid: true,
    },
    presets: [
        [
            'classic',
            /** @type {import('@docusaurus/preset-classic').Options} */
            ({
                docs: {
                    sidebarPath: './sidebars.js',
                    // Please change this to your repo.
                    // Remove this to remove the "edit this page" links.
                    editUrl:
                        'https://github.com/TiBillet/documentation_v2/tree/main',
                },
                blog: {
                    showReadingTime: true,
                    blogTitle: 'Code Commun, le blog.',
                    blogDescription: 'Le blog de la coopérative Code Commun.',
                    postsPerPage: 'ALL',
                    blogSidebarTitle: 'All posts',
                    blogSidebarCount: 'ALL',                    // Please change this to your repo.
                    // Remove this to remove the "edit this page" links.
                    editUrl:
                        'https://github.com/TiBillet/documentation_v2/',
                },
                theme: {
                    customCss: './src/css/custom.css',
                },
                sitemap: {
                    changefreq: 'weekly',
                    priority: 0.5,
                    ignorePatterns: ['/tags/**'],
                    filename: 'sitemap.xml',
                },
            }),
        ],
    ],


    themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
        ({
            // SEO metadata
            metadata: [
                {name: 'keywords', content: 'TiBillet, billetterie, ticketing, cashless, cooperative, open source'},
                {name: 'description', content: 'TiBillet - Outils coopératifs de billetterie et cashless open source'},
                {name: 'twitter:card', content: 'summary_large_image'},
                {name: 'og:type', content: 'website'},
                {name: 'og:title', content: 'TiBillet - Outils coopératifs'},
                {name: 'og:description', content: 'TiBillet - Outils coopératifs de billetterie et cashless open source'},
                {name: 'og:image', content: 'https://tibillet.org/img/design/social-card.png'},
            ],
            // Replace with your project's social card
            image: 'img/design/social-card.png',
            // Algolia DocSearch Configuration
            algolia: {
              // The application ID provided by Algolia
              appId: 'YOUR_APP_ID',
              // Public API key: it is safe to commit it
              apiKey: 'YOUR_SEARCH_API_KEY',
              indexName: 'YOUR_INDEX_NAME',
              // Optional: see doc section below
              contextualSearch: true,
              // Optional: Specify domains where the navigation should occur through window.location instead on history.push. Useful when our Algolia config crawls multiple documentation sites and we want to navigate with window.location.href to them.
              // externalUrlRegex: 'external\\.com|domain\\.com',
              // Optional: Replace parts of the item URLs from Algolia. Useful when using the same search index for multiple deployments using a different baseUrl. You can use regexp or string in the `from` param. For example: localhost:3000 vs myCompany.com/docs
              // replaceSearchResultPathname: {
              //   from: '/docs/', // or as RegExp: /\/docs\//
              //   to: '/',
              // },
              // Optional: Algolia search parameters
              searchParameters: {},
              // Optional: path for search page that enabled by default (`false` to disable it)
              searchPagePath: 'search',
            },
            navbar: {
                title: 'TiBillet',
                logo: {
                    alt: 'TiBillet Logo',
                    src: 'img/design/icon-color.svg',
                },
                items: [
                    {
                        type: 'docSidebar',
                        sidebarId: 'tutorialSidebar',
                        position: 'left',
                        label: 'Présentation',
                    },
                    {to: '/roadmap', label: 'Fonctionnalités', position: 'left'},
                    {
                        type: 'doc',
                        docId: '/category/documentation-utilisateur',
                        position: 'left',
                        label: 'Documentation',
                    },
                    {
                        type: 'localeDropdown',
                        position: 'right',
                    },
                    {
                        href: 'https://github.com/TiBillet',
                        label: 'GitHub',
                        position: 'right',
                    },
                ],
            },
            footer: {
                style: 'dark',
                links: [
                    {
                        title: 'Docs',
                        items: [
                            {
                                label: 'Documentation',
                                to: '/docs/category/documentation-utilisateur',
                            },
                            {
                                label: 'API',
                                to: '/docs/api/intro',
                            },
                        ],
                    },
                    {
                        title: 'Community',
                        items: [
                            {
                                label: 'Discord',
                                href: 'https://discord.gg/7FJvtYx',
                            },
                            {
                                label: 'Mastodon',
                                href: 'https://pouet.chapril.org/@tibillet',
                            },
                            {
                                label: 'Matrix',
                                href: 'https://matrix.to/#/#tibillet:tiers-lieux.org',
                            },
                            {
                                label: 'Mail',
                                href: 'mailto:contact@tibillet.re',
                            }
                        ],
                    },
                    {
                        title: 'More',
                        items: [
                            {
                                label: 'Blog',
                                to: 'https://codecommun.coop/blog/',
                            },
                            {
                                label: 'GitHub',
                                href: 'https://github.com/TiBillet',
                            },
                            {
                                label: 'CGU/CGV',
                                href: '/cgucgv',
                            },
                        ],
                    },
                ],
                copyright: `CC-BY-SA @ ${new Date().getFullYear()} - SCIC TiBillet Coop. Built with Docusaurus. Illustration by undraw.co`,

            },
            prism: {
                theme: prismThemes.github,
                darkTheme: prismThemes.dracula,
            },
            colorMode: {
                defaultMode: 'dark',
                disableSwitch: false,
                respectPrefersColorScheme: true,
            },
        }),
};

export default config;
