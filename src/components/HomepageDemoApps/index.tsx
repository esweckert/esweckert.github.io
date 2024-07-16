import clsx from 'clsx';
import Heading from '@theme/Heading';
import './styles.css';

type Item = {
  title: string,
  desc: string,
  Svg?: React.ComponentType<React.ComponentProps<'svg'>>;
  repository: string,
  demo: string,
}

const DemoAppList: Array<Item> = [
  {
    title: "Product Transfer App",
    desc: "App to trigger API transfer of products from a central instance to SAP S/4HANA",
    Svg: require('@site/static/img/demo-apps/image1.svg').default,
    repository: "https://github.com/esweckert/demo_fiori_wizard",
    demo: "https://esweckert.github.io/demo_fiori_wizard/#app-tile",
  },
  {
    title: "Stock Comparison",
    desc: "App to trigger API transfer of products from a central instance to SAP S/4HANA",
    Svg: require('@site/static/img/demo-apps/image2.svg').default,
    repository: "https://github.com/SAP-samples/ui5-webcomponents-sample-react",
    demo: "https://sap-samples.github.io/ui5-webcomponents-sample-react/",
  },
  {
    title: "Excel Upload of Products",
    desc: "App to trigger API transfer of products from a central instance to SAP S/4HANA",
    Svg: require('@site/static/img/demo-apps/image3.svg').default,
    repository: "https://github.com/SAP-samples/ui5-webcomponents-sample-vue",
    demo: "https://sap-samples.github.io/ui5-webcomponents-sample-vue/",
  },
  {
    title: "Clearing stock differences",
    desc: "App to trigger API transfer of products from a central instance to SAP S/4HANA",
    Svg: require('@site/static/img/demo-apps/image4.svg').default,
    repository: "https://github.com/SAP-samples/ui5-webcomponents-sample-svelte",
    demo: "https://sap-samples.github.io/ui5-webcomponents-sample-svelte/",
  },
];


const DemoApp = ({ title, desc, Svg, repository, demo }: Item) => {
  return (
    <div className="demo-apps__framework">
      <h2 className="demo-apps__subtitle">{title}</h2>
      <p className="demo-apps__subdesc">{desc}</p>
      <Svg className="demo-apps__logo" />
      <a href={repository} className="demo-apps__link">Explore the Code</a>
      <a href={demo} className="demo-apps__link">Run the Demo App</a>
    </div>
  );
}

export default function HomepageDemoApps(): JSX.Element {
  return (
    <article className="demo-apps mainPageContainer">
      <div className="demo-apps__heading">
        <h2 className="demo-apps__title">Transforming Business Through Design</h2>
        <p className="demo-apps__desc">Working closely with my clients to bring out the value and impact of user experience and design as key driver for their digital transformation journey.</p>
      </div>
      <div className="demo-apps__frameworks">
        {DemoAppList.map((props, idx) => (
          <DemoApp key={idx} {...props} />
        ))}
      </div>
    </article>
  );
}