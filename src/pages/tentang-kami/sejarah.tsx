import { ReactNode } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Users, ChartColumn } from "lucide-react";
import AppLayout from "@/components/app-layout";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

// Timeline entry interface
interface TimelineEntry {
  date: string;
  title: string;
  content: string;
}

// About menu interface
interface AboutMenuItem {
  id: string;
  title: string;
  icon?: ReactNode;
  href: string;
  isActive?: boolean;
}

// Timeline data
const timelineData: TimelineEntry[] = [
  {
    date: "17 Maret 1961",
    title: "Pendirian Awal",
    content: "Didirikan dengan nama Bank Pembangunan Daerah Sulawesi Utara Tengah melalui Akta No. 88 oleh Raden Hadiwido (pengganti Raden Kadiman, Notaris Jakarta)."
  },
  {
    date: "4 Agustus 1961",
    title: "Perubahan AD/ART Pertama",
    content: "Melalui Akta No. 22 oleh Notaris Raden Kadiman untuk penyesuaian dan perbaikan anggaran dasar dan anggaran rumah tangga perusahaan."
  },
  {
    date: "10 Oktober 1961",
    title: "Perubahan AD/ART Kedua",
    content: "Melalui Akta No. 46 oleh Raden Hadiwido untuk melengkapi ketentuan operasional dan struktur organisasi bank."
  },
  {
    date: "13 Oktober 1961",
    title: "Pengesahan Menteri Kehakiman RI",
    content: "Penetapan No. J.A.5/109/6 menyatakan pendirian sah secara hukum oleh Menteri Kehakiman Republik Indonesia."
  },
  {
    date: "2 Juni 1964",
    title: "Perubahan Bentuk Hukum",
    content: "Berdasarkan Perda 2 Juni 1964 dan UU No. 13 Tahun 1962 jo. UU No. 13 Tahun 1964, bentuk badan hukum berubah menjadi Perusahaan Daerah."
  },
  {
    date: "1998",
    title: "Landasan Hukum Rekapitalisasi",
    content: "Terbitnya Perda No. 84 Tahun 1998 sebagai dasar untuk ikut program rekapitalisasi Bank Umum dalam rangka penguatan modal dan struktur keuangan."
  },
  {
    date: "9 April 1999",
    title: "Perjanjian Rekapitalisasi",
    content: "Bank Sulut menandatangani perjanjian berdasarkan SKB Menkeu & Gubernur BI No. 135/KMK.017/1999 & No. 32/17/KEP/GBI untuk program rekapitalisasi perbankan nasional."
  },
  {
    date: "14 April 1999",
    title: "Pendirian Sebagai PT",
    content: "Dibentuk ulang sebagai PT melalui Akta No. 7 oleh Notaris Joanes Tommy Lasut, SH (berdasarkan Perda No. 1 Tahun 1999) untuk menyesuaikan dengan regulasi perbankan modern."
  },
  {
    date: "14 Mei 1999",
    title: "Pengesahan oleh Menkeh RI",
    content: "Keputusan No. C-8296.HT.01.01.TH'99 dari Menteri Kehakiman RI mengesahkan perubahan status menjadi Perseroan Terbatas."
  },
  {
    date: "6 Agustus 1999",
    title: "Pengumuman di Berita Negara RI",
    content: "Nomor 63, Tambahan No. 4772 sebagai pengumuman resmi perubahan status hukum perusahaan kepada publik."
  },
  {
    date: "30 Juni 2004",
    title: "Divestasi Saham Negara",
    content: "Pemerintah RI (via Menteri Keuangan) menjual seluruh saham negara di PT Bank Sulut. Dilakukan melalui Perjanjian Jual Beli dan Pelunasan Obligasi Negara."
  },
  {
    date: "23 Agustus 2006",
    title: "Peningkatan Modal Dasar",
    content: "Modal naik dari Rp 100 Miliar menjadi Rp 300 Miliar. Disahkan dengan No. C-24640 HT.01.04.TH.2006 dari Menkumham RI untuk mendukung ekspansi bisnis."
  },
  {
    date: "23 Oktober 2006",
    title: "Diumumkan di Berita Negara RI",
    content: "Berita Negara No. 85, Tambahan No. 11432/2006 mengumumkan secara resmi peningkatan modal dasar perusahaan."
  },
  {
    date: "8 Mei 2015",
    title: "Rapat Umum Pemegang Saham Luar Biasa (RUPS-LB)",
    content: "Keputusan penting: penggantian nama perusahaan untuk modernisasi brand dan meningkatkan daya saing di industri perbankan."
  },
  {
    date: "23 Mei 2015",
    title: "Keputusan Menkumham RI",
    content: "Surat No. AHU-0935695.AH.01.02.TAHUN 2015 menetapkan perubahan nama perusahaan secara resmi."
  },
  {
    date: "23 September 2015",
    title: "Keputusan OJK",
    content: "Dengan No. 17/KDK.03/2015, nama resmi berubah menjadi PT Bank Pembangunan Daerah Sulawesi Utara Gorontalo (BANK SULUTGO) sebagai bagian dari rebranding komprehensif."
  }
];

