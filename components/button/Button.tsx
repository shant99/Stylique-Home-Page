import styles from './button.module.scss';

function Button({
    name = 'button' ,
     type = '' || 'transparent' , 
     active = false , 
     click = undefined}: any){
    const buttonActive = active ? styles[`button-${type}-active`]: styles['']
    return (
        <button 
        onClick={click}
        className={styles[`button-${type}`] + ' ' + buttonActive}>
            {name}
        </button>
    )
}

export default Button