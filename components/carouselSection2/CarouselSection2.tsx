import Carousel from '../carousel/Carousel';
import styles from './carouselSection2.module.scss';

const CarouselSection2 = ({title = 'carousel title' , products = []}) => {
    return (
        <section className={styles['carousel-section2-container']}>
            <div className={styles['carousel-section2']}>
                <h2 className={styles['carousel-section2-title']}>
                    {title}
                </h2>
                <Carousel 
                    arr={products}
                    dots={false}
                />
            </div>
        </section>
    )
}

export default CarouselSection2