import AppLayout from "@/components/app-layout";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Users, ChartColumn } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { ReactNode } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

// About menu interface
interface AboutMenuItem {
  id: string;
  title: string;
  icon?: ReactNode;
  href: string;
  isActive?: boolean;
}

// Report interface
interface Report {
  title: string;
  date: string;
  size: string;
  type: string;
  url: string;
}

interface YearData {
  year: string;
  reports: Report[];
}

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

// Data constants
const monthlyReportsData: YearData[] = [
  { 
    year: "2025", 
    reports: [
      { 
        title: "Komitmen Kontijensi Juni 2025", 
        date: "18 Juli 2025",
        size: "0.02 MB", 
        type: "PDF", 
        url: "https://www.banksulutgo.co.id/gambar/bankreport/bankreport-komitmen-kontijensi-juni-2025-549.pdf" 
      },
      { 
        title: "Laporan Laba Rugi Juni 2025", 
        date: "18 Juli 2025",
        size: "0.03 MB", 
        type: "PDF", 
        url: "https://www.banksulutgo.co.id/gambar/bankreport/bankreport-laporan-laba-rugi-juni-2025-548.pdf" 
      },
      { 
        title: "Laporan Posisi Keuangan Juni 2025", 
        date: "18 Juli 2025",
        size: "0.03 MB", 
        type: "PDF", 
        url: "https://www.banksulutgo.co.id/gambar/bankreport/bankreport-laporan-posisi-keuangan-juni-2025-547.pdf" 
      },
      { 
        title: "Komitment Kontijensi Mei 2025", 
        date: "24 Juni 2025",
        size: "0.02 MB", 
        type: "PDF", 
        url: "https://www.banksulutgo.co.id/gambar/bankreport/bankreport-komitment-kontijensi-mei-2025-543.pdf" 
      },
      { 
        title: "Laporan Laba Rugi Mei 2025", 
        date: "24 Juni 2025",
        size: "0.03 MB", 
        type: "PDF", 
        url: "https://www.banksulutgo.co.id/gambar/bankreport/bankreport-laporan-laba-rugi-mei-2025-542.pdf" 
      },
      { 
        title: "Laporan Posisi Keuangan Mei 2025", 
        date: "24 Juni 2025",
        size: "0.03 MB", 
        type: "PDF", 
        url: "https://www.banksulutgo.co.id/gambar/bankreport/bankreport-laporan-posisi-keuangan-mei-2025-541.pdf" 
      },
      { 
        title: "Komitmen Kontijensi April 2025", 
        date: "20 Mei 2025",
        size: "0.02 MB", 
        type: "PDF", 
        url: "https://www.banksulutgo.co.id/gambar/bankreport/bankreport-komitmen-kontijensi-april-2025-539.pdf" 
      },
      { 
        title: "Laporan Laba Rugi April 2025", 
        date: "20 Mei 2025",
        size: "0.03 MB", 
        type: "PDF", 
        url: "https://www.banksulutgo.co.id/gambar/bankreport/bankreport-laporan-laba-rugi-april-2025-538.pdf" 
      },
      { 
        title: "Laporan Posisi Keuangan April 2025", 
        date: "20 Mei 2025",
        size: "0.03 MB", 
        type: "PDF", 
        url: "https://www.banksulutgo.co.id/gambar/bankreport/bankreport-laporan-posisi-keuangan-april-2025-537.pdf" 
      },
      { 
        title: "Komitmen Kontijensi Maret 2025", 
        date: "21 April 2025",
        size: "0.01 MB", 
        type: "PDF", 
        url: "https://www.banksulutgo.co.id/gambar/bankreport/bankreport-komitmen-kontijensi-maret-2025-528.pdf" 
      },
      { 
        title: "Laporan Laba Rugi Maret 2025", 
        date: "21 April 2025",
        size: "0.02 MB", 
        type: "PDF", 
        url: "https://www.banksulutgo.co.id/gambar/bankreport/bankreport-laporan-laba-rugi-maret-2025-527.pdf" 
      },
      { 
        title: "Laporan Posisi Keuangan Maret 2025", 
        date: "21 April 2025",
        size: "0.03 MB", 
        type: "PDF", 
        url: "https://www.banksulutgo.co.id/gambar/bankreport/bankreport-laporan-posisi-keuangan-maret-2025-526.pdf" 
      },
      { 
        title: "Komitmen Kontijensi Februari 2025", 
        date: "20 Maret 2025",
        size: "0.01 MB", 
        type: "PDF", 
        url: "https://www.banksulutgo.co.id/gambar/bankreport/bankreport-komitmen-kontijensi-februari-2025-522.pdf" 
      },
      { 
        title: "Laporan Laba Rugi Februari 2025", 
        date: "20 Maret 2025",
        size: "0.02 MB", 
        type: "PDF", 
        url: "https://www.banksulutgo.co.id/gambar/bankreport/bankreport-laporan-laba-rugi-februari-2025-521.pdf" 
      },
      { 
        title: "Laporan Posisi Keuangan Februari 2025", 
        date: "20 Maret 2025",
        size: "0.03 MB", 
        type: "PDF", 
        url: "https://www.banksulutgo.co.id/gambar/bankreport/bankreport-laporan-posisi-keuangan-februari-2025-520.pdf" 
      },
      { 
        title: "Komitmen Kontijensi Januari 2025", 
        date: "21 Februari 2025",
        size: "0.10 MB", 
        type: "PDF", 
        url: "https://www.banksulutgo.co.id/gambar/bankreport/bankreport-komitmen-kontijensi-januari-2025-516.pdf" 
      },
      { 
        title: "Laporan Laba Rugi Januari 2025", 
        date: "21 Februari 2025",
        size: "0.17 MB", 
        type: "PDF", 
        url: "https://www.banksulutgo.co.id/gambar/bankreport/bankreport-laporan-laba-rugi-januari-2025-515.pdf" 
      },
      { 
        title: "Laporan Posisi Keuangan Januari 2025", 
        date: "21 Februari 2025",
        size: "0.12 MB", 
        type: "PDF", 
        url: "https://www.banksulutgo.co.id/gambar/bankreport/bankreport-laporan-posisi-keuangan-januari-2025-514.pdf" 
      }
    ]
  },
  { 
    year: "2024", 
    reports: [
      { 
        title: "Komitmen Kontijensi Desember 2024", 
        date: "21 Januari 2025",
        size: "0.08 MB", 
        type: "PDF", 
        url: "https://www.banksulutgo.co.id/gambar/bankreport/bankreport-tahunan-komitmen-kontijensi-desember-2024-510.pdf" 
      },
      { 
        title: "Laporan Laba Rugi Desember 2024", 
        date: "21 Januari 2025",
        size: "0.15 MB", 
        type: "PDF", 
        url: "https://www.banksulutgo.co.id/gambar/bankreport/bankreport-tahunan-laporan-laba-rugi-desember-2024-509.pdf" 
      },
      { 
        title: "Laporan Posisi Keuangan Desember 2024", 
        date: "21 Januari 2025",
        size: "0.10 MB", 
        type: "PDF", 
        url: "https://www.banksulutgo.co.id/gambar/bankreport/bankreport-tahunan-laporan-posisi-keuangan-desember-2024-508.pdf" 
      },
      { 
        title: "Komitmen Kontijensi November 2024", 
        date: "20 Desember 2024",
        size: "0.02 MB", 
        type: "PDF", 
        url: "https://www.banksulutgo.co.id/gambar/bankreport/bankreport-komitmen-kontijensi-november-2024-505.pdf" 
      },
      { 
        title: "Laporan Laba Rugi November 2024", 
        date: "20 Desember 2024",
        size: "0.03 MB", 
        type: "PDF", 
        url: "https://www.banksulutgo.co.id/gambar/bankreport/bankreport-laporan-laba-rugi-november-2024-504.pdf" 
      },
      { 
        title: "Laporan Posisi Keuangan November 2024", 
        date: "20 Desember 2024",
        size: "0.03 MB", 
        type: "PDF", 
        url: "https://www.banksulutgo.co.id/gambar/bankreport/bankreport-laporan-posisi-keuangan-november-2024-503.pdf" 
      },
      { 
        title: "Komitmen Kontijensi Oktober 2024", 
        date: "21 November 2024",
        size: "0.02 MB", 
        type: "PDF", 
        url: "https://www.banksulutgo.co.id/gambar/bankreport/bankreport-komitmen-kontijensi-oktober-2024-500.pdf" 
      },
      { 
        title: "Laporan Laba Rugi Oktober 2024", 
        date: "21 November 2024",
        size: "0.03 MB", 
        type: "PDF", 
        url: "https://www.banksulutgo.co.id/gambar/bankreport/bankreport-laporan-laba-rugi-oktober-2024-499.pdf" 
      },
      { 
        title: "Laporan Posisi Keuangan Oktober 2024", 
        date: "21 November 2024",
        size: "0.03 MB", 
        type: "PDF", 
        url: "https://www.banksulutgo.co.id/gambar/bankreport/bankreport-laporan-posisi-keuangan-oktober-2024-498.pdf" 
      },
      { 
        title: "Komitmen Kontijensi September 2024", 
        date: "21 Oktober 2024",
        size: "0.10 MB", 
        type: "PDF", 
        url: "https://www.banksulutgo.co.id/gambar/bankreport/bankreport-triwulan-iii-komitmen-kontijensi-september-2024-495.pdf" 
      },
      { 
        title: "Laporan Laba Rugi September 2024", 
        date: "21 Oktober 2024",
        size: "0.17 MB", 
        type: "PDF", 
        url: "https://www.banksulutgo.co.id/gambar/bankreport/bankreport-triwulan-iii-laporan-laba-rugi-september-2024-494.pdf" 
      },
      { 
        title: "Laporan Posisi Keuangan September 2024", 
        date: "21 Oktober 2024",
        size: "0.12 MB", 
        type: "PDF", 
        url: "https://www.banksulutgo.co.id/gambar/bankreport/bankreport-triwulan-iii-laporan-posisi-keuangan-september-2024-493.pdf" 
      },
      { 
        title: "Komitmen Kontijensi Agustus 2024", 
        date: "20 September 2024",
        size: "0.02 MB", 
        type: "PDF", 
        url: "https://www.banksulutgo.co.id/gambar/bankreport/bankreport-komitmen-kontijensi-agustus-2024-490.pdf" 
      },
      { 
        title: "Laporan Laba Rugi Agustus 2024", 
        date: "20 September 2024",
        size: "0.03 MB", 
        type: "PDF", 
        url: "https://www.banksulutgo.co.id/gambar/bankreport/bankreport-laporan-laba-rugi-agustus-2024-489.pdf" 
      },
      { 
        title: "Laporan Posisi Keuangan Agustus 2024", 
        date: "20 September 2024",
        size: "0.03 MB", 
        type: "PDF", 
        url: "https://www.banksulutgo.co.id/gambar/bankreport/bankreport-laporan-posisi-keuangan-agustus-2024-488.pdf" 
      },
      { 
        title: "Komitmen Kontijensi Juli 2024", 
        date: "21 Agustus 2024",
        size: "0.02 MB", 
        type: "PDF", 
        url: "https://www.banksulutgo.co.id/gambar/bankreport/bankreport-komitmen-kontijensi-juli-2024-485.pdf" 
      },
      { 
        title: "Laporan Laba Rugi Juli 2024", 
        date: "21 Agustus 2024",
        size: "0.03 MB", 
        type: "PDF", 
        url: "https://www.banksulutgo.co.id/gambar/bankreport/bankreport-laporan-laba-rugi-juli-2024-484.pdf" 
      },
      { 
        title: "Laporan Posisi Keuangan Juli 2024", 
        date: "21 Agustus 2024",
        size: "0.03 MB", 
        type: "PDF", 
        url: "https://www.banksulutgo.co.id/gambar/bankreport/bankreport-laporan-posisi-keuangan-juli-2024-483.pdf" 
      },
      { 
        title: "Komitmen Kontijensi Juni 2024", 
        date: "22 Juli 2024",
        size: "0.10 MB", 
        type: "PDF", 
        url: "https://www.banksulutgo.co.id/gambar/bankreport/bankreport-triwulan-ii-komitmen-kontijensi-juni-2024-480.pdf" 
      },
      { 
        title: "Laporan Laba Rugi Juni 2024", 
        date: "22 Juli 2024",
        size: "0.17 MB", 
        type: "PDF", 
        url: "https://www.banksulutgo.co.id/gambar/bankreport/bankreport-triwulan-ii-laporan-laba-rugi-juni-2024-479.pdf" 
      },
      { 
        title: "Laporan Posisi Keuangan Juni 2024", 
        date: "22 Juli 2024",
        size: "0.12 MB", 
        type: "PDF", 
        url: "https://www.banksulutgo.co.id/gambar/bankreport/bankreport-triwulan-ii-laporan-posisi-keuangan-juni-2024-478.pdf" 
      },
      { 
        title: "Komitmen Kontijensi Mei 2024", 
        date: "21 Juni 2024",
        size: "0.02 MB", 
        type: "PDF", 
        url: "https://www.banksulutgo.co.id/gambar/bankreport/bankreport-komitmen-kontijensi-mei-2024-475.pdf" 
      },
      { 
        title: "Laporan Laba Rugi Mei 2024", 
        date: "21 Juni 2024",
        size: "0.03 MB", 
        type: "PDF", 
        url: "https://www.banksulutgo.co.id/gambar/bankreport/bankreport-laporan-laba-rugi-mei-2024-474.pdf" 
      },
      { 
        title: "Laporan Posisi Keuangan Mei 2024", 
        date: "21 Juni 2024",
        size: "0.03 MB", 
        type: "PDF", 
        url: "https://www.banksulutgo.co.id/gambar/bankreport/bankreport-laporan-posisi-keuangan-mei-2024-473.pdf" 
      },
      { 
        title: "Komitmen Kontijensi April 2024", 
        date: "21 Mei 2024",
        size: "0.02 MB", 
        type: "PDF", 
        url: "https://www.banksulutgo.co.id/gambar/bankreport/bankreport-komitmen-kontijensi-april-2024-470.pdf" 
      },
      { 
        title: "Laporan Laba Rugi April 2024", 
        date: "21 Mei 2024",
        size: "0.03 MB", 
        type: "PDF", 
        url: "https://www.banksulutgo.co.id/gambar/bankreport/bankreport-laporan-laba-rugi-april-2024-469.pdf" 
      },
      { 
        title: "Laporan Posisi Keuangan April 2024", 
        date: "21 Mei 2024",
        size: "0.03 MB", 
        type: "PDF", 
        url: "https://www.banksulutgo.co.id/gambar/bankreport/bankreport-laporan-posisi-keuangan-april-2024-468.pdf" 
      },
      { 
        title: "Komitmen Kontijensi Maret 2024", 
        date: "22 April 2024",
        size: "0.10 MB", 
        type: "PDF", 
        url: "https://www.banksulutgo.co.id/gambar/bankreport/bankreport-triwulan-i-komitmen-kontijensi-maret-2024-465.pdf" 
      },
      { 
        title: "Laporan Laba Rugi Maret 2024", 
        date: "22 April 2024",
        size: "0.17 MB", 
        type: "PDF", 
        url: "https://www.banksulutgo.co.id/gambar/bankreport/bankreport-triwulan-i-laporan-laba-rugi-maret-2024-464.pdf" 
      },
      { 
        title: "Laporan Posisi Keuangan Maret 2024", 
        date: "22 April 2024",
        size: "0.12 MB", 
        type: "PDF", 
        url: "https://www.banksulutgo.co.id/gambar/bankreport/bankreport-triwulan-i-laporan-posisi-keuangan-maret-2024-463.pdf" 
      },
      { 
        title: "Komitmen Kontijensi Februari 2024", 
        date: "21 Maret 2024",
        size: "0.02 MB", 
        type: "PDF", 
        url: "https://www.banksulutgo.co.id/gambar/bankreport/bankreport-komitmen-kontijensi-februari-2024-460.pdf" 
      },
      { 
        title: "Laporan Laba Rugi Februari 2024", 
        date: "21 Maret 2024",
        size: "0.03 MB", 
        type: "PDF", 
        url: "https://www.banksulutgo.co.id/gambar/bankreport/bankreport-laporan-laba-rugi-februari-2024-459.pdf" 
      },
      { 
        title: "Laporan Posisi Keuangan Februari 2024", 
        date: "21 Maret 2024",
        size: "0.03 MB", 
        type: "PDF", 
        url: "https://www.banksulutgo.co.id/gambar/bankreport/bankreport-laporan-posisi-keuangan-februari-2024-458.pdf" 
      },
      { 
        title: "Komitmen Kontijensi Januari 2024", 
        date: "21 Februari 2024",
        size: "0.10 MB", 
        type: "PDF", 
        url: "https://www.banksulutgo.co.id/gambar/bankreport/bankreport-komitmen-kontijensi-januari-2024-455.pdf" 
      },
      { 
        title: "Laporan Laba Rugi Januari 2024", 
        date: "21 Februari 2024",
        size: "0.17 MB", 
        type: "PDF", 
        url: "https://www.banksulutgo.co.id/gambar/bankreport/bankreport-laporan-laba-rugi-januari-2024-454.pdf" 
      },
      { 
        title: "Laporan Posisi Keuangan Januari 2024", 
        date: "21 Februari 2024",
        size: "0.12 MB", 
        type: "PDF", 
        url: "https://www.banksulutgo.co.id/gambar/bankreport/bankreport-laporan-posisi-keuangan-januari-2024-453.pdf" 
      }
    ]
  },
  { 
    year: "2023", 
    reports: [
      { 
        title: "Komitmen Kontijensi Desember 2023", 
        date: "22 Januari 2024",
        size: "0.10 MB", 
        type: "PDF", 
        url: "https://www.banksulutgo.co.id/gambar/bankreport/bankreport-tahunan-komitmen-kontijensi-desember-2023-450.pdf" 
      },
      { 
        title: "Laporan Laba Rugi Desember 2023", 
        date: "22 Januari 2024",
        size: "0.17 MB", 
        type: "PDF", 
        url: "https://www.banksulutgo.co.id/gambar/bankreport/bankreport-tahunan-laporan-laba-rugi-desember-2023-449.pdf" 
      },
      { 
        title: "Laporan Posisi Keuangan Desember 2023", 
        date: "22 Januari 2024",
        size: "0.12 MB", 
        type: "PDF", 
        url: "https://www.banksulutgo.co.id/gambar/bankreport/bankreport-tahunan-laporan-posisi-keuangan-desember-2023-448.pdf" 
      },
      { 
        title: "Komitmen Kontijensi November 2023", 
        date: "21 Desember 2023",
        size: "0.02 MB", 
        type: "PDF", 
        url: "https://www.banksulutgo.co.id/gambar/bankreport/bankreport-komitmen-kontijensi-november-2023-445.pdf" 
      },
      { 
        title: "Laporan Laba Rugi November 2023", 
        date: "21 Desember 2023",
        size: "0.03 MB", 
        type: "PDF", 
        url: "https://www.banksulutgo.co.id/gambar/bankreport/bankreport-laporan-laba-rugi-november-2023-444.pdf" 
      },
      { 
        title: "Laporan Posisi Keuangan November 2023", 
        date: "21 Desember 2023",
        size: "0.03 MB", 
        type: "PDF", 
        url: "https://www.banksulutgo.co.id/gambar/bankreport/bankreport-laporan-posisi-keuangan-november-2023-443.pdf" 
      },
      { 
        title: "Komitmen Kontijensi Oktober 2023", 
        date: "21 November 2023",
        size: "0.02 MB", 
        type: "PDF", 
        url: "https://www.banksulutgo.co.id/gambar/bankreport/bankreport-komitmen-kontijensi-oktober-2023-441.pdf" 
      },
      { 
        title: "Laporan Laba Rugi Oktober 2023", 
        date: "21 November 2023",
        size: "0.03 MB", 
        type: "PDF", 
        url: "https://www.banksulutgo.co.id/gambar/bankreport/bankreport-laporan-laba-rugi-oktober-2023-440.pdf" 
      },
      { 
        title: "Laporan Posisi Keuangan Oktober 2023", 
        date: "21 November 2023",
        size: "0.03 MB", 
        type: "PDF", 
        url: "https://www.banksulutgo.co.id/gambar/bankreport/bankreport-laporan-posisi-keuangan-oktober-2023-439.pdf" 
      },
      { 
        title: "Komitmen Kontijensi September 2023", 
        date: "23 Oktober 2023",
        size: "0.10 MB", 
        type: "PDF", 
        url: "https://www.banksulutgo.co.id/gambar/bankreport/bankreport-triwulan-iii-komitmen-kontijensi-september-2023-436.pdf" 
      },
      { 
        title: "Laporan Laba Rugi September 2023", 
        date: "23 Oktober 2023",
        size: "0.17 MB", 
        type: "PDF", 
        url: "https://www.banksulutgo.co.id/gambar/bankreport/bankreport-triwulan-iii-laporan-laba-rugi-september-2023-435.pdf" 
      },
      { 
        title: "Laporan Posisi Keuangan September 2023", 
        date: "23 Oktober 2023",
        size: "0.12 MB", 
        type: "PDF", 
        url: "https://www.banksulutgo.co.id/gambar/bankreport/bankreport-triwulan-iii-laporan-posisi-keuangan-september-2023-434.pdf" 
      },
      { 
        title: "Komitmen Kontijensi Agustus 2023", 
        date: "21 September 2023",
        size: "0.02 MB", 
        type: "PDF", 
        url: "https://www.banksulutgo.co.id/gambar/bankreport/bankreport-komitmen-kontijensi-agustus-2023-431.pdf" 
      },
      { 
        title: "Laporan Laba Rugi Agustus 2023", 
        date: "21 September 2023",
        size: "0.03 MB", 
        type: "PDF", 
        url: "https://www.banksulutgo.co.id/gambar/bankreport/bankreport-laporan-laba-rugi-agustus-2023-430.pdf" 
      },
      { 
        title: "Laporan Posisi Keuangan Agustus 2023", 
        date: "21 September 2023",
        size: "0.03 MB", 
        type: "PDF", 
        url: "https://www.banksulutgo.co.id/gambar/bankreport/bankreport-laporan-posisi-keuangan-agustus-2023-429.pdf" 
      },
      { 
        title: "Komitmen Kontijensi Juli 2023", 
        date: "21 Agustus 2023",
        size: "0.02 MB", 
        type: "PDF", 
        url: "https://www.banksulutgo.co.id/gambar/bankreport/bankreport-komitmen-kontijensi-juli-2023-426.pdf" 
      },
      { 
        title: "Laporan Laba Rugi Juli 2023", 
        date: "21 Agustus 2023",
        size: "0.03 MB", 
        type: "PDF", 
        url: "https://www.banksulutgo.co.id/gambar/bankreport/bankreport-laporan-laba-rugi-juli-2023-425.pdf" 
      },
      { 
        title: "Laporan Posisi Keuangan Juli 2023", 
        date: "21 Agustus 2023",
        size: "0.03 MB", 
        type: "PDF", 
        url: "https://www.banksulutgo.co.id/gambar/bankreport/bankreport-laporan-posisi-keuangan-juli-2023-424.pdf" 
      },
      { 
        title: "Komitmen Kontijensi Juni 2023", 
        date: "21 Juli 2023",
        size: "0.10 MB", 
        type: "PDF", 
        url: "https://www.banksulutgo.co.id/gambar/bankreport/bankreport-triwulan-ii-komitmen-kontijensi-juni-2023-421.pdf" 
      },
      { 
        title: "Laporan Laba Rugi Juni 2023", 
        date: "21 Juli 2023",
        size: "0.17 MB", 
        type: "PDF", 
        url: "https://www.banksulutgo.co.id/gambar/bankreport/bankreport-triwulan-ii-laporan-laba-rugi-juni-2023-420.pdf" 
      },
      { 
        title: "Laporan Posisi Keuangan Juni 2023", 
        date: "21 Juli 2023",
        size: "0.12 MB", 
        type: "PDF", 
        url: "https://www.banksulutgo.co.id/gambar/bankreport/bankreport-triwulan-ii-laporan-posisi-keuangan-juni-2023-419.pdf" 
      },
      { 
        title: "Komitmen Kontijensi Mei 2023", 
        date: "21 Juni 2023",
        size: "0.02 MB", 
        type: "PDF", 
        url: "https://www.banksulutgo.co.id/gambar/bankreport/bankreport-komitmen-kontijensi-mei-2023-416.pdf" 
      },
      { 
        title: "Laporan Laba Rugi Mei 2023", 
        date: "21 Juni 2023",
        size: "0.03 MB", 
        type: "PDF", 
        url: "https://www.banksulutgo.co.id/gambar/bankreport/bankreport-laporan-laba-rugi-mei-2023-415.pdf" 
      },
      { 
        title: "Laporan Posisi Keuangan Mei 2023", 
        date: "21 Juni 2023",
        size: "0.03 MB", 
        type: "PDF", 
        url: "https://www.banksulutgo.co.id/gambar/bankreport/bankreport-laporan-posisi-keuangan-mei-2023-414.pdf" 
      },
      { 
        title: "Komitmen Kontijensi April 2023", 
        date: "22 Mei 2023",
        size: "0.02 MB", 
        type: "PDF", 
        url: "https://www.banksulutgo.co.id/gambar/bankreport/bankreport-komitmen-kontijensi-april-2023-411.pdf" 
      },
      { 
        title: "Laporan Laba Rugi April 2023", 
        date: "22 Mei 2023",
        size: "0.03 MB", 
        type: "PDF", 
        url: "https://www.banksulutgo.co.id/gambar/bankreport/bankreport-laporan-laba-rugi-april-2023-410.pdf" 
      },
      { 
        title: "Laporan Posisi Keuangan April 2023", 
        date: "22 Mei 2023",
        size: "0.03 MB", 
        type: "PDF", 
        url: "https://www.banksulutgo.co.id/gambar/bankreport/bankreport-laporan-posisi-keuangan-april-2023-409.pdf" 
      },
      { 
        title: "Komitmen Kontijensi Maret 2023", 
        date: "21 April 2023",
        size: "0.10 MB", 
        type: "PDF", 
        url: "https://www.banksulutgo.co.id/gambar/bankreport/bankreport-triwulan-i-komitmen-kontijensi-maret-2023-406.pdf" 
      },
      { 
        title: "Laporan Laba Rugi Maret 2023", 
        date: "21 April 2023",
        size: "0.17 MB", 
        type: "PDF", 
        url: "https://www.banksulutgo.co.id/gambar/bankreport/bankreport-triwulan-i-laporan-laba-rugi-maret-2023-405.pdf" 
      },
      { 
        title: "Laporan Posisi Keuangan Maret 2023", 
        date: "21 April 2023",
        size: "0.12 MB", 
        type: "PDF", 
        url: "https://www.banksulutgo.co.id/gambar/bankreport/bankreport-triwulan-i-laporan-posisi-keuangan-maret-2023-404.pdf" 
      },
      { 
        title: "Komitmen Kontijensi Februari 2023", 
        date: "21 Maret 2023",
        size: "0.02 MB", 
        type: "PDF", 
        url: "https://www.banksulutgo.co.id/gambar/bankreport/bankreport-komitmen-kontijensi-februari-2023-401.pdf" 
      },
      { 
        title: "Laporan Laba Rugi Februari 2023", 
        date: "21 Maret 2023",
        size: "0.03 MB", 
        type: "PDF", 
        url: "https://www.banksulutgo.co.id/gambar/bankreport/bankreport-laporan-laba-rugi-februari-2023-400.pdf" 
      },
      { 
        title: "Laporan Posisi Keuangan Februari 2023", 
        date: "21 Maret 2023",
        size: "0.03 MB", 
        type: "PDF", 
        url: "https://www.banksulutgo.co.id/gambar/bankreport/bankreport-laporan-posisi-keuangan-februari-2023-399.pdf" 
      },
      { 
        title: "Komitmen Kontijensi Januari 2023", 
        date: "21 Februari 2023",
        size: "0.10 MB", 
        type: "PDF", 
        url: "https://www.banksulutgo.co.id/gambar/bankreport/bankreport-komitmen-kontijensi-januari-2023-396.pdf" 
      },
      { 
        title: "Laporan Laba Rugi Januari 2023", 
        date: "21 Februari 2023",
        size: "0.17 MB", 
        type: "PDF", 
        url: "https://www.banksulutgo.co.id/gambar/bankreport/bankreport-laporan-laba-rugi-januari-2023-395.pdf" 
      },
      { 
        title: "Laporan Posisi Keuangan Januari 2023", 
        date: "21 Februari 2023",
        size: "0.12 MB", 
        type: "PDF", 
        url: "https://www.banksulutgo.co.id/gambar/bankreport/bankreport-laporan-posisi-keuangan-januari-2023-394.pdf" 
      }
    ]
  }
];

