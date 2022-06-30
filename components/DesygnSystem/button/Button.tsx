
import styles from "./button.module.css";
import Clock from '../../icons/Clock'

const buttonStyle = {
  size: ["extraSmall", "small", "medium", "large"],
  icon: ['none' , 'left' , 'right'] ,
  variant: ["Primary"],
};


function Button({
  name = "button",
  size = 'medium' ,
  icon = 'none' ,
  disabled = false
}: any) {
  return (
        <button 
        className={styles['button'] + ' ' + styles[size] + ' ' } 
        disabled={disabled}
        >
          <span>{name}</span>
          <span className={styles['clock'] + ' ' + styles[icon]}><Clock /></span>
        </button>

  );
}

export default Button;
