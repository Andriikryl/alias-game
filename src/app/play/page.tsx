"use client";
import { Container } from "@/components/container/Container";
import TsPage from "@/components/tsPage/TsPage";
import React, { useState } from "react";
import styles from "./styles.module.css";
import clsx from "clsx";
import { NumberBlock } from "@/components/numberBlock/NumberBlock";
import { data } from "@/data/Data";
import VisuallyHidden from "@/components/visuallyhidden/VisuallyHidden";
import Home from "@/components/icons/Home";

export default function Play() {
  const [gameStatus, setGameStatus] = useState(false);
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
  const handelClickPlay = () => {
    setGameStatus((prev) => !prev);
  };
  return (
    <TsPage Color={"#a2d2ff"}>
      <section className={styles.play}>
        <Container>
          <div className={styles.play__box}>
            {gameStatus ? (
              <div className={styles.wrapper}>
                <div className={styles.word__block}>
                  <p className={styles.word}>{data[current].title}</p>
                </div>
                <div className={styles.score__group}>
                  <NumberBlock value={answered} className={styles.answered} />
                  <NumberBlock value={missed} className={styles.missed} />
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
                <button className={styles.btn__back} onClick={handelClickPlay}>
                  <VisuallyHidden>back home</VisuallyHidden>
                  <Home />
                </button>
              </div>
            ) : (
              <button className={styles.paly__btn} onClick={handelClickPlay}>
                play
              </button>
            )}
          </div>
        </Container>
      </section>
    </TsPage>
  );
}
