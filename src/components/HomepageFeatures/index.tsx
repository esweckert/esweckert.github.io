import './styles.css';


import { useColorMode } from '@docusaurus/theme-common';

type FeatureItem = {
  title: string;
  src?: string,
  description: JSX.Element,
  demo?: string,
  cssClass?: string,
};


const FeatureList: FeatureItem[] = [
  {
    title: ' Making Enterprise exciting again',
    src: require('@site/static/img/features/google_voice.png').default,
    description: (
      <>
       The new UI is that there is “no UI” – no screen at all. “Voice” is the new UI and the future. See how...
      </>
    ),
    demo: "https://vimeo.com/984170123",
    cssClass: "feature__image_frame"
  },
  {
    title: 'JavaScript für ABAP Entwickler',
    src: require('@site/static/img/features/js-for-abap.png').default,
    description: (
      <>
       My new book project for all german speaking ABAP developers that want to dive into JavaScript. Read it for <strong>FREE</strong> here on Github.
      </>
    ),
    demo: "../../docs/intro",
  },
  {
    title: 'Tutorials',
    src: require('@site/static/img/features/tutorials2.jpg').default,
    description: (
      <>
       Sharing real-life and hands-on experience with the latest SAP products and technologies.
      </>
    ),
    demo: "https://github.com/esweckert/tutorials/blob/main/README.md",
  },
];

function Feature({ title, src, description, demo, cssClass }: FeatureItem) {
  const { colorMode } = useColorMode();
  const light = colorMode === "light";

  return (
    <div className="feature">
      <a href={demo} target="_blank">
          <img className={`feature__image ${cssClass}`} src={src} />
        </a>
        <h2 className="feature__title">{title}</h2>
        <p className="feature__desc">{description}</p>
        
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className="features">
      <div className="features__container mainPageContainer">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
      </div>
    </section>
  );
}