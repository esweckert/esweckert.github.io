import clsx from 'clsx';
import Link from '@docusaurus/Link';
import { useColorMode } from '@docusaurus/theme-common';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import HomepageDemoApps from '@site/src/components/HomepageDemoApps';

import Heading from '@theme/Heading';
import LogoMain from "@site/static/img/logo.svg";

import styles from './index.module.css';

function Logo(props: { colorMode: string }) {
  return (
    <LogoMain className={styles.logoMain} />
  );
} 

function HomepageHeader() {
  const { colorMode } = useColorMode();

  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div  className={clsx('container', styles.container)}>
        <Logo colorMode={colorMode} />
        <Heading as="h1" className={clsx('hero__title', styles.heroTitle)}>
          <span className={styles.heroTitle__UI5}>#esweckert</span> .resources
        </Heading>
        Prototypes, open-source, tutorials, workshops and other helpful resources by Thomas F Wecker.
        <p className={clsx('hero__subtitle', styles.heroSubtitle)}>
         Prototypes, open-source, tutorials, workshops and other helpful resources by <span className={styles.hero__subtitle__part1}><b>Thomas F Wecker</b></span>!
        </p>

      </div>
    </header>
  );
}

/** 
function Banner() {
  return (
    <div className="alert alert--info" role="alert" style={{fontSize: "1.5rem", textAlign: "center"}}>
        🎉&nbsp;<b>SAPUI5 XLSX re-use library released !</b>
          <div>Discover <b><a href="https://github.com/esweckert/xlsx-reuselibrary/"> and download for FREE!
            </a></b>&nbsp;🎉
          </div>
    </div>
  );
} */

export default function Home(): JSX.Element {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
        <HomepageDemoApps />
      </main>

    </Layout>
  );
}
