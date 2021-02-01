import Head from "next/head";
import Link from "next/link";

import styles from "./layout.module.scss";
import utilStyles from "../styles/utils.module.scss";

import Footer from "./footer";

const name = "Saakshaat Singh";
export const siteTitle = "**Saakshaat** Singh";

export function GeneralPageLayout({ home, children, title }) {
  return (
    <>
      <Head>
        <title>{title ? title : name}</title>
        <meta name="og:title" content={title ? title : name} />
      </Head>
      <div className={styles.container}>
        {home ? (
          <>
            <div>{children}</div>
          </>
        ) : (
          <>
            <div>
              {children}
              <Link href="/">
                <a className={styles.backToHome}>Back to Home</a>
              </Link>
            </div>
          </>
        )}
      </div>
    </>
  );
}

export function GlobalLayout({ children }) {
  return (
    <div>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Saakshaat Singh. SWE. Chair. Baking Bacon Pancakes."
        />
        <meta
          property="og:image"
          content={`https://og-image.now.sh/${encodeURI(
            siteTitle
          )}.png?theme=dark&md=1&fontSize=140px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name="og:title" content={name} />
        <meta name="twitter:card" content="summary_large_image" />
        <title>{name}</title>
      </Head>
      {children}

      <Footer />
    </div>
  );
}