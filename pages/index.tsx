import type { NextPage } from 'next'
import AboveHeader from '../components/aboveHeader/AboveHeader'
import CarouselSection from '../components/carouselSection/CarouselSection'
import CarouselSection2 from '../components/carouselSection2/CarouselSection2'
import Companies from '../components/companies/Companies'
import ExclusiveProductSection from '../components/exclusiveProductSection/ExclusivProductSection'
import ExclusiveProductSection2 from '../components/exclusiveProductSection2/ExclusiveProductSection2'
import Footer from '../components/footer/Footer'
import Header from '../components/header/Header'
import MailSection from '../components/mailSection/MailSection'
import ProductsSection from '../components/productsSection/ProductsSection'
import UnderHeader from '../components/underHeader/UnderHeader'
import styles from '../styles/Home.module.css';
import 'antd/dist/antd.css';
import { useEffect, useState } from 'react'

// export const getStaticProps = async () => {
//   const response = await fetch('http://localhost:3000/api/products');
//   const data = await response.json();

//   if(!data){
//     return {
//       notFound: true
//     }
//   }
//   return {
//     props: {
//       products: data
//     }
//   }
// }

const Home: NextPage = ({products  =[] }: any) => {
  const [prod , setProd] = useState([])

  useEffect( ()=> {
     fetch('http://localhost:3000/api/products').then(res => res.json()).then(data => setProd(data))

  })
  return (
    <div className={styles['home-page-container']}>
        <AboveHeader />
        <Header />
        <UnderHeader />
        <ProductsSection products={prod}/>
        <ExclusiveProductSection 
          imageUrl="/Rectangle3.png"
          buttonName="Jetzt als Hersteller bewerben"
          productTitle="Hohe Produktqualität durch sorgfältige Auswahl von Herstellern & Produkten"
        />
        <CarouselSection 
          products={prod}
          title='Neue Produkte & Kollektionen'
        />
        <ExclusiveProductSection2 
        imageUrl="/Rectangle10.png"
        buttonName='Jetzt mit Showroom bewerben'
        productTitle='Showrooms & Händler für Produkte in Deiner Nähe'
        />
        <CarouselSection2 
        products={prod}
          title='Lieblings STYLES der Redaktion'
        />
        <Companies />
        <MailSection />
        <Footer />
    </div>
  )
}



export default Home
