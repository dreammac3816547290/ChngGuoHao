import styles from "./goldenNuggets.module.css";
import { goldenData as data } from "../data";
import Image from "next/image";

function Highlight({ text }) {
  return (
    <span className={styles.text}>
      {text.split("|").map((part, index) =>
        index % 2 ? (
          <span key={index} className={styles.highlight}>
            {part}
          </span>
        ) : (
          part
        )
      )}
    </span>
  );
}

function Paragraph({ texts }) {
  return texts.map((text, index) => (
    <div key={index} className={index != texts.length - 1 && styles.paragraph}>
      {text}
    </div>
  ));
}

const autoImg = {
  width: "100%",
  height: "auto",
};

function Risk() {
  const data_ = data.risk;
  return (
    <div className={styles.section}>
      <h3>{data_.title}</h3>
      <div className={styles.riskContainer}>
        <div className={styles.riskText}>
          <Paragraph texts={data_.content} />
        </div>
        <div className={styles.riskImg}>
          <Image
            src="/goldenNuggets/risk.png"
            alt="death receipt"
            width={280}
            height={320}
            style={autoImg}
          />
        </div>
      </div>
    </div>
  );
}

function Interest() {
  const data_ = data.interest;
  const content = [
    data_.slogan,
    <Highlight text={data_.quote} />,
    data_.outcome,
  ];
  return (
    <div className={styles.section}>
      <h3>{data_.title}</h3>
      <div className={styles.interestContainer}>
        <div className={styles.interestImg}>
          <Image
            src="/goldenNuggets/interest.png"
            alt="investment return based on age"
            width={400}
            height={300}
            style={autoImg}
          />
          <div className={styles.source}>{data_.source}</div>
        </div>
        <div className={styles.interestText}>
          <Paragraph texts={content} />
        </div>
      </div>
    </div>
  );
}

function Healthcare() {
  const data_ = data.healthcare;

  function MediSave() {
    const data__ = data_.mediSave;
    const content = [data__.opening, data__.closing];
    return (
      <div className={styles.healthcareSection}>
        <h4>
          <li>{data__.title}</li>
        </h4>
        <div className={styles.healthcareContent}>
          <Paragraph texts={content} />
        </div>
      </div>
    );
  }

  function MediShield() {
    const data__ = data_.mediShield;
    const content = [
      data__.opening,
      <div className={styles.text}>{data__.middle.header}</div>,
      <ul>
        {data__.middle.content.map((text, index) => (
          <li key={index} style={{ listStyleType: "disc" }}>
            {<Highlight text={text} />}
          </li>
        ))}
      </ul>,
      data__.closing,
    ];
    return (
      <div className={styles.healthcareSection}>
        <h4>
          <li>{data__.title}</li>
        </h4>
        <div className={styles.healthcareContent}>
          <Paragraph texts={content} />
        </div>
      </div>
    );
  }

  function CareShield() {
    const data__ = data_.careShield;
    const content = [
      data__.opening,
      <Highlight text={data__.middle} />,
      data__.closing,
    ];
    return (
      <div className={styles.healthcareSection}>
        <h4>
          <li>{data__.title}</li>
        </h4>
        <div className={styles.healthcareContent}>
          <Paragraph texts={content} />
        </div>
      </div>
    );
  }

  return (
    <div className={styles.section}>
      <h3>{data_.title}</h3>
      <div className={styles.healthcareContainer}>
        <div className={styles.healthcareImg}>
          <Image
            src="/goldenNuggets/healthcare-1.png"
            alt="singapore's national healthcare schemes"
            width={400}
            height={350}
            style={autoImg}
          />
        </div>
        <div className={styles.healthcareImg}>
          <Image
            src="/goldenNuggets/healthcare-2.png"
            alt="careshield life supplement plan"
            width={400}
            height={350}
            style={autoImg}
          />
        </div>
      </div>
      <div className={styles.source}>{data_.source}</div>
      <div className={styles.healthcareHeader}>{data_.header}</div>
      <ol>
        <MediSave />
        <MediShield />
        <CareShield />
      </ol>
    </div>
  );
}

export default function GoldenNuggets() {
  return (
    <div className={styles.main}>
      <h2>{data.title}</h2>
      <Risk />
      <hr />
      <Interest />
      <hr />
      <Healthcare />
    </div>
  );
}
