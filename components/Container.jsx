import Head from "next/head";
import { useRouter } from "next/router";
import { motion } from "framer-motion";

import MobileNav from "./MobileNav";
import DesktopNav from "./DesktopNav";

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
    title: "kasper.works / Kasper Viita",
    description: `Numbers, words & JS.`,
    image: "/static/images/sokoshotlankatolta_xs.jpg",
    twitterImage: "/static/images/sokoshotlankatolta_xs.png",
    type: "website",
    ...customMeta,
  };

  const year = new Date().getFullYear();

  return (
    <>
      <div className="site-wrapper mx-auto mt-0 mb-8 flex min-h-screen w-full max-w-[1232px] flex-col items-center bg-background py-2 shadow-[0_0_5px_3px_rgba(0,0,0,0.45)]">
        <Head>
          <title>{meta.title}</title>
          <meta name="robots" content="follow, index" />
          {/* <meta name="robots" content="noindex" /> */}
          <meta name="theme-color" content="#235353" />
          <meta content={meta.description} name="description" />
          <meta
            property="og:url"
            content={`https://kasper.works${router.asPath}`}
          />
          <link rel="canonical" href={`https://kasper.works${router.asPath}`} />
          <link rel="icon" href="/favicon.ico" sizes="any" />
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="/favicon-32x32.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="/favicon-16x16.png"
          />
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
          {meta.date && (
            <meta property="article:published_time" content={meta.date} />
          )}
        </Head>
        <div className="w-full max-w-[780px] overflow-x-hidden px-6  py-0">
          <a href="#skip" className="absolute top-[-50px] text-xs">
            Skip to content
          </a>
          <DesktopNav />
          <MobileNav />
          <motion.main
            // Key from path needed for transitioning between blog posts using [slug]
            key={router.asPath}
            variants={mainVariants}
            initial="hidden"
            animate="visible"
            id="skip"
          >
            {children}
          </motion.main>
        </div>
      </div>

      <div className="mx-4 mt-0 mb-4 flex items-baseline justify-center text-grey">
        <small className="block">
          <abbr
            title="This site and all its content are licensed under a Creative Commons Attribution-NonCommercial 4.0 International License."
            style={{ cursor: "help" }}
          >
            CC BY-NC 4.0
          </abbr>{" "}
          <time>{year}</time> Kasper Viita
        </small>
      </div>
    </>
  );
}
