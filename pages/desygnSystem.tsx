import Button from "../components/DesygnSystem/button/Button";
import HeaderDesygnSystem from "../components/headerDesygnSystem/HeaderDesygnSystem";
import styles from "../styles/designSystem.module.scss";

const DesygnSystem = () => {
  return (
    <div className={styles["desygn-system-container"]}>
      <HeaderDesygnSystem />
      <div>
        <Button name="Hello World" size="extraSmall" /> <br />
        <Button name="Hello World" size="small" />
        <div className={styles.div}>
          <Button name="Hello World" icon="right" size="small" />
          <Button name="Hello World" icon="left" size="small" />
        </div> <br />
        <Button name="Hello World" size="medium" />
        <div className={styles.div}>
          <Button name="Hello World" icon="right" size="medium" />
          <Button name="Hello World" icon="left" size="medium" />
        </div> <br />
        <Button name="Hello World" size="large" />
        <div className={styles.div}>
          <Button name="Hello World" icon="right" size="large" />
          <Button name="Hello World" icon="left" size="large" />
        </div> <br />
      </div>

      <div>
        <Button name="Hello World" size="extraSmall" disabled={true}/> <br />
        <Button name="Hello World" size="small" disabled={true} />
        <div className={styles.div}>
          <Button name="Hello World" icon="right" size="small" disabled={true}/>
          <Button name="Hello World" icon="left" size="small" disabled={true}/>
        </div> <br />
        <Button name="Hello World" size="medium" disabled={true} />
        <div className={styles.div}>
          <Button name="Hello World" icon="right" size="medium" disabled={true}/>
          <Button name="Hello World" icon="left" size="medium" disabled={true} />
        </div> <br />
        <Button name="Hello World" size="large" disabled={true}/>
        <div className={styles.div}>
          <Button name="Hello World" icon="right" size="large" disabled={true}/>
          <Button name="Hello World" icon="left" size="large" disabled={true}/>
        </div> <br />
      </div>
    </div>
  );
};

export default DesygnSystem;
