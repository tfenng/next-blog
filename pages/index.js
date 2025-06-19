import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import Layout, { siteTitle } from '../components/layout';
import Footer from '../components/footer';
import utilStyles from '../styles/utils.module.css';
import { getSortedPostsData } from '../lib/posts';

export async function getStaticProps() {
    const allPostsData = getSortedPostsData();
    const picNum =  Math.floor(Math.random() * 700) + 1;
    return {
        props: {
            allPostsData,
            picNum,
        },
    };
}

export default function Home({ allPostsData,picNum }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
        <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
          <h2 className={utilStyles.headingLg}>Blog</h2>
          <ul className={utilStyles.list}>
              {allPostsData.map(({ id, date, title }) => (
                  <li className={utilStyles.listItem} key={id}>
                      <Link href={`/posts/${id}`}>{title}</Link>
                      <br />
                      <small className={utilStyles.lightText}>{date}</small>
                  </li>
              ))}
          </ul>
      </section>
        <Image src={`https://yavuzceliker.github.io/sample-images/image-${picNum}.jpg`} alt="Picture of random scene" width={640} height={480}/>
        <Footer />
    </Layout>
  );
}
