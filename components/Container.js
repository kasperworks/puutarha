import Head from 'next/head';
import { useRouter } from 'next/router';
import { motion } from 'framer-motion';

import * as s from '../styles/Layout.styled';
import { Media, MediaContextProvider } from '../lib/media';
import MobileNav from './MobileNav';
import DesktopNav from './DesktopNav';

const mainVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.3,
      // Quintic ease-out for page transitions
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export default function Container(props) {
  const { children, ...customMeta } = props;
  const router = useRouter();
  const meta = {
    title: 'kasper.works / Kasper Viita',
    description: `Numbers, words & JS.`,
    image: '/static/images/sokoshotlankatolta_xs.jpg',
    twitterImage: '/static/images/sokoshotlankatolta_xs.png',
    type: 'website',
    ...customMeta,
  };

  const year = new Date().getFullYear();

  return (
    <>
      <s.SiteBorderStyles>
        <Head>
          <title>{meta.title}</title>
          <meta name="robots" content="follow, index" />
          {/* <meta name="robots" content="noindex" /> */}
          <meta name="theme-color" content="#235353" />
          <meta content={meta.description} name="description" />
          <meta property="og:url" content={`https://kasper.works${router.asPath}`} />
          <link rel="canonical" href={`https://kasper.works${router.asPath}`} />
          <link rel="icon" href="/favicon.ico" sizes="any" />
          <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
          <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
          <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
          <link rel="manifest" href="/site.webmanifest" />
          <meta property="og:type" content={meta.type} />
          <meta property="og:site_name" content="Kasper Viita" />
          <meta property="og:description" content={meta.description} />
          <meta property="og:title" content={meta.title} />
          <meta property="og:image" content={meta.image} />
          <meta name="twitter:card" content="summary" />
          <meta name="twitter:site" content="@kasperviita" />
          <meta name="twitter:title" content={meta.title} />
          <meta name="twitter:description" content={meta.description} />
          <meta name="twitter:image" content={meta.twitterImage} />
          {meta.date && <meta property="article:published_time" content={meta.date} />}
        </Head>
        <s.CenterSection>
          <a href="#skip" className="skip-nav">
            Skip to content
          </a>
          <MediaContextProvider>
            <Media at="sm">
              <MobileNav />
            </Media>
            <Media greaterThanOrEqual="md">
              <DesktopNav />
            </Media>
          </MediaContextProvider>
          <motion.main
            // Key from path needed for transitioning between blog posts using [slug]
            key={router.asPath}
            variants={mainVariants}
            initial="hidden"
            animate="visible"
            id="skip">
            {children}
          </motion.main>
        </s.CenterSection>
      </s.SiteBorderStyles>

      <s.Footer>
        <small>
          <abbr
            title="This site and all its content are licensed under a Creative Commons Attribution-NonCommercial 4.0 International License."
            style={{ cursor: 'help' }}>
            CC BY-NC 4.0
          </abbr>{' '}
          <time>{year}</time> Kasper Viita
        </small>
      </s.Footer>
    </>
  );
}
