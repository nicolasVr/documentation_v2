import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';
import Translate, {translate} from '@docusaurus/Translate';

// FontAwesome SVG icons as React components
const MembershipIcon = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" fill="currentColor" {...props}>
    {/* Font Awesome Pro 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) */}
    <path d="M528 160V416c0 8.8-7.2 16-16 16H320c0-44.2-35.8-80-80-80H176c-44.2 0-80 35.8-80 80H64c-8.8 0-16-7.2-16-16V160H528zM64 32C28.7 32 0 60.7 0 96v320c0 35.3 28.7 64 64 64H512c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64zM272 256a64 64 0 1 0 -128 0 64 64 0 1 0 128 0zm104-48c-13.3 0-24 10.7-24 24s10.7 24 24 24h80c13.3 0 24-10.7 24-24s-10.7-24-24-24H376zm0 96c-13.3 0-24 10.7-24 24s10.7 24 24 24h80c13.3 0 24-10.7 24-24s-10.7-24-24-24H376z"/>
  </svg>
);

const TicketIcon = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" fill="currentColor" {...props}>
    {/* Font Awesome Pro 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) */}
    <path d="M64 64C28.7 64 0 92.7 0 128v64c0 8.8 7.4 15.7 15.4 18.6C34.9 217.1 48 235 48 256s-13.1 38.9-32.6 45.4C7.4 304.3 0 311.2 0 320v64c0 35.3 28.7 64 64 64H512c35.3 0 64-28.7 64-64V320c0-8.8-7.4-15.7-15.4-18.6C541.1 294.9 528 277 528 256s13.1-38.9 32.6-45.4c8-2.9 15.4-9.8 15.4-18.6V128c0-35.3-28.7-64-64-64H64zm64 112l0 160c0 8.8 7.2 16 16 16H432c8.8 0 16-7.2 16-16V176c0-8.8-7.2-16-16-16H144c-8.8 0-16 7.2-16 16z"/>
  </svg>
);

const CalendarIcon = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" fill="currentColor" {...props}>
    {/* Font Awesome Pro 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) */}
    <path d="M128 0c13.3 0 24 10.7 24 24V64H296V24c0-13.3 10.7-24 24-24s24 10.7 24 24V64h40c35.3 0 64 28.7 64 64v16 48V448c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V192 144 128c0-35.3 28.7-64 64-64h40V24c0-13.3 10.7-24 24-24zM400 192H48V448c0 8.8 7.2 16 16 16H384c8.8 0 16-7.2 16-16V192zM329 297L217 409c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47 95-95c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z"/>
  </svg>
);

const CashRegisterIcon = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor" {...props}>
    {/* Font Awesome Pro 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) */}
    <path d="M64 0C28.7 0 0 28.7 0 64V448c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V64c0-35.3-28.7-64-64-64H64zM176 432h96c8.8 0 16 7.2 16 16s-7.2 16-16 16H176c-8.8 0-16-7.2-16-16s7.2-16 16-16zm-64 16c0-8.8 7.2-16 16-16s16 7.2 16 16-7.2 16-16 16-16-7.2-16-16zm192-16c8.8 0 16 7.2 16 16s-7.2 16-16 16-16-7.2-16-16 7.2-16 16-16zM320 248c0-13.3 10.7-24 24-24h48c13.3 0 24 10.7 24 24v48c0 13.3-10.7 24-24 24H344c-13.3 0-24-10.7-24-24V248zm24 88h48c13.3 0 24 10.7 24 24v48c0 13.3-10.7 24-24 24H344c-13.3 0-24-10.7-24-24V360c0-13.3 10.7-24 24-24zM200 376c0-13.3 10.7-24 24-24h48c13.3 0 24 10.7 24 24v48c0 13.3-10.7 24-24 24H224c-13.3 0-24-10.7-24-24V376zm24-88h48c13.3 0 24 10.7 24 24v48c0 13.3-10.7 24-24 24H224c-13.3 0-24-10.7-24-24V312c0-13.3 10.7-24 24-24zM96 224c0-13.3 10.7-24 24-24h48c13.3 0 24 10.7 24 24v48c0 13.3-10.7 24-24 24H120c-13.3 0-24-10.7-24-24V224zm24 88h48c13.3 0 24 10.7 24 24v48c0 13.3-10.7 24-24 24H120c-13.3 0-24-10.7-24-24V336c0-13.3 10.7-24 24-24zm80-208c0-8.8 7.2-16 16-16h96c8.8 0 16 7.2 16 16s-7.2 16-16 16H216c-8.8 0-16-7.2-16-16z"/>
  </svg>
);

