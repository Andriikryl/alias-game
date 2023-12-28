"use client";
import { Container } from "@/components/container/Container";
import TsPage from "@/components/tsPage/TsPage";
import React, { useState } from "react";
import styles from "./styles.module.css";
import clsx from "clsx";
import { NumberBlock } from "@/components/numberBlock/NumberBlock";

const data = [
  {
    id: 1,
    title: "Hello",
  },
  {
    id: 2,
    title: "Word",
  },
  {
    id: 3,
    title: "Tabel",
  },
  {
    id: 4,
    title: "Welcome",
  },
];

export default function Play() {
  const [current, setCurrent] = useState(0);
  const [answered, setAnswered] = useState(0);
  const [missed, setMissed] = useState(0);
  const handelClickSkip = () => {
    setCurrent((prev) => prev + 1);
    setMissed((prev) => prev + 1);
  };
  const handelClickUnser = () => {
    setCurrent((prev) => prev + 1);
    setAnswered((prev) => prev + 1);
  };
  return (
    <TsPage Color={"#a2d2ff"}>
      <section className={styles.play}>
        <Container>
          <div className={styles.play__box}>
            <h1 className={styles.play_title}>Play page</h1>
            <div className={styles.word__block}>
              <p className={styles.word}>{data[current].title}</p>
            </div>
            <div className={styles.score__group}>
              <NumberBlock value={answered} className={styles.answered} />
              <NumberBlock value={missed} className={styles.missed}/>
            </div>
            <div className={styles.btn__group}>
              <button
                className={clsx(styles.control__btn, styles.skip__btn)}
                onClick={handelClickSkip}
              >
                missed
              </button>
              <button
                className={clsx(styles.control__btn, styles.acept__btn)}
                onClick={handelClickUnser}
              >
                answered
              </button>
            </div>
          </div>
        </Container>
      </section>
    </TsPage>
  );
}
