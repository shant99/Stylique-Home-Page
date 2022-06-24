/* eslint-disable jsx-a11y/anchor-is-valid */
// 22
import Maestro from "../icons/Maestro";
import MasterCard from "../icons/MasterCard";
import Visa from "../icons/Visa";
import styles from "./footer.module.scss";
import {v4} from 'uuid'

const arr1 = [
 'Produkte' , 'Inspiration' , 'Magazin' , 'Hersteller' ,
  'Architekten' , 'Händler'
]
const arr2 = [
  'Unsere Mission' , 'Jobs' , 'Events' , 'Für Architekten' , 'Für Hersteller' , 
  'Für Händler'
]
const arr3 = [
  
]

function Footer() {
  return (
    <>
      <div className={styles["footer-container"]}>
        <div className={styles["footer"]}>
          {/* 1 */}
          <ul>
            <li>Was suchst du?</li>
            {arr1.map(item => (<li key={v4()}><a href="#">{item}</a></li>))}
          </ul>
          {/* 2 */}
          <ul>
            <li>Unternehmen</li>
            {arr2.map(item => (<li key={v4()}><a href="#">{item}</a></li>))}
          </ul>
          {/* 3 */}
          <ul>
            <li>Sicher einkaufen</li>
            <li>
              <a href="#">Lieferung & Versand</a>
            </li>
            <li>
              <a href="#">Bezahlmethoden</a>
            </li>
            <li>
            <span>
                <Visa width={67} heigth={21} className="footer-visa-icon" />
              </span>
              <span>
                <Maestro
                  width={66}
                  heigth={36}
                  className="footer-maestro-icon"
                />
              </span>
              <span>
                <MasterCard
                  width={60}
                  height={40}
                  className="footer-masterCard-icon"
                />
              </span>
            </li>
            <br />
            <li>
              <a href="#">AGBs</a>
            </li>
            <li>
              <a href="#">Datenschutz</a>
            </li>
            <li>
              <a href="#">Impressum</a>
            </li>
          </ul>
          {/* 4 */}
          <ul>
            <li>Kundenservice</li>

            <li>
              <a href="#">Du hast Fragen zu Produkten oder zu </a>
            </li>
            <li>
              <a href="#">Deiner Bestellung?</a>
            </li>
            <br />
            <li>
              E-Mail: <a href="mailto:team@stylique.de">team@stylique.de</a>
            </li>
            <li>
              Telefon:
              <a href="tel: +49 211 936 7 50 50"> +49 211 936 7 50 50</a>
            </li>
            <br />
            <li>
              <a href="#">Mo-Sa von 9:00  20:00</a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Footer;