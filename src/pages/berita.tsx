import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";

import AppLayout from "@/components/app-layout";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardHeader,
} from "@/components/ui/card";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

// Data berita lengkap dari Bank SulutGo
const newsData = [
  {
    id: "1967",
    title: "GENCARKAN Hadir di Bolmong Selatan, Tingkatkan Literasi Keuangan Masyarakat",
    category: "Jaringan",
    excerpt: "Program literasi keuangan Bank SulutGo hadir di Bolaang Mongondow Selatan untuk meningkatkan pemahaman masyarakat tentang produk perbankan.",
    date: "23 Juli 2025",
    time: "11:48 WIB",
    image: "https://www.banksulutgo.co.id/gambar/berita/berita-gencarkan-hadir-di-bolmong-selatan-tingkatkan-literasi-keuangan-masyarakat-1967-l.webp",
    slug: "gencarkan-hadir-di-bolmong-selatan-tingkatkan-literasi-keuangan-masyarakat"
  },
  {
    id: "1966",
    title: "OJK SulutGoMalut Dorong Ekonomi Daerah Berbasis Komoditas Unggulan Melalui Kolaborasi",
    category: "BS News",
    excerpt: "Otoritas Jasa Keuangan Sulawesi Utara, Gorontalo, dan Maluku Utara mendorong pengembangan ekonomi daerah melalui kolaborasi strategis.",
    date: "18 Juli 2025",
    time: "10:44 WIB",
    image: "https://www.banksulutgo.co.id/gambar/berita/berita-ojk-sulutgomalut-dorong-ekonomi-daerah-berbasis-komoditas-unggulan-melalui-kolaborasi-1966-l.webp",
    slug: "ojk-sulutgomalut-dorong-ekonomi-daerah-berbasis-komoditas-unggulan-melalui-kolaborasi"
  },
  {
    id: "1965",
    title: "BSG dan Kabupaten Pohuwato, Perkuat Sinergi Melalui Penandatanganan MoU SIPD-RI",
    category: "Shareholders",
    excerpt: "Bank SulutGo dan Kabupaten Pohuwato menandatangani MoU SIPD-RI untuk memperkuat sinergi dalam pengembangan daerah.",
    date: "08 Juli 2025",
    time: "13:09 WIB",
    image: "https://www.banksulutgo.co.id/gambar/berita/berita-bsg-dan-kabupaten-pohuwato-perkuat-sinergi-melalui-penandatanganan-mou-sipd-ri-1965-l.webp",
    slug: "bsg-dan-kabupaten-pohuwato-perkuat-sinergi-melalui-penandatanganan-mou-sipd-ri"
  },
  {
    id: "1964",
    title: "Bank SulutGo, BRI, dan OJK Perkuat Literasi Keuangan di Modoinding",
    category: "BS News",
    excerpt: "Kolaborasi Bank SulutGo, BRI, dan OJK dalam program literasi keuangan untuk masyarakat Modoinding, Minahasa Selatan.",
    date: "03 Juli 2025",
    time: "09:56 WIB",
    image: "https://www.banksulutgo.co.id/template/banksulut/images/about-page.jpg",
    slug: "bank-sulutgo-bri-dan-ojk-perkuat-literasi-keuangan-di-modoinding"
  },
  {
    id: "1963",
    title: "Bank SulutGo Salurkan KUR di Sela Rapat Koordinasi TPAKD, Dorong Ekonomi Unggulan Daerah",
    category: "BS News",
    excerpt: "Penyaluran Kredit Usaha Rakyat (KUR) Bank SulutGo untuk mendorong sektor ekonomi unggulan daerah di Sulawesi Utara.",
    date: "02 Juli 2025",
    time: "15:34 WIB",
    image: "https://www.banksulutgo.co.id/template/banksulut/images/about-page.jpg",
    slug: "bank-sulutgo-salurkan-kur-di-sela-rapat-koordinasi-tpakd-dorong-ekonomi-unggulan-daerah"
  },
  {
    id: "1962",
    title: "Bank SulutGo, PT SMI, dan Pemkot Manado Teken Perjanjian Dana Cadangan Kewajiban",
    category: "Shareholders",
    excerpt: "Penandatanganan perjanjian dana cadangan kewajiban antara Bank SulutGo, PT SMI, dan Pemerintah Kota Manado.",
    date: "25 Juni 2025",
    time: "14:20 WIB",
    image: "https://www.banksulutgo.co.id/template/banksulut/images/about-page.jpg",
    slug: "bank-sulutgo-pt-smi-dan-pemkot-manado-teken-perjanjian-dana-cadangan-kewajiban"
  },
  {
    id: "1962",
    title: "Bank SulutGo, PT SMI, dan Pemkot Manado Teken Perjanjian Dana Cadangan Kewajiban",
    category: "Shareholders",
    excerpt: "Penandatanganan perjanjian dana cadangan kewajiban antara Bank SulutGo, PT SMI, dan Pemerintah Kota Manado.",
    date: "25 Juni 2025",
    time: "14:20 WIB",
    image: "https://www.banksulutgo.co.id/template/banksulut/images/about-page.jpg",
    slug: "bank-sulutgo-pt-smi-dan-pemkot-manado-teken-perjanjian-dana-cadangan-kewajiban"
  },
  {
    id: "1962",
    title: "Bank SulutGo, PT SMI, dan Pemkot Manado Teken Perjanjian Dana Cadangan Kewajiban",
    category: "Shareholders",
    excerpt: "Penandatanganan perjanjian dana cadangan kewajiban antara Bank SulutGo, PT SMI, dan Pemerintah Kota Manado.",
    date: "25 Juni 2025",
    time: "14:20 WIB",
    image: "https://www.banksulutgo.co.id/template/banksulut/images/about-page.jpg",
    slug: "bank-sulutgo-pt-smi-dan-pemkot-manado-teken-perjanjian-dana-cadangan-kewajiban"
  },
  {
    id: "1962",
    title: "Bank SulutGo, PT SMI, dan Pemkot Manado Teken Perjanjian Dana Cadangan Kewajiban",
    category: "Shareholders",
    excerpt: "Penandatanganan perjanjian dana cadangan kewajiban antara Bank SulutGo, PT SMI, dan Pemerintah Kota Manado.",
    date: "25 Juni 2025",
    time: "14:20 WIB",
    image: "https://www.banksulutgo.co.id/template/banksulut/images/about-page.jpg",
    slug: "bank-sulutgo-pt-smi-dan-pemkot-manado-teken-perjanjian-dana-cadangan-kewajiban"
  },
  {
    id: "1962",
    title: "Bank SulutGo, PT SMI, dan Pemkot Manado Teken Perjanjian Dana Cadangan Kewajiban",
    category: "Shareholders",
    excerpt: "Penandatanganan perjanjian dana cadangan kewajiban antara Bank SulutGo, PT SMI, dan Pemerintah Kota Manado.",
    date: "25 Juni 2025",
    time: "14:20 WIB",
    image: "https://www.banksulutgo.co.id/template/banksulut/images/about-page.jpg",
    slug: "bank-sulutgo-pt-smi-dan-pemkot-manado-teken-perjanjian-dana-cadangan-kewajiban"
  },
  {
    id: "1962",
    title: "Bank SulutGo, PT SMI, dan Pemkot Manado Teken Perjanjian Dana Cadangan Kewajiban",
    category: "Shareholders",
    excerpt: "Penandatanganan perjanjian dana cadangan kewajiban antara Bank SulutGo, PT SMI, dan Pemerintah Kota Manado.",
    date: "25 Juni 2025",
    time: "14:20 WIB",
    image: "https://www.banksulutgo.co.id/template/banksulut/images/about-page.jpg",
    slug: "bank-sulutgo-pt-smi-dan-pemkot-manado-teken-perjanjian-dana-cadangan-kewajiban"
  },
  {
    id: "1962",
    title: "Bank SulutGo, PT SMI, dan Pemkot Manado Teken Perjanjian Dana Cadangan Kewajiban",
    category: "Shareholders",
    excerpt: "Penandatanganan perjanjian dana cadangan kewajiban antara Bank SulutGo, PT SMI, dan Pemerintah Kota Manado.",
    date: "25 Juni 2025",
    time: "14:20 WIB",
    image: "https://www.banksulutgo.co.id/template/banksulut/images/about-page.jpg",
    slug: "bank-sulutgo-pt-smi-dan-pemkot-manado-teken-perjanjian-dana-cadangan-kewajiban"
  },
];

