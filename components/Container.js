import Head from 'next/head';
import { useRouter } from 'next/router';
import NextLink from 'next/link';
import * as s from '../styles/Layout.styled';

export default function Container(props) {
  const { children, ...customMeta } = props;
  const router = useRouter();
  const meta = {
    title: 'kasper.works / Kasper Viita',
    description: `Numbers, words & JS.`,
    image:
      'https://images.unsplash.com/photo-1561983818-e339e248ac5c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1494&q=80',
    type: 'website',
    ...customMeta,
  };

  const year = new Date().getFullYear();

  return (
    <>
      <s.SiteBorderStyles>
        <Head>
          <title>{meta.title}</title>
          {/* <meta name="robots" content="follow, index" /> */}
          <meta name="robots" content="noindex" />
          <meta name="theme-color" content="#235353" />
          <meta content={meta.description} name="description" />
          <meta property="og:url" content={`https://kasper.works${router.asPath}`} />
          <link rel="canonical" href={`https://kasper.works${router.asPath}`} />
          <meta property="og:type" content={meta.type} />
          <meta property="og:site_name" content="Kasper Viita" />
          <meta property="og:description" content={meta.description} />
          <meta property="og:title" content={meta.title} />
          <meta property="og:image" content={meta.image} />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:site" content="@kasperviita" />
          <meta name="twitter:title" content={meta.title} />
          <meta name="twitter:description" content={meta.description} />
          <meta name="twitter:image" content={meta.image} />
          {meta.date && <meta property="article:published_time" content={meta.date} />}
        </Head>
        <s.CenterSection>
          <a href="#skip" className="skip-nav">
            Skip to content
          </a>
          <s.NavBar>
            <div>
              <NextLink href="/">
                <a className="internal-link">
                  <em>kasperworks</em>
                </a>
              </NextLink>
            </div>
            <div>
              <NextLink href="/blog">
                <a className="internal-link">
                  <em>Notes</em>
                </a>
              </NextLink>
              <NextLink href="/about">
                <a className="internal-link">
                  <em>About</em>
                </a>
              </NextLink>
            </div>
          </s.NavBar>
          <main id="skip">{children}</main>
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
