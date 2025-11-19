"use client";

import { motion } from "framer-motion";

export default function AboutSection() {
  return (
    <motion.section
      id="about"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="mb-16"
    >
      <h2 className="text-2xl font-bold mb-6">About</h2>
      <div className="max-w-none">
        <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
          Halo, saya Putra Mahardika — seorang Fullstack Developer dan Bug Hunter yang berdedikasi untuk menciptakan solusi perangkat lunak berkinerja tinggi,
          fokus pada pengguna, serta mendeteksi dan memperbaiki bug untuk pengalaman yang lebih andal dan aman.
        </p>
        <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
          Dengan pengalaman 2 tahun, saya mengkhususkan diri dalam membangun aplikasi web yang skalabel menggunakan React, Next.js, TypeScript, serta teknologi pengembangan modern lainnya.
          Saya senang mengubah masalah yang kompleks menjadi solusi elegan yang disukai pengguna.
        </p>
        <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
          Di luar pekerjaan, saya senang menjelajahi teknologi baru, berkontribusi pada proyek open-source, membimbing pengembang pemula, d
          an menemukan serta melaporkan bug untuk meningkatkan kualitas perangkat lunak.
          Saya percaya pada pembelajaran berkelanjutan dan tetap berada di garis depan inovasi teknologi.
        </p>
      </div>
    </motion.section>
  );
} 