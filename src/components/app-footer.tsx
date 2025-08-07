import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Separator } from '@/components/ui/separator';
import { Badge } from '@/components/ui/badge';
import { 
  Facebook, 
  Instagram, 
  Twitter, 
  Youtube,
  Phone, 
  Mail, 
  MapPin,
  Clock,
  Shield,
  Award,
  Building2,
  CreditCard,
  Smartphone,
  Globe
} from 'lucide-react';

export default function AppFooter() {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'Tentang Kami', href: '/about' },
    { name: 'Produk & Layanan', href: '/products' },
    { name: 'Suku Bunga', href: '/rates' },
    { name: 'Kurs Mata Uang', href: '/exchange-rates' },
    { name: 'Lokasi Cabang', href: '/locations' },
    { name: 'Karir', href: '/careers' },
  ];

  const legalLinks = [
    { name: 'Syarat & Ketentuan', href: '/terms' },
    { name: 'Kebijakan Privasi', href: '/privacy' },
    { name: 'Mediasi Perbankan', href: '/mediation' },
    { name: 'Peta Situs', href: '/sitemap' },
    { name: 'LHKPN', href: '/lhkpn' },
    { name: 'Whistleblowing', href: '/whistleblowing' },
  ];

  const services = [
    { name: 'BSG Touch', href: '/bsg-touch', icon: Smartphone },
    { name: 'Internet Banking', href: '/internet-banking', icon: Globe },
    { name: 'SMS Banking', href: '/sms-banking', icon: Phone },
    { name: 'BSG Samsat', href: '/bsg-samsat', icon: CreditCard },
    { name: 'USSD Banking', href: '/ussd-banking', icon: Phone },
    { name: 'ATM Network', href: '/atm', icon: Building2 },
  ];

  return (
    <footer className="bg-red-900 dark:bg-gray-950 text-white">
      {/* Newsletter Section */}
      <div className="bg-red-500 dark:bg-red-700">
        <div className="container mx-auto px-3 sm:px-4 py-6 sm:py-8">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-4 sm:gap-6">
            <div className="text-center lg:text-left w-full lg:w-auto">
              <h3 className="text-lg sm:text-xl font-semibold mb-2">
                Dapatkan Update Terbaru dari Bank SulutGo
              </h3>
              <p className="text-red-100 dark:text-red-200 text-sm sm:text-base">
                Berlangganan newsletter kami untuk mendapatkan informasi produk, promo, dan berita terkini
              </p>
            </div>
            <div className="flex flex-col sm:flex-row w-full lg:w-auto gap-2 sm:gap-2">
              <Input 
                type="email" 
                placeholder="Masukkan email Anda"
                className="w-full sm:min-w-64 md:min-w-72 bg-white dark:bg-gray-800 text-black dark:text-white border-gray-300 dark:border-gray-600 text-sm sm:text-base"
              />
              <Button 
                variant="destructive" 
                className="bg-red-400 hover:bg-red-700 dark:bg-red-500 dark:hover:bg-red-600 w-full sm:w-auto whitespace-nowrap text-sm sm:text-base px-4 py-2"
              >
                Berlangganan
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="container mx-auto px-3 sm:px-4 py-8 sm:py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {/* Company Info */}
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-3 mb-4 sm:mb-6">
              <div className="flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 bg-red-600 dark:bg-red-700 rounded-lg">
                <span className="text-white font-bold text-lg sm:text-xl">BSG</span>
              </div>
              <div>
                <h2 className="text-lg sm:text-xl font-bold">Bank SulutGo</h2>
                <p className="text-xs sm:text-sm text-gray-200 dark:text-gray-400">PT Bank Sulawesi Utara Gorontalo</p>
              </div>
            </div>
            
            <p className="text-gray-200 dark:text-gray-400 mb-4 sm:mb-6 leading-relaxed text-sm sm:text-base">
              Bank SulutGo adalah bank pembangunan daerah yang melayani masyarakat 
              Sulawesi Utara dan Gorontalo dengan komitmen memberikan pelayanan terbaik.
            </p>

            {/* Contact Info */}
            <div className="space-y-2 sm:space-y-3">
              <div className="flex items-center gap-2 sm:gap-3">
                <Phone className="h-3 w-3 sm:h-4 sm:w-4 text-red-400 dark:text-red-300 flex-shrink-0" />
                <span className="text-xs sm:text-sm">(0431) 851234</span>
              </div>
              <div className="flex items-center gap-2 sm:gap-3">
                <Mail className="h-3 w-3 sm:h-4 sm:w-4 text-red-400 dark:text-red-300 flex-shrink-0" />
                <span className="text-xs sm:text-sm break-all sm:break-normal">customercare@banksulutgo.co.id</span>
              </div>
              <div className="flex items-start gap-2 sm:gap-3">
                <MapPin className="h-3 w-3 sm:h-4 sm:w-4 text-red-400 dark:text-red-300 mt-0.5 flex-shrink-0" />
                <span className="text-xs sm:text-sm">
                  Jl. Sam Ratulangi No. 9<br />
                  Manado, Sulawesi Utara 95111
                </span>
              </div>
              <div className="flex items-center gap-2 sm:gap-3">
                <Clock className="h-3 w-3 sm:h-4 sm:w-4 text-red-400 dark:text-red-300 flex-shrink-0" />
                <span className="text-xs sm:text-sm">Senin - Jumat: 08:00 - 15:00 WITA</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-base sm:text-lg font-semibold mb-4 sm:mb-6">Tautan Cepat</h3>
            <ul className="space-y-2 sm:space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link 
                    to={link.href}
                    className="text-gray-200 dark:text-gray-400 hover:text-white dark:hover:text-gray-100 transition-colors duration-200 text-sm sm:text-base"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-base sm:text-lg font-semibold mb-4 sm:mb-6">Layanan Digital</h3>
            <ul className="space-y-2 sm:space-y-3">
              {services.map((service) => {
                const Icon = service.icon;
                return (
                  <li key={service.name}>
                    <Link 
                      to={service.href}
                      className="flex items-center gap-2 text-gray-200 dark:text-gray-400 hover:text-white dark:hover:text-gray-100 transition-colors duration-200 text-sm sm:text-base"
                    >
                      <Icon className="h-3 w-3 sm:h-4 sm:w-4 flex-shrink-0" />
                      <span className="truncate">{service.name}</span>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Legal & Compliance */}
          <div className="sm:col-span-2 lg:col-span-1">
            <h3 className="text-base sm:text-lg font-semibold mb-4 sm:mb-6">Informasi Legal</h3>
            <ul className="space-y-2 sm:space-y-3">
              {legalLinks.map((link) => (
                <li key={link.name}>
                  <Link 
                    to={link.href}
                    className="text-gray-200 dark:text-gray-400 hover:text-white dark:hover:text-gray-100 transition-colors duration-200 text-sm sm:text-base"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>

            {/* Certification Badges */}
            <div className="mt-4 sm:mt-6 space-y-2 sm:space-y-3">
              <Badge variant="outline" className="border-white text-white m-1 text-xs">
                <Shield className="h-2 w-2 sm:h-3 sm:w-3 mr-1" />
                OJK Registered
              </Badge>
              <Badge variant="outline" className="border-white text-white m-1 text-xs">
                <Award className="h-2 w-2 sm:h-3 sm:w-3 mr-1" />
                LPS Guaranteed
              </Badge>
              <Badge variant="outline" className="border-white text-white m-1 text-xs">
                <Award className="h-2 w-2 sm:h-3 sm:w-3 mr-1" />
                ISO 9001:2015
              </Badge>
            </div>
          </div>
        </div>

        <Separator className="my-6 sm:my-8 bg-white" />

        {/* Social Media & Bottom Info */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-4 sm:gap-6">
          <div className="flex flex-col md:flex-row items-center gap-4 sm:gap-6 w-full lg:w-auto">
            {/* Social Media */}
            <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4">
              <span className="text-xs sm:text-sm text-gray-200 dark:text-gray-400 whitespace-nowrap">Ikuti Kami:</span>
              <div className="flex gap-2 sm:gap-3">
                <Link 
                  to="https://facebook.com/BankSulutKantorPusat"
                  className="p-1.5 sm:p-2 rounded-full bg-red-500 dark:bg-red-700 hover:bg-red-200 dark:hover:bg-red-200 transition-colors duration-200"
                  target="_blank"
                >
                  <Facebook className="h-3 w-3 sm:h-4 sm:w-4" />
                </Link>
                <Link 
                  to="https://instagram.com/banksulutgo"
                  className="p-1.5 sm:p-2 rounded-full bg-red-500 dark:bg-red-700 hover:bg-pink-600 dark:hover:bg-pink-600 transition-colors duration-200"
                  target="_blank"
                >
                  <Instagram className="h-3 w-3 sm:h-4 sm:w-4" />
                </Link>
                <Link 
                  to="https://twitter.com/BankSulutGo"
                  className="p-1.5 sm:p-2 rounded-full bg-red-500 dark:bg-red-700 hover:bg-red-200 dark:hover:bg-red-200 transition-colors duration-200"
                  target="_blank"
                >
                  <Twitter className="h-3 w-3 sm:h-4 sm:w-4" />
                </Link>
                <Link 
                  to="#"
                  className="p-1.5 sm:p-2 rounded-full bg-red-500 dark:bg-red-700 hover:bg-red-200 dark:hover:bg-red-200 transition-colors duration-200"
                >
                  <Youtube className="h-3 w-3 sm:h-4 sm:w-4" />
                </Link>
              </div>
            </div>

            {/* Partner Links */}
            <div className="hidden md:flex items-center gap-3 sm:gap-4 text-xs sm:text-sm text-gray-200 dark:text-gray-500">
              <Link to="http://www.asbanda.co.id/" target="_blank" className="hover:text-white dark:hover:text-gray-200 whitespace-nowrap">
                Transformasi BPD
              </Link>
              <span>•</span>
              <Link to="http://www.lps.go.id/" target="_blank" className="hover:text-white dark:hover:text-gray-200 whitespace-nowrap">
                LPS
              </Link>
              <span>•</span>
              <Link to="http://www.bi.go.id/" target="_blank" className="hover:text-white dark:hover:text-gray-200 whitespace-nowrap">
                Bank Indonesia
              </Link>
            </div>
          </div>

          {/* Copyright */}
          <div className="text-center lg:text-right w-full lg:w-auto">
            <p className="text-xs sm:text-sm text-gray-200 dark:text-gray-500">
              © {currentYear} PT Bank Sulawesi Utara Gorontalo. Hak cipta dilindungi.
            </p>
            <p className="text-xs text-gray-200 dark:text-gray-600 mt-1">
              Bank SulutGo berizin dan diawasi oleh OJK. Bank SulutGo merupakan peserta penjaminan LPS.
            </p>
          </div>
        </div>
      </div>

      {/* Bottom Strip */}
      <div className="bg-black/20 dark:bg-black/30 py-2 sm:py-3">
        <div className="container mx-auto px-3 sm:px-4">
          <div className="flex flex-col md:flex-row items-center justify-between text-xs text-gray-200 dark:text-gray-500 gap-3">
            <p className="text-center md:text-left">
              Bank SulutGo mendukung program pemerintah dalam meningkatkan literasi dan inklusi keuangan masyarakat Indonesia.
            </p>
            <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-3">
              <span className="whitespace-nowrap">Didukung oleh:</span>
              <div className="flex gap-2">
                <Badge variant="outline" className="border-gray-600 dark:border-gray-500 text-gray-200 dark:text-gray-500 text-xs px-2 py-1">
                  ASBANDA
                </Badge>
                <Badge variant="outline" className="border-gray-600 dark:border-gray-500 text-gray-200 dark:text-gray-500 text-xs px-2 py-1">
                  PERBARINDO
                </Badge>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
