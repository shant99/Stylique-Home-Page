import styles from './navMenu.module.scss';
import { v4 } from 'uuid';
import { useState } from 'react';
import Button from '../button/Button';

const menuList = [
    'Neu' , 
    'Shop by STYLE' ,
    'Fliesen'  ,
    'Tapeten'  ,
    'Farben'  ,
    'Teppiche' ,
    'Elektro' ,
    'Turbeschlage' ,
    'Dielen & Parkett' ,
    'Oberflachen' ,
    'Muster'
]

const NavMenu = () => {
    const [buttonIndex , setButtonIndex] = useState<number>(0);

    const buttonClickHandler = (index: number):void => {
        setButtonIndex(index)
    }

    return (<div className={styles['nav-menu-container']}>
            <ul className={styles['nav-menu']}>
                {
                    menuList.map((item,index)=> {
                        return (
                            <li key={v4()}>
                                <Button
                                type='transparent' 
                                click={() => buttonClickHandler(index)}
                                name={item} 
                                active={buttonIndex === index}/>
                            </li>
                        )
                    })
                }
          </ul>
        </div>
    )
}

export default NavMenu