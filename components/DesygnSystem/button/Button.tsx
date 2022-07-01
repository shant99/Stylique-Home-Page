
import styles from "./button.module.css";
import Clock from '../../icons/Clock'

const buttonStyle = {
  size: ["extraSmall", "small", "medium", "large"],
  icon: ['none' , 'left' , 'right'] ,
  variant: ["outlineBlack" , 'outlineWhite'],
};


function Button({
  name = "button",
  size = 'medium' ,
  icon = 'none' ,
  disabled = false , 
  outline = '' , 
  children
}: any) {
  return (
        <button 
        className={styles['button'] + ' ' + styles[size] + ' ' + styles[outline]} 
        disabled={disabled}
        >
          <span>{name}</span>
          <span className={styles['clock'] + ' ' + styles[icon]}><Clock /></span>
          {children}
        </button>

  );
}

export default Button;
