"use client";
import Hero from "@/components/hero/Hero";
import TsPage from "@/components/tsPage/TsPage";
import { AnimatePresence } from "framer-motion";

export default function Home() {
  return (
    <AnimatePresence mode="wait">
      <TsPage>
        <Hero />;
      </TsPage>
    </AnimatePresence>
  );
}