const CreditCardIcon = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" fill="currentColor" {...props}>
    {/* Font Awesome Pro 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) */}
    <path d="M64 32C28.7 32 0 60.7 0 96v32H576V96c0-35.3-28.7-64-64-64H64zM576 224H0V416c0 35.3 28.7 64 64 64H512c35.3 0 64-28.7 64-64V224zM112 352h64c8.8 0 16 7.2 16 16s-7.2 16-16 16H112c-8.8 0-16-7.2-16-16s7.2-16 16-16zm112 16c0-8.8 7.2-16 16-16H368c8.8 0 16 7.2 16 16s-7.2 16-16 16H240c-8.8 0-16-7.2-16-16z"/>
  </svg>
);

const ClockIcon = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor" {...props}>
    {/* Font Awesome Pro 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) */}
    <path d="M256 0a256 256 0 1 1 0 512A256 256 0 1 1 256 0zM232 120V256c0 8 4 15.5 10.7 20l96 64c11 7.4 25.9 4.4 33.3-6.7s4.4-25.9-6.7-33.3L280 243.2V120c0-13.3-10.7-24-24-24s-24 10.7-24 24z"/>
  </svg>
);

const CodeIcon = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" fill="currentColor" {...props}>
    {/* Font Awesome Pro 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) */}
    <path d="M392.8 1.2c-17-4.9-34.7 5-39.6 22l-128 448c-4.9 17 5 34.7 22 39.6s34.7-5 39.6-22l128-448c4.9-17-5-34.7-22-39.6zm80.6 120.1c-12.5 12.5-12.5 32.8 0 45.3L562.7 256l-89.4 89.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l112-112c12.5-12.5 12.5-32.8 0-45.3l-112-112c-12.5-12.5-32.8-12.5-45.3 0zm-306.7 0c-12.5-12.5-32.8-12.5-45.3 0l-112 112c-12.5 12.5-12.5 32.8 0 45.3l112 112c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256l89.4-89.4c12.5-12.5 12.5-32.8 0-45.3z"/>
  </svg>
);

const CreditCardAltIcon = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" fill="currentColor" {...props}>
    {/* Font Awesome Pro 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) */}
    <path d="M512 80c8.8 0 16 7.2 16 16v32H48V96c0-8.8 7.2-16 16-16H512zm16 144V416c0 8.8-7.2 16-16 16H64c-8.8 0-16-7.2-16-16V224H528zM64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H512c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64zm56 304c-13.3 0-24 10.7-24 24s10.7 24 24 24h48c13.3 0 24-10.7 24-24s-10.7-24-24-24H120zm128 0c-13.3 0-24 10.7-24 24s10.7 24 24 24H360c13.3 0 24-10.7 24-24s-10.7-24-24-24H248z"/>
  </svg>
);

const GearIcon = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor" {...props}>
    {/* Font Awesome Pro 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) */}
    <path d="M495.9 166.6c3.2 8.7 .5 18.4-6.4 24.6l-43.3 39.4c1.1 8.3 1.7 16.8 1.7 25.4s-.6 17.1-1.7 25.4l43.3 39.4c6.9 6.2 9.6 15.9 6.4 24.6c-4.4 11.9-9.7 23.3-15.8 34.3l-4.7 8.1c-6.6 11-14 21.4-22.1 31.2c-5.9 7.2-15.7 9.6-24.5 6.8l-55.7-17.7c-13.4 10.3-28.2 18.9-44 25.4l-12.5 57.1c-2 9.1-9 16.3-18.2 17.8c-13.8 2.3-28 3.5-42.5 3.5s-28.7-1.2-42.5-3.5c-9.2-1.5-16.2-8.7-18.2-17.8l-12.5-57.1c-15.8-6.5-30.6-15.1-44-25.4L83.1 425.9c-8.8 2.8-18.6 .3-24.5-6.8c-8.1-9.8-15.5-20.2-22.1-31.2l-4.7-8.1c-6.1-11-11.4-22.4-15.8-34.3c-3.2-8.7-.5-18.4 6.4-24.6l43.3-39.4C64.6 273.1 64 264.6 64 256s.6-17.1 1.7-25.4L22.4 191.2c-6.9-6.2-9.6-15.9-6.4-24.6c4.4-11.9 9.7-23.3 15.8-34.3l4.7-8.1c6.6-11 14-21.4 22.1-31.2c5.9-7.2 15.7-9.6 24.5-6.8l55.7 17.7c13.4-10.3 28.2-18.9 44-25.4l12.5-57.1c2-9.1 9-16.3 18.2-17.8C227.3 1.2 241.5 0 256 0s28.7 1.2 42.5 3.5c9.2 1.5 16.2 8.7 18.2 17.8l12.5 57.1c15.8 6.5 30.6 15.1 44 25.4l55.7-17.7c8.8-2.8 18.6-.3 24.5 6.8c8.1 9.8 15.5 20.2 22.1 31.2l4.7 8.1c6.1 11 11.4 22.4 15.8 34.3zM256 336a80 80 0 1 0 0-160 80 80 0 1 0 0 160z"/>
  </svg>
);

