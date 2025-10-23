# Portfolio Website - Modern & Animated

Website portfolio yang modern dan profesional dengan animasi yang smooth dan interaktif.

## 🚀 Fitur Utama

### 1. **Animasi Background Partikel**
- Partikel bergerak dinamis dengan koneksi antar partikel
- Warna biru dengan transparansi yang elegant
- Tidak mengganggu konten utama
- Dibuat dengan HTML5 Canvas

### 2. **Scroll Animations**
- **Fade-in Animation**: Elemen muncul dengan smooth fade
- **Slide Animations**: Elemen slide dari kiri/kanan
- **Stagger Animation**: Elemen muncul berurutan dengan delay
- Menggunakan Intersection Observer API untuk performa optimal

### 3. **Parallax Effect**
- Efek parallax subtle pada hero section
- Memberikan depth dan dimensi visual

### 4. **Navigation**
- Sticky header yang mengikuti scroll
- Active state pada navigation saat scroll
- Mobile menu dengan animasi hamburger
- Smooth scrolling ke setiap section

### 5. **Section yang Tersedia**
- ✅ **Home/Hero**: Intro dengan call-to-action
- ✅ **About**: Profil dengan foto dan deskripsi
- ✅ **Skills**: Grid keahlian dengan hover effect
- ✅ **Portfolio**: 4 project dengan animasi hover
- ✅ **News/Articles**: 3 berita/artikel terbaru
- ✅ **Contact**: Form kontak dengan validasi real-time
- ✅ **Footer**: Social media links

### 6. **Animasi Interaktif**
- Hover effects pada card, button, dan links
- Scale & shadow transformation pada portfolio cards
- Ripple effect pada button
- Loading animation saat submit form
- Image hover dengan zoom effect

### 7. **Form Contact**
- Validasi real-time untuk setiap field
- Focus state yang interactive
- Loading state saat submit
- Success/error feedback
- Responsive layout

### 8. **Responsive Design**
- Mobile-first approach
- Breakpoints: 768px dan 480px
- Mobile menu yang fungsional
- Grid yang adaptif di semua ukuran layar

## 📁 Struktur File

```
portofolio-ryan/
│
├── index.html          # Struktur HTML utama
├── style.css           # Semua styling dan animasi CSS
├── script.js           # JavaScript untuk animasi dan interaksi
└── README.md           # Dokumentasi (file ini)
```

## 🎨 Skema Warna

- **Background**: `#1a1a1a` (Hitam gelap)
- **Secondary Background**: `#2c2c2c` (Abu-abu tua)
- **Primary Color**: `#3498db` (Biru)
- **Text**: `#ffffff` (Putih)
- **Muted Text**: `#b0b0b0` (Abu-abu terang)

## 🛠️ Teknologi yang Digunakan

- **HTML5**: Struktur semantic dan modern
- **CSS3**: 
  - Flexbox & Grid untuk layout
  - Transitions & Animations
  - Media Queries untuk responsive
  - Custom properties untuk theming
- **Vanilla JavaScript**: 
  - ES6+ Classes
  - Canvas API untuk particle animation
  - Intersection Observer untuk scroll animations
  - Form validation

## 📋 Cara Penggunaan

1. **Download/Clone** semua file ke dalam satu folder
2. **Buka** file `index.html` di browser modern (Chrome, Firefox, Edge, Safari)
3. **Customize** konten sesuai kebutuhan:
   - Ganti foto profil (URL di `<img>` tags)
   - Update teks dan informasi pribadi
   - Tambah/kurangi portfolio items
   - Sesuaikan warna di `style.css`

## ✏️ Customization

### Mengubah Warna
Edit di `style.css`:
```css
/* Cari dan ganti warna primer */
#3498db → warna baru Anda
```

### Menambah Portfolio Item
Copy-paste struktur portfolio item di `index.html`:
```html
<div class="portfolio-item stagger-item">
    <!-- ... -->
</div>
```

### Mengubah Jumlah Partikel
Edit di `script.js`:
```javascript
this.particleCount = 20; // Ubah angka ini
```

### Mengganti Gambar Background Hero
Edit di `style.css`:
```css
.hero {
    background: ..., url('URL_GAMBAR_BARU') ...;
}
```

## 🎯 Fitur Animasi Detail

### Particle Animation
- 20 partikel bergerak dengan kecepatan berbeda
- Garis koneksi muncul saat partikel dekat (< 150px)
- Warna dan opacity dinamis
- Auto-update saat resize window

### Scroll Animations
- Trigger saat element masuk viewport
- Smooth transition dengan cubic-bezier
- Stagger delay untuk efek berurutan
- Once animation (tidak repeat)

### Form Validation
- Real-time validation saat blur
- Visual feedback (border color)
- Error messages yang jelas
- Email format checking

## 📱 Browser Support

- ✅ Chrome 90+
- ✅ Firefox 88+
- ✅ Safari 14+
- ✅ Edge 90+

## ⚡ Performance

- Lightweight (< 100KB total)
- No external dependencies
- Optimized animations dengan GPU acceleration
- Lazy loading untuk images
- Efficient Intersection Observer

## 🔧 Tips Optimasi

1. **Compress gambar** sebelum upload
2. **Gunakan CDN** untuk gambar
3. **Minify CSS & JS** untuk production
4. **Enable Gzip** di server
5. **Optimize font loading** jika menambah custom fonts

## 📝 Lisensi

Free to use untuk personal dan commercial projects.

## 👨‍💻 Author

Dibuat dengan ❤️ untuk mahasiswa Teknik Informatika

---

**Selamat menggunakan! Jangan lupa customize sesuai kebutuhan Anda.** 🚀

