import styles from "./wallOfTrust.module.css";
import { WOTData as data } from "../data";

export default function WallOfTrust() {
  return (
    <div className={styles.main}>
      <h2>Wall Of Trust</h2>
      {data.testimonials.map((testimonial, index) => (
        <>
          {index != 0 && <hr />}
          <div className={styles.name}>{testimonial.name},</div>
          <div className={styles.position}>{testimonial.position}</div>
          <div className={styles.content}>“{testimonial.content}”</div>
        </>
      ))}
    </div>
  );
}
