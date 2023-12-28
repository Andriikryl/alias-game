"use client";
import { Container } from "@/components/container/Container";
import TsPage from "@/components/tsPage/TsPage";
import React, { useState } from "react";
import styles from "./styles.module.css";

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
  const [score, setScore] = useState(0);
  const handelClickSkip = () => {
    setCurrent((prev) => prev + 1);
  };
  const handelClickUnser = () => {
    setCurrent((prev) => prev + 1);
    setScore((prev) => prev + 1);
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
            <button onClick={handelClickSkip}>skip</button>
            <button onClick={handelClickUnser}>unser</button>
            <p>{score}</p>
          </div>
        </Container>
      </section>
    </TsPage>
  );
}
