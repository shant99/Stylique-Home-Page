import styles from "./input.module.css";
import Link from "../link/Link";

function Input({ 
  type = "text", 
  name = "input name" ,
    link = '' ,
    error = '' , 
    dissabled = false
}) {
  return (
    <div className={styles['input-wrapper']} >
      <div className={styles['above-input']}>
        <span className={styles['above-input-name'] + ' ' + styles[dissabled] }>{name}</span>      
        <Link name={link} dissabled={dissabled}/>
      </div>
      <input type={type} 
        className={styles['input']}
        disabled={dissabled}
      />
      <p className={styles['input-error']}>{error}</p>
    </div>
  );
}

export default Input;
