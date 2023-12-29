import React from "react";
import { Container } from "../container/Container";
import Image from "next/image";
import styles from "./style.module.css";
import MenImage from "public/face/men.svg";
import WemanImage from "public/face/women.svg";
import Link from "next/link";
import clsx from "clsx";

export default function Hero() {
  return (
    <section>
      <Container>
        <div className={styles.hero}>
          <div className={styles.title__box}>
            <div className={styles.image__box}>
              <Image src="/hero/sun.png" width={230} height={230} alt="men" />
            </div>
            <h1 className={styles.hero__title}>Welcom to the alias game</h1>
          </div>
          <div>
            <ul className={styles.list} role="list">
              <li className={styles.list__item}>
                <Link className={styles.link} href={"play"}>
                  play
                </Link>
              </li>
              <li className={styles.list__item}>
                <Link
                  className={clsx(styles.link, styles.link__rules)}
                  href={"rules"}
                >
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
