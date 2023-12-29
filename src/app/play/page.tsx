"use client";
import { Container } from "@/components/container/Container";
import TsPage from "@/components/tsPage/TsPage";
import React, { useEffect, useState } from "react";
import styles from "./styles.module.css";
import clsx from "clsx";
import { NumberBlock } from "@/components/numberBlock/NumberBlock";
import { data } from "@/data/Data";
import VisuallyHidden from "@/components/visuallyhidden/VisuallyHidden";
import Home from "@/components/icons/Home";
import Image from "next/image";
import { Modal } from "@/components/modal/Madal";

const tabs = ["30", "60", "120"];

export default function Play() {
  const [time, setTime] = useState(0);
  const [gameStatus, setGameStatus] = useState(false);
  const [current, setCurrent] = useState(0);
  const [answered, setAnswered] = useState(0);
  const [missed, setMissed] = useState(0);
  const [isTimerRunning, setIsTimerRunning] = useState(false);
  const [isTimeSelected, setIsTimeSelected] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

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
    setIsTimerRunning((prev) => !prev);
  };
  const handleButtonTimeClick = (value: number) => {
    setTime(value);
    setIsTimeSelected(true);
  };

  const handelClickBack = () => {
    setGameStatus((prev) => !prev);
    setAnswered(0);
    setMissed(0);
    setIsTimerRunning((prev) => !prev);
    setIsTimeSelected(false);
    setIsModalOpen(false);
  };

  const minutesString = String(Math.floor(time / 60)).padStart(2, "0");
  const secondsString = String(time % 60).padStart(2, "0");
  useEffect(() => {
    if (isTimerRunning) {
      const interval = setInterval(() => {
        setTime((s) => {
          if (s === 1) {
            setIsModalOpen(true);
          }
          return Math.max(s - 1, 0);
        });
      }, 1000);
      return () => {
        clearInterval(interval);
      };
    }
  }, [isTimerRunning, time]);

  return (
    <>
      <TsPage Color={"#a2d2ff"}>
        <section className={styles.play}>
          <Container>
            <div className={styles.play__box}>
              {gameStatus ? (
                <div className={styles.wrapper}>
                  <div className={styles.time__wrapper}>
                    <p className={styles.time}>
                      {" "}
                      {minutesString}:{secondsString}
                    </p>
                  </div>
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
                  <button
                    className={styles.btn__back}
                    onClick={handelClickBack}
                  >
                    <VisuallyHidden>back home</VisuallyHidden>
                    <Home />
                  </button>
                </div>
              ) : (
                <div>
                  <div>
                    <Image
                      src="/play/run.png"
                      width={100}
                      height={100}
                      alt="image"
                    />
                  </div>
                  <div className={styles.flex__group}>
                    <p className={styles.time__title}>Chose game time</p>
                    <div className={styles.btn__groupTime}>
                      <button
                        onClick={() => handleButtonTimeClick(30)}
                        className={clsx(styles.btn__time, {
                          [styles.active]: time === 30,
                        })}
                      >
                        30
                      </button>
                      <button
                        onClick={() => handleButtonTimeClick(60)}
                        className={clsx(styles.btn__time, {
                          [styles.active]: time === 60,
                        })}
                      >
                        60
                      </button>
                      <button
                        onClick={() => handleButtonTimeClick(120)}
                        className={clsx(styles.btn__time, {
                          [styles.active]: time === 120,
                        })}
                      >
                        120
                      </button>
                    </div>
                    <button
                      className={styles.paly__btn}
                      onClick={handelClickPlay}
                      disabled={!isTimeSelected}
                    >
                      play
                    </button>
                  </div>
                </div>
              )}
            </div>
            {isModalOpen && (
              <Modal title="Time's Up" handleDismiss={() => handelClickBack()}>
                <p className={styles.modal__score}>Your score : {answered}</p>
              </Modal>
            )}
          </Container>
        </section>
      </TsPage>
    </>
  );
}