// About menu items
const aboutMenuItems: AboutMenuItem[] = [
  {
    id: "direksi",
    title: "Jajaran Direksi",
    href: "/about/sejarah",
  },
  {
    id: "struktur",
    title: "Struktur Organisasi",
    href: "/about/sejarah",
  },
  {
    id: "komisaris",
    title: "Dewan Komisaris",
    href: "/about/sejarah",
  },
  {
    id: "saham",
    title: "Pemegang Saham",
    href: "/about/sejarah",
  },
  {
    id: "sejarah",
    title: "Sejarah Bank SulutGo",
    href: "/about/sejarah",
    isActive: true
  },
  {
    id: "visi-misi",
    title: "Visi & Misi",
    href: "/about/visi-misi"
  },
  {
    id: "logo",
    title: "Logo Bank SulutGo",
    href: "/about/struktur-organisasi"
  },
  {
    id: "manajemen",
    title: "Sistem Manajemen Anti Penyuapan",
    href: "/about/manajemen"
  }
];

const hubunganinvestorMenuItems: AboutMenuItem[] = [
  {
    id: "tata-kelola",
    title: "Tata Kelola",
    href: "/investor/tata-kelola"
  },
  {
    id: "company-profle",
    title: "Company Profile",
    href: "/investor/publikasi"
  },
  {
    id: "suku-bunga",
    title: "Suku Bunga Dasar Kredit",
    href: "/investor/informasi-saham"
  },
  {
    id: "laporan",
    title: "Laporan Keuangan",
    href: "/investor/reports"
  },
  {
    id: "suku-bunga",
    title: "Laporan Tahunan",
    href: "/investor/informasi-saham"
  },
  {
    id: "corporate-governance",
    title: "Laporan Good Corporate Governance",
    href: "/investor/informasi-saham"
  },
  {
    id: "obligasi",
    title: "Obligasi",
    href: "/investor/informasi-saham"
  }
];

// Sort timeline chronologically
const sortedTimeline = [...timelineData].sort((a, b) => {
  const getDate = (dateStr: string) => {
    if (dateStr.includes(' ')) {
      // For "DD Month YYYY" format, convert to proper date
      const parts = dateStr.split(' ');
      if (parts.length === 3) {
        const day = parseInt(parts[0]);
        const month = parts[1];
        const year = parseInt(parts[2]);
        
        // Convert month names to numbers
        const monthMap: { [key: string]: number } = {
          'Januari': 0, 'Februari': 1, 'Maret': 2, 'April': 3,
          'Mei': 4, 'Juni': 5, 'Juli': 6, 'Agustus': 7,
          'September': 8, 'Oktober': 9, 'November': 10, 'Desember': 11
        };
        
        return new Date(year, monthMap[month] || 0, day);
      }
    }
    // For "YYYY" format, use January 1st of that year
    return new Date(parseInt(dateStr), 0, 1);
  };
  
  return getDate(a.date).getTime() - getDate(b.date).getTime();
});


