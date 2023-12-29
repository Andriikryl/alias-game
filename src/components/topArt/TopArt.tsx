import React from "react";
import { Container } from "../container/Container";
import styles from "./style.module.css";
import Image from "next/image";
export default function TopArt() {
  return (
    <div>
      <Container>
        <div className={styles.box}>
          <div>
            <Image src="/topArt/cikel.svg" width={70} height={70} alt="image" />
          </div>
          <div>
            <Image src="/topArt/smile.svg" width={90} height={90} alt="image" />
          </div>
          <div>
            <Image src="/topArt/cikel.svg" width={70} height={70} alt="image" />
          </div>
        </div>
      </Container>
    </div>
  );
}
