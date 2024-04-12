import styles from "./profile.module.css";
import { profileData as data, socials } from "../data";
import Image from "next/image";

function Header() {
  return (
    <div className={styles.header}>
      <img
        src="/profile/photo.png"
        alt="photo"
        style={{ marginRight: "0.3rem", width: "2.4rem", height: "3.2rem" }}
      />
      <div className={styles.nameContainer}>
        <div className={styles.name}>
          {data.name}
          <br />
          {data.hanzi}
        </div>
        <div className={styles.position}>{data.position}</div>
        <a href={socials.linkedIn} target="_blank">
          <Image
            src="/profile/linkedIn.svg"
            alt="linkedIn"
            width={0}
            height={0}
            className={styles.img}
          />
        </a>
        <a href={socials.whatsApp} target="_blank">
          <Image
            src="/profile/whatsApp.svg"
            alt="whatsApp"
            width={0}
            height={0}
            className={styles.img}
          />
        </a>
      </div>
    </div>
  );
}

function Goal() {
  return (
    <div className={styles.goal}>
      {data.goal.split("|").map((text, index) =>
        index % 2 ? (
          <span key={index} className={styles.highlight}>
            {text}
          </span>
        ) : (
          text
        )
      )}
    </div>
  );
}

function Button() {
  return (
    <div className={styles.buttonContainer}>
      <a href={socials.whatsApp} target="_blank">
        <div className={styles.button}>Connect with me</div>
      </a>
    </div>
  );
}

function Achievements() {
  return (
    <div className={styles.achievements}>
      <div className={styles.title}>Achievements</div>
      <ul>
        {data.achievements.map((achievement, index) => (
          <li key={index}>{achievement}</li>
        ))}
      </ul>
    </div>
  );
}

export default function Profile() {
  return (
    <div className={styles.main}>
      <Header />
      <div className={styles.greeting}>{data.greeting}</div>
      {data.introduction.map((paragraph, index) => (
        <p key={index}>{paragraph}</p>
      ))}
      <Goal />
      {data.closing.map((paragraph, index) => (
        <p key={index}>{paragraph}</p>
      ))}
      <Button />
      <Achievements />
    </div>
  );
}