const quarterlyReportsData: YearData[] = [
  { 
    year: "2025", 
    reports: [
      { 
        title: "Laporan Keuangan Unaudited Juni 2025", 
        date: "28 Juli 2025",
        size: "6.58 MB", 
        type: "PDF", 
        url: "https://www.banksulutgo.co.id/gambar/bankreport/bankreport-laporan-keuangan-unaudited-juni-2025-552.pdf" 
      },
      { 
        title: "Laporan Eksposur Risiko & Permodalan 30 Juni 2025", 
        date: "28 Juli 2025",
        size: "2.98 MB", 
        type: "PDF", 
        url: "https://www.banksulutgo.co.id/gambar/bankreport/bankreport-laporan-eksposur-risiko-amp-permodalan-30-juni-2025-551.pdf" 
      },
      { 
        title: "Laporan Neraca Juni 2025", 
        date: "28 Juli 2025",
        size: "0.33 MB", 
        type: "PDF", 
        url: "https://www.banksulutgo.co.id/gambar/bankreport/bankreport-laporan-neraca-juni-2025-550.pdf" 
      },
      { 
        title: "Laporan Perhitungan Rasio Kecukupan Liquiditas (LCR) Juni 2025", 
        date: "17 Juli 2025",
        size: "0.72 MB", 
        type: "PDF", 
        url: "https://www.banksulutgo.co.id/gambar/bankreport/bankreport-laporan-perhitungan-rasio-kecukupan-liquiditas-lcr-juni-2025-546.pdf" 
      },
      { 
        title: "Laporan Kewajiban Pemenuhan Rasio Pendanaan Stabil Bersih (NSFR) Juni 2025", 
        date: "17 Juli 2025",
        size: "0.90 MB", 
        type: "PDF", 
        url: "https://www.banksulutgo.co.id/gambar/bankreport/bankreport-laporan-kewajiban-pemenuhan-rasio-pendanaan-stabil-bersih-nsfr-juni-2025-545.pdf" 
      },
      { 
        title: "Laporan Keuangan unadited untuk periode 31 maret 2025", 
        date: "25 April 2025",
        size: "12.02 MB", 
        type: "PDF", 
        url: "https://www.banksulutgo.co.id/gambar/bankreport/bankreport-laporan-keuangan-unadited-untuk-periode-31-maret-2025-531.pdf" 
      },
      { 
        title: "Laporan Eksposur Risiko & Permodalan 31 Maret 2025", 
        date: "25 April 2025",
        size: "7.29 MB", 
        type: "PDF", 
        url: "https://www.banksulutgo.co.id/gambar/bankreport/bankreport-laporan-eksposur-risiko-amp-permodalan-31-maret-2025-530.pdf" 
      },
      { 
        title: "Laporan Neraca Maret 2025", 
        date: "25 April 2025",
        size: "0.32 MB", 
        type: "PDF", 
        url: "https://www.banksulutgo.co.id/gambar/bankreport/bankreport-laporan-neraca-maret-2025-529.pdf" 
      },
      { 
        title: "Laporan Kewajiban Pemenuhan Rasio Pendanaan Stabil Bersih - Maret 2025", 
        date: "15 April 2025",
        size: "0.34 MB", 
        type: "PDF", 
        url: "https://www.banksulutgo.co.id/gambar/bankreport/bankreport-laporan-kewajiban-pemenuhan-rasio-pendanaan-stabil-bersih-maret-2025-525.pdf" 
      },
      { 
        title: "Laporan Perhitungan Rasio Kecukupan Liquiditas (LCR) Maret 2025", 
        date: "15 April 2025",
        size: "0.13 MB", 
        type: "PDF", 
        url: "https://www.banksulutgo.co.id/gambar/bankreport/bankreport-laporan-perhitungan-rasio-kecukupan-liquiditas-lcr-maret-2025-524.pdf" 
      }
    ]
  },
  { 
    year: "2024", 
    reports: [
      { 
        title: "Laporan Liquidity Coverage Ratio Desember 2024", 
        date: "18 Februari 2025",
        size: "0.66 MB", 
        type: "PDF", 
        url: "https://www.banksulutgo.co.id/gambar/bankreport/bankreport-laporan-liquidity-coverage-ratio-desember-2024-518.pdf" 
      },
      { 
        title: "Laporan Net Stable Funding Ratio Desember 2024", 
        date: "18 Februari 2025",
        size: "0.76 MB", 
        type: "PDF", 
        url: "https://www.banksulutgo.co.id/gambar/bankreport/bankreport-laporan-net-stable-funding-ratio-desember-2024-517.pdf" 
      },
      { 
        title: "Laporan Eksposur Risiko & Permodalan 31 Desember 2024", 
        date: "14 Februari 2025",
        size: "2.31 MB", 
        type: "PDF", 
        url: "https://www.banksulutgo.co.id/gambar/bankreport/bankreport-laporan-eksposur-risiko-amp-permodalan-31-desember-2024-513.pdf" 
      },
      { 
        title: "Laporan Neraca Desember 2024", 
        date: "14 Februari 2025",
        size: "0.43 MB", 
        type: "PDF", 
        url: "https://www.banksulutgo.co.id/gambar/bankreport/bankreport-laporan-neraca-desember-2024-512.pdf" 
      },
      { 
        title: "Laporan Keuangan Audited 31 Desember 2024 dan 2023", 
        date: "03 Februari 2025",
        size: "5.23 MB", 
        type: "PDF", 
        url: "https://www.banksulutgo.co.id/gambar/bankreport/bankreport-laporan-keuangan-audited-31-desember-2024-dan-2023-511.pdf" 
      },
      { 
        title: "Laporan Keuangan Unaudited September 2024", 
        date: "28 Oktober 2024",
        size: "11.56 MB", 
        type: "PDF", 
        url: "https://www.banksulutgo.co.id/gambar/bankreport/bankreport-laporan-keuangan-unaudited-september-2024-496.pdf" 
      },
      { 
        title: "Laporan Eksposur Risiko & Permodalan 30 Septmber 2024", 
        date: "28 Oktober 2024",
        size: "7.29 MB", 
        type: "PDF", 
        url: "https://www.banksulutgo.co.id/gambar/bankreport/bankreport-laporan-eksposur-risiko-amp-permodalan-30-septmber-2024-495.pdf" 
      },
      { 
        title: "Laporan Neraca September 2024", 
        date: "28 Oktober 2024",
        size: "0.37 MB", 
        type: "PDF", 
        url: "https://www.banksulutgo.co.id/gambar/bankreport/bankreport-laporan-neraca-september-2024-494.pdf" 
      },
      { 
        title: "Laporan Keuangan Unaudited Periode yang Berakhir tanggal 30 Juni 2024 dan 2023", 
        date: "26 Juli 2024",
        size: "11.43 MB", 
        type: "PDF", 
        url: "https://www.banksulutgo.co.id/gambar/bankreport/bankreport-laporan-keuangan-unaudited-periode-yang-berakhir-tanggal-30-juni-2024-dan-2023-480.pdf" 
      },
      { 
        title: "Laporan Eksposur Risiko & Permodalan Juni 2024", 
        date: "26 Juli 2024",
        size: "14.58 MB", 
        type: "PDF", 
        url: "https://www.banksulutgo.co.id/gambar/bankreport/bankreport-laporan-eksposur-risiko-amp-permodalan-juni-2024-479.pdf" 
      },
      { 
        title: "Laporan Neraca Juni 2024", 
        date: "26 Juli 2024",
        size: "0.22 MB", 
        type: "PDF", 
        url: "https://www.banksulutgo.co.id/gambar/bankreport/bankreport-laporan-neraca-juni-2024-478.pdf" 
      },
      { 
        title: "Laporan Keuangan Unaudited Maret 2024", 
        date: "29 April 2024",
        size: "11.71 MB", 
        type: "PDF", 
        url: "https://www.banksulutgo.co.id/gambar/bankreport/bankreport-laporan-keuangan-unaudited-maret-2024-466.pdf" 
      },
      { 
        title: "Laporan Neraca Maret 2024", 
        date: "29 April 2024",
        size: "0.37 MB", 
        type: "PDF", 
        url: "https://www.banksulutgo.co.id/gambar/bankreport/bankreport-laporan-neraca-maret-2024-465.pdf" 
      },
      { 
        title: "Laporan Eksposur Risiko & Permodalan 31 Maret 2024", 
        date: "29 April 2024",
        size: "7.19 MB", 
        type: "PDF", 
        url: "https://www.banksulutgo.co.id/gambar/bankreport/bankreport-laporan-eksposur-risiko-amp-permodalan-31-maret-2024-464.pdf" 
      }
    ]
  },
  { 
    year: "2023", 
    reports: [
      { 
        title: "Laporan Neraca Desember 2023", 
        date: "16 Februari 2024",
        size: "0.12 MB", 
        type: "PDF", 
        url: "https://www.banksulutgo.co.id/gambar/bankreport/bankreport-laporan-neraca-desember-2023-450.pdf" 
      },
      { 
        title: "Laporan Eksposur Risiko dan Permodalan 31 Desember 2023", 
        date: "16 Februari 2024",
        size: "7.61 MB", 
        type: "PDF", 
        url: "https://www.banksulutgo.co.id/gambar/bankreport/bankreport-laporan-eksposur-risiko-dan-permodalan-31-desember-2023-451.pdf" 
      },
      { 
        title: "Laporan Neraca September 2023", 
        date: "26 Oktober 2023",
        size: "0.23 MB", 
        type: "PDF", 
        url: "https://www.banksulutgo.co.id/gambar/bankreport/bankreport-laporan-neraca-september-2023-439.pdf" 
      },
      { 
        title: "Laporan Eksposur Risiko dan Permodalan 30 September 2023", 
        date: "26 Oktober 2023",
        size: "7.62 MB", 
        type: "PDF", 
        url: "https://www.banksulutgo.co.id/gambar/bankreport/bankreport-laporan-eksposur-risiko-dan-permodalan-30-september-2023-440.pdf" 
      },
      { 
        title: "Laporan Neraca Juni 2023", 
        date: "25 Juli 2023",
        size: "3.66 MB", 
        type: "PDF", 
        url: "https://www.banksulutgo.co.id/gambar/bankreport/bankreport-laporan-neraca-juni-2023-427.pdf" 
      },
      { 
        title: "Laporan Eksposur Risiko dan Permodalan 30 Juni 2023", 
        date: "25 Juli 2023",
        size: "7.62 MB", 
        type: "PDF", 
        url: "https://www.banksulutgo.co.id/gambar/bankreport/bankreport-laporan-eksposur-risiko-dan-permodalan-30-juni-2023-428.pdf" 
      },
      { 
        title: "Laporan Neraca Maret 2023", 
        date: "27 April 2023",
        size: "0.23 MB", 
        type: "PDF", 
        url: "https://www.banksulutgo.co.id/gambar/bankreport/bankreport-laporan-neraca-maret-2023-415.pdf" 
      },
      { 
        title: "Laporan Eksposur Risiko dan Permodalan 31 Maret 2023", 
        date: "27 April 2023",
        size: "7.48 MB", 
        type: "PDF", 
        url: "https://www.banksulutgo.co.id/gambar/bankreport/bankreport-laporan-eksposur-risiko-dan-permodalan-31-maret-2023-416.pdf" 
      }
    ]
  },
  { 
    year: "2022", 
    reports: [
      { 
        title: "Laporan Eksposur Risiko dan Permodalan Desember 2022", 
        date: "20 Februari 2023",
        size: "6.02 MB", 
        type: "PDF", 
        url: "https://www.banksulutgo.co.id/gambar/bankreport/bankreport-laporan-eksposur-risiko-dan-permodalan-desember-2022-401.pdf" 
      },
      { 
        title: "Laporan Neraca Desember 2022", 
        date: "20 Februari 2023",
        size: "0.31 MB", 
        type: "PDF", 
        url: "https://www.banksulutgo.co.id/gambar/bankreport/bankreport-laporan-neraca-desember-2022-402.pdf" 
      },
      { 
        title: "Laporan Neraca September 2022", 
        date: "24 Oktober 2022",
        size: "0.31 MB", 
        type: "PDF", 
        url: "https://www.banksulutgo.co.id/gambar/bankreport/bankreport-laporan-neraca-september-2022-389.pdf" 
      },
      { 
        title: "Laporan Eksposur Risiko dan Permodalan 30 September 2022 dan 31 Desember 2021", 
        date: "24 Oktober 2022",
        size: "11.82 MB", 
        type: "PDF", 
        url: "https://www.banksulutgo.co.id/gambar/bankreport/bankreport-laporan-eksposur-risiko-dan-permodalan-30-september-2022-dan-31-desember-2021-390.pdf" 
      },
      { 
        title: "Laporan Neraca Juni 2022", 
        date: "01 Agustus 2022",
        size: "2.06 MB", 
        type: "PDF", 
        url: "https://www.banksulutgo.co.id/gambar/bankreport/bankreport-laporan-neraca-juni-2022-359.pdf" 
      },
      { 
        title: "Laporan Eksposur Risiko & Permodalan 30 Juni 2022", 
        date: "08 Oktober 2024",
        size: "0.66 MB", 
        type: "PDF", 
        url: "https://www.banksulutgo.co.id/gambar/bankreport/bankreport-laporan-eksposur-risiko-amp-permodalan-30-juni-2022-489.pdf" 
      },
      { 
        title: "Laporan Keuangan Unaudited Juni 2022", 
        date: "08 Oktober 2024",
        size: "4.04 MB", 
        type: "PDF", 
        url: "https://www.banksulutgo.co.id/gambar/bankreport/bankreport-laporan-keuangan-unaudited-juni-2022-490.pdf" 
      },
      { 
        title: "Laporan Eksposur Risiko dan Permodalan Posisi 31 Maret 2022", 
        date: "21 April 2022",
        size: "5.67 MB", 
        type: "PDF", 
        url: "https://www.banksulutgo.co.id/gambar/bankreport/bankreport-laporan-eksposur-risiko-dan-permodalan-posisi-31-maret-2022-344.pdf" 
      },
      { 
        title: "Laporan Neraca Maret 2022", 
        date: "22 April 2022",
        size: "0.23 MB", 
        type: "PDF", 
        url: "https://www.banksulutgo.co.id/gambar/bankreport/bankreport-laporan-neraca-maret-2022-345.pdf" 
      }
    ]
  }
];

