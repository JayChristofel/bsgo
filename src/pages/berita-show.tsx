import { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { 
  Calendar, 
  Facebook, 
  Twitter, 
  Copy,
  ArrowLeft,
  ExternalLink,
  CheckCircle
} from "lucide-react";

import AppLayout from "@/components/app-layout";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

// Data berita lengkap
const newsData = [
  {
    id: "1967",
    title: "GENCARKAN Hadir di Bolmong Selatan, Tingkatkan Literasi Keuangan Masyarakat",
    category: "Jaringan",
    excerpt: "Program literasi keuangan Bank SulutGo hadir di Bolaang Mongondow Selatan untuk meningkatkan pemahaman masyarakat tentang produk perbankan.",
    content: `
      <p><strong>Bolaang Uki, 23 Juli 2025</strong> – Gerakan Nasional Cerdas Keuangan (GENCARKAN) hari ini sukses diselenggarakan di Kantor Kecamatan Bolaang Uki, Kabupaten Bolaang Mongondow Selatan (Bolmong Selatan). Acara ini merupakan wujud komitmen bersama untuk meningkatkan literasi dan inklusi keuangan masyarakat, khususnya di wilayah Sulawesi Utara.</p><br>

<p>GENCARKAN di Bolmong Selatan dibuka secara resmi oleh Bapak M. Ichsan Utiah, S.H., Asisten II Bidang Perekonomian dan Pembangunan, yang mewakili Bupati Bolmong Selatan. Dalam sambutannya, Bapak Ichsan Utiah menekankan pentingnya pemahaman keuangan bagi masyarakat untuk menghadapi tantangan ekonomi saat ini. "Dengan literasi keuangan yang baik, masyarakat akan lebih bijak dalam mengelola keuangan pribadi dan keluarga, serta mampu memanfaatkan produk dan layanan keuangan secara optimal," ujarnya.</p><br>

<p>Acara ini turut dihadiri oleh berbagai pihak penting, antara lain Ibu Louisa Parengkuan, Direktur Operasional Bank BSG; Bapak Rizky Betadi Putra, perwakilan dari Otoritas Jasa Keuangan (OJK) Sulawesi Utara, Gorontalo, dan Maluku Utara (SulutGoMalut); Bapak Sudirman Kaharu, Kepala Departemen Non Gadai Pegadaian Area Gorontalo; Bapak Jerry Tuuk, Pemimpin Cabang Bank BSG Molibagu; dan Bapak Nicky Laoh, Pemimpin Departemen Public Relation Bank BSG.</p><br>

<p>Dalam paparannya, Ibu Louisa Parengkuan dari Bank BSG menyampaikan berbagai program dan layanan perbankan yang dapat dimanfaatkan masyarakat untuk perencanaan keuangan yang lebih baik. Senada dengan itu, Bapak Rizky Betadi Putra dari OJK SulutGoMalut mengingatkan pentingnya berhati-hati terhadap investasi bodong dan mendorong masyarakat untuk selalu mengecek legalitas lembaga keuangan kepada OJK. (Z)</p><br>

<p>Sementara itu, Bapak Sudirman Kaharu dari Pegadaian Area Gorontalo memperkenalkan berbagai produk Pegadaian yang dapat membantu masyarakat dalam kebutuhan modal usaha maupun kebutuhan konsumtif lainnya dengan skema yang terjangkau. Bapak Jerry Tuuk dan Bapak Nicky dari Bank BSG juga turut memberikan edukasi mengenai cara menabung yang efektif dan pentingnya berinvestasi sejak dini.</p><br>

<p>Antusiasme peserta GENCARKAN di Bolmong Selatan terlihat dari banyaknya pertanyaan yang diajukan selama sesi diskusi. Diharapkan, melalui kegiatan ini, masyarakat Bolmong Selatan semakin melek keuangan dan dapat mengambil keputusan finansial yang tepat demi kesejahteraan bersama.</p><br>
    `,
    date: "23 Juli 2025",
    time: "11:48 WIB",
    author: "Bank SulutGo",
    image: "https://www.banksulutgo.co.id/gambar/berita/berita-gencarkan-hadir-di-bolmong-selatan-tingkatkan-literasi-keuangan-masyarakat-1967-l.webp",
    slug: "gencarkan-hadir-di-bolmong-selatan-tingkatkan-literasi-keuangan-masyarakat"
  },
  {
    id: "1966",
    title: "OJK SulutGoMalut Dorong Ekonomi Daerah Berbasis Komoditas Unggulan Melalui Kolaborasi",
    category: "BS News",
    excerpt: "Otoritas Jasa Keuangan Sulawesi Utara, Gorontalo, dan Maluku Utara mendorong pengembangan ekonomi daerah melalui kolaborasi strategis.",
    content: `
      <p>Otoritas Jasa Keuangan (OJK) Regional 1 Sulawesi Utara, Gorontalo, dan Maluku Utara terus mendorong pengembangan ekonomi daerah berbasis komoditas unggulan melalui kolaborasi strategis dengan berbagai stakeholder, termasuk Bank SulutGo.</p>
      
      <p>Kepala OJK Regional 1 SulutGoMalut menekankan pentingnya sinergi antara lembaga keuangan, pemerintah daerah, dan pelaku usaha dalam mengoptimalkan potensi ekonomi daerah.</p>
      
      <h3>Fokus pada Komoditas Unggulan</h3>
      <p>Program ini menitikberatkan pada pengembangan sektor-sektor unggulan di wilayah SulutGoMalut, antara lain:</p>
      
      <ul>
        <li>Perikanan dan kelautan</li>
        <li>Perkebunan kelapa dan pala</li>
        <li>Pariwisata dan ekonomi kreatif</li>
        <li>Pertanian dan peternakan</li>
      </ul>
      
      <p>Bank SulutGo sebagai bank pembangunan daerah memiliki peran strategis dalam menyediakan akses pembiayaan bagi pelaku usaha di sektor-sektor tersebut.</p>
      
      <blockquote>
        "Kolaborasi ini diharapkan dapat menciptakan ekosistem ekonomi yang kuat dan berkelanjutan di wilayah SulutGoMalut."
      </blockquote>
      
      <h3>Komitmen Bank SulutGo</h3>
      <p>Bank SulutGo menyambut baik inisiatif OJK ini dan berkomitmen untuk terus mendukung pengembangan ekonomi daerah melalui berbagai program dan produk yang sesuai dengan kebutuhan masyarakat.</p>
      
      <p>Dengan dukungan regulasi yang kondusif dari OJK dan komitmen dari lembaga keuangan daerah, diharapkan pertumbuhan ekonomi di wilayah SulutGoMalut dapat terus meningkat dan memberikan manfaat yang optimal bagi masyarakat.</p>
    `,
    date: "18 Juli 2025",
    time: "10:44 WIB",
    author: "Tim Redaksi Bank SulutGo",
    image: "https://www.banksulutgo.co.id/gambar/berita/berita-ojk-sulutgomalut-dorong-ekonomi-daerah-berbasis-komoditas-unggulan-melalui-kolaborasi-1966-l.webp",
    slug: "ojk-sulutgomalut-dorong-ekonomi-daerah-berbasis-komoditas-unggulan-melalui-kolaborasi"
  },
  {
    id: "1965",
    title: "BSG dan Kabupaten Pohuwato, Perkuat Sinergi Melalui Penandatanganan MoU SIPD-RI",
    category: "Shareholders",
    excerpt: "Bank SulutGo dan Kabupaten Pohuwato menandatangani MoU SIPD-RI untuk memperkuat sinergi dalam pengembangan daerah.",
    content: `
      <p>Bank SulutGo (BSG) dan Pemerintah Kabupaten Pohuwato, Gorontalo, menandatangani Memorandum of Understanding (MoU) Sistem Informasi Pemerintahan Daerah Republik Indonesia (SIPD-RI) dalam upaya memperkuat sinergi pembangunan daerah.</p>
      
      <p>Penandatanganan MoU ini merupakan langkah strategis untuk mengoptimalkan kerja sama antara Bank SulutGo sebagai bank pembangunan daerah dengan Pemerintah Kabupaten Pohuwato dalam mendukung program pembangunan dan pelayanan publik.</p>
      
      <h3>Manfaat Kerja Sama SIPD-RI</h3>
      <p>Melalui implementasi SIPD-RI, diharapkan dapat tercapai beberapa manfaat, antara lain:</p>
      
      <ul>
        <li>Meningkatkan transparansi pengelolaan keuangan daerah</li>
        <li>Mempercepat proses administrasi keuangan</li>
        <li>Mengoptimalkan pelayanan kepada masyarakat</li>
        <li>Mendukung akuntabilitas pemerintahan daerah</li>
      </ul>
      
      <p>Bupati Pohuwato menyatakan apresiasi atas komitmen Bank SulutGo dalam mendukung pengembangan sistem informasi pemerintahan daerah.</p>
      
      <blockquote>
        "Kerja sama ini akan sangat membantu kami dalam meningkatkan kualitas pelayanan publik dan transparansi pengelolaan keuangan daerah."
      </blockquote>
      
      <h3>Komitmen Jangka Panjang</h3>
      <p>Direktur Utama Bank SulutGo menegaskan bahwa MoU ini merupakan bagian dari komitmen jangka panjang Bank SulutGo untuk terus mendukung pembangunan daerah di wilayah operasionalnya.</p>
      
      <p>"Bank SulutGo siap menjadi mitra strategis pemerintah daerah dalam mewujudkan tata kelola pemerintahan yang baik dan pelayanan publik yang optimal," ujar Direktur Utama.</p>
      
      <p>Implementasi SIPD-RI diharapkan dapat dimulai secara bertahap dan memberikan dampak positif bagi masyarakat Kabupaten Pohuwato.</p>
    `,
    date: "08 Juli 2025",
    time: "13:09 WIB",
    author: "Tim Redaksi Bank SulutGo",
    image: "https://www.banksulutgo.co.id/gambar/berita/berita-bsg-dan-kabupaten-pohuwato-perkuat-sinergi-melalui-penandatanganan-mou-sipd-ri-1965-l.webp",
    slug: "bsg-dan-kabupaten-pohuwato-perkuat-sinergi-melalui-penandatanganan-mou-sipd-ri"
  }
];

// Recent news untuk sidebar
const recentNews = newsData.slice(0, 4);

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

export default function NewsDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [copiedLink, setCopiedLink] = useState(false);

  const newsItem = newsData.find(item => item.id === id);

  useEffect(() => {
    if (!newsItem) {
      navigate('/news');
      return;
    }
  }, [newsItem, navigate]);

  if (!newsItem) {
    return null;
  }

  const shareUrl = window.location.href;
  
  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(shareUrl);
      setCopiedLink(true);
      setTimeout(() => setCopiedLink(false), 2000);
    } catch (err) {
      console.error('Failed to copy link:', err);
    }
  };

  const shareToFacebook = () => {
    const url = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`;
    window.open(url, '_blank', 'width=600,height=400');
  };

  const shareToTwitter = () => {
    const text = `${newsItem.title} - Bank SulutGo`;
    const url = `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(shareUrl)}`;
    window.open(url, '_blank', 'width=600,height=400');
  };

  const shareToWhatsApp = () => {
    const text = `*${newsItem.title}*\n\n${newsItem.excerpt}\n\nBaca selengkapnya: ${shareUrl}`;
    const url = `https://wa.me/?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank');
  };

  return (
    <AppLayout title={`${newsItem.title} | Bank SulutGo`}>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-900 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-red-500/10 to-red-600/5 dark:from-red-600/20 dark:to-red-700/10"></div>
          {/* Background Image */}
          <div 
            className="absolute inset-0 opacity-20 dark:opacity-10"
            style={{
              backgroundImage: `url('${newsItem.image}')`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
              filter: 'blur(8px)'
            }}>
          </div>
          {/* Overlay */}
          <div className="absolute inset-0 bg-white/60 dark:bg-gray-900/70"></div>
        </div>
        
        <div className="relative z-10 container mx-auto px-4 py-16 lg:py-24">
          <div className="max-w-4xl">
            <div className="mb-6">
              
              
              <div className="inline-flex items-center space-x-2 text-sm text-gray-700 dark:text-gray-300 bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm rounded-full px-4 py-2 border border-gray-200/50 dark:border-gray-700/50 mb-6">
                <Breadcrumb>
                  <BreadcrumbList>
                    <BreadcrumbItem>
                      <BreadcrumbLink asChild>
                        <Link to="/">Home</Link>
                      </BreadcrumbLink>
                    </BreadcrumbItem>
                    <BreadcrumbSeparator />
                    <BreadcrumbItem>
                      <BreadcrumbLink asChild>
                        <Link to="/news">Berita</Link>
                      </BreadcrumbLink>
                    </BreadcrumbItem>
                    <BreadcrumbSeparator />
                    <BreadcrumbItem>
                      <BreadcrumbPage className="line-clamp-1">
                        {newsItem.title}
                      </BreadcrumbPage>
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
            {/* Main Content - 8 columns */}
            <div className="xl:col-span-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <Button variant="outline" onClick={() => navigate(-1)} className="mb-6">
                  <ArrowLeft className="h-4 w-4 mr-2" />
                  Kembali
                </Button>

                {/* Article Header */}
                <div className="mx-auto items-center gap-4 mb-8">
                  <Badge className={`${getCategoryColor(newsItem.category)} mb-2`}>
                    {newsItem.category}
                  </Badge>
                  
                  <h2 className="text-pretty text-4xl font-semibold md:text-5xl lg:text-6xl mb-8">
                    {newsItem.title}
                  </h2>
                  
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
                    {/* Left side - Date, time, and author */}
                    <div className="flex flex-col gap-3">
                      <div className="flex items-center gap-3 text-sm md:text-base text-gray-600 dark:text-gray-400">
                        <Calendar className="h-4 w-4" />
                        <span>{newsItem.date} {newsItem.time}</span>
                      </div>
                      <div className="flex items-center gap-3 text-sm md:text-base text-gray-600 dark:text-gray-400">
                        <div className="flex items-center gap-2">
                          <div className="h-8 w-8 rounded-full bg-gradient-to-br from-red-500 to-red-600 flex items-center justify-center text-white text-xs font-semibold">
                            {newsItem.author.split(' ').map(word => word[0]).join('').slice(0, 2)}
                          </div>
                          <span> {newsItem.author}</span>
                        </div>
                      </div>
                    </div>

                    {/* Right side - Share buttons */}
                    <div className="flex items-center gap-3 mt-9">
                      <span className="text-sm text-gray-600 dark:text-gray-400">Bagikan:</span>
                      <div className="flex gap-2">
                        <Button variant="outline" size="sm" onClick={shareToFacebook}>
                          <Facebook className="h-4 w-4" />
                        </Button>
                        <Button variant="outline" size="sm" onClick={shareToTwitter}>
                          <Twitter className="h-4 w-4" />
                        </Button>
                        <Button variant="outline" size="sm" onClick={shareToWhatsApp}>
                          <ExternalLink className="h-4 w-4" />
                        </Button>
                        <Button variant="outline" size="sm" onClick={handleCopyLink}>
                          {copiedLink ? (
                            <CheckCircle className="h-4 w-4 text-green-600" />
                          ) : (
                            <Copy className="h-4 w-4" />
                          )}
                        </Button>
                      </div>
                    </div>
                  </div>
                  
                  {/* Featured Image */}
                  <img
                    src={newsItem.image}
                    alt={newsItem.title}
                    className="mb-8 mt-4 aspect-video w-full rounded-lg border object-cover"
                  />
                </div>

                {/* Article Content */}
                <div className="prose dark:prose-invert mx-auto text-justify">
                  <div 
                    dangerouslySetInnerHTML={{ __html: newsItem.content }}
                  />
                </div>
              </motion.div>
            </div>

            {/* Sidebar - 4 columns */}
            <div className="xl:col-span-4">
              <div className="sticky top-42 space-y-6">
                {/* Recent News */}
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Berita Terkini</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {recentNews.map((item, index) => (
                      <motion.div
                        key={item.id}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.4, delay: index * 0.1 }}
                      >
                        <Link 
                          to={`/news/${item.id}`}
                          className="block group"
                        >
                          <div className="flex gap-3">
                            <img
                              src={item.image}
                              alt={item.title}
                              className="w-16 h-16 object-cover rounded-md flex-shrink-0"
                            />
                            <div className="flex-1 min-w-0">
                              <h4 className="text-sm font-medium line-clamp-2 group-hover:text-red-600 dark:group-hover:text-red-400 transition-colors">
                                {item.title}
                              </h4>
                              <div className="flex items-center mt-1 text-xs text-gray-500 dark:text-gray-400">
                                <Calendar className="h-3 w-3 mr-1" />
                                <span>{item.date}</span>
                              </div>
                            </div>
                          </div>
                        </Link>
                        {index < recentNews.length - 1 && (
                          <Separator className="mt-4" />
                        )}
                      </motion.div>
                    ))}
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>
    </AppLayout>
  );
}