// Animation variants
const listVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { 
    opacity: 0, 
    y: 20,
    scale: 0.95
  },
  visible: { 
    opacity: 1, 
    y: 0,
    scale: 1
  },
};

const getCategoryColor = (category: string) => {
  switch (category.toLowerCase()) {
    case "bs news":
      return "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300";
    case "jaringan":
      return "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300";
    case "shareholders":
      return "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-300";
    default:
      return "bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-300";
  }
};

const Blog01Page = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  // Pagination
  const totalPages = Math.ceil(newsData.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentNews = newsData.slice(startIndex, endIndex);

  return (
    <section className="py-8 sm:py-16 lg:py-24">
      <div className="container mx-auto px-4">
        <div>
          <div className="flex items-end justify-between">
            <h2 className="text-3xl font-bold tracking-tight">News</h2>
            <Select defaultValue="recommended">
              <SelectTrigger className="w-[180px]">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="recommended">Recommended</SelectItem>
                <SelectItem value="latest">Latest</SelectItem>
                <SelectItem value="popular">Popular</SelectItem>
              </SelectContent>
            </Select>
          </div> 
        </div> 
        {/* News Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentPage}
            className="mt-4 grid sm:grid-cols-2 lg:grid-cols-3 gap-10"
            variants={listVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
          >
            {currentNews.map((news) => (
              <motion.div
                key={news.id}
                variants={itemVariants}
                layout
              >
                <Card className="shadow-none hover:shadow-lg transition-shadow duration-300">
                  <CardHeader className="p-2">
                    <div className="relative overflow-hidden rounded-lg">
                      <img
                        src={news.image}
                        alt={news.title}
                        className="aspect-video w-full object-cover transition-transform duration-300 hover:scale-105"
                      />
                      <div className="absolute top-3 left-3">
                        <Badge className={getCategoryColor(news.category)}>
                          {news.category}
                        </Badge>
                      </div>
                    </div>
                  </CardHeader>
                  
                  <CardContent className="pt-4 pb-5">
                    <h3 className="mt-4 text-[1.35rem] font-semibold tracking-tight line-clamp-2 hover:text-red-600 dark:hover:text-red-400 transition-colors">
                      <Link to={`/news/${news.id}`}>
                        {news.title}
                      </Link>
                    </h3>
                    
                    <p className="mt-3 text-muted-foreground line-clamp-3">
                      {news.excerpt}
                    </p>
                    
                    <div className="mt-6 flex items-center justify-between">
                      <div className="flex items-center gap-2 text-muted-foreground text-sm">
                        <span>{news.date}</span>
                        <span>•</span>
                        <span>{news.time}</span>
                      </div>
                      
                      <Badge variant="secondary" className="text-xs">
                        {news.category}
                      </Badge>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex justify-center mt-12">
            <div className="flex gap-2">
              <Button
                variant="outline"
                disabled={currentPage === 1}
                onClick={() => setCurrentPage(currentPage - 1)}
              >
                Sebelumnya
              </Button>
              
              {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                <Button
                  key={page}
                  variant={currentPage === page ? "default" : "outline"}
                  onClick={() => setCurrentPage(page)}
                  className="w-10"
                >
                  {page}
                </Button>
              ))}
              
              <Button
                variant="outline"
                disabled={currentPage === totalPages}
                onClick={() => setCurrentPage(currentPage + 1)}
              >
                Selanjutnya
              </Button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default function News() {
  return (
    <AppLayout title="Berita Terkini | Bank SulutGo">
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
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-gray-100 mb-6">
              Berita Terkini
            </h1>
            <p className="text-xl text-gray-700 dark:text-gray-300 mb-8 leading-relaxed">
              Dapatkan informasi terbaru seputar kegiatan, layanan, dan perkembangan Bank SulutGo
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
                    <BreadcrumbItem>
                      <BreadcrumbPage>Berita</BreadcrumbPage>
                    </BreadcrumbItem>
                  </BreadcrumbList>
                </Breadcrumb>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Blog01Page />
    </AppLayout>
  );
}
