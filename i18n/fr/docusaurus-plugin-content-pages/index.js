import React, { useEffect, useRef } from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import Translate, {translate} from '@docusaurus/Translate';
import useBaseUrl, {useBaseUrlUtils} from '@docusaurus/useBaseUrl';
import Heading from '@theme/Heading';
import styles from './index.module.css';


function HeroBanner() {
    return (
        <div className={clsx(styles.announcement, styles.announcementDark)}>
            <div className={styles.heroInner}>
                <h1 className={styles.heroProjectTagline}>
                    <img
                        alt={translate({message: ''})}
                        className={styles.heroLogo}
                        src={useBaseUrl('/img/design/logo-couleur.svg')}
                        width="400"
                        height="200"
                    />
                    <span
                        className={styles.heroTitleTextHtml}
                        // eslint-disable-next-line react/no-danger
                        dangerouslySetInnerHTML={{
                            __html: translate({
                                id: 'homepage.hero.title',
                                message:
                                    "Outils <b>évènementiels</b> et économiques <b>libres</b> créateurs de réseaux <b>cooperatifs</b>.",
                                description:
                                    'Titre',
                            }),
                        }}
                    />
                </h1>

                <div className={styles.indexCtas}>
                    <Link className="button button--primary" to="/docs/presentation/introduction">
                        <Translate>En savoir plus</Translate>
                    </Link>
                    <Link className="button button--info" to="/docs/presentation/demonstration">
                        <Translate>Démonstration</Translate>
                    </Link>
                    <Link className="button button--warning" to="https://m.tibillet.coop/tenant/new/">
                        <Translate>Créer son espace</Translate>
                    </Link>
                </div>
            </div>
        </div>
    );
}

function NewsletterSignup() {
    const containerRef = useRef(null);

    useEffect(() => {
        if (containerRef.current) {
            const script = document.createElement('script');
            script.src = "https://cdn.jsdelivr.net/ghost/signup-form@~0.2/umd/signup-form.min.js";
            script.async = true;
            script.setAttribute('data-background-color', '#08090c');
            script.setAttribute('data-text-color', '#FFFFFF');
            script.setAttribute('data-button-color', '#e93363');
            script.setAttribute('data-button-text-color', '#FFFFFF');
            script.setAttribute('data-title', 'Les nouvelles de TiBillet');
            script.setAttribute('data-description', "La boîte à outils d'organisation collective");
            script.setAttribute('data-icon', 'https://ghost.tibillet.coop/content/images/size/w192h192/size/w256h256/2025/02/icon-color.svg');
            script.setAttribute('data-site', 'https://ghost.tibillet.coop/');
            script.setAttribute('data-locale', 'fr');

            containerRef.current.appendChild(script);

            return () => {
                if (containerRef.current && containerRef.current.contains(script)) {
                    containerRef.current.removeChild(script);
                }
            };
        }
    }, []);

    return (
        <div style={{backgroundColor: '#08090c', width: '100%'}} className="margin-top--lg margin-bottom--lg">
            <div className="container">
                <div className="row">
                    <div className="col col--8 col--offset-2">
                        <div ref={containerRef} style={{height: "40vmin", minHeight: "360px"}}></div>
                    </div>
                </div>
            </div>
        </div>
    );
}


export default function Home() {
    const {siteConfig} = useDocusaurusContext();
    return (
        <Layout
            title={`${siteConfig.title}`}
            description="Boîte à outils d'organisation collective : Fédérations d'agendas, de billetteries, d'adhésions associative, de tirelires digitale (cashless), de caisses enregistreuse... Le tout libre et open source !">
            <main>
                <HeroBanner/>
                <HomepageFeatures/>
                <NewsletterSignup/>
            </main>
        </Layout>
    );
}
