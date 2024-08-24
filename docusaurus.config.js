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
    favicon: 'img/favicon.ico',

    // Set the production url of your site here
    url: 'https://tibillet.org/',
    // Set the /<baseUrl>/ pathname under which your site is served
    // For GitHub pages deployment, it is often '/<projectName>/'
    baseUrl: '/',
    scripts: [{src: 'https://plausible.codecommun.co/js/script.js', defer: true, 'data-domain': 'tibillet.org'}],

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
                        'https://github.com/TiBillet/documentation/tree/main/tibillet/',
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
                        'https://github.com/TiBillet/documentation/tree/main/tibillet/',
                },
                theme: {
                    customCss: './src/css/custom.css',
                },
            }),
        ],
    ],


    themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
        ({
            // Replace with your project's social card
            image: 'img/tibillet-social-card.jpg',
            navbar: {
                title: 'TiBillet',
                logo: {
                    alt: 'My Site Logo',
                    src: 'img/logoTibMJ5-300.png',
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
                                label: 'Rocket Chat',
                                href: 'https://chat.tiers-lieux.org/channel/TiBillet',
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
