import AppLayout from '@/components/app-layout';
import { useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import {
  Building2,
  MapPin,
  Phone,
  Clock,
  Navigation,
  Building,
  Banknote,
  Smartphone,
  Car,
  CreditCard,
  Truck,
  CheckCircle,
  AlertCircle,
} from "lucide-react";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import { motion, AnimatePresence, easeOut } from "framer-motion";

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
    scale: 0.95,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.4,
      ease: easeOut,
    },
  },
};
// Fix for default markers in Leaflet
// eslint-disable-next-line @typescript-eslint/no-explicit-any
delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png",
  iconUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png",
  shadowUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png",
});

// Define location types
interface BankLocation {
  id: string;
  name: string;
  type:
    | "Kantor Pusat"
    | "Kantor Cabang"
    | "Kantor Cabang Pembantu"
    | "Kantor Kas"
    | "Payment Point"
    | "Mobile Cash Office"
    | "ATM";
  address: string;
  city: string;
  phone?: string;
  fax?: string;
  email?: string;
  coordinates: [number, number]; // [lat, lng]
  operatingHours?: string;
  services?: string[];
}

export default function OurLocations() {
  const [selectedType, setSelectedType] = useState<string>("all");

  // Data lokasi Bank SulutGo (Data real dari website resmi)
  const bankLocations: BankLocation[] = [
    // KANTOR PUSAT & WILAYAH
    {
      id: "kp-001",
      name: "Kantor Pusat Bank SulutGo",
      type: "Kantor Pusat",
      address: "Jl. Pierre Tendean No. 100, Manado",
      city: "Manado",
      phone: "(0431) 861759, 861761",
      fax: "(0431) 854522",
      coordinates: [1.4748, 124.8442],
      operatingHours: "Senin - Jumat: 08:00 - 15:00",
      services: [
        "Semua Layanan Banking",
        "Safe Deposit Box",
        "Treasury",
        "Trade Finance",
        "Corporate Banking",
      ],
    },
    {
      id: "kw-001",
      name: "Kantor Wilayah BSG Gorontalo",
      type: "Kantor Pusat",
      address:
        "Jl. Nani Wartabone D.I. Panjaitan Kelurahan Lima U 1 (satu), Kecamatan Kota Selatan, Kota Gorontalo",
      city: "Gorontalo",
      coordinates: [0.5435, 123.0596],
      operatingHours: "Senin - Jumat: 08:00 - 15:00",
      services: ["Layanan Regional", "Koordinasi Cabang", "Banking Services"],
    },

    // KANTOR CABANG UTAMA
    {
      id: "kc-001",
      name: "Cabang Utama Manado",
      type: "Kantor Cabang",
      address: "Jl. Sam Ratulangi No. 9, Manado 95111",
      city: "Manado",
      phone: "(0431) 861759, 861761",
      fax: "(0431) 854522",
      coordinates: [1.484, 124.8473],
      operatingHours: "Senin - Jumat: 08:00 - 15:00",
      services: [
        "Tabungan",
        "Deposito",
        "Kredit",
        "Transfer",
        "ATM",
        "Valuta Asing",
      ],
    },
    {
      id: "kc-002",
      name: "Cabang Jakarta",
      type: "Kantor Cabang",
      address:
        "Gedung Rajawali Place Kuningan Lt. 2B & 7A&7B, Jl. HR Rasuna Said, Kec. Kuningan, Jakarta Selatan",
      city: "Jakarta",
      phone: "021-25094880, 021-25094881",
      fax: "021-25094882",
      email: "cabang.jakarta@banksulutgo.co.id",
      coordinates: [-6.2297, 106.831],
      operatingHours: "Senin - Jumat: 08:00 - 15:00",
      services: ["Tabungan", "Deposito", "Kredit", "Transfer", "Trade Finance"],
    },
    {
      id: "kc-003",
      name: "Cabang Gorontalo",
      type: "Kantor Cabang",
      address: "Jl. M.T. Haryono No. 18, Gorontalo",
      city: "Gorontalo",
      phone: "(0435) 822616, 824650",
      fax: "(0435) 823067",
      coordinates: [0.5435, 123.0596],
      operatingHours: "Senin - Jumat: 08:00 - 15:00",
      services: ["Tabungan", "Deposito", "Kredit", "Transfer", "ATM"],
    },
    {
      id: "kc-004",
      name: "Cabang Surabaya",
      type: "Kantor Cabang",
      address:
        "Jl. Diponegoro No. 28 C-D, Kelurahan Darmo, Kecamatan Wonokromo, Surabaya",
      city: "Surabaya",
      phone: "031-5687586, 031-5677768",
      fax: "031-5618664",
      coordinates: [-7.2755, 112.7348],
      operatingHours: "Senin - Jumat: 08:00 - 15:00",
      services: ["Tabungan", "Deposito", "Kredit", "Transfer", "Trade Finance"],
    },
    {
      id: "kc-005",
      name: "Cabang Kotamobagu",
      type: "Kantor Cabang",
      address: "Jl. A. Yani No. 187, Kotamobagu",
      city: "Kotamobagu",
      phone: "(0434) 21058, 21250",
      fax: "(0434) 22155",
      coordinates: [0.7292, 124.3267],
      operatingHours: "Senin - Jumat: 08:00 - 15:00",
      services: ["Tabungan", "Deposito", "Kredit", "Transfer", "ATM"],
    },
    {
      id: "kc-006",
      name: "Cabang Tahuna",
      type: "Kantor Cabang",
      address: "Jl. DR. Sutomo No. 60, Tahuna",
      city: "Tahuna",
      phone: "(0432) 21179, 21391",
      fax: "(0432) 22251",
      coordinates: [3.6135, 125.4875],
      operatingHours: "Senin - Jumat: 08:00 - 15:00",
      services: ["Tabungan", "Deposito", "Kredit", "Transfer", "ATM"],
    },
    {
      id: "kc-007",
      name: "Cabang Bitung",
      type: "Kantor Cabang",
      address: "Jl. Yos Sudarso No. 13/12, Bitung",
      city: "Bitung",
      phone: "(0438) 21011, 21218",
      fax: "(0438) 30492",
      coordinates: [1.4401, 125.1824],
      operatingHours: "Senin - Jumat: 08:00 - 15:00",
      services: ["Tabungan", "Deposito", "Kredit", "Transfer", "ATM"],
    },
    {
      id: "kc-008",
      name: "Cabang Kawangkoan",
      type: "Kantor Cabang",
      address: "Jl. Raya Kawangkoan, Kab. Minahasa",
      city: "Kawangkoan",
      phone: "(0431) 371080, 371121",
      fax: "(0431) 371400",
      coordinates: [1.338, 124.8139],
      operatingHours: "Senin - Jumat: 08:00 - 15:00",
      services: ["Tabungan", "Deposito", "Kredit", "Transfer", "ATM"],
    },
    {
      id: "kc-009",
      name: "Cabang Limboto",
      type: "Kantor Cabang",
      address: "Jl. Mayor Dullah No. 1, Limboto",
      city: "Limboto",
      phone: "(0435) 881440, 881012",
      fax: "(0435) 881067",
      coordinates: [0.6047, 123.0064],
      operatingHours: "Senin - Jumat: 08:00 - 15:00",
      services: ["Tabungan", "Deposito", "Kredit", "Transfer", "ATM"],
    },
    {
      id: "kc-010",
      name: "Cabang Tondano",
      type: "Kantor Cabang",
      address: "Jl. Tountemboan, Tondano",
      city: "Tondano",
      phone: "(0431) 321637, 321438",
      fax: "(0431) 322512",
      coordinates: [1.3047, 124.9125],
      operatingHours: "Senin - Jumat: 08:00 - 15:00",
      services: ["Tabungan", "Deposito", "Kredit", "Transfer", "ATM"],
    },
    {
      id: "kc-011",
      name: "Cabang Tomohon",
      type: "Kantor Cabang",
      address: "Jl. Raya Tomohon, Kota Tomohon",
      city: "Tomohon",
      phone: "0431-351381",
      fax: "0431-353086",
      coordinates: [1.3318, 124.8377],
      operatingHours: "Senin - Jumat: 08:00 - 15:00",
      services: ["Tabungan", "Deposito", "Kredit", "Transfer", "ATM"],
    },
    {
      id: "kc-012",
      name: "Cabang Malang",
      type: "Kantor Cabang",
      address: "Jl. Letjen S. Parman No. 25, Kota Malang",
      city: "Malang",
      phone: "0341-486123",
      fax: "0341-486124",
      coordinates: [-7.9666, 112.6326],
      operatingHours: "Senin - Jumat: 08:00 - 15:00",
      services: ["Tabungan", "Deposito", "Kredit", "Transfer", "Trade Finance"],
    },

    // KANTOR CABANG PEMBANTU (Sampel representatif)
    {
      id: "kcp-001",
      name: "KCP Lirung",
      type: "Kantor Cabang Pembantu",
      address: "Komp. Pertokoan Lirung Kec. Lirung, Kab. Talaud",
      city: "Lirung",
      phone: "0433-311384",
      fax: "0433-311385",
      coordinates: [4.0847, 126.7197],
      operatingHours: "Senin - Jumat: 08:00 - 14:00",
      services: ["Tabungan", "Transfer", "Pembayaran"],
    },
    {
      id: "kcp-002",
      name: "KCP Kelapa Gading",
      type: "Kantor Cabang Pembantu",
      address: "Jl. Boulevard Raya Blok TA 2/19, Kelapa Gading, Jakarta",
      city: "Jakarta",
      phone: "021-45847964",
      fax: "021-4534453",
      coordinates: [-6.1563, 106.9019],
      operatingHours: "Senin - Jumat: 08:00 - 14:00",
      services: ["Tabungan", "Transfer", "Pembayaran"],
    },
    {
      id: "kcp-003",
      name: "KCP Cempaka Putih",
      type: "Kantor Cabang Pembantu",
      address:
        "Jl. Cempaka Putih Raya No. 135, Kelurahan Cempaka Putih, Jakarta Pusat",
      city: "Jakarta",
      coordinates: [-6.1674, 106.87],
      operatingHours: "Senin - Jumat: 08:00 - 14:00",
      services: ["Tabungan", "Transfer", "Pembayaran"],
    },
    {
      id: "kcp-004",
      name: "KCP Mangga Dua",
      type: "Kantor Cabang Pembantu",
      address:
        "Lobby Utama Orion Dusit Mangga Dua Lantai Dasar No. 1, Jl. Mangga Dua Raya, Jakarta Pusat",
      city: "Jakarta",
      phone: "021-6123590, 021-6123591",
      fax: "021-6121059",
      coordinates: [-6.1289, 106.8433],
      operatingHours: "Senin - Jumat: 08:00 - 14:00",
      services: ["Tabungan", "Transfer", "Pembayaran"],
    },
    {
      id: "kcp-005",
      name: "KCP Tuminting",
      type: "Kantor Cabang Pembantu",
      address: "Jl. Santiago No. 141A, Kel. Tuminting, Manado",
      city: "Manado",
      phone: "0431-872238",
      fax: "0431-872239",
      coordinates: [1.4927, 124.8642],
      operatingHours: "Senin - Jumat: 08:00 - 14:00",
      services: ["Tabungan", "Transfer", "Pembayaran"],
    },
    {
      id: "kcp-006",
      name: "KCP Likupang",
      type: "Kantor Cabang Pembantu",
      address:
        "Komp. Pertokoan Likupang, Desa Likupang II, Kec. Likupang Timur, Minut",
      city: "Likupang",
      phone: "0431-8894116",
      fax: "0431-8894115",
      coordinates: [1.6629, 125.0621],
      operatingHours: "Senin - Jumat: 08:00 - 14:00",
      services: ["Tabungan", "Transfer", "Pembayaran"],
    },

    // KANTOR KAS (Sampel representatif)
    {
      id: "kk-001",
      name: "KK Kantor Gubernur",
      type: "Kantor Kas",
      address: "Komp. Kantor Gubernur SULUT, Jl. 17 Agustus, Manado",
      city: "Manado",
      phone: "0431-845668",
      coordinates: [1.4927, 124.8503],
      operatingHours: "Senin - Jumat: 08:00 - 14:00",
      services: ["Tabungan", "Transfer", "Pembayaran"],
    },
    {
      id: "kk-002",
      name: "KK Mega Mas",
      type: "Kantor Kas",
      address:
        "Ruko Kawasan Mega Mas, Blok 1C, No. 19, Jl. Piere Tendean, Manado",
      city: "Manado",
      coordinates: [1.4748, 124.8442],
      operatingHours: "Senin - Minggu: 10:00 - 21:00",
      services: ["Tabungan", "Transfer", "Pembayaran"],
    },
    {
      id: "kk-003",
      name: "KK Tumpaan",
      type: "Kantor Kas",
      address:
        "Jl. Trans Sulawesi, Komp. Pertokoan Tumpaan, Kab. Minahasa Selatan",
      city: "Tumpaan",
      phone: "0430-21477",
      coordinates: [1.2431, 124.7892],
      operatingHours: "Senin - Jumat: 08:00 - 14:00",
      services: ["Tabungan", "Transfer", "Pembayaran"],
    },
    {
      id: "kk-004",
      name: "KK Kartini",
      type: "Kantor Kas",
      address: "Jl. Kartini, Komp. Pertokoan Kotamobagu",
      city: "Kotamobagu",
      phone: "0434-24952",
      coordinates: [0.7292, 124.3267],
      operatingHours: "Senin - Jumat: 08:00 - 14:00",
      services: ["Tabungan", "Transfer", "Pembayaran"],
    },
    {
      id: "kk-005",
      name: "KCP LK UNSRAT",
      type: "Kantor Kas",
      address:
        "Kampus Universitas Sam Ratulangi, Kelurahan Bahu, Kecamatan Malalayang, Manado",
      city: "Manado",
      coordinates: [1.4642, 124.8637],
      operatingHours: "Senin - Jumat: 08:00 - 14:00",
      services: ["Tabungan", "Transfer", "Pembayaran Mahasiswa"],
    },

    // PAYMENT POINT (Sampel representatif)
    {
      id: "pp-001",
      name: "Payment Point SAMSAT Prov. Sulut",
      type: "Payment Point",
      address: "Jl. 17 Agustus, Manado",
      city: "Manado",
      coordinates: [1.489, 124.8456],
      operatingHours: "Senin - Jumat: 08:00 - 15:00",
      services: ["Pembayaran Pajak Kendaraan", "SAMSAT Services"],
    },
    {
      id: "pp-002",
      name: "Payment Point SAMSAT Prov. Sulut Bethesda",
      type: "Payment Point",
      address: "Polda Sulut, Jl. Bethesda, Manado",
      city: "Manado",
      coordinates: [1.4712, 124.8598],
      operatingHours: "Senin - Jumat: 08:00 - 15:00",
      services: ["Pembayaran Pajak Kendaraan", "SAMSAT Services"],
    },
    {
      id: "pp-003",
      name: "Payment Point SAMSAT Prov. Gorontalo",
      type: "Payment Point",
      address: "Jl. Sawah Besar, Kel. Tumbihe, Kec. Kabila, Kab. Bone Bolango",
      city: "Gorontalo",
      coordinates: [0.5435, 123.0596],
      operatingHours: "Senin - Jumat: 08:00 - 15:00",
      services: ["Pembayaran Pajak Kendaraan", "SAMSAT Services"],
    },
    {
      id: "pp-004",
      name: "Payment Point SAMSAT Kota Gorontalo",
      type: "Payment Point",
      address:
        "Kompleks Perkantoran SAMSAT Kota Gorontalo, Jl. Jenderal Sudirman",
      city: "Gorontalo",
      coordinates: [0.5435, 123.0596],
      operatingHours: "Senin - Jumat: 08:00 - 15:00",
      services: ["Pembayaran Pajak Kendaraan", "SAMSAT Services"],
    },
    {
      id: "pp-005",
      name: "Payment Point SAMSAT Kotamobagu",
      type: "Payment Point",
      address: "Kompleks Perkantoran SAMSAT Kotamobagu",
      city: "Kotamobagu",
      coordinates: [0.7292, 124.3267],
      operatingHours: "Senin - Jumat: 08:00 - 15:00",
      services: ["Pembayaran Pajak Kendaraan", "SAMSAT Services"],
    },
    {
      id: "pp-006",
      name: "Payment Point SAMSAT Bitung",
      type: "Payment Point",
      address: "Kompleks Perkantoran SAMSAT Bitung",
      city: "Bitung",
      coordinates: [1.4401, 125.1824],
      operatingHours: "Senin - Jumat: 08:00 - 15:00",
      services: ["Pembayaran Pajak Kendaraan", "SAMSAT Services"],
    },

    // ATM (Sampel representatif)
    {
      id: "atm-001",
      name: "ATM Galeri Kantor Pusat",
      type: "ATM",
      address: "Kantor Pusat Bank SulutGo, Jl. Sam Ratulangi No. 9, Manado",
      city: "Manado",
      coordinates: [1.4748, 124.8442],
      operatingHours: "24 Jam",
      services: [
        "Tarik Tunai",
        "Transfer",
        "Informasi Saldo",
        "Ganti PIN",
        "Payment",
      ],
    },
    {
      id: "atm-002",
      name: "ATM Bahu Mall",
      type: "ATM",
      address: "Kompleks Bahu Mall, Manado",
      city: "Manado",
      coordinates: [1.4712, 124.8598],
      operatingHours: "24 Jam",
      services: [
        "Tarik Tunai",
        "Transfer",
        "Informasi Saldo",
        "Ganti PIN",
        "Payment",
      ],
    },
    {
      id: "atm-003",
      name: "ATM Manado Town Square",
      type: "ATM",
      address: "Manado Town Square (Galeri ATM), Jl. Piere Tendean",
      city: "Manado",
      coordinates: [1.4748, 124.8442],
      operatingHours: "24 Jam",
      services: [
        "Tarik Tunai",
        "Transfer",
        "Informasi Saldo",
        "Ganti PIN",
        "Payment",
      ],
    },
    {
      id: "atm-004",
      name: "ATM Bandara Sam Ratulangi",
      type: "ATM",
      address: "Bandara Sam Ratulangi, Kel. Mapanget Barat, Kec. Mapanget",
      city: "Manado",
      coordinates: [1.5492, 124.9238],
      operatingHours: "24 Jam",
      services: [
        "Tarik Tunai",
        "Transfer",
        "Informasi Saldo",
        "Ganti PIN",
        "Payment",
      ],
    },
    {
      id: "atm-005",
      name: "ATM Multimart Ranotana",
      type: "ATM",
      address:
        "Galeri ATM Multimart Supermarket Ranotana, Jl. Sam Ratulangi - Ranotana",
      city: "Manado",
      coordinates: [1.484, 124.8473],
      operatingHours: "24 Jam",
      services: [
        "Tarik Tunai",
        "Transfer",
        "Informasi Saldo",
        "Ganti PIN",
        "Payment",
      ],
    },
  ];

  // Filter locations based on selected type
  const filteredLocations =
    selectedType === "all"
      ? bankLocations
      : bankLocations.filter((location) => location.type === selectedType);

  // Mobile Cash Office Info Component
  const MobileCashOfficeInfo = () => (
    <div className="space-y-6">
      <Card className="border-blue-200 dark:border-blue-800">
        <CardHeader className="bg-blue-50 dark:bg-blue-900/20">
          <CardTitle className="flex items-center gap-3 text-blue-900 dark:text-blue-100">
            <Truck className="h-6 w-6" />
            Mobile Cash Office Bank SulutGo
          </CardTitle>
        </CardHeader>
        <CardContent className="pt-6">
          <div className="prose dark:prose-invert max-w-none">
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
              Sistem pelayanan jemput bola yang diterapkan Bank SulutGo melalui
              jasa Mobil Kas Keliling, merupakan salah satu upaya untuk
              memberikan kepuasan pelayanan serta mendekatkan pelayanan terhadap
              para nasabah maupun calon nasabah.
            </p>

            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
              Layanan yang Tersedia:
            </h3>

            <div className="grid md:grid-cols-2 gap-4 mb-6">
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-green-600 mt-0.5" />
                  <span className="text-sm text-gray-700 dark:text-gray-300">
                    Pembukaan Rekening Giro, Tabungan dan Deposito
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-green-600 mt-0.5" />
                  <span className="text-sm text-gray-700 dark:text-gray-300">
                    Transaksi penarikan tunai dengan jumlah tidak terbatas
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-green-600 mt-0.5" />
                  <span className="text-sm text-gray-700 dark:text-gray-300">
                    Transaksi pemindah bukuan
                  </span>
                </div>
              </div>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-green-600 mt-0.5" />
                  <span className="text-sm text-gray-700 dark:text-gray-300">
                    Anjungan Tunai Mandiri (ATM) sesuai menu Bank SulutGo
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-green-600 mt-0.5" />
                  <span className="text-sm text-gray-700 dark:text-gray-300">
                    Kegiatan penukaran dan pembelian valuta asing (Money
                    Changer)
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-green-600 mt-0.5" />
                  <span className="text-sm text-gray-700 dark:text-gray-300">
                    Transaksi perbankan lainnya
                  </span>
                </div>
              </div>
            </div>

            <div className="bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-lg p-4">
              <div className="flex items-start gap-3">
                <AlertCircle className="h-5 w-5 text-yellow-600 mt-0.5" />
                <div>
                  <p className="text-sm font-medium text-yellow-800 dark:text-yellow-200 mb-1">
                    Informasi Penting
                  </p>
                  <p className="text-sm text-yellow-700 dark:text-yellow-300">
                    Bank SulutGo sebagai perbankan yang berdomisili di daerah
                    selalu ingin tampil untuk memberikan pelayanan yang terbaik
                    bagi para nasabah, sehingga hubungan yang selama ini telah
                    terbangun secara baik dapat terus ditingkatkan.
                  </p>
                </div>
              </div>
            </div>

            <div className="flex justify-center mt-6">
              <img
                src="https://www.banksulutgo.co.id/gambar/mobile_co/mobile_co--2.jpg"
                alt="Mobile Cash Office Bank SulutGo"
                className="rounded-lg shadow-lg max-w-md w-full object-cover"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.style.display = "none";
                }}
              />
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );

  // Get icon based on location type
  const getLocationIcon = (type: string) => {
    switch (type) {
      case "Kantor Pusat":
        return <Building2 className="h-5 w-5" />;
      case "Kantor Cabang":
        return <Building className="h-5 w-5" />;
      case "Kantor Cabang Pembantu":
        return <Building className="h-4 w-4" />;
      case "Kantor Kas":
        return <Banknote className="h-4 w-4" />;
      case "Payment Point":
        return <CreditCard className="h-4 w-4" />;
      case "ATM":
        return <Smartphone className="h-4 w-4" />;
      case "Mobile Cash Office":
        return <Car className="h-4 w-4" />;
      default:
        return <MapPin className="h-4 w-4" />;
    }
  };

  // Get badge color based on location type
  const getBadgeVariant = (type: string) => {
    switch (type) {
      case "Kantor Pusat":
        return "default";
      case "Kantor Cabang":
        return "secondary";
      case "Kantor Cabang Pembantu":
        return "outline";
      case "Kantor Kas":
        return "destructive";
      case "Payment Point":
        return "secondary";
      case "ATM":
        return "outline";
      case "Mobile Cash Office":
        return "outline";
      default:
        return "secondary";
    }
  };

  return (
    <AppLayout title="Lokasi Kami - Bank SulutGo">
      {/* Hero Section with Breadcrumb */}
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
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-gray-100 mb-6">
              Lokasi Kami
            </h1>
            <div className="w-full mx-auto">
              <div className="inline-flex items-center space-x-2 text-lg text-gray-700 dark:text-gray-300 bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm rounded-full px-6 py-3 border border-gray-200/50 dark:border-gray-700/50">
                <Breadcrumb>
                  <BreadcrumbList>
                    <BreadcrumbItem>
                      <BreadcrumbLink href="/">Home</BreadcrumbLink>
                    </BreadcrumbItem>
                    <BreadcrumbSeparator />
                    <BreadcrumbItem>
                      <BreadcrumbPage>Lokasi Kami</BreadcrumbPage>
                    </BreadcrumbItem>
                  </BreadcrumbList>
                </Breadcrumb>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          {/* Filter Tabs */}
          <div className="mb-8">
            <Tabs
              value={selectedType}
              onValueChange={setSelectedType}
              className="w-full"
            >
              <TabsList className="flex flex-wrap w-full bg-gray-100 dark:bg-gray-800 p-1 gap-1 h-auto">
                <TabsTrigger
                  value="all"
                  className="flex-1 min-w-[80px] text-xs sm:text-sm px-2 py-2 dark:text-white data-[state=active]:dark:bg-white data-[state=active]:dark:text-black"
                >
                  Semua
                </TabsTrigger>
                <TabsTrigger
                  value="Kantor Pusat"
                  className="flex-1 min-w-[80px] text-xs sm:text-sm px-2 py-2 dark:text-white data-[state=active]:dark:bg-white data-[state=active]:dark:text-black"
                >
                  Pusat
                </TabsTrigger>
                <TabsTrigger
                  value="Kantor Cabang"
                  className="flex-1 min-w-[80px] text-xs sm:text-sm px-2 py-2 dark:text-white data-[state=active]:dark:bg-white data-[state=active]:dark:text-black"
                >
                  Cabang
                </TabsTrigger>
                <TabsTrigger
                  value="Kantor Cabang Pembantu"
                  className="flex-1 min-w-[80px] text-xs sm:text-sm px-2 py-2 dark:text-white data-[state=active]:dark:bg-white data-[state=active]:dark:text-black"
                >
                  KCP
                </TabsTrigger>
                <TabsTrigger
                  value="Kantor Kas"
                  className="flex-1 min-w-[80px] text-xs sm:text-sm px-2 py-2 dark:text-white data-[state=active]:dark:bg-white data-[state=active]:dark:text-black"
                >
                  Kas
                </TabsTrigger>
                <TabsTrigger
                  value="Payment Point"
                  className="flex-1 min-w-[90px] text-xs sm:text-sm px-2 py-2 dark:text-white data-[state=active]:dark:bg-white data-[state=active]:dark:text-black"
                >
                  Payment
                </TabsTrigger>
                <TabsTrigger
                  value="ATM"
                  className="flex-1 min-w-[60px] text-xs sm:text-sm px-2 py-2 dark:text-white data-[state=active]:dark:bg-white data-[state=active]:dark:text-black"
                >
                  ATM
                </TabsTrigger>
                <TabsTrigger
                  value="info"
                  className="flex-1 min-w-[90px] text-xs sm:text-sm px-2 py-2 data-[state=active]:bg-blue-600 data-[state=active]:text-white data-[state=active]:dark:bg-blue-600 data-[state=active]:dark:text-white"
                >
                  MCO Info
                </TabsTrigger>
              </TabsList>
            </Tabs>
          </div>

          {/* Main Content - Conditional Rendering */}
          {selectedType === "info" ? (
            // Mobile Cash Office Information
            <MobileCashOfficeInfo />
          ) : (
            // Map and Location Cards Container
            <motion.div
              className="grid grid-cols-1 lg:grid-cols-3 gap-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              {/* Interactive Map */}
              <div className="lg:col-span-2">
                <Card className="overflow-hidden">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Navigation className="h-5 w-5 text-red-600" />
                      Peta Lokasi Bank SulutGo
                    </CardTitle>
                    <CardDescription>
                      Klik pada marker untuk melihat detail lokasi
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="p-0">
                    <div className="h-[500px] w-full relative z-10">
                      <MapContainer
                        center={[1.4748, 124.8421]} // Centered on Manado
                        zoom={11}
                        style={{ height: "100%", width: "100%", zIndex: 10 }}
                        className="rounded-b-lg"
                      >
                        <TileLayer
                          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                        />
                        {filteredLocations.map((location) => (
                          <Marker
                            key={location.id}
                            position={location.coordinates}
                          >
                            <Popup>
                              <div className="min-w-[250px]">
                                <div className="flex items-start justify-between mb-2">
                                  <h3 className="font-semibold text-gray-900">
                                    {location.name}
                                  </h3>
                                  <Badge
                                    variant={getBadgeVariant(location.type)}
                                    className="ml-2"
                                  >
                                    {location.type}
                                  </Badge>
                                </div>
                                <div className="space-y-2 text-sm text-gray-600">
                                  <div className="flex items-start gap-2">
                                    <MapPin className="h-4 w-4 mt-0.5 shrink-0" />
                                    <span>{location.address}</span>
                                  </div>
                                  {location.phone && (
                                    <div className="flex items-center gap-2">
                                      <Phone className="h-4 w-4 shrink-0" />
                                      <span>{location.phone}</span>
                                    </div>
                                  )}
                                  {location.operatingHours && (
                                    <div className="flex items-start gap-2">
                                      <Clock className="h-4 w-4 mt-0.5 shrink-0" />
                                      <span>{location.operatingHours}</span>
                                    </div>
                                  )}
                                </div>
                                {location.services &&
                                  location.services.length > 0 && (
                                    <div className="mt-3 pt-2 border-t">
                                      <p className="text-xs font-medium text-gray-700 mb-1">
                                        Layanan:
                                      </p>
                                      <div className="flex flex-wrap gap-1">
                                        {location.services
                                          .slice(0, 3)
                                          .map((service, index) => (
                                            <Badge
                                              key={index}
                                              variant="outline"
                                              className="text-xs"
                                            >
                                              {service}
                                            </Badge>
                                          ))}
                                        {location.services.length > 3 && (
                                          <Badge
                                            variant="outline"
                                            className="text-xs"
                                          >
                                            +{location.services.length - 3}{" "}
                                            lainnya
                                          </Badge>
                                        )}
                                      </div>
                                    </div>
                                  )}
                              </div>
                            </Popup>
                          </Marker>
                        ))}
                      </MapContainer>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Location List */}
              <div className="space-y-4">
                <div className="sticky top-24">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-4">
                    Daftar Lokasi{" "}
                    {selectedType === "all" ? "Semua" : selectedType}
                  </h3>
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={selectedType}
                      className="space-y-3 max-h-[500px] overflow-y-auto pr-2"
                      initial="hidden"
                      animate="visible"
                      exit="hidden"
                      variants={listVariants}
                    >
                      {filteredLocations.map((location, index) => (
                        <motion.div
                          key={`${location.id}-${selectedType}`}
                          variants={itemVariants}
                          custom={index}
                          layout
                        >
                          <Card className="hover:shadow-md transition-shadow">
                            <CardContent className="p-4">
                              <div className="flex items-start justify-between mb-2">
                                <div className="flex items-center gap-2">
                                  <div className="text-red-600">
                                    {getLocationIcon(location.type)}
                                  </div>
                                  <h4 className="font-semibold text-gray-900 dark:text-gray-100 text-sm">
                                    {location.name}
                                  </h4>
                                </div>
                                <Badge
                                  variant={getBadgeVariant(location.type)}
                                  className="text-xs"
                                >
                                  {location.type}
                                </Badge>
                              </div>

                              <div className="space-y-1 text-xs text-gray-600 dark:text-gray-400">
                                <div className="flex items-start gap-2">
                                  <MapPin className="h-3 w-3 mt-0.5 shrink-0" />
                                  <span>{location.address}</span>
                                </div>
                                {location.phone && (
                                  <div className="flex items-center gap-2">
                                    <Phone className="h-3 w-3 shrink-0" />
                                    <span>{location.phone}</span>
                                  </div>
                                )}
                                {location.operatingHours && (
                                  <div className="flex items-start gap-2">
                                    <Clock className="h-3 w-3 mt-0.5 shrink-0" />
                                    <span>{location.operatingHours}</span>
                                  </div>
                                )}
                              </div>

                              {location.services &&
                                location.services.length > 0 && (
                                  <div className="mt-3 pt-2 border-t border-gray-100 dark:border-gray-700">
                                    <div className="flex flex-wrap gap-1">
                                      {location.services
                                        .slice(0, 2)
                                        .map((service, index) => (
                                          <Badge
                                            key={index}
                                            variant="outline"
                                            className="text-xs"
                                          >
                                            {service}
                                          </Badge>
                                        ))}
                                      {location.services.length > 2 && (
                                        <Badge
                                          variant="outline"
                                          className="text-xs"
                                        >
                                          +{location.services.length - 2}
                                        </Badge>
                                      )}
                                    </div>
                                  </div>
                                )}

                              <div className="mt-3">
                                <Button
                                  size="sm"
                                  variant="outline"
                                  className="w-full text-xs"
                                  onClick={() => {
                                    const url = `https://www.google.com/maps/search/?api=1&query=${location.coordinates[0]},${location.coordinates[1]}`;
                                    window.open(url, "_blank");
                                  }}
                                >
                                  <Navigation className="h-3 w-3 mr-1" />
                                  Buka di Maps
                                </Button>
                              </div>
                            </CardContent>
                          </Card>
                        </motion.div>
                      ))}
                    </motion.div>
                  </AnimatePresence>
                </div>
              </div>
            </motion.div>
          )}
        </div>
      </section>

      {/* Summary Section */}
      <section className="py-12 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 dark:text-gray-100 mb-4">
              Jaringan Layanan Bank SulutGo
            </h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Dengan jaringan yang tersebar di seluruh Sulawesi Utara, Bank
              SulutGo siap melayani kebutuhan perbankan Anda.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {[
              {
                type: "Kantor Pusat",
                count: bankLocations.filter((l) => l.type === "Kantor Pusat")
                  .length,
                icon: <Building2 className="h-6 w-6" />,
              },
              {
                type: "Kantor Cabang",
                count: bankLocations.filter((l) => l.type === "Kantor Cabang")
                  .length,
                icon: <Building className="h-6 w-6" />,
              },
              {
                type: "KCP",
                count: bankLocations.filter(
                  (l) => l.type === "Kantor Cabang Pembantu"
                ).length,
                icon: <Building className="h-5 w-5" />,
              },
              {
                type: "Kantor Kas",
                count: bankLocations.filter((l) => l.type === "Kantor Kas")
                  .length,
                icon: <Banknote className="h-5 w-5" />,
              },
              {
                type: "Payment Point",
                count: bankLocations.filter((l) => l.type === "Payment Point")
                  .length,
                icon: <CreditCard className="h-5 w-5" />,
              },
              {
                type: "ATM",
                count: bankLocations.filter((l) => l.type === "ATM").length,
                icon: <Smartphone className="h-5 w-5" />,
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                  ease: "easeOut",
                }}
              >
                <Card className="text-center p-4 hover:shadow-lg transition-shadow">
                  <CardContent className="p-0">
                    <div className="text-red-600 flex justify-center mb-2">
                      {item.icon}
                    </div>
                    <div className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-1">
                      {item.count}
                    </div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">
                      {item.type}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </AppLayout>
  );
}
