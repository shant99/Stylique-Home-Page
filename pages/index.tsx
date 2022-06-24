import type { NextPage } from 'next'
import AboveHeader from '../components/aboveHeader/AboveHeader'
import Companies from '../components/companies/Companies'
import ExclusiveProductSection from '../components/exclusiveProductSection/ExclusivProductSection'
import Footer from '../components/footer/Footer'
import Header from '../components/header/Header'
import ProductsSection from '../components/productsSection/ProductsSection'
import UnderHeader from '../components/underHeader/UnderHeader'
import styles from '../styles/Home.module.css'



const Home: NextPage = ({products}: any) => {

  return (
    <div className={styles['home-page-container']}>
        <AboveHeader />
        <Header />
        <UnderHeader />
        <ProductsSection products={products}/>
        <ExclusiveProductSection 
          imageUrl="/Rectangle3.png"
          buttonName="Jetzt als Hersteller bewerben"
          productTitle="Hohe Produktqualität durch sorgfältige Auswahl von Herstellern & Produkten"
        />
        <ExclusiveProductSection reverse={true}
        imageUrl="/Rectangle10.png"
        buttonName='Jetzt mit Showroom bewerben'
        productTitle='Showrooms & Händler für Produkte in Deiner Nähe'
        />
        <Companies />
        <Footer />
    </div>
  )
}

export const getStaticProps = async () => {
  const response = await fetch('http://localhost:3000/api/products');
  const data = await response.json();
  console.log(data)
  if(!data){
    return {
      notFound: true
    }
  }
  return {
    props: {
      products: data
    }
  }
}

export default Home
