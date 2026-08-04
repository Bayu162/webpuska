// Data seluruh brand ekosistem PUSKANAS. Dipakai bareng oleh kartu "Ekosistem Brand" di index.html
// dan halaman detail brand/<id>.html (lewat brand.js). Tambah brand baru cukup tambah 1 object di sini.
const BRAND = {
  puskanas: {
    nama: 'PUSKANAS',
    logo: 'assets/images/puskanas.webp',
    tagline: 'Pusat Kejuaraan Sains Nasional',
    deskripsi: 'Menjadi identitas utama dan payung dari seluruh ekosistem website.',
    karakter: ['Otoritatif', 'Ilmiah', 'Terpercaya'],
    contohEvent: ['OSN 2026', 'Puskanas Physics and Science Challenge (PPSC)'],
    targetPeserta: 'Pelajar SMP–SMA/sederajat',
    tentang: 'PUSKANAS adalah identitas utama dan payung dari seluruh ekosistem kompetisi di website ini, menaungi ajang sains dan akademik lintas jenjang mulai dari olimpiade sains hingga kompetisi fisika terapan.',
    positioning: 'Rumah utama bagi kompetisi sains dan akademik berskala nasional, menjadi rujukan pertama pelajar yang ingin mengukur dan mengasah kemampuan di bidang sains.',
    eventUtama: [
      { nama: 'Olimpiade Sains Nasional 2026', info: 'SMA · Nasional · Online' },
      { nama: 'Puskanas Physics and Science Challenge', info: 'SMA · Nasional · Online' }
    ],
    bidangKompetisi: ['Matematika', 'Fisika', 'Kimia', 'Biologi'],
    capaian: [
      { angka: '12.000+', label: 'Peserta terdaftar' },
      { angka: '340', label: 'Sekolah berpartisipasi' },
      { angka: '8', label: 'Tahun penyelenggaraan' }
    ],
    testimoni: { isi: 'Soal-soalnya menantang tapi pembahasannya jelas, bikin saya lebih siap menghadapi olimpiade tingkat provinsi.', nama: 'Peserta OSN 2026', peran: 'Siswa SMA' },
    sosial: { instagram: '#', tiktok: '#', youtube: '#' }
  },
  presmanesia: {
    nama: 'PRESMANESIA',
    logo: 'assets/images/presmanesia.webp',
    tagline: 'Ekosistem Debat & Presentasi Mahasiswa',
    deskripsi: 'Menggunakan identitas visual resminya.',
    karakter: ['Kritis', 'Komunikatif', 'Berani berargumen'],
    contohEvent: ['Festival Debat Bahasa Nasional (FDBN)'],
    targetPeserta: 'Mahasiswa',
    tentang: 'PRESMANESIA berfokus pada kompetisi debat dan presentasi ilmiah untuk mahasiswa, mengasah kemampuan berargumentasi, riset isu terkini, dan public speaking di hadapan dewan juri.',
    positioning: 'Panggung utama mahasiswa untuk berlatih berpikir kritis dan menyampaikan gagasan secara terstruktur lewat format debat kompetitif.',
    eventUtama: [
      { nama: 'Festival Debat Bahasa Nasional', info: 'Mahasiswa · Nasional · Offline' }
    ],
    bidangKompetisi: ['Debat Bahasa Indonesia', 'Debat Bahasa Inggris', 'Public Speaking'],
    capaian: [
      { angka: '2.500+', label: 'Peserta terdaftar' },
      { angka: '120', label: 'Kampus berpartisipasi' },
      { angka: '5', label: 'Tahun penyelenggaraan' }
    ],
    testimoni: { isi: 'Format debatnya kompetitif dan juri-jurinya memberi masukan yang membangun. Pengalaman yang benar-benar melatih cara berpikir.', nama: 'Peserta FDBN 2026', peran: 'Mahasiswa' },
    sosial: { instagram: '#', tiktok: '#', youtube: '#' }
  },
  fosnas: {
    nama: 'FOSNAS',
    logo: 'assets/images/fosnas.webp',
    tagline: 'Forum Karya Tulis Ilmiah Pelajar',
    deskripsi: 'Menggunakan identitas visual resminya.',
    karakter: ['Analitis', 'Teliti', 'Berorientasi riset'],
    contohEvent: ['Kompetisi Karya Tulis Ilmiah FOSNAS'],
    targetPeserta: 'Pelajar SMP/sederajat',
    tentang: 'FOSNAS mewadahi kompetisi karya tulis ilmiah untuk pelajar SMP/sederajat, mendorong kemampuan riset dan menulis karya ilmiah sejak jenjang menengah pertama.',
    positioning: 'Titik awal bagi pelajar untuk mengenal metode riset dan penulisan ilmiah secara terbimbing sebelum melangkah ke jenjang kompetisi yang lebih tinggi.',
    eventUtama: [
      { nama: 'Kompetisi Karya Tulis Ilmiah FOSNAS', info: 'SMP · Regional · Online' }
    ],
    bidangKompetisi: ['Sains', 'Sosial Humaniora', 'Lingkungan'],
    capaian: [
      { angka: '1.800+', label: 'Naskah terkumpul' },
      { angka: '95', label: 'Sekolah berpartisipasi' },
      { angka: '4', label: 'Tahun penyelenggaraan' }
    ],
    testimoni: { isi: 'Proses kurasinya rapi dan feedback dari juri membantu saya memperbaiki naskah untuk lomba berikutnya.', nama: 'Peserta KTI FOSNAS', peran: 'Siswa SMP' },
    sosial: { instagram: '#', tiktok: '#', youtube: '#' }
  },
  gemanesia: {
    nama: 'GEMANESIA',
    logo: 'assets/images/gemanesia.webp',
    tagline: 'Kompetisi Cerdas Cermat Pelajar',
    deskripsi: 'Menggunakan identitas visual resminya.',
    karakter: ['Ceria', 'Kolaboratif', 'Kompetitif'],
    contohEvent: ['Gemanesia Cerdas Cermat SD', 'Gemanesia Kejuaraan Cerdas Cermat Pelajar (GKCP)'],
    targetPeserta: 'Pelajar SD/sederajat',
    tentang: 'GEMANESIA menghadirkan kompetisi cerdas cermat beregu untuk pelajar SD/sederajat, menguji wawasan umum sekaligus melatih kerja sama tim secara luring.',
    positioning: 'Ajang pengenalan kompetisi yang ramah untuk jenjang paling awal, mengutamakan semangat belajar bersama lewat format tim.',
    eventUtama: [
      { nama: 'Gemanesia Cerdas Cermat SD', info: 'SD · Regional · Offline' },
      { nama: 'Gemanesia Kejuaraan Cerdas Cermat Pelajar', info: 'SD · Regional · Offline' }
    ],
    bidangKompetisi: ['Wawasan Umum', 'Matematika Dasar', 'Sains Dasar'],
    capaian: [
      { angka: '3.000+', label: 'Peserta terdaftar' },
      { angka: '210', label: 'Tim berpartisipasi' },
      { angka: '6', label: 'Tahun penyelenggaraan' }
    ],
    testimoni: { isi: 'Anak saya jadi lebih percaya diri dan senang belajar setelah ikut GCC SD bareng teman-teman satu timnya.', nama: 'Orang Tua Peserta GCC SD', peran: 'Wali Murid' },
    sosial: { instagram: '#', tiktok: '#', youtube: '#' }
  }
};
