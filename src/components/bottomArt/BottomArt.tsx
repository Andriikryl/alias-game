import React from "react";
import { Container } from "../container/Container";
import Image from "next/image";
import styles from "./style.module.css";
export default function BottomArt() {
  return (
    <div>
      <Container>
        <div className={styles.box}>
          <div>
            <Image src="/topArt/cikel.svg" width={70} height={70} alt="image" />
          </div>
          <div>
            <Image
              src="/bottomArt/cube.svg"
              width={90}
              height={90}
              alt="image"
            />
          </div>
          <div>
            <Image src="/topArt/cikel.svg" width={70} height={70} alt="image" />
          </div>
        </div>
      </Container>
    </div>
  );
}
