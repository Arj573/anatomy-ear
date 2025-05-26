import { EarData } from '../types';

export const earData: EarData = {
  outer: [
    {
      id: 'heliks',
      name: 'Heliks',
      description: 'Bagian luar dari telinga yang membentuk lengkungan. Heliks berfungsi untuk menangkap dan memfokuskan gelombang suara ke saluran telinga.',
      section: 'outer',
      position: {
        default: [60, 15],
        sm: [59, 25],
        md: [60, 16],
        lg: [61, 16],
      }
    },
    {
      id: 'antiheliks',
      name: 'Antiheliks',
      description: 'Lipatan atau garis yang berada di dalam telinga luar, yang berfungsi untuk mendukung dan mengarahkan suara ke saluran telinga.',
      section: 'outer',
      position: [65, 42],
    },
    {
      id: 'external-auditory-canal',
      name: 'Kanalis Auditori Eksterna',
      description: 'Saluran berongga yang menghubungkan pinna (auricula) dengan gendang telinga, mengarahkan suara ke gendang telinga.',
      section: 'outer',
      position: [55, 56],
    },
    {
      id: 'lobulus',
      name: 'Lobus (Lobulus)',
      description: 'Bagian bawah dari telinga yang lunak dan tergantung. Fungsi utamanya tidak langsung terkait dengan pendengaran, namun sering digunakan untuk piercing atau tindik telinga.',
      section: 'outer',
      position: {
        default: [60, 80],
        sm: [60, 68],
        md: [60, 70],
        lg: [60, 80],
      }
    },
    {
      id: 'tragus',
      name: 'Tragus',
      description: 'Bagian kecil di depan saluran telinga yang berfungsi untuk melindungi saluran telinga dan mengarahkan suara ke saluran telinga.',
      section: 'outer',
      position: {
        default: [51, 58],
        sm: [50, 55],
        md: [51, 58],
        lg: [51, 58],
      }
    },
    {
      id: 'concha',
      name: 'Chonca',
      description: 'Bagian dari telinga luar yang berbentuk seperti cangkang atau mangkuk mengarahkan gelombang suara menuju saluran telinga (meatus akustikus eksternus)',
      section: 'outer',
      position: {
        default: [61, 58],
        sm: [61, 54],
        md: [61, 55],
        lg: [61, 58]
      }
    },
    {
      id: 'scapha',
      name: 'Scapha',
      description: 'Lekukan atau celah yang memisahkan bagian yang lebih datar (atau belakang) dari telinga luar, dan berfungsi sebagai struktur penopang untuk bagian lainnya.',
      section: 'outer',
      position: [72, 42],
    },
    {
      id: 'fossa-triangular',
      name: 'Fossa triangular',
      description: 'Lekukan berbentuk segitiga yang terletak di bagian depan aurikel telinga luar, antara antihelix dan tragus',
      section: 'outer',
      position: {
        default: [54, 30],
        sm: [54, 40],
        md: [54, 35],
        lg: [54, 30]
      }
    },
  ],
  middle: [
    {
      id: 'ear-canal',
      name: 'Kanalis Auditori Eksterna',
      description: 'Saluran berongga yang menghubungkan pinna (auricula) dengan gendang telinga, mengarahkan suara ke gendang telinga.',
      section: 'middle',
      position: [27, 53],
    },
    {
      id: 'eardrum',
      name: 'Eardrum (Membran Timpani)',
      description: 'Membran tipis yang bergetar saat menerima gelombang suara, mengirimkan getaran tersebut ke tulang pendengaran di telinga tengah.',
      section: 'middle',
      position: [62, 50],
    },
    {
      id: 'malleus',
      name: 'Malleus',
      description: 'Salah satu tulang pendengaran yang terhubung langsung dengan gendang telinga, mentransmisikan getaran suara ke incus.',
      section: 'middle',
      position: {
        default: [63.5, 36],
        sm: [63.5, 43]
      }
    },
    {
      id: 'incus',
      name: 'Incus (Landasan)',
      description: 'Menghubungkan malleus dengan stapes, mentransmisikan getaran suara ke stapes.',
      section: 'middle',
      position: {
        default: [65, 42],
        sm: [65, 47]
      }
    },
    {
      id: 'stapes',
      name: 'Stapes (Stapes)',
      description: 'Menghantarkan getaran suara dari incus ke jendela oval yang menghubungkan telinga tengah dengan telinga dalam.',
      section: 'middle',
      position: {
        default: [70, 45],
        sm: [70, 48]
      } 
    },
    {
      id: 'kanalis-auditori-interna',
      name: 'Kanalis Auditori Interna',
      description: 'Saluran yang menghubungkan telinga luar dengan gendang telinga, mengarahkan suara ke membran timpani (gendang telinga).',
      section: 'middle',
      position: {
        default: [47, 48],
        sm: [47, 50]
      }
    },
    {
      id: 'os-temporalis',
      name: 'Os temporalis',
      description: 'Tulang yang melindungi struktur yang ada di dalam telinga',
      section: 'middle',
      position: {
        default: [47, 40],
        sm: [47, 45]
      }
    }
  ],
  inner: [
    {
      id: 'eustachian-tube',
      name: 'Eustachian Tube (Tuba Eustachius)',
      description: 'Saluran yang menghubungkan telinga tengah dengan nasofaring (bagian atas tenggorokan). Menyeimbangkan tekanan udara di telinga tengah.',
      section: 'inner',
      position: {
        default: [81, 69],
        sm: [81, 60]
      }
    },
    {
      id: 'cochlea',
      name: 'Cochlea (Koklea)',
      description: 'Struktur berbentuk spiral di telinga dalam yang mengubah getaran suara menjadi impuls listrik yang diteruskan ke otak.',
      section: 'inner',
      position: {
        default: [80.5, 46],
        sm: [80.5, 48]
      },
      hasMoreDetail: true,
    },
    {
      id: 'semicircular-canals',
      name: 'Semicircular Canals (Saluran Semisirkular)',
      description: 'Tiga saluran yang terlibat dalam keseimbangan tubuh, mendeteksi perubahan posisi kepala.',
      section: 'inner',
      position: {
        default: [75, 31],
        sm: [75, 41]
      },
      hasMoreDetail: true,
      details: [
        {
          id: 'anterior',
          label: 'Canalis Semicircularis Anterior',
          info: 'Canalis Semicircularis Anterior: Mendeteksi gerakan rotasi kepala dalam arah atas dan bawah...',
          top: '23%',
          left: '30%',
        },
        {
          id: 'lateral',
          label: 'Canalis Semicircularis Lateral',
          info: 'Canalis Semicircularis Lateral: Mendeteksi gerakan rotasi kepala dalam arah horizontal...',
          top: '48%',
          left: '6.5%',
        },
        {
          id: 'posterior',
          label: 'Canalis Semicircularis Posterior',
          info: 'Canalis Semicircularis Posterior: Mendeteksi gerakan rotasi kepala dalam arah atas dan bawah, seperti gerakan saat membungkuk atau mengangkat kepala.',
          top: '48%',
          left: '6.5%',
        },
        {
          id: 'ampula',
          label: 'Ampula',
          info: 'Ampula: Ujung dari canalis semicircularis anterior yang membesar, mengandung crista ampullaris dengan sel-sel rambut sensitif terhadap gerakan rotasi.',
          top: '50%',
          left: '33%',
        },
        {
          id: 'vestibularis',
          label: 'Nervus vestibularis',
          info: 'Nervus vestibularis: Saraf yang memiliki fungsi utama dalam mengontrol keseimbangan tubuh dan membantu mendeteksi posisi kepala',
          top: '53%',
          left: '58%',
        },
      ]
    },    
    {
      id: 'nervus-vestibularis',
      name: 'Nervus vestibularis',
      description: 'Saraf yang memiliki fungsi utama dalam mengontrol keseimbangan tubuh dan membantu mendeteksi posisi kepala',
      section: 'inner',
      position: {
        default: [80, 37],
        sm: [80, 43]
      }
    },
    {
      id: 'nervus-cochlearis ',
      name: 'Nervus cochlearis',
      description: 'Saraf yang berfungsi dalam sistem pendengaran',
      section: 'inner',
      position: {
        default: [83, 37],
        sm: [83, 44]
      }
    },
  ],
};

export const getAllEarParts = () => {
  return [...earData.outer, ...earData.middle, ...earData.inner];
};

export const getEarPartById = (id: string) => {
  const allParts = getAllEarParts();
  return allParts.find(part => part.id === id);
};

export const getEarPartsBySection = (section: 'outer' | 'middle' | 'inner') => {
  return earData[section];
};