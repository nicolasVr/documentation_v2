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
                A suite of free applications for managing your social and solidarity venue : Cash register, 
                membership, ticketing, cashless, time currency, order taking and room management.
            </Translate>
        ),
    },
    {
        title: 'Network Builder',
        Svg: require('@site/static/img/undraw_world_re_768g.svg').default,
        description: (
            <Translate>
                TiBillet connects organizers, audiences and institutions. 
                A single tool for an entire industry and an entire territory : we interoperate more than our software.
            </Translate>
        ),
    },
    {
        title: 'Social and solidarity-based',
        Svg: require('@site/static/img/undraw_share_link_re_54rx.svg').default,
        description: (
            <Translate>
                TiBillet is a community interest company. 
                Join the adventure of a collective and become part of 
                the social and solidarity economy !
            </Translate>
        ),
    },
    {
        title: 'Low Tech',
        Svg: require('@site/static/img/undraw_ride_a_bicycle_re_6tjy.svg').default,
        description: (
            <Translate>
                Use your own existing or DIY equipment! TiBillet is designed to be shared, long-lasting and easily maintainable 
                100% Open Hardware!
            </Translate>
        ),
    },
    {
        title: 'Free & Open Source',
        Svg: require('@site/static/img/undraw_open_source_-1-qxw.svg').default,
        description: (
            <Translate>
                Because we are building a tool that needs your trust, TiBillet's code is regularly audited, 
                published under the free and open-source AGPLv3 license and available on github.
            </Translate>
        ),
    },
    {
        title: "Event makers",
        Svg: require('@site/static/img/undraw_compose_music_re_wpiw.svg').default,
        description: (
            <Translate>
                TiBillet is made for and by cultural associations. Third places, FabLab, festivals, collectives, 
                associations, join a network or create your own !
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
