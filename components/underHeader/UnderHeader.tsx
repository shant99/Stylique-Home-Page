import Button from '../button/Button';
import styles from './underHeader.module.scss';
import sameStyles from '../../styles/same.module.css';

const UnderHeader = () => {
    return (
        <section className={sameStyles['container']}>
            <div className={styles['under-header']}>
                <h3 className={styles['under-header-h2']}>Kuratierte & hochwertige Design-Produkte</h3>
                <h1 className={styles['under-header-h1']}>Kaufe ein für Deine Interior-<br /> (Bau)- Projekte</h1>
                <div className={styles['under-header-buttons-wrapper']}>
                    <Button type='dark' 
                            name='Finde Produkte'
                    />
                    <Button type='transparent-white' 
                            name='Finde Inspirationen'
                    />
                </div>
            </div>
        </section>
    )
}

export default UnderHeader;