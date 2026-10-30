import js from "@eslint/js"; // line 1 : Mengimpor konfigurasi dasar JavaScript yang direkomendasikan ESLint
import globals from "globals"; // line 2 : Mengimpor daftar variabel global browser (seperti window, document)
import reactHooks from "eslint-plugin-react-hooks"; // line 3 : Mengimpor aturan linter untuk React Hooks (useEffect, useState, dll.)
import reactRefresh from "eslint-plugin-react-refresh"; // line 4 : Mengimpor aturan linter untuk validasi komponen React Fast Refresh
import { defineConfig, globalIgnores } from "eslint/config"; // line 5 : Mengimpor utilitas pembantu konfigurasi flat config ESLint
import eslintPluginTailwindcss from "eslint-plugin-tailwindcss"; // line 6 : Mengimpor plugin ESLint khusus Tailwind CSS untuk merapikan dan memvalidasi class utility
// line 7 : Baris kosong sebagai pemisah visual sebelum konfigurasi
export default defineConfig([ // line 8 : Mengekspor array konfigurasi ESLint flat format
  globalIgnores(["dist"]), // line 9 : Mengabaikan folder output build 'dist' dari proses pemeriksaan linter
  { // line 10 : Blok objek konfigurasi untuk file JavaScript dan JSX
    files: ["**/*.{js,jsx}"], // line 11 : Menentukan target file yang akan diperiksa oleh aturan dalam blok ini
    extends: [ // line 12 : Array konfigurasi bawaan yang diwarisi
      js.configs.recommended, // line 13 : Menerapkan aturan standar best practice JavaScript
      reactHooks.configs.flat.recommended, // line 14 : Menerapkan aturan kepatuhan penggunaan React Hooks
      reactRefresh.configs.vite, // line 15 : Menerapkan aturan kompatibilitas hot reload komponen Vite
    ], // line 16 : Penutup array extends
    languageOptions: { // line 17 : Menentukan opsi lingkungan bahasa
      globals: globals.browser, // line 18 : Mendaftarkan global browser agar tidak dianggap variabel yang belum dideklarasikan
      parserOptions: { ecmaFeatures: { jsx: true } }, // line 19 : Mengaktifkan parser untuk mendukung sintaks JSX
    }, // line 20 : Penutup objek languageOptions
  }, // line 21 : Penutup blok konfigurasi file JS/JSX
  eslintPluginTailwindcss.configs["flat/recommended"] || // line 22 : Mengaktifkan rekomendasi aturan Tailwind dalam format flat config
    eslintPluginTailwindcss.configs.recommended, // line 23 : Fallback ke format aturan rekomendasi standar jika versi flat tidak tersedia
// line 24 : Baris kosong pemisah antar konfigurasi
  { // line 25 : Blok pengaturan lanjutan khusus aturan Tailwind CSS
    settings: { // line 26 : Pengaturan umum linter
      // Define the tailwindcss settings with the MANDATORY `cssConfigPath` // line 27 : Catatan developer: path CSS konfigurasi wajib didefinisikan
      tailwindcss: { // line 28 : Objek konfigurasi plugin Tailwind CSS
        cssConfigPath: "./src/index.css", // line 29 : Mengarahkan lokasi file CSS utama Tailwind pada project
      }, // line 30 : Penutup objek pengaturan tailwindcss
    }, // line 31 : Penutup objek settings
    rules: { // line 32 : Daftar aturan pengecekan class Tailwind
      "tailwindcss/classnames-order": "warn", // line 33 : Memberi peringatan jika urutan nama class Tailwind tidak teratur rapi
      "tailwindcss/no-arbitrary-value": "warn", // line 34 : Memberi peringatan jika ada penggunaan arbitrary value (misal: w-[123px])
      "tailwindcss/no-custom-classname": [ // line 35 : Mengatur aturan untuk class kustom non-Tailwind
        "warn", // line 36 : Tingkat keparahan disetel menjadi warning
        { whitelist: ["custom\\-*"] }, // line 37 : Memberi izin (whitelist) pada nama class yang diawali 'custom-'
      ], // line 38 : Penutup aturan no-custom-classname
      "tailwindcss/no-contradicting-classname": "warn", // line 39 : Memberi peringatan jika terdapat dua class yang saling bertentangan (misal: p-2 dan p-4)
    }, // line 40 : Penutup objek rules
  }, // line 41 : Penutup blok pengaturan lanjutan
]); // line 42 : Penutup pemanggilan fungsi defineConfig
