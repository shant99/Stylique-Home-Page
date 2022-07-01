import Button from "../components/DesygnSystem/button/Button";
import  Input from "../components/DesygnSystem/input/Input";
import HeaderDesygnSystem from "../components/headerDesygnSystem/HeaderDesygnSystem";
import styles from "../styles/designSystem.module.scss";
import sameStyles from '../styles/same.module.css';
import styled from 'styled-components';
import VectorRight from "../components/icons/VectorRight";
import Link from "../components/DesygnSystem/link/Link";
import Trash from "../components/icons/Trash";

const Buttonh2 = styled.h2`
  font-size: 56px;
  font-family: 'EudoxusSansmedium';
`

const DesygnSystem = () => {
  return (
    <div className={styles["desygn-system-container"]}>
      <HeaderDesygnSystem />
      <div className={sameStyles["container"] + ' ' + styles['components']}>
        <div className={styles["components-buttons-wrapper"]}>
          <div className={styles["components-buttons"]}>
          <div className={styles["buttons-default"]}>
            <Button name="Hello World" size="extraSmall" /> <br />
            <Button name="Hello World" size="small" />
            <div className={styles.div}>
              <Button name="Hello World" icon="right" size="small" />
              <Button name="Hello World" icon="left" size="small" />
            </div>{" "}
            <br />
            <Button name="Hello World" size="medium" />
            <div className={styles.div}>
              <Button name="Hello World" icon="right" size="medium" />
              <Button name="Hello World" icon="left" size="medium" />
            </div>{" "}
            <br />
            <Button name="Hello World" size="large" />
            <div className={styles.div}>
              <Button name="Hello World" icon="right" size="large" />
              <Button name="Hello World" icon="left" size="large" />
            </div>{" "}
            <br />
          </div>
          <div className={styles["buttons-disabled"]}>
            <Button name="Hello World" size="extraSmall" disabled={true} />{" "}
            <br />
            <Button name="Hello World" size="small" disabled={true} />
            <div className={styles.div}>
              <Button
                name="Hello World"
                icon="right"
                size="small"
                disabled={true}
              />
              <Button
                name="Hello World"
                icon="left"
                size="small"
                disabled={true}
              />
            </div>{" "}
            <br />
            <Button name="Hello World" size="medium" disabled={true} />
            <div className={styles.div}>
              <Button
                name="Hello World"
                icon="right"
                size="medium"
                disabled={true}
              />
              <Button
                name="Hello World"
                icon="left"
                size="medium"
                disabled={true}
              />
            </div>{" "}
            <br />
            <Button name="Hello World" size="large" disabled={true} />
            <div className={styles.div}>
              <Button
                name="Hello World"
                icon="right"
                size="large"
                disabled={true}
              />
              <Button
                name="Hello World"
                icon="left"
                size="large"
                disabled={true}
              />
            </div>{" "}
            <br />
          </div>
          <div className={styles["buttons-outline-black"]}>
            <Button name="Hello World" size="extraSmall" outline='outlineBlack' />{" "}
            <br />
            <Button name="Hello World" size="small" outline='outlineBlack' />
            <div className={styles.div}>
              <Button
                name="Hello World"
                icon="right"
                size="small"
                outline='outlineBlack'
              />
              <Button
                name="Hello World"
                icon="left"
                size="small"
                outline='outlineBlack'
              />
            </div>{" "}
            <br />
            <Button name="Hello World" size="medium" outline='outlineBlack' />
            <div className={styles.div}>
              <Button
                name="Hello World"
                icon="right"
                size="medium"
                outline='outlineBlack'
              />
              <Button
                name="Hello World"
                icon="left"
                size="medium"
                outline='outlineBlack'
              />
            </div>{" "}
            <br />
            <Button name="Hello World" size="large" outline='outlineBlack' />
            <div className={styles.div}>
              <Button
                name="Hello World"
                icon="right"
                size="large"
                outline='outlineBlack'
              />
              <Button
                name="Hello World"
                icon="left"
                size="large"
                outline='outlineBlack'
              />
            </div>{" "}
            <br />
          </div>
          <div className={styles["buttons-outline-white"]}>
            <Button name="Hello World" size="extraSmall" outline='outlineWhite' />{" "}
            <br />
            <Button name="Hello World" size="small" outline='outlineWhite' />
            <div className={styles.div}>
              <Button
                name="Hello World"
                icon="right"
                size="small"
                outline='outlineWhite'
              />
              <Button
                name="Hello World"
                icon="left"
                size="small"
                outline='outlineWhite'
              />
            </div>{" "}
            <br />
            <Button name="Hello World" size="medium" outline='outlineWhite' />
            <div className={styles.div}>
              <Button
                name="Hello World"
                icon="right"
                size="medium"
                outline='outlineWhite'
              />
              <Button
                name="Hello World"
                icon="left"
                size="medium"
                outline='outlineWhite'
              />
            </div>{" "}
            <br />
            <Button name="Hello World" size="large" outline='outlineWhite' />
            <div className={styles.div}>
              <Button
                name="Hello World"
                icon="right"
                size="large"
                outline='outlineWhite'
              />
              <Button
                name="Hello World"
                icon="left"
                size="large"
                outline='outlineWhite'
              />
            </div>{" "}
            <br />
          </div>
          </div>
        </div>
        <div className={styles["components-buttons-info"]}>
          <Button icon='right' name='Hello World' />
          <Buttonh2>Buttons</Buttonh2>
          <p className={styles["components-buttons-info-p"]}>Buttons are clickable elements that are used to trigger actions. They communicate calls to action to the user and allow users to interact with pages in a variety of ways. Button labels express what action will occur when the user interacts with it.</p>
          <Button name='Check the world'>
            <VectorRight />
          </Button>
          <Link name='Already a member? Sign in' />
        </div>
      <div className={styles["components-inputs-wrapper"]}>
        <div className={styles["components-inputs"]}>
          <div className={styles["default-input"]}>
            <Input name='Hello World'/>
            <Input name='Hello World'/>
            <Input name='Hello World' link="Forgot password?"/>
            <Input name='Hello World' link="Forgot password?"/>
            <Input name='Hello World' link="Forgot password?" error='Incorrect Email Address'/>
            <Input name='Hello World' link="Forgot password?" error='Incorrect Email Address'/>
          </div>
          <div className={styles["disabled-input"]}>
            <Input name='Hello World' dissabled={true}/>
            <Input name='Hello World' dissabled={true}/>
            <Input name='Hello World' link="Forgot password?" dissabled={true}/>
            <Input name='Hello World' link="Forgot password?" dissabled={true}/>
            <Input name='Hello World' link="Forgot password?" error='Incorrect Email Address' dissabled={true}/>
            <Input name='Hello World' link="Forgot password?" error='Incorrect Email Address' dissabled={true}/>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
};

export default DesygnSystem;
