"use client";
import Hero from "@/components/hero/Hero";
import RolString from "@/components/rolString/RolString";
import TsPage from "@/components/tsPage/TsPage";
import { AnimatePresence } from "framer-motion";

export default function Home() {
  return (
    <AnimatePresence mode="wait">
      <TsPage Color={"#fed9b7"}>
        <RolString string=" WE CAN DO /" />
        <Hero />
        <RolString string=" WE CAN DO /" />
      </TsPage>
    </AnimatePresence>
  );
}
