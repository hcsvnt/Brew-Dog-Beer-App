import Head from 'next/head'
import Header from '../components/header'
import Beers from '../components/beers';
import Layout from '../components/layout'
import Filters from '../components/filters';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Brew Dog Beer App</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Layout>
        <Header />
        <Beers />
        {/* <Filters /> */}
      </Layout>
    </div>
  )
}