const annualReportsData: YearData[] = [
  { 
    year: "2024", 
    reports: [
      { 
        title: "Laporan Tahunan 2024", 
        date: "29 April 2025",
        size: "32.15 MB", 
        type: "PDF", 
        url: "https://www.banksulutgo.co.id/gambar/bankreport/bankreport-laporan-tahunan-2024-532.pdf" 
      },
      { 
        title: "Laporan Keberlanjutan 2024", 
        date: "29 April 2025",
        size: "43.80 MB", 
        type: "PDF", 
        url: "https://www.banksulutgo.co.id/gambar/bankreport/bankreport-laporan-keberlanjutan-2024-533.pdf" 
      }
    ]
  },
  { 
    year: "2023", 
    reports: [
      { 
        title: "Annual Report 2023", 
        date: "22 April 2024",
        size: "18.76 MB", 
        type: "PDF", 
        url: "https://www.banksulutgo.co.id/gambar/bankreport/bankreport-annual-report-2023-458.pdf" 
      },
      { 
        title: "Sustainability Report 2023", 
        date: "22 April 2024",
        size: "36.75 MB", 
        type: "PDF", 
        url: "https://www.banksulutgo.co.id/gambar/bankreport/bankreport-sustainability-report-2023-459.pdf" 
      }
    ]
  },
  { 
    year: "2022", 
    reports: [
      { 
        title: "Annual Report 2022", 
        date: "06 April 2023",
        size: "12.03 MB", 
        type: "PDF", 
        url: "https://www.banksulutgo.co.id/gambar/bankreport/bankreport-annual-report-2022-410.pdf" 
      },
      { 
        title: "Sustainability Report 2022", 
        date: "06 April 2023",
        size: "44.71 MB", 
        type: "PDF", 
        url: "https://www.banksulutgo.co.id/gambar/bankreport/bankreport-sustainability-report-2022-411.pdf" 
      }
    ]
  },
  { 
    year: "2021", 
    reports: [
      { 
        title: "Annual Report 2021", 
        date: "18 April 2022",
        size: "21.65 MB", 
        type: "PDF", 
        url: "https://www.banksulutgo.co.id/gambar/bankreport/bankreport-annual-report-2021-340.pdf" 
      },
      { 
        title: "Sustainability Report Tahun Buku 2021", 
        date: "18 April 2022",
        size: "9.87 MB", 
        type: "PDF", 
        url: "https://www.banksulutgo.co.id/gambar/bankreport/bankreport-sustainability-report-tahun-buku-2021-341.pdf" 
      },
      { 
        title: "Annual Report Tahun 2021 (revisi)", 
        date: "15 Agustus 2022",
        size: "25.53 MB", 
        type: "PDF", 
        url: "https://www.banksulutgo.co.id/gambar/bankreport/bankreport-annual-report-tahun-2021-revisi-360.pdf" 
      }
    ]
  },
  { 
    year: "2020", 
    reports: [
      { 
        title: "Annual Report Tahun 2020 (revisi)", 
        date: "19 Januari 2022",
        size: "34.57 MB", 
        type: "PDF", 
        url: "https://www.banksulutgo.co.id/gambar/bankreport/bankreport-annual-report-tahun-2020-revisi-329.pdf" 
      },
      { 
        title: "Annual Report 2020", 
        date: "30 April 2021",
        size: "34.57 MB", 
        type: "PDF", 
        url: "https://www.banksulutgo.co.id/gambar/bankreport/bankreport-annual-report-2020-298.pdf" 
      },
      { 
        title: "Sustainability Report Tahun Buku 2020", 
        date: "30 April 2021",
        size: "30.43 MB", 
        type: "PDF", 
        url: "https://www.banksulutgo.co.id/gambar/bankreport/bankreport-sustainability-report-tahun-buku-2020-299.pdf" 
      }
    ]
  },
  { 
    year: "2019", 
    reports: [
      { 
        title: "Sustainability Report 2019", 
        date: "03 Juni 2020",
        size: "15.27 MB", 
        type: "PDF", 
        url: "https://www.banksulutgo.co.id/gambar/bankreport/bankreport-sustainability-report-2019-256.pdf" 
      },
      { 
        title: "Annual Report 2019", 
        date: "03 Juni 2020",
        size: "13.99 MB", 
        type: "PDF", 
        url: "https://www.banksulutgo.co.id/gambar/bankreport/bankreport-annual-report-2019-update-257.pdf" 
      }
    ]
  },
  { 
    year: "2018", 
    reports: [
      { 
        title: "Annual Report 2018", 
        date: "29 April 2019",
        size: "0.09 MB", 
        type: "PDF", 
        url: "https://www.banksulutgo.co.id/gambar/bankreport/bankreport-annual-report-2018-204.pdf" 
      },
      { 
        title: "Sustainability Report 2018", 
        date: "29 April 2019",
        size: "0.09 MB", 
        type: "PDF", 
        url: "https://www.banksulutgo.co.id/gambar/bankreport/bankreport-sustainability-report-2018-205.pdf" 
      }
    ]
  },
  { 
    year: "2017", 
    reports: [
      { 
        title: "Annual Report 2017", 
        date: "27 April 2018",
        size: "75.52 MB", 
        type: "PDF", 
        url: "https://www.banksulutgo.co.id/gambar/bankreport/bankreport-annual-report-2017-163.pdf" 
      }
    ]
  },
  { 
    year: "2016", 
    reports: [
      { 
        title: "Annual Report 2016", 
        date: "28 April 2017",
        size: "11.90 MB", 
        type: "PDF", 
        url: "https://www.banksulutgo.co.id/gambar/bankreport/bankreport-annual-report-2017-120.pdf" 
      }
    ]
  },
  { 
    year: "2015", 
    reports: [
      { 
        title: "Annual Report 2015", 
        date: "28 April 2016",
        size: "9.72 MB", 
        type: "PDF", 
        url: "https://www.banksulutgo.co.id/gambar/bankreport/bankreport-annual-report-2015-68.pdf" 
      }
    ]
  }
];

