import AppLayout from '@/components/app-layout';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import {
  Alert,
  AlertDescription,
  AlertTitle,
} from "@/components/ui/alert";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import type { CarouselApi } from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight, TrendingUp, AlertCircleIcon } from "lucide-react";
import { useState, useEffect } from "react";
import { Link } from 'react-router-dom';


const kurs = [
  {
    id: "USD",
    kurs: "USD",
    beli: "16404",
    jual: "16604",
  },
  {
    id: "AUD",
    kurs: "AUD",
    beli: "10518",
    jual: "10696",
  },
  {
    id: "CHF",
    kurs: "CHF",
    beli: "20073",
    jual: "20386",
  },
  {
    id: "NZD",
    kurs: "NZD",
    beli: "9600",
    jual: "9765",
  },
  {
    id: "GBP",
    kurs: "GBP",
    beli: "21589",
    jual: "21904",
  },
  {
    id: "HKD",
    kurs: "HKD",
    beli: "2089",
    jual: "2116",
  },
]
// Interfaces harus berada di luar fungsi component
export interface Gallery4Item {
  id: string;
  title: string;
  href: string;
  image: string;
}

export interface Gallery4Props {
  title?: string;
  items: Gallery4Item[];
}

export default function TabunganBunaken() {
  const data = [
    {
  id: "Aman",
  title: "Aman dengan jaminan LPS",
  href: "",
  image: "https://img.freepik.com/free-photo/hand-holding-credit-card-making-online-payment-transactions_53876-133242.jpg",
},
{
  id: "Bunga",
  title: "Suku Bunga bersaing",
  href: "",
  image: "https://img.freepik.com/free-photo/woman-holding-credit-card-making-online-payment_23-2148554477.jpg",
},
{
  id: "FiturFasilitas",
  title: "Fitur dan Fasilitas menarik",
  href: "",
  image: "https://img.freepik.com/free-photo/electronic-banking-concept-young-woman-with-laptop-bank-credit-cards_1423-176.jpg",
}

];

const Gallery4 = ({
  title = "Keistimewaan Tabungan Bunaken",
  items = data,
    }: Gallery4Props) => {
    const [carouselApi, setCarouselApi] = useState<CarouselApi>();
    const [canScrollPrev, setCanScrollPrev] = useState(false);
    const [canScrollNext, setCanScrollNext] = useState(false);
    const [currentSlide, setCurrentSlide] = useState(0);

    useEffect(() => {
        if (!carouselApi) {
        return;
        }
        const updateSelection = () => {
        setCanScrollPrev(carouselApi.canScrollPrev());
        setCanScrollNext(carouselApi.canScrollNext());
        setCurrentSlide(carouselApi.selectedScrollSnap());
        };
        updateSelection();
        carouselApi.on("select", updateSelection);
        return () => {
        carouselApi.off("select", updateSelection);
        };
    }, [carouselApi]);

    return (
        <section className="py-8">
            <div className="container mx-auto">
                <div className="mb-8 flex items-end justify-between md:mb-14 lg:mb-16">
                    <div className="flex flex-col gap-4">
                        <h1 className="text-3xl font-medium md:text-4xl lg:text-5xl">
                            {title}
                        </h1>
                    </div>
                    <div className="hidden shrink-0 gap-2 md:flex">
                        <Button
                            size="icon"
                            variant="ghost"
                            onClick={() => {
                                carouselApi?.scrollPrev();
                            }}
                            disabled={!canScrollPrev}
                            className="disabled:pointer-events-auto"
                        >
                            <ArrowLeft className="size-5" />
                        </Button>
                        <Button
                            size="icon"
                            variant="ghost"
                            onClick={() => {
                                carouselApi?.scrollNext();
                            }}
                            disabled={!canScrollNext}
                            className="disabled:pointer-events-auto"
                        >
                            <ArrowRight className="size-5" />
                        </Button>
                    </div>
                </div>
            </div>
            <div className="w-full">
                <Carousel
                    setApi={setCarouselApi}
                    opts={{
                        breakpoints: {
                            "(max-width: 768px)": {
                                dragFree: true,
                            },
                        },
                    }}
                >
                    <CarouselContent className="ml-0 2xl:mr-[max(0rem,calc(50vw-700px))] 2xl:ml-[max(8rem,calc(50vw-700px))]">
                        {items.map((item) => (
                            <CarouselItem
                                key={item.id}
                                className="max-w-[320px] pl-[20px] lg:max-w-[360px]"
                            >
                                <div className="group rounded-xl">
                                    <div className="group relative h-full min-h-[27rem] max-w-full overflow-hidden rounded-xl md:aspect-5/4 lg:aspect-16/9">
                                        <img
                                            src={item.image}
                                            alt={item.title}
                                            className="absolute h-full w-full object-cover object-center transition-transform duration-300"
                                        />
                                        <div className="absolute inset-0 h-full bg-black/75" />
                                        <div className="absolute inset-x-0 bottom-0 flex flex-col items-start p-6 text-primary-foreground md:p-8">
                                            <div className="mb-2 pt-4 text-xl font-semibold md:mb-3 md:pt-4 lg:pt-4">
                                                {item.title}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                </Carousel>
                <div className="mt-8 flex justify-center gap-2">
                    {items.map((_, index) => (
                        <button
                            key={index}
                            className={`h-2 w-2 rounded-full transition-colors ${
                                currentSlide === index ? "bg-primary" : "bg-primary/20"
                            }`}
                            onClick={() => carouselApi?.scrollTo(index)}
                            aria-label={`Go to slide ${index + 1}`}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};
return (
    <AppLayout title="Tabungan Bunaken - Bank SulutGo">
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
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-gray-100 mb-6">
                        Produk dan Layanan
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
                                    <BreadcrumbLink>Produk & Layanan</BreadcrumbLink>
                                    </BreadcrumbItem>
                                    <BreadcrumbSeparator />
                                    <BreadcrumbItem>
                                    <BreadcrumbPage>Tabungan Bunaken</BreadcrumbPage>
                                    </BreadcrumbItem>
                                </BreadcrumbList>
                            </Breadcrumb>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        {/* Content Section */}
        <section className="py-8 sm:py-16 lg:py-24">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 xl:grid-cols-12 gap-6 lg:gap-8">
                    {/* Left Content - 8 columns */}
                    <div className="xl:col-span-8">
                        {/* Product Introduction Grid */}
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
                            {/* Left: Product Description */}
                            <div className="space-y-6">
                                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-gray-100">
                                    Tabungan Bunaken
                                </h1>
                                <p className="text-lg text-gray-600 dark:text-gray-400 text-justify">
                                    <span className="font-extrabold">Tabungan Bunaken</span> adalah produk tabungan unggulan Bank SulutGo yang dirancang khusus untuk memberikan kemudahan dan keuntungan maksimal bagi nasabah di Sulawesi Utara. Dengan nama yang terinspirasi dari keindahan Taman Nasional Bunaken, produk ini menawarkan berbagai fasilitas modern dan benefit menarik.
                                </p>
                                <p className="text-lg text-gray-600 dark:text-gray-400 text-justify">
                                    Nikmati kemudahan bertransaksi dengan teknologi terdepan, bunga yang kompetitif, dan akses ke seluruh jaringan ATM Bank SulutGo serta ATM Bersama di seluruh Indonesia. Tabungan Bunaken hadir sebagai solusi finansial terpercaya untuk masa depan yang lebih cerah.
                                </p>
                            </div>
                            
                            {/* Right: Product Image */}
                            <div className="flex items-center justify-center">
                                <div className="relative w-full max-w-md">
                                    <img
                                        src="https://www.banksulutgo.co.id/gambar/product/product-tabungan-bunaken-2-l.jpg"
                                        alt="Tabungan Bunaken Bank SulutGo"
                                        className="w-full h-auto rounded-xl shadow-lg object-cover"
                                    />
                                </div>
                            </div>
                        </div>
                        
                        {/* Main Content Area */}
                        <div className="space-y-8">
                            {/* Features Section */}
                            <Gallery4 items={data} />
                        </div>
                    </div>
                        
                    
                    {/* Right Sidebar - 4 columns */}
                    <div className="xl:col-span-4">
                        <div className="sticky top-42 space-y-6">
                            {/* Kurs Card */}
                        <Card className="xl:col-span-1 border-gray-200 dark:border-gray-700">
                            <CardHeader className="text-center pb-4">
                                <div className="flex items-center justify-center gap-2 mb-2">
                                    <TrendingUp className="h-5 w-5 text-green-600 dark:text-green-400" />
                                    <CardTitle className="text-lg sm:text-xl">Kurs Utama</CardTitle>
                                </div>
                                <CardDescription className="text-xs sm:text-sm">
                                    Kurs e-Rate 01 Agst 2025 - 23:59 WIB
                                </CardDescription>
                            </CardHeader>
                            <CardContent className="p-0">
                                <div className="overflow-x-auto">
                                    <Table>
                                        <TableHeader>
                                            <TableRow className="border-gray-200 dark:border-gray-600">
                                                <TableHead className="text-gray-900 dark:text-gray-100 text-xs sm:text-sm text-center">Mata Uang</TableHead>
                                                <TableHead className="text-gray-900 dark:text-gray-100 text-xs sm:text-sm">Beli</TableHead>
                                                <TableHead className="text-gray-900 dark:text-gray-100 text-xs sm:text-sm">Jual</TableHead>
                                            </TableRow>
                                        </TableHeader>
                                        <TableBody>
                                            {kurs.map((kursItem) => (
                                                <TableRow key={kursItem.id} className="border-gray-200 dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors">
                                                    <TableCell className="font-medium text-gray-900 dark:text-gray-100 text-xs sm:text-sm text-center">{kursItem.kurs}
                                                    </TableCell>
                                                    <TableCell className="text-gray-700 dark:text-gray-300 text-xs sm:text-sm font-mono">{kursItem.beli}</TableCell>
                                                    <TableCell className="text-gray-700 dark:text-gray-300 text-xs sm:text-sm font-mono">{kursItem.jual}</TableCell>
                                                </TableRow>
                                            ))}
                                        </TableBody>
                                    </Table>
                                </div>
                            </CardContent>
                            <CardFooter className="pt-4">
                                <Link to="/exchange-rates" className="w-full">
                                    <Button variant="destructive" size="sm" className="w-full transition-all duration-300 hover:scale-105">
                                        <span className="text-xs sm:text-sm">Lihat Selengkapnya</span>
                                        <ArrowRight className="ml-2 h-3 w-3 sm:h-4 sm:w-4" />
                                    </Button>
                                </Link>
                            </CardFooter>
                        </Card>
                        <Alert variant="destructive" className="border-red-400 dark:border-red-600 bg-red-50 dark:bg-red-900">
                            <AlertCircleIcon />
                            <AlertTitle>Persyaratan Mudah</AlertTitle>
                            <AlertDescription>
                            <ul className="list-inside list-disc text-sm">
                                <li>Setoran awal minimal Rp. 50.000.000,-</li>
                                <li>Kartu ATM dapat digunakan bertransaksi di Mesin ATM Bank SulutGo dan ATM Bersama.</li>
                                <li>Peruntukan bagi Nasabah Perorangan & Non-Perorangan.</li>
                                <li>Persyaratan dokumen:
                                    <ul className="list-inside list-disc ms-6">
                                        <li>Perorangan: 
                                            <ul className="list-inside list-disc ms-6">
                                                <li>KTP/SIM/Paspor.</li>
                                            </ul>
                                        </li>
                                        <li>Non-Perorangan:
                                            <ul className="list-inside list-disc ms-6">
                                                <li>Akta Pendirian</li>
                                                <li>SIUP</li>
                                                <li>TDP</li>
                                                <li>NPWP</li>
                                                <li>Anggaran Dasar</li>
                                                <li>Akta Perubahan (bila ada)</li>        
                                            </ul>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                            </AlertDescription>
                        </Alert>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </AppLayout>
  );
}