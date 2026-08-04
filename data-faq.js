const FAQ = [
  // Akun
  { id: "faq-001", kategori: "akun", pertanyaan: "Bagaimana cara membuat akun di aplikasi PUSKANAS?", jawaban: "Buka aplikasi, ketuk tombol Daftar, isi nama, email, dan kata sandi, lalu verifikasi melalui tautan yang dikirim ke email kamu." },
  { id: "faq-002", kategori: "akun", pertanyaan: "Saya lupa kata sandi, bagaimana cara mereset?", jawaban: "Pada halaman Masuk, ketuk tautan Lupa Kata Sandi, lalu ikuti instruksi yang dikirim ke email terdaftar untuk membuat kata sandi baru." },
  { id: "faq-003", kategori: "akun", pertanyaan: "Bisakah satu email digunakan untuk lebih dari satu akun?", jawaban: "Tidak. Setiap email hanya dapat digunakan untuk satu akun peserta agar data dan riwayat kompetisi tetap konsisten." },

  // Pendaftaran
  { id: "faq-004", kategori: "pendaftaran", pertanyaan: "Bagaimana cara mendaftar sebuah event kompetisi?", jawaban: "Pilih event pada menu Kompetisi, baca syarat dan jadwalnya, lalu ketuk tombol Daftar Sekarang dan lengkapi formulir pendaftaran." },
  { id: "faq-005", kategori: "pendaftaran", pertanyaan: "Apakah data pendaftaran bisa diubah setelah dikirim?", jawaban: "Data yang sudah terkirim tidak dapat diubah sendiri oleh peserta. Hubungi admin melalui menu Bantuan jika ada kesalahan data." },
  { id: "faq-006", kategori: "pendaftaran", pertanyaan: "Apa yang terjadi jika pendaftaran ditutup sebelum saya selesai mengisi?", jawaban: "Formulir yang belum dikirim sebelum batas waktu pendaftaran akan hangus dan tidak dapat diproses." },

  // Event
  { id: "faq-007", kategori: "event", pertanyaan: "Di mana saya bisa melihat jadwal lengkap semua event?", jawaban: "Jadwal event dapat dilihat pada bagian Jadwal Kompetisi di halaman utama, atau pada halaman detail masing-masing event." },
  { id: "faq-008", kategori: "event", pertanyaan: "Apakah satu peserta boleh mengikuti lebih dari satu event?", jawaban: "Boleh, selama jadwal antar event tidak bentrok dan peserta memenuhi syarat jenjang pada masing-masing event." },

  // Biaya
  { id: "faq-009", kategori: "biaya", pertanyaan: "Apakah semua event berbayar?", jawaban: "Tidak semua. Sebagian event bersifat gratis, sebagian lain memiliki biaya pendaftaran yang tertera jelas pada halaman detail event." },
  { id: "faq-010", kategori: "biaya", pertanyaan: "Apakah biaya pendaftaran bisa dikembalikan jika saya mengundurkan diri?", jawaban: "Biaya pendaftaran yang sudah dibayarkan tidak dapat dikembalikan, kecuali event dibatalkan oleh pihak penyelenggara." },

  // Ujian
  { id: "faq-011", kategori: "ujian", pertanyaan: "Ujian dilaksanakan secara daring atau luring?", jawaban: "Sebagian besar ujian dilaksanakan secara daring melalui aplikasi, kecuali dinyatakan lain pada halaman detail event." },
  { id: "faq-012", kategori: "ujian", pertanyaan: "Apa yang harus dilakukan jika koneksi internet terputus saat ujian?", jawaban: "Segera sambungkan kembali internet dan masuk ulang ke aplikasi. Jika waktu ujian habis akibat kendala teknis, hubungi admin dengan bukti kendala." },

  // Piagam dan sertifikat
  { id: "faq-013", kategori: "piagam", pertanyaan: "Kapan piagam atau sertifikat bisa diunduh?", jawaban: "Piagam dan sertifikat tersedia untuk diunduh pada menu Hasil setelah pengumuman resmi diterbitkan oleh penyelenggara." },
  { id: "faq-014", kategori: "piagam", pertanyaan: "Nama pada sertifikat saya salah, bagaimana cara memperbaikinya?", jawaban: "Hubungi admin melalui menu Bantuan dengan menyertakan nama yang benar sesuai dokumen resmi untuk diproses ulang." },

  // Medali dan hadiah
  { id: "faq-015", kategori: "medali", pertanyaan: "Bagaimana cara mengetahui apakah saya mendapat medali atau hadiah?", jawaban: "Informasi medali dan hadiah diumumkan bersamaan dengan hasil akhir event pada menu Hasil dan Papan Pengumuman." },
  { id: "faq-016", kategori: "medali", pertanyaan: "Bagaimana proses pengambilan hadiah bagi pemenang?", jawaban: "Pemenang akan dihubungi oleh admin melalui email atau WhatsApp terdaftar untuk informasi jadwal dan cara pengambilan hadiah." },

  // Pengiriman
  { id: "faq-017", kategori: "pengiriman", pertanyaan: "Apakah medali dan piagam fisik dikirim ke alamat peserta?", jawaban: "Untuk sebagian event, medali dan piagam fisik dikirim ke alamat yang didaftarkan. Pastikan alamat pada profil sudah lengkap dan benar." },
  { id: "faq-018", kategori: "pengiriman", pertanyaan: "Berapa lama estimasi waktu pengiriman hadiah fisik?", jawaban: "Estimasi pengiriman umumnya 14–30 hari kerja setelah pengumuman resmi, tergantung lokasi dan jasa ekspedisi yang digunakan." },

  // Kurasi
  { id: "faq-019", kategori: "kurasi", pertanyaan: "Apa itu tahap kurasi pada event tertentu?", jawaban: "Kurasi adalah proses penilaian awal terhadap karya atau berkas peserta sebelum dinyatakan lolos ke tahap kompetisi berikutnya." },
  { id: "faq-020", kategori: "kurasi", pertanyaan: "Berapa lama proses kurasi biasanya berlangsung?", jawaban: "Lama proses kurasi berbeda tiap event dan akan diinformasikan pada halaman detail event serta Papan Pengumuman." },

  // Kendala teknis
  { id: "faq-021", kategori: "teknis", pertanyaan: "Aplikasi tidak bisa dibuka atau error, apa yang harus dilakukan?", jawaban: "Coba perbarui aplikasi ke versi terbaru, periksa koneksi internet, atau bersihkan cache. Jika masih bermasalah, hubungi admin." },
  { id: "faq-022", kategori: "teknis", pertanyaan: "File yang saya unggah gagal terus, kenapa?", jawaban: "Periksa format dan ukuran file sesuai ketentuan pada kolom unggahan. Jika sudah sesuai namun tetap gagal, laporkan ke admin." },

  // Kerja sama
  { id: "faq-023", kategori: "kerjasama", pertanyaan: "Bagaimana cara sekolah atau lembaga menjadi mitra PUSKANAS?", jawaban: "Ajukan permohonan kerja sama melalui menu Hubungi Admin dengan menyertakan profil sekolah atau lembaga yang bersangkutan." },
  { id: "faq-024", kategori: "kerjasama", pertanyaan: "Apakah tersedia program kerja sama khusus untuk sekolah dengan banyak peserta?", jawaban: "Tersedia. Silakan hubungi admin untuk informasi program kerja sama dan ketentuan khusus bagi sekolah dengan jumlah peserta besar." },
];