export default function Sejarah() {
  return (
    <AppLayout title="Sejarah Bank SulutGo">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-900 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-red-500/10 to-red-600/5 dark:from-red-600/20 dark:to-red-700/10"></div>
          {/* Background Image */}
          <div 
            className="absolute inset-0 opacity-30 dark:opacity-20"
            style={{
              backgroundImage: `url('https://www.banksulutgo.co.id/template/banksulut/images/about-page.jpg')`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat'
            }}>
          </div>
          {/* Overlay for better text readability */}
          <div className="absolute inset-0 bg-white/40 dark:bg-gray-900/60"></div>
          {/* Large decorative circles */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-red-500/5 dark:bg-red-600/10 rounded-full blur-3xl transform translate-x-32 -translate-y-32"></div>
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-red-600/5 dark:bg-red-700/10 rounded-full blur-2xl transform -translate-x-32 translate-y-32"></div>
        </div>
        
        <div className="relative z-10 container mx-auto px-4 py-16 lg:py-24">
          <div>
            <h1 className="md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-gray-100 mb-6">
              Sejarah Bank SulutGo
            </h1>
            <p className="text-xl text-gray-700 dark:text-gray-300 mb-8 leading-relaxed">
              Perjalanan panjang Bank SulutGo dalam melayani dan membangun ekonomi Sulawesi Utara sejak tahun 1961
            </p>
            <div className="w-full max-w-md">
              <div className="inline-flex items-center space-x-2 text-lg text-gray-700 dark:text-gray-300 bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm rounded-full px-6 py-3 border border-gray-200/50 dark:border-gray-700/50">
                <Breadcrumb>
                  <BreadcrumbList>
                    <BreadcrumbItem>
                      <BreadcrumbLink asChild>
                        <Link to="/">Home</Link>
                      </BreadcrumbLink>
                    </BreadcrumbItem>
                    <BreadcrumbSeparator />
                    <BreadcrumbItem>Tentang Kami</BreadcrumbItem>
                    <BreadcrumbSeparator />
                    <BreadcrumbItem>
                      <BreadcrumbPage>Sejarah</BreadcrumbPage>
                    </BreadcrumbItem>
                  </BreadcrumbList>
                </Breadcrumb>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-8 sm:py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 xl:grid-cols-12 gap-6 lg:gap-8">
            {/* Main Timeline - 8 columns */}
            <div className="xl:col-span-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <div className="text-center mb-12">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl mb-4">
                    Sejarah Bank SulutGo
                  </h1>
                  <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                    Perjalanan panjang Bank SulutGo dalam melayani dan membangun ekonomi Sulawesi Utara sejak tahun 1961
                  </p>
                </div>

                {/* Timeline */}
                <div className="relative mx-auto max-w-2xl">
                  <Separator
                    orientation="vertical"
                    className="absolute left-2 top-4 bg-gray-300 dark:bg-gray-200"
                    style={{ height: 'calc(100% - 2rem)' }}
                  />
                  {sortedTimeline.map((entry, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="relative mb-10 pl-8"
                    >
                      <div className="absolute left-0 top-3.5 flex size-4 items-center justify-center rounded-full bg-black dark:bg-white" />
                      
                      <h4 className="rounded-xl py-2 text-xl font-bold tracking-tight xl:mb-1 xl:px-3">
                        {entry.title}
                      </h4>

                      <h5 className="text-md text-black font-semibold top-3 rounded-xl tracking-tight xl:absolute xl:-left-34 dark:text-white">
                        {entry.date}
                      </h5>

                      <Card className="my-1 border-none shadow-none hover:shadow-lg transition-shadow duration-300">
                        <CardContent className="px-0 xl:px-2">
                          <div className="prose dark:prose-invert text-gray-600 dark:text-gray-200 px-2 text-justify">
                            {entry.content}
                          </div>
                        </CardContent>
                      </Card>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Sidebar Navigation - 4 columns */}
            <div className="xl:col-span-4">
              <div className="sticky top-42">
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                >
                  <Card>
                    <CardContent>
                      <Accordion type="single" defaultValue="sejarah" className="w-full">
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.5, delay: 0.4 }}
                        >
                          <AccordionItem value="sejarah">
                            <AccordionTrigger className="text-left">
                              <div className="flex items-center gap-2">
                                <Users className="h-4 w-4" />
                                <span>Tentang Kami</span>
                              </div>
                            </AccordionTrigger>
                            <AccordionContent>
                              <motion.div 
                                className="space-y-2"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 0.4, delay: 0.1 }}
                              >
                                {aboutMenuItems.map((item, index) => (
                                  <motion.div
                                    key={item.id}
                                    initial={{ opacity: 0, x: -10 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ 
                                      duration: 0.3, 
                                      delay: 0.1 + (index * 0.05) 
                                    }}
                                    whileHover={{ x: 4 }}
                                    whileTap={{ scale: 0.98 }}
                                  >
                                    <Link
                                      to={item.href}
                                      className={`block py-2 px-3 text-sm rounded-md transition-colors ${
                                        item.isActive 
                                          ? 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-100 font-medium' 
                                          : 'hover:bg-red-100 dark:hover:bg-red-700'
                                      }`}
                                    >
                                      <div className="flex items-center gap-2">
                                        {item.icon && item.icon}
                                        <span>{item.title}</span>
                                      </div>
                                    </Link>
                                  </motion.div>
                                ))}
                              </motion.div>
                            </AccordionContent>
                          </AccordionItem>
                        </motion.div>
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.5, delay: 0.5 }}
                        >
                          <AccordionItem value="hubungan-investor">
                            <AccordionTrigger className="text-left">
                              <div className="flex items-center gap-2">
                                <ChartColumn className="h-4 w-4" />
                                <span>Hubungan Investor</span>
                              </div>
                            </AccordionTrigger>
                            <AccordionContent>
                              <motion.div 
                                className="space-y-2"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 0.4, delay: 0.1 }}
                              >
                                {hubunganinvestorMenuItems.map((item, index) => (
                                  <motion.div
                                    key={item.id}
                                    initial={{ opacity: 0, x: -10 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ 
                                      duration: 0.3, 
                                      delay: 0.1 + (index * 0.05) 
                                    }}
                                    whileHover={{ x: 4 }}
                                    whileTap={{ scale: 0.98 }}
                                  >
                                    <Link
                                      to={item.href}
                                      className="block py-2 px-3 text-sm rounded-md transition-colors hover:bg-gray-100 dark:hover:bg-gray-800"
                                    >
                                      <div className="flex items-center gap-2">
                                        {item.icon && item.icon}
                                        <span>{item.title}</span>
                                      </div>
                                    </Link>
                                  </motion.div>
                                ))}
                              </motion.div>
                            </AccordionContent>
                          </AccordionItem>
                        </motion.div>
                      </Accordion>
                    </CardContent>
                  </Card>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </AppLayout>
  );
}
