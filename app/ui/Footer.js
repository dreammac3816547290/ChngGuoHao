import styles from "./footer.module.css";
import { footerData as data, socials } from "../data";

export default function Footer() {
  return (
    <div className={styles.main}>
      <h2 className={styles.header}>{data.header}</h2>
      <div className={styles.content}>{data.content}</div>
      <div className={styles.appointmentContainer}>
        <a href={socials.whatsApp} target="_blank">
          <div className={styles.appointment}>Book an appointment</div>
        </a>
      </div>
    </div>
  );
}
