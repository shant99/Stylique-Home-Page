import styles from './headerDesygnSystem.module.scss';
import sameStyles from '../../styles/same.module.css'
import { Row , Col} from 'antd';
import StyliqueLogo from '../icons/Stylique';


function HeaderDesygnSystem(){
    return (
        <section>
            <div >
                <div className={styles['header-desygn-system']}>
                    <div className={styles['col1']} >
                        <StyliqueLogo /> UI Design System
                    </div>
                    <div  className={styles['col2']}>
                        <ul>
                            <li>Inputs</li>
                            <li>Buttons</li>
                            <li>Tabs</li>
                            <li>Checkbox & Radio Buttons</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HeaderDesygnSystem