// import Button from '../button/Button';

import styles from './underHeader.module.scss';
import sameStyles from '../../styles/same.module.css';
import Button from '../DesygnSystem/button/Button';

const UnderHeader = () => {
    return (
        <section className={sameStyles['container']}>
            <div className={styles['under-header']}>
                <h3 className={styles['under-header-h2']}>Kuratierte & hochwertige Design-Produkte</h3>
                <h1 className={styles['under-header-h1']}>Kaufe ein für Deine Interior-<br /> (Bau)- Projekte</h1>
                <div className={styles['under-header-buttons-wrapper']}>
                    <Button size='medium' 
                            name='Finde Produkte'
                    />
                    <Button size='medium' 
                            outline='outlineWhite'
                            name='Finde Inspirationen'
                    />
                </div>
            </div>
        </section>
    )
}

export default UnderHeader;