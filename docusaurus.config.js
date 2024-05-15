// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'test',
  tagline: 'test',


  // Set the production url of your site here
  url: 'https://khaoula-ben-chaabane.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/deployment-test/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'khaoula-ben-chaabane', // Usually your GitHub org/user name.
  projectName: 'deployment-test', // Usually your repo name.

  onBrokenLinks: 'ignore',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
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
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        //blog: {
          //showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          //editUrl:
          //  'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        //},
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
      image: 'img/tsystems.png',
      navbar: {
        title: 'Overview',
        logo: {
          alt: 'My Site Logo',
          src: 'img/tsystems.png',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Tutorial',
          },
         // {to: '/blog', label: 'Blog', position: 'left'},
          {
            href:'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
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
                label: 'Tutorial',
                to: '/deployment-test/docs/intro',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                "label": "Website",
                "href": "https://www.t-systems.com/de/en"
              },
              {
                "label": "LinkedIn",
                "href": "https://www.linkedin.com/company/t-systems/"
              },
             // {
               // label: 'Twitter',
               // href: 'https://twitter.com/docusaurus',
              //},
            ],
          },
          {
            title: 'More',
            items: [
             // {
               // label: 'Blog',
                // to: '/blog',
              //},
              {
                label: 'GitHub',
                href: 'https://github.com/telekom/create-tsi/tree/main',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} T-Systems.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
