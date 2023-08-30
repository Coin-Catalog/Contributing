import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '../css/contributingHome.module.css'

import Footer from "../lib/components/footer"

import prImage from "../public/images/compare-pr.png"

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta name="description" content="Coin Catalog is filled with coins from through out American history." />
        <title>How to contribute | Coin Catalog</title>
        <link rel="shortcut icon" href="./images/favicon.png" />
      </Head>
      
      <header>
        <h1>How to contribute</h1>
      </header>
      <main>
        <h2>The basics</h2>

        <p>First <a href="https://docs.github.com/en/get-started/quickstart/fork-a-repo">fork</a> one of our <a href="https://github.com/orgs/Coin-Catalog/repositories">many repositories</a>. Then it is preferred that you make a new branch. Then make whatever changes you would like to make! After going to <code>https://github.com/Coin-Catalog/Repository name</code>. Then click the button that says <code>Compare & pull request</code>¹. Then you have opened your PR! Now, don&apost get too happy yet. Your PR will go through at least 1 round of reviews before it is merged into the <code>main</code> branch. The reason you need to stay active is because people may request changes to be made and you will need to either commit the changes or say why you think that is not a good change and we can discuss it.</p>
        
        <br />

        <p>¹That button is in this yellow box shown in the image below.</p>
        <Image 
          src={prImage}
          alt="compare-pull-request" 
          className={`${styles.img}`} 
        />

        <hr />

        <h2>Helpful guides</h2>

        <ul>
          <li className={`${styles.li}`}><a href="https://github.com/Coin-Catalog/Coin-catalog.github.io/wiki/Contribution-guide">Contribution guide</a></li>
          <li className={`${styles.li}`}><a href="https://docs.github.com/en/pull-requests">About PRs</a> in the official GH docs</li>
          <li className={`${styles.li}`}><a href="https://opensource.guide/how-to-contribute/">Guide</a> with tips on how to contribute to <abbr title="Open source">OS</abbr> projects.</li>
        </ul>

        <hr />

        <h2>Good ways to start</h2>
          
        <h3>ISSUES!</h3>
          
        <p>Issues are a great way to know what you should do! You can ask to be assigned to any issue if somebody has not been <a href="https://docs.github.com/en/issues/tracking-your-work-with-issues/assigning-issues-and-pull-requests-to-other-github-users">assigned</a> to the issue yet. You can view a list of the issue pages below.</p>
          
        <ul>
          <li className={`${styles.li}`}><a href="https://github.com/Coin-Catalog/Coin-catalog.github.io/issues">Issues</a> for the 99% of the website</li>
          <li className={`${styles.li}`}><a href="https://github.com/Coin-Catalog/Contributing">Issues</a> for the <code>Contributing</code> repository</li>           
        </ul>

        <h3>Typos</h3>
      
        <p>Typos, spelling mistakes and grammer mistakes will always slip by sometimes. So if you see something wrong with it open a PR to fix it and it will be merged very quickly.</p>
      </main>

      <Footer />
    </>
  )
}