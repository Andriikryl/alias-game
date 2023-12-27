import { Container } from "@/components/container/Container";
import TsPage from "@/components/tsPage/TsPage";
import React from "react";
import styles from "./styles.module.css";

export default function Play() {
  return (
    <TsPage Color={"#a2d2ff"}>
      <section className={styles.play}>
        <Container>
          <div className={styles.play__box}>
            <h1 className={styles.play_title}>Play page</h1>
          </div>
        </Container>
      </section>
    </TsPage>
  );
}
