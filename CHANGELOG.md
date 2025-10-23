# Changelog - Perbaikan Website Portfolio

## Tanggal: 23 Oktober 2025

### 🔧 Perbaikan yang Dilakukan:

#### 1. **Mengatasi Masalah Overlay yang Menghalangi Klik**
   - ✅ Menambahkan `pointer-events: none` pada `.portfolio-item::after`
   - ✅ Menambahkan `pointer-events: none` pada `.skill-item::before`
   - ✅ Menambahkan `pointer-events: none` pada `.btn::before`
   - ✅ Menambahkan `pointer-events: none` pada `.social-links a::before`
   
   **Masalah:** Pseudo-elements (::before dan ::after) yang digunakan untuk efek visual bisa menghalangi klik pada button dan link.
   
   **Solusi:** Menambahkan `pointer-events: none` agar overlay visual tidak mengganggu interaksi user.

#### 2. **Perbaikan Responsive Design**
   - ✅ Mengubah `minmax(350px, 1fr)` menjadi `minmax(300px, 1fr)` pada `.news-grid`
   
   **Masalah:** News grid dengan minmax 350px bisa menyebabkan overflow pada layar kecil.
   
   **Solusi:** Menurunkan ukuran minimum menjadi 300px untuk konsistensi dengan portfolio grid.

### 📊 Ringkasan Perbaikan:

| Element | Masalah | Perbaikan |
|---------|---------|-----------|
| Portfolio Cards | Overlay menghalangi button | Added `pointer-events: none` |
| Skill Cards | Shine effect menghalangi klik | Added `pointer-events: none` |
| Buttons | Ripple effect menghalangi klik | Added `pointer-events: none` |
| Social Links | Gradient menghalangi klik | Added `pointer-events: none` |
| News Grid | Overflow di layar kecil | Reduced minmax dari 350px ke 300px |

### ✅ Hasil:

- Semua button dan link sekarang dapat diklik dengan normal
- Animasi visual tetap berfungsi sempurna
- Responsive design lebih smooth di semua ukuran layar
- Tidak ada elemen yang tertumpuk atau double

### 🎯 Tested On:

- Desktop (1920x1080)
- Tablet (768px)
- Mobile (480px dan lebih kecil)

### 💡 Catatan Teknis:

`pointer-events: none` adalah solusi CSS yang memungkinkan elemen visual (seperti overlay untuk efek hover) untuk tidak menghalangi interaksi mouse/touch pada elemen di bawahnya. Ini sangat berguna untuk:

- Overlay effects
- Shine/shimmer animations
- Ripple effects
- Gradient overlays

Tanpa properti ini, pseudo-elements yang menutupi seluruh area parent element akan menghalangi semua klik pada elemen child seperti button dan link.

---

**Status:** ✅ Semua perbaikan telah diterapkan dan ditest.

