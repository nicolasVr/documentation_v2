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
                        src={useBaseUrl('/img/logoTibMJ5-300.png')}
                        width="200"
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
                        <Translate>To know more</Translate>
                    </Link>
                    <Link className="button button--info" to="/docs/presentation/demonstration">
                        <Translate>Demonstration</Translate>
                    </Link>
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
            description="Free event and economic tools creating cooperative networks: Cashless, ticketing, blockchain.">
            <main>
                <HeroBanner/>
                <HomepageFeatures/>
            </main>
        </Layout>
    );
}
