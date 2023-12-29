import { Container } from "@/components/container/Container";
import TsPage from "@/components/tsPage/TsPage";
import React from "react";
import styles from "./style.module.css";
import Image from "next/image";

export default function Rules() {
  return (
    <TsPage Color={"#ffd60a"}>
      <section className={styles.rules}>
        <Container>
          <div className={styles.rules__box}>
            <div className={styles.image__box}>
              <Image src="/rules/ex.png" width={100} height={100} alt="" />
            </div>
            <h1 className={styles.rules__title}>Alias (гра)</h1>
            <p className={styles.descriptions}>
              Настільна командна гра, в якій треба максимально швидко пояснити
              своїй команді задані слова без використання однокореневих.
            </p>
            <p className={styles.descriptions}>
              Чим більше слів вгадано — тим швидше команда просувається до
              перемоги!!!
            </p>
          </div>
        </Container>
      </section>
    </TsPage>
  );
}
