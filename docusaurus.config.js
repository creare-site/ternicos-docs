// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github')
const darkCodeTheme = require('prism-react-renderer/themes/dracula')

require('dotenv').config()
const customFields = {
    EMAILJS_SERVER_ID: process.env.EMAILJS_SERVER_ID,
    EMAILJS_TEMPLATE_ID: process.env.EMAILJS_TEMPLATE_ID,
    EMAILJS_PUBLIC_KEY: process.env.EMAILJS_PUBLIC_KEY,
}

/** @type {import('@docusaurus/types').Config} */
const config = {
    title: 'Ternicos Construct',
    tagline: 'Restaurarea de monumente istorice si de patrimoniu, Reabilitarea fatadelor exterioare',
    favicon: 'img/favicon.png',

    // Set the production url of your site here
    url: 'https://www.docs.ternicos-construct.ro',
    // Set the /<baseUrl>/ pathname under which your site is served
    // For GitHub pages deployment, it is often '/<projectName>/'
    baseUrl: '/',

    // GitHub pages deployment config.
    // If you aren't using GitHub pages, you don't need these.
    organizationName: 'creare-site', // Usually your GitHub org/user name.
    projectName: 'ternicos-docs', // Usually your repo name.
    trailingSlash: false, // for github pages compatibility

    onBrokenLinks: 'throw',
    onBrokenMarkdownLinks: 'warn',

    customFields: { ...customFields },

    // Even if you don't use internalization, you can use this field to set useful
    // metadata like html lang. For example, if your site is Chinese, you may want
    // to replace "en" with "zh-Hans".
    i18n: {
        defaultLocale: 'en',
        locales: ['en'],
    },

    scripts: [
        {
            src: '//cdn.jsdelivr.net/gh/app-generator/sticky-media@0.0.21/dist/index.min.js',
            id: 'stickyVideoScript',
            defer: true,
            class: 'sticky-popup',
        },
    ],

    presets: [
        [
            'classic',
            /** @type {import('@docusaurus/preset-classic').Options} */
            ({
                docs: {
                    routeBasePath: '/',
                    sidebarCollapsible: true,
                    sidebarPath: require.resolve('./sidebars.js'),
                    // Please change this to your repo.
                    // Remove this to remove the "edit this page" links.
                    editUrl:
                        'https://github.com/creare-site/ternicos-docs/tree/main/'
                },
                blog: {
                    showReadingTime: true,
                    // Please change this to your repo.
                    // Remove this to remove the "edit this page" links.
                    editUrl:
                        'https://github.com/creare-site/ternicos-docs/tree/main/',
                },
                theme: {
                    customCss: require.resolve('./src/css/custom.css'),
                },
            }),
        ],
    ],

    themeConfig:
        /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
        ({
            // Replace with your project's social card
            image: 'img/social-card.png',
            navbar: {
                title: '',
                logo: {
                    href: '/',
                    alt: 'TernicosConstruct',
                    src: 'img/logo.png',
                },
                items: [
                    {
                        type: 'doc',
                        docId: 'intro',
                        position: 'left',
                        label: 'Intro',
                    },
                    { to: '/blog', label: 'Blog', position: 'left' },
                    {
                        href: 'https://github.com/creare-site/ternicos-docs',
                        label: 'GitHub',
                        position: 'right',
                    },
                ],
            },
            footer: {
                style: 'dark',
                links: [
                    {
                        title: 'Continut',
                        items: [
                            {
                                label: 'Intro',
                                to: '/',
                            },
                            {
                                label: 'Blog',
                                to: '/blog',
                            },
                        ],
                    },
                    {
                        title: 'Servicii',
                        items: [
                            {
                                label: 'Restaurarea Monumente',
                                href: 'https://ternicos-construct.ro/',
                            },
                            {
                                label: 'Reabilitare Fatade',
                                href: 'https://ternicos-construct.ro/',
                            },
                        ],
                    },
                    {
                        title: 'Link-uri',
                        items: [
                            {
                                label: 'Tel: 0746.064.102',
                                href: 'tel:0746064102',
                            },
                            {
                                label: 'WebsiteMarket',
                                href: 'https://websitemarket.ro/',
                            },
                        ],
                    },
                ],
                copyright: `&copy; Ternicos-Construct - Creat de WebsiteMarket`,
            },
            prism: {
                theme: lightCodeTheme,
                darkTheme: darkCodeTheme,
            },
            algolia: {
                appId: process.env.APPLICATION_ID,
                apiKey: process.env.API_KEY,
                indexName: 'index',
                contextualSearch: true,
                searchParameters: {},
            },
        }),
}

module.exports = config