// Reusable components
const ReportCard = ({ report, index }: { report: Report; index: number }) => (
  <motion.div
    initial={{ opacity: 0, x: -20 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.3, delay: index * 0.05 }}
    whileHover={{ scale: 1.02 }}
  >
    <Dialog>
        <DialogTrigger asChild>
        <Card className="p-4 hover:shadow-lg transition-shadow cursor-pointer border hover:border-red-200">
        <div className="flex justify-between items-center">
            <div>
                <h3 className="font-semibold text-sm">{report.title}</h3>
                <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">
                    {report.date} • {report.size} • {report.type}
                </p>
            </div>
            <div className="text-red-600 hover:text-red-700">
            <div rel="noopener noreferrer">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
            </div>
            </div>
        </div>
        </Card>
        </DialogTrigger>
        <DialogContent className="max-w-xs sm:max-w-lg md:max-w-4xl lg:max-w-6xl w-[95vw] sm:w-[90vw] h-[85vh] sm:h-[90vh]">
            <DialogHeader>
                <DialogTitle className="text-sm sm:text-base lg:text-lg text-gray-900 dark:text-gray-100 pr-8">
                    {report.title}
                </DialogTitle>
            </DialogHeader>
            <iframe 
                src={report.url}
                className="w-full h-[calc(85vh-120px)] sm:h-[calc(90vh-120px)] border-0 rounded-md text-center                                       "
                title={report.title}
            ></iframe>
        </DialogContent>
    </Dialog>
  </motion.div>
);

