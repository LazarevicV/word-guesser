"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <motion.h1
        initial={{ y: -1000 }}
        animate={{ y: 0 }}
        transition={{ duration: 1 }}
        className="text-6xl font-bold"
      >
        Word guessing game
      </motion.h1>
      <motion.p
        initial={{ y: 1000 }}
        animate={{ y: 0 }}
        transition={{ duration: 1 }}
        className="mt-3 text-2xl"
      >
        Created by Vule and Ana
      </motion.p>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }} // Add a 2-second delay
        className="mt-4"
      >
        <Link
          href="/start"
          className="bg-blue-700 hover:bg-blue-500 text-white font-bold py-2 px-4 rounded"
        >
          Start a new game
        </Link>
      </motion.div>
    </div>
  );
}
