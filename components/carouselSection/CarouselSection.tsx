import Card from '../card/Card';
import Carousel from '../carousel/Carousel';
import styles from './carouselSection.module.scss';

const CarouselSection = ({title = 'carousel title' , products = []}) => {
    return (
        <section className={styles['carousel-section-container']}>
            <div className={styles['carousel-section']}>
                <h2 className={styles['carousel-section-title']}>
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

export default CarouselSection