const AwardIcon = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" fill="currentColor" {...props}>
    {/* Font Awesome Pro 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) */}
    <path d="M173.8 5.5c11-7.3 25.4-7.3 36.4 0L228 17.2c6 3.9 13 5.8 20.1 5.4l21.3-1.3c13.2-.8 25.6 6.4 31.5 18.2l9.6 19.1c3.2 6.4 8.4 11.5 14.7 14.7L344.5 83c11.8 5.9 19 18.3 18.2 31.5l-1.3 21.3c-.4 7.1 1.5 14.2 5.4 20.1l11.8 17.8c7.3 11 7.3 25.4 0 36.4L366.8 228c-3.9 6-5.8 13-5.4 20.1l1.3 21.3c.8 13.2-6.4 25.6-18.2 31.5l-19.1 9.6c-6.4 3.2-11.5 8.4-14.7 14.7L301 344.5c-5.9 11.8-18.3 19-31.5 18.2l-21.3-1.3c-7.1-.4-14.2 1.5-20.1 5.4l-17.8 11.8c-11 7.3-25.4 7.3-36.4 0L156 366.8c-6-3.9-13-5.8-20.1-5.4l-21.3 1.3c-13.2 .8-25.6-6.4-31.5-18.2l-9.6-19.1c-3.2-6.4-8.4-11.5-14.7-14.7L39.5 301c-11.8-5.9-19-18.3-18.2-31.5l1.3-21.3c.4-7.1-1.5-14.2-5.4-20.1L5.5 210.2c-7.3-11-7.3-25.4 0-36.4L17.2 156c3.9-6 5.8-13 5.4-20.1l-1.3-21.3c-.8-13.2 6.4-25.6 18.2-31.5l19.1-9.6C65 70.2 70.2 65 73.4 58.6L83 39.5c5.9-11.8 18.3-19 31.5-18.2l21.3 1.3c7.1 .4 14.2-1.5 20.1-5.4L173.8 5.5zM272 192a80 80 0 1 0 -160 0 80 80 0 1 0 160 0zM1.3 441.8L44.4 339.3c.2 .1 .3 .2 .4 .4l9.6 19.1c11.7 23.2 36 37.3 62 35.8l21.3-1.3c.2 0 .5 0 .7 .2l17.8 11.8c5.1 3.3 10.5 5.9 16.1 7.7l-37.6 89.3c-2.3 5.5-7.4 9.2-13.3 9.7s-11.6-2.2-14.8-7.2L74.4 455.5l-56.1 8.3c-5.7 .8-11.4-1.5-15-6s-4.3-10.7-2.1-16zm248 60.4L211.7 413c5.6-1.8 11-4.3 16.1-7.7l17.8-11.8c.2-.1 .4-.2 .7-.2l21.3 1.3c26 1.5 50.3-12.6 62-35.8l9.6-19.1c.1-.2 .2-.3 .4-.4l43.2 102.5c2.2 5.3 1.4 11.4-2.1 16s-9.3 6.9-15 6l-56.1-8.3-32.2 49.2c-3.2 5-8.9 7.7-14.8 7.2s-11-4.3-13.3-9.7z"/>
  </svg>
);

