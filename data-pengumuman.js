// Data seluruh pengumuman. id di sini harus sama dengan id pada link "Baca Detail" (?id=...) di index.html.
// Tambah pengumuman baru cukup tambah 1 object baru di sini — halaman detail otomatis bisa memuatnya.
const PENGUMUMAN = {
  'osn-2026-jadwal': {
    badgeClass: 'is-penting',
    badgeText: 'Penting',
    tanggal: '5 Agustus 2026',
    tanggalISO: '2026-08-05',
    judul: 'Perubahan Jadwal Pelaksanaan OSN 2026',
    brand: 'PUSKANAS',
    ringkasan: 'Pelaksanaan OSN 2026 diundur menjadi 22 September 2026 mengikuti penyesuaian kalender akademik nasional.',
    isi: 'Menindaklanjuti penyesuaian kalender akademik nasional, panitia OSN 2026 mengumumkan perubahan jadwal pelaksanaan yang semula 15 September 2026 menjadi 22 September 2026. Perubahan ini berlaku untuk seluruh bidang lomba dan seluruh peserta yang telah terdaftar. Jadwal pendaftaran, pengumpulan berkas, dan babak penyisihan tidak mengalami perubahan. Peserta diimbau untuk memantau aplikasi PUSKANAS secara berkala untuk informasi teknis pelaksanaan lebih lanjut.'
  },
  'fdbn-pendaftaran': {
    badgeClass: 'is-informasi',
    badgeText: 'Informasi',
    tanggal: '28 Juli 2026',
    tanggalISO: '2026-07-28',
    judul: 'Pendaftaran Festival Debat Bahasa Nasional Dibuka',
    brand: 'PRESMANESIA',
    ringkasan: 'Pendaftaran FDBN 2026 resmi dibuka untuk jenjang mahasiswa, dapat diakses melalui aplikasi maupun situs resmi.',
    isi: 'Pendaftaran Festival Debat Bahasa Nasional (FDBN) 2026 resmi dibuka untuk jenjang mahasiswa se-Indonesia. Peserta dapat mendaftar secara individu maupun tim melalui Aplikasi PRESMANESIA atau situs resmi kompetisi. Periode pendaftaran berlangsung mulai 28 Juli hingga 25 September 2026, dengan pelaksanaan babak penyisihan pada 10 Oktober 2026. Informasi lengkap mengenai mosi, format debat, dan berkas pendaftaran dapat dilihat pada buku panduan yang tersedia di aplikasi.'
  },
  'kti-fosnas-hasil': {
    badgeClass: 'is-informasi',
    badgeText: 'Informasi',
    tanggal: '20 Juli 2026',
    tanggalISO: '2026-07-20',
    judul: 'Pengumuman Hasil Kurasi Karya Tulis Ilmiah FOSNAS',
    brand: 'FOSNAS',
    ringkasan: 'Daftar peserta yang lolos tahap kurasi KTI FOSNAS dapat dicek melalui akun pendaftaran masing-masing.',
    isi: 'Panitia FOSNAS telah menyelesaikan proses kurasi naskah Karya Tulis Ilmiah (KTI) yang masuk pada periode pendaftaran sebelumnya. Daftar peserta yang dinyatakan lolos tahap kurasi dan berhak melanjutkan ke tahap presentasi dapat dicek melalui akun pendaftaran masing-masing pada Aplikasi FOSNAS. Peserta yang lolos wajib mengonfirmasi kesediaan dalam waktu 7 hari sejak pengumuman ini terbit, dan akan menerima jadwal presentasi melalui email terdaftar.'
  },
  'gkcp-sertifikat': {
    badgeClass: 'is-pengingat',
    badgeText: 'Pengingat',
    tanggal: '1 Agustus 2026',
    tanggalISO: '2026-08-01',
    judul: 'Batas Akhir Unggah Berkas Sertifikat GKCP',
    brand: 'GEMANESIA',
    ringkasan: 'Peserta yang belum mengunggah berkas untuk penerbitan sertifikat diimbau menyelesaikannya sebelum tenggat.',
    isi: 'Panitia Gemanesia Kejuaraan Cerdas Cermat Pelajar (GKCP) mengingatkan seluruh peserta yang belum melengkapi berkas untuk penerbitan sertifikat agar segera mengunggahnya melalui Aplikasi GEMANESIA. Batas akhir unggah berkas adalah 10 Agustus 2026 pukul 23.59 WIB. Sertifikat hanya akan diterbitkan bagi peserta dengan berkas lengkap dan sesuai format yang ditentukan pada panduan teknis.'
  },
  'puskanas-pemeliharaan': {
    badgeClass: 'is-informasi',
    badgeText: 'Informasi',
    tanggal: '15 Juli 2026',
    tanggalISO: '2026-07-15',
    judul: 'Pemeliharaan Sistem Aplikasi PUSKANAS',
    brand: 'PUSKANAS',
    ringkasan: 'Aplikasi akan mengalami pemeliharaan terjadwal sehingga pendaftaran dan pengiriman berkas bisa terganggu sementara.',
    isi: 'Dalam rangka peningkatan performa dan keamanan sistem, Aplikasi PUSKANAS akan mengalami pemeliharaan terjadwal pada 15 Juli 2026 pukul 23.00 – 03.00 WIB. Selama periode ini, fitur pendaftaran, pengiriman berkas, dan login mungkin tidak dapat diakses sementara. Pengguna diimbau untuk menyelesaikan proses pendaftaran atau unggah berkas sebelum jadwal pemeliharaan dimulai untuk menghindari kendala teknis.'
  },
  'ppsc-2026-selesai': {
    badgeClass: 'is-selesai',
    badgeText: 'Selesai',
    tanggal: '30 Juni 2026',
    tanggalISO: '2026-06-30',
    judul: 'Pengiriman Piala dan Sertifikat PPSC 2026 Selesai',
    brand: 'PUSKANAS',
    ringkasan: 'Seluruh piala dan sertifikat pemenang Puskanas Physics and Science Challenge telah dikirimkan ke alamat pemenang.',
    isi: 'Panitia Puskanas Physics and Science Challenge (PPSC) 2026 mengumumkan bahwa seluruh piala dan sertifikat bagi pemenang telah selesai dikirimkan ke alamat yang terdaftar pada sistem. Proses pengiriman dilakukan secara bertahap sejak 15 Juni 2026 menggunakan jasa ekspedisi rekanan resmi. Pemenang yang hingga saat ini belum menerima piala atau sertifikat dapat menghubungi admin melalui menu Hubungi Admin pada Aplikasi PUSKANAS dengan menyertakan nomor peserta.'
  }
};
