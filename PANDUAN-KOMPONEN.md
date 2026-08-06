# Navbar dan Footer Bersama

Struktur komponen:

- `components/navbar.html` — isi navbar untuk seluruh halaman.
- `components/footer.html` — isi footer untuk seluruh halaman.
- `assets/css/components.css` — tampilan navbar dan footer.
- `assets/js/components.js` — memasang komponen ke setiap halaman dan menampilkan tombol **Kembali ke Beranda** hanya di halaman selain `index.html`.

Setiap halaman memiliki mount berikut:

```html
<div id="site-navbar"></div>
<div id="site-footer"></div>
```

Karena komponen HTML dimuat menggunakan `fetch`, jalankan website melalui server/deployment seperti Vercel. Jangan menguji dengan membuka file HTML langsung melalui `file://`.
