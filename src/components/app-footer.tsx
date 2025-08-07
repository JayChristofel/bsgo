import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
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
  Globe,
  ArrowRight
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
        <div className="container mx-auto px-4 py-8 md:py-12">
          <div className="lg:flex-row items-center justify-between gap-8">
            <div className="text-center lg:text-left lg:max-w-lg">
              <h3 className="text-xl md:text-2xl font-bold mb-3">
                Dapatkan Update Terbaru dari Bank SulutGo
              </h3>
              <p className="text-red-100 dark:text-red-200 text-sm md:text-base leading-relaxed">
                Berlangganan newsletter kami untuk mendapatkan informasi produk, promo, dan berita terkini
              </p>
            </div>
            
            <div className="w-full lg:w-auto lg:min-w-96">
              <form className="py-24 lg:py-32 container mx-auto px-4 md:px-6 2xl:max-w-[1400px]">
      <div className="p-1.5 flex flex-col sm:flex-row items-center gap-2 rounded-lg">
        <div className="relative w-full">
          <Label htmlFor="subscribe-input" className="sr-only">
            Subscribe
          </Label>
          <div className="absolute inset-y-0 start-0 flex items-center pointer-events-none z-20 ps-3">
            <Mail className="size-4 mt-0.5 text-muted-foreground" />
          </div>
          <Input
            type="text"
            id="subscribe-input"
            name="subscribe-input"
            className="ps-9 "
            placeholder="Enter your email"
          />
        </div>
        <Button className="w-full sm:w-auto ">
          Join
          <ArrowRight className="size-3.5" />
        </Button>
      </div>
      <p className="ps-1.5 mt-2 text-xs text-muted-foreground">
        No spam, unsubscribe at any time.
      </p>
    </form>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-8 sm:py-10 md:py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6 sm:gap-8 md:gap-10 xl:gap-12">
          {/* Company Info */}
          <div className="sm:col-span-2 xl:col-span-1">
            <div className="flex items-center gap-3 mb-4 sm:mb-6">
              <div className="flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 bg-red-600 dark:bg-red-700 rounded-lg flex-shrink-0">
                <span className="text-white font-bold text-lg sm:text-xl">BSG</span>
              </div>
              <div className="min-w-0">
                <h2 className="text-lg sm:text-xl font-bold">Bank SulutGo</h2>
                <p className="text-xs sm:text-sm text-gray-200 dark:text-gray-400">PT Bank Sulawesi Utara Gorontalo</p>
              </div>
            </div>
            
            <p className="text-gray-200 dark:text-gray-400 mb-4 sm:mb-6 leading-relaxed text-sm">
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
                <span className="text-xs sm:text-sm break-all">customercare@banksulutgo.co.id</span>
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
                    className="text-gray-200 dark:text-gray-400 hover:text-white dark:hover:text-gray-100 transition-colors duration-200 block text-sm"
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
                      className="flex items-center gap-2 text-gray-200 dark:text-gray-400 hover:text-white dark:hover:text-gray-100 transition-colors duration-200 text-sm"
                    >
                      <Icon className="h-3 w-3 sm:h-4 sm:w-4 flex-shrink-0" />
                      <span>{service.name}</span>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Legal & Compliance */}
          <div className="sm:col-span-2 xl:col-span-1">
            <h3 className="text-base sm:text-lg font-semibold mb-4 sm:mb-6">Informasi Legal</h3>
            <ul className="space-y-2 sm:space-y-3 mb-4 sm:mb-6">
              {legalLinks.map((link) => (
                <li key={link.name}>
                  <Link 
                    to={link.href}
                    className="text-gray-200 dark:text-gray-400 hover:text-white dark:hover:text-gray-100 transition-colors duration-200 block text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>

            {/* Certification Badges */}
            <div className="flex flex-wrap gap-1 sm:gap-2">
              <Badge variant="outline" className="border-white text-white text-xs">
                <Shield className="h-2 w-2 sm:h-3 sm:w-3 mr-1" />
                OJK Registered
              </Badge>
              <Badge variant="outline" className="border-white text-white text-xs">
                <Award className="h-2 w-2 sm:h-3 sm:w-3 mr-1" />
                LPS Guaranteed
              </Badge>
              <Badge variant="outline" className="border-white text-white text-xs">
                <Award className="h-2 w-2 sm:h-3 sm:w-3 mr-1" />
                ISO 9001:2015
              </Badge>
            </div>
          </div>
        </div>

        <Separator className="my-6 sm:my-8 bg-white" />

        {/* Social Media & Bottom Info */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-4 sm:gap-6">
          <div className="flex flex-col lg:flex-row items-center gap-4 sm:gap-6 w-full lg:w-auto">
            {/* Social Media */}
            <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4">
              <span className="text-xs sm:text-sm text-gray-200 dark:text-gray-400">Ikuti Kami:</span>
              <div className="flex gap-2 sm:gap-3">
                <Link 
                  to="https://facebook.com/BankSulutKantorPusat"
                  className="p-1.5 sm:p-2 rounded-full bg-red-500 dark:bg-red-700 hover:bg-blue-600 dark:hover:bg-blue-600 transition-colors duration-200"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Facebook className="h-3 w-3 sm:h-4 sm:w-4" />
                </Link>
                <Link 
                  to="https://instagram.com/banksulutgo"
                  className="p-1.5 sm:p-2 rounded-full bg-red-500 dark:bg-red-700 hover:bg-pink-600 dark:hover:bg-pink-600 transition-colors duration-200"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Instagram className="h-3 w-3 sm:h-4 sm:w-4" />
                </Link>
                <Link 
                  to="https://twitter.com/BankSulutGo"
                  className="p-1.5 sm:p-2 rounded-full bg-red-500 dark:bg-red-700 hover:bg-blue-400 dark:hover:bg-blue-400 transition-colors duration-200"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Twitter className="h-3 w-3 sm:h-4 sm:w-4" />
                </Link>
                <Link 
                  to="#"
                  className="p-1.5 sm:p-2 rounded-full bg-red-500 dark:bg-red-700 hover:bg-red-600 dark:hover:bg-red-600 transition-colors duration-200"
                >
                  <Youtube className="h-3 w-3 sm:h-4 sm:w-4" />
                </Link>
              </div>
            </div>

            {/* Partner Links */}
            <div className="hidden lg:flex items-center gap-4 text-sm text-gray-200 dark:text-gray-500">
              <Link to="http://www.asbanda.co.id/" target="_blank" rel="noopener noreferrer" className="hover:text-white dark:hover:text-gray-200">
                Transformasi BPD
              </Link>
              <span>•</span>
              <Link to="http://www.lps.go.id/" target="_blank" rel="noopener noreferrer" className="hover:text-white dark:hover:text-gray-200">
                LPS
              </Link>
              <span>•</span>
              <Link to="http://www.bi.go.id/" target="_blank" rel="noopener noreferrer" className="hover:text-white dark:hover:text-gray-200">
                Bank Indonesia
              </Link>
            </div>
          </div>

          {/* Copyright */}
          <div className="text-center lg:text-right">
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
      <div className="bg-black/20 dark:bg-black/30 py-3">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center justify-between text-xs text-gray-200 dark:text-gray-500 gap-4">
            <p className="text-center lg:text-left max-w-2xl">
              Bank SulutGo mendukung program pemerintah dalam meningkatkan literasi dan inklusi keuangan masyarakat Indonesia.
            </p>
            <div className="flex flex-col sm:flex-row items-center gap-3">
              <span>Didukung oleh:</span>
              <div className="flex gap-2">
                <Badge variant="outline" className="border-gray-600 dark:border-gray-500 text-gray-200 dark:text-gray-500 text-xs">
                  ASBANDA
                </Badge>
                <Badge variant="outline" className="border-gray-600 dark:border-gray-500 text-gray-200 dark:text-gray-500 text-xs">
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
