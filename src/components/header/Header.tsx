import React from "react";
import { Container } from "../container/Container";
import styles from "./style.module.css";
import Link from "next/link";

export default function Header() {
  return (
    <header className={styles.header}>
      <Container>
        <div className={styles.header__box}>
          <nav className={styles.nav}>
            <ul className={styles.list} role="list">
              <li className={styles.list__item}>
                <Link className={styles.link} href={"/"}>
                  home
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </Container>
    </header>
  );
}
