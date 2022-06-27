import Button from '../button/Button';
import Line from '../icons/Line';
import styles from './mailForm.module.scss';

const InputMail = () => {
      return (
            <div className={styles['input-mail-wrapper']}>      
            <input type="mail" 
                  className={styles['input-mail']}
            />
            <div className={styles['input-mail-line-icon-wrapper']}>
                  <Line />
            </div>
            </div>
      )
}

const MailForm = () => {
    return <div className={styles["mail-form"]}>
          <h2 className={styles["mail-form-title"]}>Jetzt Newsletter abonnieren</h2>
          <h3 className={styles["mail-form-under-title"]}>Abonniere den Newsletter und bestelle Deine nächste <br /> Musterbox versandkostenfrei.</h3>
          <h3 className={styles["mail-form-input-title"]}>E-Mail Adresse</h3>
          <InputMail />
          <Button
            name='Abonnieren'
            type='long-dark'
          />
    </div>;
  };

  export default MailForm