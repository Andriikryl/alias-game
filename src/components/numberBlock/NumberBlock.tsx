"use client";
import { MotionValue, motion, useSpring, useTransform } from "framer-motion";
import { useEffect } from "react";
import styles from "./styles.module.css";
import clsx from "clsx";

const fontSize = 30;
const padding = 15;
const height = fontSize + padding;

export function NumberBlock({ value, className }: { value: number, className?:string }) {
  return (
    <div style={{ fontSize }} className={clsx(styles.wrapper, className)}>
      <Digit place={100} value={value} />
      <Digit place={10} value={value} />
      <Digit place={1} value={value} />
    </div>
  );
}

function Digit({ place, value }: { place: number; value: number }) {
  let valueRoundedToPlace = Math.floor(value / place);
  let animatedValue = useSpring(valueRoundedToPlace);

  useEffect(() => {
    animatedValue.set(valueRoundedToPlace);
  }, [animatedValue, valueRoundedToPlace]);

  return (
    <div style={{ height }} className={styles.digit}>
      {Array.from(Array(10).keys()).map((i) => (
        <Number key={i} mv={animatedValue} number={i} />
      ))}
    </div>
  );
}

function Number({ mv, number }: { mv: MotionValue; number: number }) {
  let y = useTransform(mv, (latest) => {
    let placeValue = latest % 10;
    let offset = (10 + number - placeValue) % 10;

    let memo = offset * height;

    if (offset > 5) {
      memo -= 10 * height;
    }

    return memo;
  });

  return (
    <motion.span style={{ y }} className={styles.number}>
      {number}
    </motion.span>
  );
}
