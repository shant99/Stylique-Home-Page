import type { NextPage } from 'next'
import AboveHeader from '../components/aboveHeader/AboveHeader'
import Footer from '../components/footer/Footer'
import Header from '../components/header/Header'
import UnderHeader from '../components/underHeader/UnderHeader'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className={styles['home-page-container']}>
        <AboveHeader />
        <Header />
        <UnderHeader />
        {/* <Footer /> */}
    </div>
  )
}

export default Home
