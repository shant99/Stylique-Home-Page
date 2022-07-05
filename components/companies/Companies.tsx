import styles from "./companies.module.scss";
import { v4 } from "uuid";
import Jung from "../icons/Jung";
import Mosaico from "../icons/Mosaico";
import ObjectCarpet from "../icons/ObjectCarpet";
import sameStyles from "../../styles/same.module.css";
import { Col, Row, Typography } from "antd";

const companiesIcons: any = [
  <Jung key={v4()} className={styles["Jung-icon"]} />,
  <Mosaico key={v4()} className={styles["Mosaico-icon"]} />,
  <ObjectCarpet key={v4()} className={styles["ObjectCarpet-icon"]} />,
  <Jung key={v4()} className={styles["Jung-icon"]} />,
  <Mosaico key={v4()} className={styles["Mosaico-icon"]} />,
  <ObjectCarpet key={v4()} className={styles["ObjectCarpet-icon"]} />,
];

const Companies: React.FC = () => {
  const { Title } = Typography;
  return (
    <section>
      <Row className={sameStyles["container"]}>
        <Col
          xxl={{ span: 24 }}
          xl={{ span: 24 }}
          lg={{ span: 24 }}
          md={{ span: 24 }}
          sm={{ span: 24 }}
          xs={{ span: 24 }}
          className={styles["companies"]}
        >
          <Title level={2} className={styles["companies-header"]}>
            Unsere Hersteller
          </Title>
          <div className={styles["companies-list"]}>
            {companiesIcons.map((item: any) => {
              return (
                <div key={v4()} className={styles["companie"]}>
                  {item}
                </div>
              );
            })}
          </div>
        </Col>
      </Row>
    </section>
  );
};

export default Companies;
