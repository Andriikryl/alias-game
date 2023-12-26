"use client";
import React, { ReactNode } from "react";
import { motion } from "framer-motion";
import { opacity, expand } from "../utils/utils";
import styles from "./style.module.css";
import clsx from "clsx";

interface TsPageProps {
  children: ReactNode;
}
interface VariantsType {
  [key: string]: any;
}
export default function TsPage({ children }: TsPageProps) {
  const anim = (variants: VariantsType, custom?: number | null) => {
    return {
      initial: "initial",
      animate: "enter",
      exit: "exit",
      custom,
      variants,
    };
  };

  const nbOfColumns = 5;
  return (
    <div className={clsx(styles.page, styles.stairs)}>
      <motion.div
        {...anim(opacity)}
        className={clsx(styles.transition__background)}
      />
      <div className={styles.transition__container}>
        {[...Array(nbOfColumns)].map((_, i) => {
          return <motion.div key={i} {...anim(expand, nbOfColumns - i)} />;
        })}
      </div>
      {children}
    </div>
  );
}
