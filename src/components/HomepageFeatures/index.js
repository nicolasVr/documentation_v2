import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';
import Translate, {translate} from '@docusaurus/Translate';

const FeatureList = [
    {
        title: '360°',
        Svg: require('@site/static/img/undraw_report_re_f5n5.svg').default,
        description: (
            <Translate>
                Une suite d'applications libres pour la gestion de votre lieu social et solidaire :
                Caisse enregistreuse, adhésion, billetterie, cashless, monnaie temps, prise de commande et gestion de
                salle.
            </Translate>
        ),
    },
    {
        title: 'Créateur de réseau',
        Svg: require('@site/static/img/undraw_world_re_768g.svg').default,
        description: (
            <Translate>
                TiBillet met en relation organisateurs, publics et institutions.
                Un seul outil pour toute une fillière et tout un territoire : nous intéropérons plus que nos logiciels.
            </Translate>
        ),
    },
    {
        title: 'Social et solidaire',
        Svg: require('@site/static/img/undraw_share_link_re_54rx.svg').default,
        description: (
            <Translate>
                TiBillet est une société coopérative d'intérêt commun. Rejoignez l'aventure d'un collectif et inscrivez
                vous dans
                l'économie sociale et solidaire !
            </Translate>
        ),
    },
    {
        title: 'Low Tech',
        Svg: require('@site/static/img/undraw_ride_a_bicycle_re_6tjy.svg').default,
        description: (
            <Translate>
                Utilisez votre propre matériel existant ou DIY ! TiBillet est conçu pour être mutualisé,
                pérenne et facilement maintenable : 100% Open Hardware !
            </Translate>
        ),
    },
    {
        title: 'Free & Open Source',
        Svg: require('@site/static/img/undraw_open_source_-1-qxw.svg').default,
        description: (
            <Translate>
                Parce que nous constuisons un outil qui à besoin de votre confiance, le code de TiBillet est audité
                régulièrement,
                publié sous la licence libre et open-source AGPLv3 et disponible sur github.
            </Translate>
        ),
    },
    {
        title: "Créateurs d'évènements",
        Svg: require('@site/static/img/undraw_compose_music_re_wpiw.svg').default,
        description: (
            <Translate>
                TiBillet est fabriqué pour et par des associations culturelles. Tiers-lieux, FabLab, festivals,
                collectifs, associations, rejoignez un réseau ou créez le votre !
            </Translate>
        ),
    },
];

function Feature({Svg, title, description}) {
    return (
        <div className={clsx('col col--4')}>
            <div className="text--center">
                <Svg className={styles.featureSvg} role="img"/>
            </div>
            <div className="text--center padding-horiz--md">
                <Heading as="h3">{title}</Heading>
                <p>{description}</p>
            </div>
        </div>
    );
}

export default function HomepageFeatures() {
    return (
        <section className={styles.features}>
            <div className="container">
                <div className="row">
                    {FeatureList.map((props, idx) => (
                        <Feature key={idx} {...props} />
                    ))}
                </div>
            </div>
        </section>
    );
}
