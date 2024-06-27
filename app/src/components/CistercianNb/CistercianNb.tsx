import React, { useEffect, useState } from "react";
import { CistercianNbProps } from "../../@types/cistercian-nb";
import { Dizaine } from "../../@types/dizaine";
import { Unite } from "../../@types/unite";
import styles from "./CistercianNb.module.css";

const getStates = (nb: number): Unite => {
  return {
    one: [1, 5, 7, 9].includes(nb),
    two: [2, 8, 9].includes(nb),
    three: [6, 7, 8, 9].includes(nb),
    four: [3].includes(nb),
    five: [4, 5].includes(nb),
  };
};

const CistercianNbComponent: React.FC<CistercianNbProps> = ({ nb }) => {
  const [unite, setUnite] = useState<Unite>({
    one: false,
    two: false,
    three: false,
    four: false,
    five: false,
  });

  const [dizaine, setDizaine] = useState<Dizaine>({
    one: false,
    two: false,
    three: false,
    four: false,
    five: false,
  });

  useEffect(() => {
    const unite = nb % 10;
    const dizaine = Math.floor(nb / 10);
    setUnite(getStates(unite));
    setDizaine(getStates(dizaine));
  }, [nb]);

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="22"
      height="32"
      viewBox="-1 -1 21 31"
      version="1.1"
      className={styles.host}
    >
      <path d="M 10.5,0 v 30" id="middle-bar" />
      <g id="unite">
        <path
          d="M 10,0 h 10"
          id="one"
          style={{ display: unite.one ? "block" : "none" }}
          className={styles.one}
        />
        <path
          d="M 10,10 h 10"
          id="two"
          style={{ display: unite.two ? "block" : "none" }}
          className={styles.two}
        />
        <path
          d="M 20,0 v 10"
          id="three"
          style={{ display: unite.three ? "block" : "none" }}
          className={styles.three}
        />
        <path
          d="M 10,0 l 10,10"
          id="four"
          style={{ display: unite.four ? "block" : "none" }}
          className={styles.four}
        />
        <path
          d="M 20,0 l -10,10"
          id="five"
          style={{ display: unite.five ? "block" : "none" }}
          className={styles.five}
        />
      </g>
      <g id="dizaine" className={styles.dizaine}>
        <path
          d="M 10,0 h 10"
          id="one"
          style={{ display: dizaine.one ? "block" : "none" }}
          className={styles.one}
        />
        <path
          d="M 10,10 h 10"
          id="two"
          style={{ display: dizaine.two ? "block" : "none" }}
          className={styles.two}
        />
        <path
          d="M 20,0 v 10"
          id="three"
          style={{ display: dizaine.three ? "block" : "none" }}
          className={styles.three}
        />
        <path
          d="M 10,0 l 10,10"
          id="four"
          style={{ display: dizaine.four ? "block" : "none" }}
          className={styles.four}
        />
        <path
          d="M 20,0 l -10,10"
          id="five"
          style={{ display: dizaine.five ? "block" : "none" }}
          className={styles.five}
        />
      </g>
    </svg>
  );
};

export default CistercianNbComponent;