const YearAccordion = ({ data, gridCols = "md:grid-cols-2" }: { data: YearData[]; gridCols?: string }) => (
  <Accordion type="single" collapsible className="space-y-4">
    {data.map((yearData) => (
      <AccordionItem key={yearData.year} value={`year-${yearData.year}`}>
        <AccordionTrigger className="text-lg font-semibold hover:text-red-600">
          Laporan Tahun {yearData.year}
        </AccordionTrigger>
        <AccordionContent>
          <div className={`grid grid-cols-2 ${gridCols} gap-4 pt-4`}>
            {yearData.reports.map((report, index) => (
              <ReportCard key={index} report={report} index={index} />
            ))}
          </div>
        </AccordionContent>
      </AccordionItem>
    ))}
  </Accordion>
);

const TabSection = ({ title, data, gridCols }: { title: string; data: YearData[]; gridCols?: string }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
  >
    <h2 className="text-2xl font-bold mb-6">{title}</h2>
    <YearAccordion data={data} gridCols={gridCols} />
  </motion.div>
);

export default function Sejarah() {
  return (
    <AppLayout title="Laporan Keuangan Bank SulutGo">
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
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
          ></div>
          {/* Overlay for better text readability */}
          <div className="absolute inset-0 bg-white/40 dark:bg-gray-900/60"></div>
          {/* Large decorative circles */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-red-500/5 dark:bg-red-600/10 rounded-full blur-3xl transform translate-x-32 -translate-y-32"></div>
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-red-600/5 dark:bg-red-700/10 rounded-full blur-2xl transform -translate-x-32 translate-y-32"></div>
        </div>

        <div className="relative z-10 container mx-auto px-4 py-16 lg:py-24">
          <div>
            <h1 className="md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-gray-100 mb-6">
              Laporan Keuangan
            </h1>
            <p className="text-xl text-gray-700 dark:text-gray-300 mb-8 leading-relaxed">
              Laporan keuangan Bank SulutGo mencerminkan komitmen kami terhadap
              transparansi dan akuntabilitas. Temukan informasi terkini mengenai
              kinerja keuangan kami, termasuk laporan tahunan, laporan
              triwulanan, dan informasi penting lainnya.
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
                      <BreadcrumbPage>Laporan Keuangan</BreadcrumbPage>
                    </BreadcrumbItem>
                  </BreadcrumbList>
                </Breadcrumb>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-8 sm:py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <Tabs defaultValue="bulanan" orientation="vertical" className="flex gap-6 lg:gap-8">
            <div className="grid grid-cols-1 xl:grid-cols-12 gap-6 lg:gap-8 w-full">
              {/* Main Content - 8 columns */}
              <div className="xl:col-span-8 order-2 xl:order-1">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                >
                  <div className="mb-12">
                    <h1 className="font-bold tracking-tighter sm:text-5xl mb-4">
                      Laporan Keuangan Bank SulutGo
                    </h1>
                    <p className="text-lg text-gray-600 dark:text-gray-400 ">
                      Akses laporan keuangan terkini Bank SulutGo untuk transparansi dan akuntabilitas yang optimal
                    </p>
                  </div>

                  {/* Tab Contents */}
                  <TabsContent value="bulanan" className="space-y-6">
                    <TabSection title="Laporan Bulanan" data={monthlyReportsData} />
                  </TabsContent>

                  <TabsContent value="triwulan" className="space-y-6">
                    <TabSection title="Laporan Triwulan" data={quarterlyReportsData} />
                  </TabsContent>

                  <TabsContent value="tahunan" className="space-y-6">
                    <TabSection title="Laporan Tahunan" data={annualReportsData} gridCols="gap-4" />
                  </TabsContent>
                </motion.div>
              </div>

              {/* Sidebar Navigation - 4 columns */}
              <div className="xl:col-span-4 order-1 xl:order-2">
                <div className="sticky top-24 space-y-6">
                  {/* Vertical Tabs */}
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                  >
                    <Card>
                      <CardContent>
                        <h3 className="font-semibold mb-4">Jenis Laporan</h3>
                        <TabsList className="grid w-full grid-cols-1 h-auto p-1 bg-gray-100 dark:bg-gray-800 gap-1">
                          <TabsTrigger 
                            value="bulanan" 
                            className="justify-start py-3 px-4 data-[state=active]:bg-red-100 data-[state=active]:text-red-800 dark:data-[state=active]:bg-red-900 dark:data-[state=active]:text-red-100 hover:bg-red-200 dark:hover:bg-red-700"
                          >
                            Laporan Bulanan
                          </TabsTrigger>
                          <TabsTrigger 
                            value="triwulan" 
                            className="justify-start py-3 px-4 data-[state=active]:bg-red-100 data-[state=active]:text-red-800 dark:data-[state=active]:bg-red-900 dark:data-[state=active]:text-red-100 hover:bg-red-200 dark:hover:bg-red-700"
                          >
                            Laporan Triwulan
                          </TabsTrigger>
                          <TabsTrigger 
                            value="tahunan" 
                            className="justify-start py-3 px-4 data-[state=active]:bg-red-100 data-[state=active]:text-red-800 dark:data-[state=active]:bg-red-900 dark:data-[state=active]:text-red-100 hover:bg-red-200 dark:hover:bg-red-700"
                          >
                            Laporan Tahunan
                          </TabsTrigger>
                        </TabsList>
                      </CardContent>
                    </Card>
                  </motion.div>

                  {/* Navigation Menu */}
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                  >
                    <Card>
                      <CardContent>
                        <Accordion
                          type="single"
                          defaultValue="hubungan-investor"
                          className="w-full"
                        >
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
                                        delay: 0.1 + index * 0.05,
                                      }}
                                      whileHover={{ x: 4 }}
                                      whileTap={{ scale: 0.98 }}
                                    >
                                      <Link
                                        to={item.href}
                                        className={`block py-2 px-3 text-sm rounded-md transition-colors ${
                                          item.isActive
                                            ? "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-100 font-medium"
                                            : "hover:bg-red-100 dark:hover:bg-red-700"
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
                                  {hubunganinvestorMenuItems.map(
                                    (item, index) => (
                                      <motion.div
                                        key={item.id}
                                        initial={{ opacity: 0, x: -10 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{
                                          duration: 0.3,
                                          delay: 0.1 + index * 0.05,
                                        }}
                                        whileHover={{ x: 4 }}
                                        whileTap={{ scale: 0.98 }}
                                      >
                                        <Link
                                          to={item.href}
                                          className={`block py-2 px-3 text-sm rounded-md transition-colors ${
                                            item.id === "laporan"
                                              ? "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-100 font-medium"
                                              : "hover:bg-gray-100 dark:hover:bg-gray-800"
                                          }`}
                                        >
                                          <div className="flex items-center gap-2">
                                            {item.icon && item.icon}
                                            <span>{item.title}</span>
                                          </div>
                                        </Link>
                                      </motion.div>
                                    )
                                  )}
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
          </Tabs>
        </div>
      </section>
    </AppLayout>
  );
}