const FeatureList = [
    {
        title: <Translate>Adhésion associatives et abonnement</Translate>,
        Svg: MembershipIcon,
        description: (
            <Translate>
                Gérez facilement les adhésions à votre association et proposez des abonnements à vos membres.
                Suivez les renouvellements et offrez des avantages exclusifs.
            </Translate>
        ),
    },
    {
        title: <Translate>Billetterie</Translate>,
        Svg: TicketIcon,
        description: (
            <Translate>
                Événements gratuits et payants avec prix préférentiels pour les adhérents.
                Gérez vos ventes de billets en toute simplicité.
            </Translate>
        ),
    },
    {
        title: <Translate>Agenda fédéré</Translate>,
        Svg: CalendarIcon,
        description: (
            <Translate>
                Créez un agenda partagé et choisissez les lieux avec qui partager vos événements.
                Fédérez votre programmation avec d'autres structures culturelles.
            </Translate>
        ),
    },
    {
        title: <Translate>Caisse enregistreuse</Translate>,
        Svg: CashRegisterIcon,
        description: (
            <Translate>
                Caisse enregistreuse avec certification en cours.
                Solution complète pour gérer vos ventes sur place.
            </Translate>
        ),
    },
    {
        title: <Translate>Système de cashless</Translate>,
        Svg: CreditCardIcon,
        description: (
            <Translate>
                Système de cashless comme en festival, avec vérification de l'adhésion sur la carte et la caisse enregistreuse.
                Carte cashless valable à vie et utilisable dans plusieurs lieux et festivals.
            </Translate>
        ),
    },
    {
        title: <Translate>Monnaie temps et valorisation</Translate>,
        Svg: ClockIcon,
        description: (
            <Translate>
                Système de monnaie temps, cadeau et de valorisation de bénévoles.
                Reconnaissez et récompensez l'engagement de votre communauté.
            </Translate>
        ),
    },
    {
        title: <Translate>Alternative libre</Translate>,
        Svg: CodeIcon,
        description: (
            <Translate>
                Alternative libre et open source à HelloAsso, Weezevent, Billetweb, etc.
                Reprenez le contrôle de vos données et de vos outils.
            </Translate>
        ),
    },
    {
        title: <Translate>Carte cashless universelle</Translate>,
        Svg: CreditCardAltIcon,
        description: (
            <Translate>
                Carte cashless valable à vie et utilisable dans plusieurs lieux et festivals.
                Une seule carte pour tous vos événements préférés.
            </Translate>
        ),
    },
    {
        title: <Translate>Gratuit et personnalisable</Translate>,
        Svg: GearIcon,
        description: (
            <Translate>
                Tout gratuit et hautement personnalisable : on adore les retours utilisateurs.
                Adaptez la plateforme à vos besoins spécifiques.
            </Translate>
        ),
    },
    {
        title: <Translate>Lauréat Ministère de la culture</Translate>,
        Svg: AwardIcon,
        description: (
            <Translate>
                Lauréat de l'appel à projet Billetterie innovante du Ministère de la culture.
                Une solution reconnue pour son innovation et sa qualité.
            </Translate>
        ),
    },
];

function Feature({Svg, title, description, index}) {
    // Get the title text for use in aria-label and alt text
    const titleText = typeof title === 'object' ? title.props.children : title;

    return (
        <article className={clsx('col col--4')} 
                 itemScope 
                 itemType="https://schema.org/Service"
                 aria-labelledby={`feature-title-${index}`}>
            <div className="text--center">
                <Svg className={styles.featureSvg} 
                     role="img" 
                     aria-label={titleText} 
                     alt={`Icon for ${titleText}`}/>
            </div>
            <div className="text--center padding-horiz--md">
                <Heading as="h3" id={`feature-title-${index}`} itemProp="name">{title}</Heading>
                <p itemProp="description">{description}</p>
            </div>
        </article>
    );
}

export default function HomepageFeatures2() {
    return (
        <section className={styles.features} aria-label="TiBillet Features">
            <div className="container">
                <header className="text--center margin-bottom--lg">
                    <Heading as="h2" className="margin-bottom--md">
                        <Translate>TiBillet Features</Translate>
                    </Heading>
                    <p>
                        <Translate>
                            Discover all the features that make TiBillet a complete solution for your organization
                        </Translate>
                    </p>
                </header>
                <div className="row">
                    {FeatureList.map((props, idx) => (
                        <Feature key={idx} index={idx} {...props} />
                    ))}
                </div>
            </div>
        </section>
    );
}
