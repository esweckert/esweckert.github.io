import { themes as prismThemes } from 'prism-react-renderer';
import type { Config } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const LATEST_URL_PARTH = "/";

const LATEST_DEPLOYMENT = process.env.DEPLOYMENT_TYPE === "latest";
const DEVELOPMENT_ENVIRONMENT =  process.env.NODE_ENV === "development";

const getBaseURL = () => {
  // localhost
  if (DEVELOPMENT_ENVIRONMENT) {
    return "/";
  } else {
    return LATEST_URL_PARTH
  }
};

const BASE_URL = getBaseURL();

const getFullURL = () => {
  return DEVELOPMENT_ENVIRONMENT ? `${BASE_URL}` : `https://esweckert.github.io${BASE_URL}`
}


const config: Config = {
  title: 'Thomas F Wecker - Resources',
  tagline: 'Prototypes, open-source, tutorials, workshops and other helpful resources by Thomas F Wecker.',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://esweckert.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // github pages makes a redirect to a trailing slash url, which prevents pages from being crawled by google
  trailingSlash: true,

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'esweckert', // Usually your GitHub org/user name.
  projectName: 'esweckert.github.io', // Usually your repo name.

  onBrokenLinks: 'throw',
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
      {
        docs: {
          sidebarPath: './sidebars.ts',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: 'img/wecker_logo_2.jpg',
    colorMode: {
      defaultMode: 'light',
      disableSwitch: true,
    },
    navbar: {
      title: 'Thomas F Wecker',
      logo: {
        alt: 'esweckert logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          label: 'JS für ABAP Entwickler',
          to: '/docs/intro',
        },
        {
          label: 'About',
          href: `${getFullURL()}About`,
          position: "right",
      },
        {
          type: 'custom-GitNavBarItem',
          position: "right",
        },
      ]
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Follow me',
          items: [
            {
              label: 'Twitter',
              href: 'https://x.com/esweckert',
            },
            {
              label: 'LinkedIn',
              href: 'https://linkedin.com/in/esweckert',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/esweckert',
            },
          ],
        },
        {
          title: 'Legal',
          items: [
            {
              label: 'Privacy',
              href: `${getFullURL()}Privacy`,
            },
            {
              label: 'Terms of Use',
              href: `${getFullURL()}Terms`,
            },
          ],
        },
        {
          title: 'Get in touch',
          items: [
            {
              label: 'Book a meeting',
              href: 'https://calendly.com/esweckert/30min',
            },
            {
              label: 'E-Mail',
              href: 'mailto:hej@wecker.dk',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Thomas F Wecker. All rights reserved.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
