// Data seluruh kompetisi. id di sini harus sama dengan id pada link "Lihat Detail" (?id=...) di index.html.
// Tambah kompetisi baru cukup tambah 1 object baru di sini — halaman detail otomatis bisa memuatnya.
const KOMPETISI = {
  'osn-2026': {
    title: 'Olimpiade Sains Nasional 2026',
    abbr: 'OSN 2026',
    badgeClass: 'is-dibuka',
    badgeText: 'Pendaftaran Dibuka',
    brand: 'PUSKANAS',
    jenjang: 'SMA',
    tingkat: 'Nasional',
    metode: 'Online',
    pendaftaran: '1 – 30 Agustus 2026',
    pelaksanaan: '15 September 2026',
    lede: 'Ajang kompetisi sains tahunan untuk pelajar SMA/sederajat se-Indonesia, mencakup bidang Matematika, Fisika, Kimia, dan Biologi. Peserta bersaing secara individu melalui babak penyisihan daring dan babak final.'
  },
  'fdbn': {
    title: 'Festival Debat Bahasa Nasional',
    abbr: 'FDBN',
    badgeClass: 'is-dibuka',
    badgeText: 'Pendaftaran Dibuka',
    brand: 'PRESMANESIA',
    jenjang: 'Mahasiswa',
    tingkat: 'Nasional',
    metode: 'Offline',
    pendaftaran: '5 – 25 September 2026',
    pelaksanaan: '10 Oktober 2026',
    lede: 'Kompetisi debat bahasa tingkat nasional untuk mahasiswa, menguji kemampuan argumentasi, riset isu, dan public speaking di hadapan dewan juri.'
  },
  'kti-fosnas': {
    title: 'Kompetisi Karya Tulis Ilmiah FOSNAS',
    abbr: 'KTI FOSNAS',
    badgeClass: 'is-segera',
    badgeText: 'Segera Hadir',
    brand: 'FOSNAS',
    jenjang: 'SMP',
    tingkat: 'Regional',
    metode: 'Online',
    pendaftaran: '1 – 31 Oktober 2026',
    pelaksanaan: '14 November 2026',
    lede: 'Kompetisi karya tulis ilmiah untuk pelajar SMP/sederajat, mendorong kemampuan riset dan menulis karya ilmiah sejak jenjang menengah pertama.'
  },
  'gcc-sd': {
    title: 'Gemanesia Cerdas Cermat SD',
    abbr: 'GCC SD',
    badgeClass: 'is-dibuka',
    badgeText: 'Pendaftaran Dibuka',
    brand: 'GEMANESIA',
    jenjang: 'SD',
    tingkat: 'Regional',
    metode: 'Offline',
    pendaftaran: '3 – 28 Agustus 2026',
    pelaksanaan: '12 September 2026',
    lede: 'Kompetisi cerdas cermat beregu untuk pelajar SD/sederajat, menguji wawasan umum dan kerja sama tim secara luring.'
  },
  'krmn': {
    title: 'Kompetisi Riset Mahasiswa Nasional',
    abbr: 'KRMN',
    badgeClass: 'is-segera',
    badgeText: 'Segera Hadir',
    brand: 'PUSKANAS',
    jenjang: 'Mahasiswa',
    tingkat: 'Nasional',
    metode: 'Online',
    pendaftaran: '1 – 30 November 2026',
    pelaksanaan: '18 Desember 2026',
    lede: 'Kompetisi riset tingkat nasional untuk mahasiswa, dari proposal hingga presentasi hasil penelitian di hadapan dewan juri.'
  },
  'ppsc': {
    title: 'Presmanesia Public Speaking Championship',
    abbr: 'PPSC',
    badgeClass: 'is-selesai',
    badgeText: 'Telah Selesai',
    brand: 'PRESMANESIA',
    jenjang: 'SMA',
    tingkat: 'Nasional',
    metode: 'Offline',
    pendaftaran: '1 – 20 Juni 2026',
    pelaksanaan: '29 Juni 2026',
    lede: 'Kompetisi public speaking tingkat nasional untuk pelajar SMA/sederajat, menilai kepercayaan diri, struktur pidato, dan penyampaian di depan publik.'
  },
  'fof': {
    title: 'FOSNAS Olimpiade Fisika',
    abbr: 'FOF',
    badgeClass: 'is-dibuka',
    badgeText: 'Pendaftaran Dibuka',
    brand: 'FOSNAS',
    jenjang: 'SMA',
    tingkat: 'Nasional',
    metode: 'Online',
    pendaftaran: '1 – 27 September 2026',
    pelaksanaan: '11 Oktober 2026',
    lede: 'Olimpiade fisika tingkat nasional untuk pelajar SMA/sederajat, menguji pemahaman konsep dan penalaran fisika melalui babak daring.'
  },
  'gkcp': {
    title: 'Gemanesia Kompetisi Coding Pelajar',
    abbr: 'GKCP',
    badgeClass: 'is-selesai',
    badgeText: 'Telah Selesai',
    brand: 'GEMANESIA',
    jenjang: 'SMP',
    tingkat: 'Regional',
    metode: 'Online',
    pendaftaran: '1 – 15 Mei 2026',
    pelaksanaan: '24 Mei 2026',
    lede: 'Kompetisi coding untuk pelajar SMP/sederajat, menguji logika pemrograman dasar melalui rangkaian soal daring.'
  }
};
