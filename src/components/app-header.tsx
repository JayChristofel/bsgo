import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom'
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from '@/components/ui/navigation-menu';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
// import { Badge } from '@/components/ui/badge';
import { 
  Menu,
  User, 
  Phone, 
  Mail, 
  MapPin, 
  Globe,
  CreditCard,
  Smartphone,
  Building2,
  TrendingUp,
  Search,
  FileText,
  Users2,
  UserCheck,
  Landmark,
  BookMarked,
  Target,
  BadgeInfo,
  ShieldCheck,
  FileBarChart2,
  Banknote,
  FileSpreadsheet,
  FileCheck,
  HandCoins,
} from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { cn } from '@/lib/utils';
import { ModeToggle } from '@/components/mode-toggle';

interface MenuItem {
  title: string;
  url: string;
  description?: string;
  icon?: React.ReactNode;
  items?: MenuItem[];
  categories?: MenuCategory[];
}

interface MenuCategory {
  title: string;
  items: MenuItem[];
}

export default function AppHeader() {
  const [isOpen, setIsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [isMac, setIsMac] = useState(false);
  const location = useLocation();
  const url = location.pathname;

  // Helper function to check if a menu item is active
  const isActiveMenu = (menuUrl: string, subItems?: MenuItem[], categories?: MenuCategory[]) => {
    // Check exact match first
    if (url === menuUrl) return true;
    
    // Check if current URL starts with menu URL (for nested routes)
    if (menuUrl !== '#' && url.startsWith(menuUrl)) return true;
    
    // Check sub-items if they exist
    if (subItems) {
      return subItems.some(item => url === item.url || url.startsWith(item.url));
    }
    
    // Check categories if they exist
    if (categories) {
      return categories.some(category => 
        category.items.some(item => url === item.url || url.startsWith(item.url))
      );
    }
    
    return false;
  };

  // Helper function to check if a sub-menu item is active
  const isActiveSubMenu = (itemUrl: string) => {
    return url === itemUrl || url.startsWith(itemUrl);
  };

  // Detect if user is on Mac
  useEffect(() => {
    setIsMac(navigator.platform.toUpperCase().indexOf('MAC') >= 0);
  }, []);

  // Handle keyboard shortcut
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey && isMac) || (e.ctrlKey && !isMac)) {
        if (e.key === 'k') {
          e.preventDefault();
          const searchInput = document.getElementById('search-input');
          searchInput?.focus();
        }
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isMac]);

  // Render functions inside component scope
  const renderMenuItem = (item: MenuItem) => {
    const isActive = isActiveMenu(item.url, item.items, item.categories);
    
    if (item.categories) {
      // Menu with categories
      return (
        <NavigationMenuItem key={item.title}>
          <NavigationMenuTrigger 
            className={cn(
              "group inline-flex h-10 w-max items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors hover:bg-gray-100 dark:hover:bg-gray-800 focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[state=open]:bg-red-100 dark:data-[state=open]:bg-red-900/30 data-[state=open]:text-red-900 dark:data-[state=open]:text-red-400 data-[state=open]:font-semibold",
              isActive 
                ? "bg-red-100 dark:bg-red-900/30 text-red-900 dark:text-red-400 font-semibold" 
                : "bg-transparent text-gray-900 dark:text-gray-100"
            )}
          >
            {item.title}
          </NavigationMenuTrigger>
          <NavigationMenuContent className="bg-white dark:bg-gray-900 shadow-lg border border-gray-200 dark:border-gray-700 rounded-lg">
            <div className={cn(
              "p-4",
              item.title === 'Produk & Layanan' 
                ? "w-3xl lg:w-5xl" 
                : item.title === 'Tentang Kami'
                  ? "w-2xl lg:w-3xl"
                  : "w-xl lg:w-xl"
            )}>
              <div className={cn(
                "grid gap-4",
                item.title === 'Produk & Layanan' 
                  ? "md:grid-cols-3" 
                  : item.title === 'Tentang Kami'
                    ? "md:grid-cols-2"
                    : "md:grid-cols-1"
              )}>
                {item.categories.map((category) => (
                  <div key={category.title} className="space-y-6">
                    <h4 className="text-sm font-semibold text-red-900 dark:text-red-400 border-b border-red-100 dark:border-red-900/30 pb-3">
                      {category.title}
                    </h4>
                    <div className="space-y-2">
                      {category.items.map((subItem) => (
                        <NavigationMenuLink asChild key={subItem.title}>
                          <SubMenuLink 
                            item={subItem} 
                            isActive={isActiveSubMenu(subItem.url)} 
                            compact={false} 
                          />
                        </NavigationMenuLink>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </NavigationMenuContent>
        </NavigationMenuItem>
      );
    }
    
    if (item.items) {
      // Regular menu with items
      return (
        <NavigationMenuItem key={item.title}>
          <NavigationMenuTrigger 
            className={cn(
              "group inline-flex h-10 w-max items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors hover:bg-gray-100 dark:hover:bg-gray-800 focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[state=open]:bg-red-100 dark:data-[state=open]:bg-red-900/30 data-[state=open]:text-red-900 dark:data-[state=open]:text-red-400 data-[state=open]:font-semibold",
              isActive 
                ? "bg-red-100 dark:bg-red-900/30 text-red-900 dark:text-red-400 font-semibold" 
                : "bg-transparent text-gray-900 dark:text-gray-100"
            )}
          >
            {item.title}
          </NavigationMenuTrigger>
          <NavigationMenuContent className={cn(
            "bg-white dark:bg-gray-900 shadow-lg border border-gray-200 dark:border-gray-700 rounded-lg"
          )}>
            <div className={cn(
              "p-4",
              item.title === 'Kantor Cabang'
                ? "w-[400px] md:w-[450px]"
                : "w-[520px] md:w-[650px] lg:w-[750px]"
            )}>
              <div className={cn(
                "grid gap-4",
                item.title === 'Kantor Cabang'
                  ? "md:grid-cols-1"
                  : "md:grid-cols-2"
              )}>
                {item.items.map((subItem) => (
                  <NavigationMenuLink asChild key={subItem.title}>
                    <SubMenuLink item={subItem} isActive={isActiveSubMenu(subItem.url)} />
                  </NavigationMenuLink>
                ))}
              </div>
            </div>
          </NavigationMenuContent>
        </NavigationMenuItem>
      );
    }

    return (
      <NavigationMenuItem key={item.title}>
        <NavigationMenuLink asChild>
          <Link
            to={item.url}
            className={cn(
              "group inline-flex h-10 w-max items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors focus:outline-none disabled:pointer-events-none disabled:opacity-50",
              isActive
                ? "bg-red-100 dark:bg-red-900/30 text-red-900 dark:text-red-400 font-semibold"
                : "bg-transparent hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-900 dark:text-gray-100"
            )}
          >
            {item.title}
          </Link>
        </NavigationMenuLink>
      </NavigationMenuItem>
    );
  };

  const renderMobileMenuItem = (item: MenuItem) => {
    const isActive = isActiveMenu(item.url, item.items, item.categories);
    
    if (item.categories) {
      // Menu with categories
      return (
        <AccordionItem key={item.title} value={item.title} className="border-b-0">
          <AccordionTrigger 
            className={cn(
              "text-md py-0 font-semibold hover:no-underline",
              isActive 
                ? "text-red-900 dark:text-red-400" 
                : "text-gray-900 dark:text-gray-100"
            )}
          >
            {item.title}
          </AccordionTrigger>
          <AccordionContent className="mt-2">
            <div className="space-y-4 ps-4">
              {item.categories.map((category) => (
                <div key={category.title} className="space-y-2">
                  <h5 className="text-sm font-semibold text-red-900 dark:text-red-400 border-b border-red-100 dark:border-red-900/30 pb-1">
                    {category.title}
                  </h5>
                  <div className="space-y-1 pl-2">
                    {category.items.map((subItem) => (
                      <SubMenuLink key={subItem.title} item={subItem} mobile isActive={isActiveSubMenu(subItem.url)} />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </AccordionContent>
        </AccordionItem>
      );
    }
    
    if (item.items) {
      // Regular menu with items
      return (
        <AccordionItem key={item.title} value={item.title} className="border-b-0">
          <AccordionTrigger 
            className={cn(
              "text-md py-0 font-semibold hover:no-underline",
              isActive 
                ? "text-red-900 dark:text-red-400" 
                : "text-gray-900 dark:text-gray-100"
            )}
          >
            {item.title}
          </AccordionTrigger>
          <AccordionContent className="mt-2">
            {item.items.map((subItem) => (
              <SubMenuLink key={subItem.title} item={subItem} mobile isActive={isActiveSubMenu(subItem.url)} />
            ))}
          </AccordionContent>
        </AccordionItem>
      );
    }

    return (
      <Link 
        key={item.title} 
        to={item.url} 
        className={cn(
          "text-md font-semibold",
          isActive 
            ? "text-red-900 dark:text-red-400" 
            : "text-gray-900 dark:text-gray-100"
        )}
      >
        {item.title}
      </Link>
    );
  };

  const navigationItems: MenuItem[] = [
    {
      title: 'Produk & Layanan',
      url: '#',
      categories: [
        {
          title: 'Produk Simpanan',
          items: [
            { 
              title: 'Simpeda', 
              url: '/products-services/simpeda', 
              description: 'Berbagai pilihan tabungan untuk kebutuhan Anda',
              icon: <Building2 className="h-5 w-5 shrink-0" />
            },
            { 
              title: 'Tabungan Bunaken', 
              url: '/products-services/tabungan-bunaken', 
              description: 'Investasi dengan bunga menarik',
              icon: <TrendingUp className="h-5 w-5 shrink-0" />
            },
            { 
              title: 'Tabunganku', 
              url: '/products/tabunganku', 
              description: 'Tabungan sederhana dengan setoran awal terjangkau',
              icon: <Building2 className="h-5 w-5 shrink-0" />
            },
            { 
              title: 'Rekening Giro', 
              url: '/products/giro', 
              description: 'Rekening giro untuk kebutuhan bisnis dan transaksi',
              icon: <CreditCard className="h-5 w-5 shrink-0" />
            },
            { 
              title: 'Tabungan Bohusami', 
              url: '/products/tabungan-bohusami', 
              description: 'Tabungan berjangka dengan bunga kompetitif',
              icon: <TrendingUp className="h-5 w-5 shrink-0" />
            },
            { 
              title: 'Tabungan PNS', 
              url: '/products/tabungan-pns', 
              description: 'Tabungan khusus Pegawai Negeri Sipil',
              icon: <Building2 className="h-5 w-5 shrink-0" />
            },
            { 
              title: 'Tabungan SIMPEL', 
              url: '/products/tabungan-simpel', 
              description: 'Simpanan Pelajar untuk masa depan cerah',
              icon: <BookMarked className="h-5 w-5 shrink-0" />
            },
            { 
              title: 'BSG Prime', 
              url: '/products/bsg-prime', 
              description: 'Tabungan premium dengan layanan eksklusif',
              icon: <BadgeInfo className="h-5 w-5 shrink-0" />
            },
            { 
              title: 'Tabungan Bohusami Plan', 
              url: '/products/tabungan-bohusami-plan', 
              description: 'Tabungan rencana untuk tujuan finansial spesifik',
              icon: <Target className="h-5 w-5 shrink-0" />
            },
          ]
        },
        {
          title: 'Informasi Kredit',
          items: [
            { 
              title: 'Kredit Usaha Mikro Sejahtera', 
              url: '/products/business-loans', 
              description: 'Pembiayaan untuk pengembangan usaha',
              icon: <Building2 className="h-5 w-5 shrink-0" />
            },
            { 
              title: 'Kredit PNS', 
              url: '/products/kredit-pns', 
              description: 'Kredit khusus Pegawai Negeri Sipil',
              icon: <UserCheck className="h-5 w-5 shrink-0" />
            },
            { 
              title: 'KPPA', 
              url: '/products/kppa', 
              description: 'Kredit Pemilikan Properti dan Apartemen',
              icon: <Building2 className="h-5 w-5 shrink-0" />
            },
            { 
              title: 'KSU Lembaga Agama', 
              url: '/products/ksu-lembaga-agama', 
              description: 'Kredit Serbaguna untuk lembaga keagamaan',
              icon: <Landmark className="h-5 w-5 shrink-0" />
            },
            { 
              title: 'KSU Perorangan Umum', 
              url: '/products/ksu-perorangan', 
              description: 'Kredit Serbaguna untuk kebutuhan pribadi',
              icon: <Users2 className="h-5 w-5 shrink-0" />
            },
            { 
              title: 'Kredit Modal Kerja', 
              url: '/products/kredit-modal-kerja', 
              description: 'Pembiayaan modal kerja untuk usaha',
              icon: <TrendingUp className="h-5 w-5 shrink-0" />
            },
            { 
              title: 'Kredit dengan Cash Colateral', 
              url: '/products/kredit-cash-colateral', 
              description: 'Kredit dengan jaminan deposito atau tabungan',
              icon: <Banknote className="h-5 w-5 shrink-0" />
            },
            { 
              title: 'Garansi Bank', 
              url: '/products/garansi-bank', 
              description: 'Jaminan bank untuk tender dan kontrak',
              icon: <ShieldCheck className="h-5 w-5 shrink-0" />
            },
            { 
              title: 'Kredit Usaha Rakyat (KUR)', 
              url: '/products/kur', 
              description: 'Program kredit pemerintah untuk UMKM',
              icon: <HandCoins className="h-5 w-5 shrink-0" />
            },
            { 
              title: 'KUR Bohusami', 
              url: '/products/kur-bohusami', 
              description: 'KUR khusus daerah Sulawesi Utara',
              icon: <MapPin className="h-5 w-5 shrink-0" />
            },
            { 
              title: 'Kredit Mitra BSG Multi Mart - Transmart', 
              url: '/products/kredit-mitra-transmart', 
              description: 'Kredit kemitraan untuk supplier Transmart',
              icon: <Building2 className="h-5 w-5 shrink-0" />
            },
          ]
        },
        {
          title: 'Layanan',
          items: [
            { 
              title: 'SMS Banking', 
              url: '/products/sms-banking', 
              description: 'Layanan perbankan melalui SMS',
              icon: <Phone className="h-5 w-5 shrink-0" />
            },
            { 
              title: 'Kliring', 
              url: '/products/kliring', 
              description: 'Sistem kliring untuk transfer antar bank',
              icon: <FileCheck className="h-5 w-5 shrink-0" />
            },
            { 
              title: 'SAMSAT Online', 
              url: '/products/samsat-online', 
              description: 'Pembayaran pajak kendaraan secara online',
              icon: <Globe className="h-5 w-5 shrink-0" />
            },
            { 
              title: 'BSG Cash', 
              url: '/products/bsg-cash', 
              description: 'Layanan ATM dan cash management',
              icon: <CreditCard className="h-5 w-5 shrink-0" />
            },
            { 
              title: 'BANCASSURANCE', 
              url: '/products/bancassurance', 
              description: 'Produk asuransi melalui bank',
              icon: <ShieldCheck className="h-5 w-5 shrink-0" />
            },
            { 
              title: 'BSG USSD', 
              url: '/products/bsg-ussd', 
              description: 'Banking via kode USSD *899#',
              icon: <Phone className="h-5 w-5 shrink-0" />
            },
            { 
              title: 'BSG Debit', 
              url: '/products/bsg-debit', 
              description: 'Kartu debit untuk kemudahan transaksi',
              icon: <CreditCard className="h-5 w-5 shrink-0" />
            },
            { 
              title: 'BSG Touch', 
              url: '/products/bsg-touch', 
              description: 'Mobile banking modern di smartphone',
              icon: <Smartphone className="h-5 w-5 shrink-0" />
            },
            { 
              title: 'BSG Direct', 
              url: '/products/bsg-direct', 
              description: 'Internet banking untuk PC dan laptop',
              icon: <Globe className="h-5 w-5 shrink-0" />
            },
            { 
              title: 'BSG QRIS', 
              url: '/products/bsg-qris', 
              description: 'Pembayaran digital dengan QR Code',
              icon: <Smartphone className="h-5 w-5 shrink-0" />
            },
          ]
        }
      ]
    },
    {
      title: 'Lokasi Kami',
      url: '/our-locations',
    },
    { 
        title: 'Berita', 
        url: '/news' 
    },
    {
      title: 'Tentang Kami',
      url: '#',
      categories: [
        {
          title: 'Tentang Kami',
          items: [
            { 
              title: 'Jajaran Direksi', 
              url: '/about/directors', 
              description: 'Profil lengkap jajaran direksi Bank SulutGo',
              icon: <UserCheck className="h-5 w-5 shrink-0" />
            },
            { 
              title: 'Struktur Organisasi', 
              url: '/about/organization', 
              description: 'Struktur organisasi dan pembagian wewenang',
              icon: <Users2 className="h-5 w-5 shrink-0" />
            },
            { 
              title: 'Dewan Komisaris', 
              url: '/about/commissioners', 
              description: 'Informasi tentang Dewan Komisaris Bank SulutGo',
              icon: <Landmark className="h-5 w-5 shrink-0" />
            },
            { 
              title: 'Pemegang Saham', 
              url: '/about/shareholders', 
              description: 'Daftar dan informasi pemegang saham utama',
              icon: <BookMarked className="h-5 w-5 shrink-0" />
            },
            { 
              title: 'Sejarah Bank SulutGo', 
              url: '/about/history', 
              description: 'Perjalanan dan tonggak sejarah Bank SulutGo',
              icon: <FileBarChart2 className="h-5 w-5 shrink-0" />
            },
            { 
              title: 'Visi dan Misi', 
              url: '/about/vision-mission', 
              description: 'Arah dan tujuan strategis Bank SulutGo',
              icon: <Target className="h-5 w-5 shrink-0" />
            },
            { 
              title: 'Logo Bank SulutGo', 
              url: '/about/logo', 
              description: 'Makna dan filosofi logo Bank SulutGo',
              icon: <BadgeInfo className="h-5 w-5 shrink-0" />
            },
            { 
              title: 'Sistem Manajemen Anti Penyuapan', 
              url: '/about/anti-bribery', 
              description: 'Komitmen Bank SulutGo terhadap anti-penyuapan',
              icon: <ShieldCheck className="h-5 w-5 shrink-0" />
            },
          ]
        },
        {
          title: 'Hubungan Investor',
          items: [
            { 
              title: 'Tata Kelola Perusahaan', 
              url: '/investor/governance', 
              description: 'Prinsip dan praktik tata kelola perusahaan',
              icon: <FileCheck className="h-5 w-5 shrink-0" />
            },
            { 
              title: 'Company Profile', 
              url: '/investor/company-profile', 
              description: 'Gambaran umum perusahaan dan kinerja bisnis',
              icon: <FileText className="h-5 w-5 shrink-0" />
            },
            { 
              title: 'Suku Bunga Dasar Kredit', 
              url: '/investor/base-rate', 
              description: 'Informasi terkini mengenai suku bunga kredit',
              icon: <Banknote className="h-5 w-5 shrink-0" />
            },
            { 
              title: 'Laporan Keuangan', 
              url: '/investor/reports', 
              description: 'Data dan performa bulanan Bank SulutGo',
              icon: <FileSpreadsheet className="h-5 w-5 shrink-0" />
            },
            { 
              title: 'Laporan Good Corporate Governance', 
              url: '/investor/gcg-reports', 
              description: 'Laporan kepatuhan terhadap prinsip GCG',
              icon: <FileCheck className="h-5 w-5 shrink-0" />
            },
            { 
              title: 'Obligasi', 
              url: '/investor/bonds', 
              description: 'Informasi dan penerbitan obligasi Bank SulutGo',
              icon: <HandCoins className="h-5 w-5 shrink-0" />
            },
          ]
        }
      ]
    },
    
    { title: 'Kontak', url: '/contact' }
  ];

  const logo = {
    url: '/',
    src: 'https://www.banksulutgo.co.id/gambar/profil/profil-7.jpg',
    alt: 'Bank SulutGo Logo',
  };

  const auth = {
    login: { title: 'Internet Banking', url: '/login' },
    signup: { title: 'BSG Touch', url: '/mobile-banking' }
  };



  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-200 dark:border-gray-700 bg-white/95 dark:bg-gray-900/95 backdrop-blur supports-[backdrop-filter]:bg-white/60 dark:supports-[backdrop-filter]:bg-gray-900/60">
      {/* Top Bar */}
      <div className="hidden lg:block bg-red-900 dark:bg-red-800 text-white">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between py-2 text-sm">
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4" />
                <span>1500-659</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4" />
                <span>customercare@banksulutgo.co.id</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4" />
                <span>Manado, Sulawesi Utara</span>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <ModeToggle />
              <div className="flex items-center gap-2">
                <DropdownMenu>
                    <DropdownMenuTrigger>
                        <Globe className="h-4 w-4" />
                    </DropdownMenuTrigger>
                    <DropdownMenuContent>
                        <DropdownMenuItem>English</DropdownMenuItem>
                        <DropdownMenuItem>Indonesia</DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <section className="py-4">
        <div className="container mx-auto px-4">
          {/* Desktop Menu */}
          <nav className="hidden justify-between lg:flex">
            {/* Logo */}
            <div className="flex items-center">
              <Link to={logo.url} className="flex items-center gap-2">
                <img
                  src={logo.src}
                  className="h-12 w-48 rounded-full object-cover "
                  alt={logo.alt}
                />
              </Link>
            </div>
            
            {/* Navigation Menu - Centered */}
            <div className="flex justify-center items-center flex-1">
              <NavigationMenu className="relative">
                <NavigationMenuList>
                  <NavigationMenuItem>
                    <NavigationMenuLink asChild>
                      <Link
                        to="/"
                        className={cn(
                          "group inline-flex h-10 w-max items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors disabled:pointer-events-none disabled:opacity-50",
                          url === "/" 
                            ? "bg-red-100 dark:bg-red-900/30 text-red-900 dark:text-red-400 font-semibold"
                            : "bg-transparent dark:bg-transparent text-gray-900 dark:text-gray-100 hover:bg-gray-100 dark:hover:bg-gray-800"
                        )}
                      >
                        Beranda
                      </Link>
                    </NavigationMenuLink>
                  </NavigationMenuItem>
                  {navigationItems.map((item) => renderMenuItem(item))}
                </NavigationMenuList>
              </NavigationMenu>
            </div>
            
            {/* Search Input */}
            <div className="flex items-center gap-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                <Input
                  id="search-input"
                  type="search"
                  placeholder="Cari..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10 pr-16 py-2 w-64 border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 placeholder:text-gray-500 dark:placeholder:text-gray-400 focus:ring-2 focus:ring-red-500 focus:border-red-500"
                />
                <Badge 
                  variant="secondary" 
                  className="absolute right-2 top-1/2 transform -translate-y-1/2 text-xs px-1.5 py-0.5 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 border-0"
                > 
                  {isMac ? '⌘K' : 'Ctrl+K'}
                </Badge>
              </div>
            {/* Authentication Buttons */}
            <div className="flex items-center gap-4">
                <Button 
                variant="outline" 
                className="font-semibold border-red-700 dark:border-red-600 text-red-900 dark:text-red-100 bg-white dark:bg-gray-900 hover:bg-red-100 dark:hover:bg-red-800 border-2 rounded-full p-2 transition-colors"
                asChild
                >
                <Link to={auth.login.url}>
                  <User className="h-7 w-7" />
                </Link>
                </Button>
            </div>
            </div>
          </nav>

          {/* Mobile Menu */}
          <div className="block lg:hidden">
            <div className="flex items-center justify-between">
              {/* Logo */}
              <Link to={logo.url} className="flex items-center gap-2">
                <img
                  src={logo.src}
                  className="h-16 w-16 rounded-full object-cover"
                  alt={logo.alt}
                />
              </Link>
                <div className="flex items-center justify-end py-2 dark:border-gray-700 gap-4">
                    <ModeToggle />
                    <Sheet open={isOpen} onOpenChange={setIsOpen}>
                        <SheetTrigger asChild>
                        <Button variant="outline" size="icon" className="border-gray-300 dark:border-gray-600 text-gray-900 dark:text-gray-100 hover:bg-gray-100 dark:hover:bg-gray-800">
                            <Menu className="h-4 w-4" />
                        </Button>
                        </SheetTrigger>
                        <SheetContent className="overflow-y-auto bg-white dark:bg-gray-900 border-gray-200 dark:border-gray-700">
                        <SheetHeader>
                            <SheetTitle>
                            <Link to={logo.url} className="flex items-center gap-2">
                                <img
                                src={logo.src}
                                className="h-auto w-32 rounded-full object-cover"
                                alt={logo.alt}
                                />
                            </Link>
                            </SheetTitle>
                        </SheetHeader>
                        
                        <div className="flex flex-col gap-6 p-4">
                            <Accordion
                            type="single"
                            collapsible
                            className="flex w-full flex-col gap-4"
                            >
                            <Link 
                                to="/" 
                                className={cn(
                                  "text-md font-semibold",
                                  url === "/" 
                                    ? "text-red-900 dark:text-red-400" 
                                    : "text-gray-900 dark:text-gray-100"
                                )}
                                onClick={() => setIsOpen(false)}
                            >
                                Beranda
                            </Link>
                            {navigationItems.map((item) => renderMobileMenuItem(item))}
                            </Accordion>

                            <div className="flex flex-col gap-3">
                            <Button asChild variant="outline" className="border-gray-300 dark:border-gray-600 text-gray-900 dark:text-gray-100 hover:bg-gray-100 dark:hover:bg-gray-800">
                                <Link to={auth.login.url}>{auth.login.title}</Link>
                            </Button>
                            <Button asChild className="bg-red-900 hover:bg-red-800 dark:bg-red-800 dark:hover:bg-red-700">
                                <Link to={auth.signup.url} className="text-white">{auth.signup.title}</Link>
                            </Button>
                            </div>
                        </div>
                        </SheetContent>
                    </Sheet>
                </div>
            </div>
          </div>
        </div>
      </section>
    </header>
  );
}

const SubMenuLink = ({ item, mobile = false, isActive = false, compact = false }: { item: MenuItem; mobile?: boolean; isActive?: boolean; compact?: boolean }) => {
  return (
    <Link
      to={item.url}
      className={cn(
        "flex select-none flex-row gap-2 rounded-lg leading-none no-underline outline-none transition-all duration-200 border",
        compact ? "p-2" : "py-2 px-3",
        mobile 
          ? isActive
            ? "text-red-900 dark:text-red-400 bg-red-100 dark:bg-red-950/50 border-red-200 dark:border-red-800 font-semibold"
            : "text-gray-600 dark:text-gray-300 hover:text-red-900 dark:hover:text-red-400 hover:bg-red-50 dark:hover:bg-red-950/30 border-transparent"
          : isActive
            ? "bg-red-50 dark:bg-red-950/30 text-red-900 dark:text-red-400 border-red-200 dark:border-red-800 shadow-sm font-semibold"
            : "hover:bg-gray-50 dark:hover:bg-gray-800 hover:shadow-sm border-transparent hover:border-gray-200 dark:hover:border-gray-600"
      )}
    >
      <div className={cn(
        "flex items-center",
        isActive 
          ? "text-red-700 dark:text-red-300" 
          : "text-red-900 dark:text-red-400"
      )}>
        {item.icon}
      </div>
      <div className="flex-1 min-w-0">
        <div className={cn(
          compact ? "text-xs" : "text-sm",
          isActive 
            ? "font-bold text-red-900 dark:text-red-400" 
            : "font-semibold text-gray-900 dark:text-gray-100",
          "truncate"
        )}>
          {item.title}
        </div>
      </div>
    </Link>
  );
};


