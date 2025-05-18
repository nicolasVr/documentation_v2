import React, {useEffect, useRef} from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import HomepageFeatures2 from '@site/src/components/HomepageFeatures2';
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
                            }),
                        }}
                    />
                </h1>

                <div className={styles.indexCtas}>
                    <Link className="button button--primary" to="https://tibillet.org/">
                        <svg className="margin-right--sm" xmlns="http://www.w3.org/2000/svg" width="20" height="20"
                             viewBox="0 0 64 64">
                            <path fill="#2e3192"
                                  d="M38 54h16c1.977 0 3.657-.446 5.052-1.223L38 40.219V54zm25.66-7.79c.228-1.017.344-2.094.344-3.211v-5h-14.11l13.762 8.211M.35 17.759A14.635 14.635 0 0 0 0 21v5h14.164L.35 17.759zM26 10H10c-1.963 0-3.632.44-5.021 1.206L26 23.746V10zM5.043 52.826C6.419 53.57 8.066 54 10 54h16V40.324L5.043 52.826zM0 38v5c0 1.151.122 2.26.363 3.303L14.282 38H0zm59.115-26.745C57.709 10.457 56.006 10 54 10H38v13.851l21.115-12.596zM64 26v-5c0-1.094-.113-2.149-.332-3.147L50.012 26H64z"/>
                            <path fill="#e6e7e8"
                                  d="m50.012 26l13.656-8.147c-.626-2.864-2.15-5.235-4.553-6.598L38 23.851V10h-2v18h28v-2H50.012zM0 36v2h14.282L.363 46.303c.661 2.855 2.231 5.199 4.68 6.523L26 40.324V54h2V36H0zm64 0H36v18h2V40.219l21.052 12.559c2.421-1.348 3.964-3.706 4.604-6.566L49.894 38H64v-2zM26 10v13.746L4.979 11.206C2.549 12.546.996 14.9.349 17.759L14.164 26H0v2h28V10h-2z"/>
                            <path fill="#be1e2d" d="M36 28V10h-8v18H0v8h28v18h8V36h28v-8z"/>
                            <path fill="#be1e2d"
                                  d="M21.938 26L1.888 14.031c-.431.64-.777 1.344-1.063 2.094L17.372 26h4.563M63.09 48.09L46.277 38h-4.656l20.313 12.219a9.866 9.866 0 0 0 1.156-2.125m-2.371-35.703L37.969 26l4.619.003L62.219 14.25c-.438-.797-.9-1.311-1.5-1.859M1.813 49.875a8.996 8.996 0 0 0 1.609 1.844L26.063 38H21.5L1.813 49.875z"/>
                        </svg>
                        <Translate>
                            English
                        </Translate>
                    </Link>
                    <Link className="button button--info" to="https://tibillet.org/fr/" target="">
                        <svg className="margin-right--sm" xmlns="http://www.w3.org/2000/svg" width="20" height="20"
                             viewBox="0 0 64 64">
                            <path fill="#e6e7e8" d="M22 10h20v44H22z"/>
                            <path fill="#1b75bb" d="M10 10C3.373 10 0 14.925 0 21v22c0 6.075 3.373 11 10 11h12V10H10z"/>
                            <path fill="#ec1c24" d="M52 10H42v44h12c6.627 0 10-4.925 10-11V21c0-6.076-.042-11-12-11"/>
                        </svg>
                        <Translate>
                            Français
                        </Translate>
                    </Link>
                    <Link className="button button--warning" to="https://events.tibillet.coop/tenant/new/">
                        create your own space
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
            description="Federated platform for membership, ticketing, cash register, and cashless solutions.">
            <main>
                <HeroBanner/>
                <HomepageFeatures2/>
                <NewsletterSignup/>
            </main>
        </Layout>
    );
}
