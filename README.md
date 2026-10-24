# CampusMate – Universitas Madura (Prototype Web)

Aplikasi web mobile-first berdasarkan prototype PPT **CampusMate**: Login, Beranda, Jadwal, Tugas, Info Kampus, Profil, dan Logout.

Dibuat dengan HTML + CSS + JavaScript murni (tanpa framework, tanpa build step).

## Fitur
- Login (validasi input) dan sesi tersimpan di `localStorage`
- Beranda: ringkasan kelas, tugas belum selesai, deadline terdekat, kelas berikutnya
- Jadwal Kuliah: tab hari Sen–Jum
- Daftar Tugas: klik lingkaran untuk menandai selesai (angka di Beranda ikut berubah)
- Info Kampus: deadline terdekat dan pengumuman
- Profil dan Log Out

## Struktur
```
index.html
style.css
app.js
favicon.png
logo-unira.png
```

## Menjalankan lokal
Buka `index.html` di browser, atau:
```bash
npx serve .
```

## Deploy ke Vercel
1. Upload semua file (langsung di root, tanpa subfolder) ke repository GitHub lewat **Add file → Upload files**.
2. Di vercel.com klik **Add New → Project**, pilih repo tersebut.
3. Framework Preset: **Other**. Build Command dan Output Directory dikosongkan. Klik **Deploy**.
