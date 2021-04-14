// import Head from 'next/head'
import Header from '../components/header'
import Beers from '../components/beers';
// import styles from '../styles/Home.module.css'
import Layout from '../components/layout'
import Filters from '../components/filters';
// import {FilterContext} from '../components/filters';


export default function Home() {
  return (
    <div>
      <Layout>
        <Header />
        <Beers />
        {/* <Filters /> */}
      </Layout>
    </div>

  )
}
