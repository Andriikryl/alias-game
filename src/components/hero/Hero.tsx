import React from "react";
import { Container } from "../container/Container";
import Image from "next/image";
import styles from "./style.module.css";
import MenImage from "public/face/men.svg";
import WemanImage from "public/face/women.svg";
import Link from "next/link";

export default function Hero() {
  return (
    <section>
      <Container>
        <div className={styles.hero}>
          <div className={styles.title__box}>
            <h1 className={styles.hero__title}>Welcom to the alias game</h1>
          </div>
          <div className={styles.qa__box}>
            <div className={styles.flex__group}>
              <Image src="/hero/man.svg" width={54} height={54} alt="men" />
              <div className={styles.info__bloc}>
                <p>$&@+?#</p>
              </div>
            </div>
            <div className={styles.flex__group}>
              <div className={styles.info__bloc}>
                <p>???</p>
              </div>
              <div className={styles.image__boxWem}>
                <Image src="/hero/weman.svg" width={54} height={54} alt="men" />
              </div>
            </div>
          </div>
          <div>
            <ul className={styles.list} role="list">
              <li className={styles.list__item}>
                <Link className={styles.link} href={"play"}>
                  play
                </Link>
              </li>
              <li className={styles.list__item}>
                <Link className={styles.link} href={"rules"}>
                  rules
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </Container>
    </section>
  );
}
