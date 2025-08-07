import { 
    Carousel, 
    CarouselContent, 
    CarouselItem, 
    CarouselNext, 
    CarouselPrevious } from '@/components/ui/carousel';
import type { CarouselApi } from "@/components/ui/carousel";
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
import { Separator } from "@/components/ui/separator";
import AppLayout from '@/components/app-layout';
import { Link } from 'react-router-dom';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { 
  ArrowRight, 
  ArrowLeft,
  Smartphone,
  Globe,
  Car,
  CreditCard,
  Phone,
  MessageSquare,
  FileText,
  TrendingUp,
  Shield,
  Headphones,
  HelpCircle,
} from 'lucide-react';
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";
import { useEffect, useState } from "react";


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

const investor = [
  {
    id: "1",
    description: "Company Profile Perode Juni 2025",
    data: "https://www.banksulutgo.co.id/gambar/bankreport/bankreport-company-profile-perode-juni-2025-553.pdf",
  },
  {
    id: "2",
    description: "Laporan Keuangan Unaudited Juni 2025",
    data: "https://www.banksulutgo.co.id/gambar/bankreport/bankreport-laporan-keuangan-unaudited-juni-2025-552.pdf",
  },
  {
    id: "3",
    description: "Laporan Eksposur Risiko & Permodalan 30 Juni 2025",
    data: "https://www.banksulutgo.co.id/gambar/bankreport/bankreport-laporan-eksposur-risiko-amp-permodalan-30-juni-2025-551.pdf",
  },
  {
    id: "4",
    description: "Laporan Neraca Juni 2025",
    data: "https://www.banksulutgo.co.id/gambar/bankreport/bankreport-laporan-eksposur-risiko-amp-permodalan-30-juni-2025-551.pdf",
  },
  {
    id: "5",
    description: "Komitmen Kontinjensi Juni 2025",
    data: "https://www.banksulutgo.co.id/gambar/bankreport/bankreport-komitmen-kontijensi-juni-2025-549.pdf",
  },
]
 

export interface Gallery4Item {
  id: string;
  title: string;
  description: string;
  href: string;
  image: string;
}

export interface Gallery4Props {
  title?: string;
  description?: string;
  items: Gallery4Item[];
}

const data = [
  {
    id: "shadcn-ui",
    title: "shadcn/ui: Building a Modern Component Library",
    description:
      "Explore how shadcn/ui revolutionized React component libraries by providing a unique approach to component distribution and customization, making it easier for developers to build beautiful, accessible applications.",
    href: "https://ui.shadcn.com",
    image:
      "https://images.unsplash.com/photo-1551250928-243dc937c49d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2NDI3NzN8MHwxfGFsbHwxMjN8fHx8fHwyfHwxNzIzODA2OTM5fA&ixlib=rb-4.0.3&q=80&w=1080",
  },
  {
    id: "tailwind",
    title: "Tailwind CSS: The Utility-First Revolution",
    description:
      "Discover how Tailwind CSS transformed the way developers style their applications, offering a utility-first approach that speeds up development while maintaining complete design flexibility.",
    href: "https://tailwindcss.com",
    image:
      "https://images.unsplash.com/photo-1551250928-e4a05afaed1e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2NDI3NzN8MHwxfGFsbHwxMjR8fHx8fHwyfHwxNzIzODA2OTM5fA&ixlib=rb-4.0.3&q=80&w=1080",
  },
  {
    id: "astro",
    title: "Astro: The All-in-One Web Framework",
    description:
      "Learn how Astro's innovative 'Islands Architecture' and zero-JS-by-default approach is helping developers build faster websites while maintaining rich interactivity where needed.",
    href: "https://astro.build",
    image:
      "https://images.unsplash.com/photo-1536735561749-fc87494598cb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2NDI3NzN8MHwxfGFsbHwxNzd8fHx8fHwyfHwxNzIzNjM0NDc0fA&ixlib=rb-4.0.3&q=80&w=1080",
  },
  {
    id: "react",
    title: "React: Pioneering Component-Based UI",
    description:
      "See how React continues to shape modern web development with its component-based architecture, enabling developers to build complex user interfaces with reusable, maintainable code.",
    href: "https://react.dev",
    image:
      "https://images.unsplash.com/photo-1548324215-9133768e4094?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2NDI3NzN8MHwxfGFsbHwxMzF8fHx8fHwyfHwxNzIzNDM1MzA1fA&ixlib=rb-4.0.3&q=80&w=1080",
  },
  {
    id: "nextjs",
    title: "Next.js: The React Framework for Production",
    description:
      "Explore how Next.js has become the go-to framework for building full-stack React applications, offering features like server components, file-based routing, and automatic optimization.",
    href: "https://nextjs.org",
    image:
      "https://images.unsplash.com/photo-1550070881-a5d71eda5800?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2NDI3NzN8MHwxfGFsbHwxMjV8fHx8fHwyfHwxNzIzNDM1Mjk4fA&ixlib=rb-4.0.3&q=80&w=1080",
  },
];

const Gallery4 = ({
  title = "Case Studies",
  description = "Discover how leading companies and developers are leveraging modern web technologies to build exceptional digital experiences. These case studies showcase real-world applications and success stories.",
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
            <div className="container mx-auto px-4">
                <div className="mb-8 flex items-end justify-between md:mb-14 lg:mb-16">
                    <div className="flex flex-col gap-4">
                        <h2 className="text-3xl font-medium md:text-4xl lg:text-5xl">
                            {title}
                        </h2>
                        <p className="max-w-lg text-muted-foreground">{description}</p>
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
                                <a href={item.href} className="group rounded-xl">
                                    <div className="group relative h-full min-h-[27rem] max-w-full overflow-hidden rounded-xl md:aspect-5/4 lg:aspect-16/9">
                                        <img
                                            src={item.image}
                                            alt={item.title}
                                            className="absolute h-full w-full object-cover object-center transition-transform duration-300 group-hover:scale-105"
                                        />
                                        <div className="absolute inset-0 h-full bg-[linear-gradient(transparent_20%,var(--primary)_100%)] mix-blend-multiply" />
                                        <div className="absolute inset-x-0 bottom-0 flex flex-col items-start p-6 text-primary-foreground md:p-8">
                                            <div className="mb-2 pt-4 text-xl font-semibold md:mb-3 md:pt-4 lg:pt-4">
                                                {item.title}
                                            </div>
                                            <div className="mb-8 line-clamp-2 md:mb-12 lg:mb-9">
                                                {item.description}
                                            </div>
                                            <div className="flex items-center text-sm">
                                                Read more{" "}
                                                <ArrowRight className="ml-2 size-5 transition-transform group-hover:translate-x-1" />
                                            </div>
                                        </div>
                                    </div>
                                </a>
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


export default function Home() {
    return (
        <AppLayout title="Beranda - Bank SulutGo">
            {/* Hero Section */}
            <section className="relative text-white">
                <div className="absolute inset-0 bg-black/20 dark:bg-black/40"></div>
                <div className="relative w-full">
                    <Carousel 
                        opts={{
                            align: "start",
                            loop: true,
                        }}
                        className="w-full h-full"
                    >
                        <CarouselContent className="h-full">
                            <CarouselItem className="h-full">
                                <img 
                                    src="https://www.banksulutgo.co.id/gambar/slide/slide-ID-33-1725419214.jpg" 
                                    alt="Bank SulutGo Slide 1" 
                                    className="w-full h-full object-cover"
                                />
                            </CarouselItem>
                            <CarouselItem className="h-full">
                                <img 
                                    src="https://www.banksulutgo.co.id/gambar/slide/slide-ID-41-1737624695.webp" 
                                    alt="Bank SulutGo Slide 2" 
                                    className="w-full h-full object-cover"
                                />
                            </CarouselItem>
                            <CarouselItem className="h-full">
                                <img 
                                    src="https://www.banksulutgo.co.id/gambar/slide/slide-ID-35-1747708505.webp" 
                                    alt="Bank SulutGo Slide 3" 
                                    className="w-full h-full object-cover"
                                />
                            </CarouselItem>
                            <CarouselItem className="h-full">
                                <img 
                                    src="https://www.banksulutgo.co.id/gambar/slide/slide-ID-35-1747708505.webp" 
                                    alt="Bank SulutGo Slide 4" 
                                    className="w-full h-full object-cover"
                                />
                            </CarouselItem>
                            <CarouselItem className="h-full">
                                <img 
                                    src="https://www.banksulutgo.co.id/gambar/slide/slide-ID-35-1747708505.webp" 
                                    alt="Bank SulutGo Slide 5" 
                                    className="w-full h-full object-cover"
                                />
                            </CarouselItem>
                        </CarouselContent>
                        <CarouselPrevious className="left-4 bg-black/30" />
                        <CarouselNext className="right-4 bg-black/30" />
                    </Carousel>
                </div>
            </section>

            {/* Quick Services */}
            <section className="bg-gray-50 dark:bg-gray-900 py-12 md:py-16 lg:py-20">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="mb-8 md:mb-12 text-center">
                        <h2 className="mb-4 text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 dark:text-gray-100">Layanan Unggulan</h2>
                        <p className="mx-auto max-w-2xl text-sm md:text-base text-gray-600 dark:text-gray-400">Nikmati kemudahan akses perbankan dengan berbagai layanan digital terdepan</p>
                    </div>

                    <div className="grid grid-cols-1 gap-4 sm:gap-6 md:grid-cols-2 lg:grid-cols-3 xl:gap-8">
                        {[
                            { 
                                title: 'BSG Touch', 
                                desc: 'Mobile Banking Terdepan', 
                                icon: Smartphone,
                                color: 'text-blue-600 dark:text-blue-400',
                                bgColor: 'bg-blue-50 dark:bg-blue-950'
                            },
                            { 
                                title: 'Internet Banking', 
                                desc: 'Akses 24/7 Online', 
                                icon: Globe,
                                color: 'text-green-600 dark:text-green-400',
                                bgColor: 'bg-green-50 dark:bg-green-950'
                            },
                            { 
                                title: 'BSG Samsat', 
                                desc: 'Bayar Pajak Online', 
                                icon: Car,
                                color: 'text-purple-600 dark:text-purple-400',
                                bgColor: 'bg-purple-50 dark:bg-purple-950'
                            },
                        ].map((service, index) => (
                            <Card key={index} className="group hover:shadow-xl dark:hover:shadow-2xl transition-all duration-300 hover:scale-105 border-gray-200 dark:border-gray-700">
                                <CardHeader className="pb-4">
                                    <div className={`h-12 w-12 ${service.bgColor} mb-4 flex items-center justify-center rounded-lg transition-transform duration-300 group-hover:scale-110`}>
                                        <service.icon className={`h-6 w-6 ${service.color}`} />
                                    </div>
                                    <CardTitle className="text-base sm:text-lg">{service.title}</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <CardDescription className="text-xs sm:text-sm">{service.desc}</CardDescription>
                                </CardContent>
                                <CardFooter>
                                    <Button variant="destructive" size="sm" className="w-full justify-center group-hover:bg-gray-100 dark:group-hover:bg-gray-800">
                                        Pelajari Lebih Lanjut
                                        <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                                    </Button>
                                </CardFooter>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* Exchange Rates Preview */}
            <section className="bg-white dark:bg-gray-800 py-12 md:py-16 lg:py-20">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 gap-6 lg:gap-8 xl:grid-cols-3">
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

                        {/* Investor Relations Card */}
                        <Card className="xl:col-span-2 border-gray-200 dark:border-gray-700">
                            <CardHeader className="text-center pb-4">
                                <div className="flex items-center justify-center gap-2 mb-2">
                                    <FileText className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                                    <CardTitle className="text-lg sm:text-xl">Hubungan Investor</CardTitle>
                                </div>
                                <CardDescription className="text-xs sm:text-sm">
                                    Informasi Keuangan Bank SulutGo secara terkini, efektif, efisien dan transparan
                                </CardDescription>
                            </CardHeader>
                            <CardContent className="p-0">
                                <div className="overflow-x-auto">
                                    <Table>
                                        <TableBody>
                                            {investor.map((investorItem) => (
                                                <TableRow key={investorItem.id} className="border-gray-200 dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors">
                                                    <TableCell className="font-medium text-gray-900 dark:text-gray-100 text-xs sm:text-sm py-3 sm:py-4">
                                                        <div className="pr-2 sm:pr-4 flex items-center gap-3 ps-6">
                                                            <span>{investorItem.description}</span>
                                                        </div>
                                                    </TableCell>
                                                    <TableCell className="py-3 sm:py-4">
                                                        <Dialog>
                                                            <DialogTrigger asChild>
                                                                <Button variant="destructive" size="sm" className="w-full sm:w-auto transition-all duration-300 hover:scale-105">
                                                                    <span className="text-xs sm:text-sm">Go</span>
                                                                    <ArrowRight className="ml-1 sm:ml-2 h-3 w-3 sm:h-4 sm:w-4" />
                                                                </Button>
                                                            </DialogTrigger>
                                                            <DialogContent className="max-w-xs sm:max-w-lg md:max-w-4xl lg:max-w-6xl w-[95vw] sm:w-[90vw] h-[85vh] sm:h-[90vh]">
                                                                <DialogHeader>
                                                                    <DialogTitle className="text-sm sm:text-base lg:text-lg text-gray-900 dark:text-gray-100 pr-8">
                                                                        {investorItem.description}
                                                                    </DialogTitle>
                                                                </DialogHeader>
                                                                <iframe 
                                                                    src={investorItem.data}
                                                                    className="w-full h-[calc(85vh-120px)] sm:h-[calc(90vh-120px)] border-0 rounded-md text-center                                       "
                                                                    title={investorItem.description}
                                                                ></iframe>
                                                            </DialogContent>
                                                        </Dialog>
                                                    </TableCell>
                                                </TableRow>
                                            ))}
                                        </TableBody>
                                    </Table>
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </section>

            {/* Gallery Section */}
            <section className="bg-gray-50 dark:bg-gray-900 py-16 ">
                <div className="container mx-auto px-4">
                    <div className="flex w-full flex-col gap-6">
                        <Tabs defaultValue="berita" className="w-full">
                            <TabsList className="dark:bg-gray-700 gap-4">
                                <TabsTrigger value="berita">Berita & Unggulan</TabsTrigger>
                                <TabsTrigger value="edutips">Edutips</TabsTrigger>
                                <TabsTrigger value="awasmodus">#AwasModus</TabsTrigger>
                            </TabsList>
                            <TabsContent value="berita">
                                <Gallery4 items={data} />
                            </TabsContent>
                            <TabsContent value="edutips">
                                <Gallery4 items={data} />
                            </TabsContent>
                            <TabsContent value="awasmodus">
                                <Gallery4 items={data} />
                            </TabsContent>
                        </Tabs>
                    </div>
                </div>
            </section>

            {/* Program & Layanan Section */}
            <section className="bg-white dark:bg-gray-800 py-12 md:py-16 lg:py-20">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="mb-8 md:mb-12 text-center">
                        <h2 className="mb-4 text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 dark:text-gray-100">Program dan Layanan</h2>
                        <p className="mx-auto max-w-3xl text-sm md:text-base text-gray-600 dark:text-gray-400">Temukan berbagai program unggulan dan layanan terbaik dari Bank SulutGo untuk memenuhi kebutuhan perbankan Anda</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                        {[
                            {
                                title: "BSG Touch",
                                description: "Mobile Banking dengan teknologi terdepan untuk kemudahan transaksi di mana saja",
                                icon: Smartphone,
                                gradient: "from-blue-500 to-blue-700 dark:from-blue-600 dark:to-blue-800",
                                buttonText: "Pelajari Lebih Lanjut"
                            },
                            {
                                title: "Pengumuman Lelang",
                                description: "Informasi terkini mengenai lelang properti dan aset lainnya dari Bank SulutGo",
                                icon: FileText,
                                gradient: "from-red-500 to-red-700 dark:from-red-600 dark:to-red-800",
                                buttonText: "Lihat Pengumuman"
                            },
                            {
                                title: "BSG Samsat",
                                description: "Layanan pembayaran pajak kendaraan online yang mudah dan efisien",
                                icon: Car,
                                gradient: "from-purple-500 to-purple-700 dark:from-purple-600 dark:to-purple-800",
                                buttonText: "Bayar Sekarang"
                            },
                            {
                                title: "BSG SMS",
                                description: "Layanan SMS Banking untuk transaksi cepat melalui pesan singkat",
                                icon: MessageSquare,
                                gradient: "from-green-500 to-green-700 dark:from-green-600 dark:to-green-800",
                                buttonText: "Aktivasi SMS"
                            },
                            {
                                title: "BSG USSD",
                                description: "Akses banking dengan *141*127# untuk transaksi tanpa internet",
                                icon: Phone,
                                gradient: "from-orange-500 to-orange-700 dark:from-orange-600 dark:to-orange-800",
                                buttonText: "Panduan USSD"
                            },
                            {
                                title: "e-LHKPN",
                                description: "Laporan Harta Kekayaan Penyelenggara Negara secara elektronik",
                                icon: Shield,
                                gradient: "from-teal-500 to-teal-700 dark:from-teal-600 dark:to-teal-800",
                                buttonText: "Akses Portal"
                            }
                        ].map((service, index) => (
                            <Card key={index} className={`group relative overflow-hidden border-0 bg-gradient-to-br ${service.gradient} text-white transition-all duration-300 hover:scale-105 hover:shadow-xl`}>
                                <div className="absolute inset-0 bg-black/10 dark:bg-black/20"></div>
                                <CardHeader className="relative pb-4">
                                    <div className="mb-4 inline-flex h-12 w-12 sm:h-16 sm:w-16 items-center justify-center rounded-lg bg-white/20 dark:bg-white/10">
                                        <service.icon className="h-6 w-6 sm:h-8 sm:w-8" />
                                    </div>
                                    <CardTitle className="text-lg sm:text-xl">{service.title}</CardTitle>
                                </CardHeader>
                                <CardContent className="relative">
                                    <CardDescription className="text-sm sm:text-base text-white/90 dark:text-white/80">
                                        {service.description}
                                    </CardDescription>
                                </CardContent>
                                <CardFooter className="relative pt-4">
                                    <Button variant="secondary" size="sm" className="group-hover:scale-105 transition-transform">
                                        {service.buttonText}
                                        <ArrowRight className="ml-2 h-4 w-4" />
                                    </Button>
                                </CardFooter>
                            </Card>
                        ))}
                    </div>

                    <Separator className="my-12 lg:my-16" />

                    {/* Call to Action */}
                    <Card className="bg-gradient-to-r from-blue-50 to-red-50 dark:from-gray-800 dark:to-gray-700 border border-gray-200 dark:border-gray-600">
                        <CardHeader className="text-center pb-4">
                            <CardTitle className="text-xl sm:text-2xl lg:text-3xl text-gray-900 dark:text-gray-100">
                                Butuh Bantuan Lebih Lanjut?
                            </CardTitle>
                        </CardHeader>
                        <CardContent className="text-center">
                            <CardDescription className="text-sm sm:text-base lg:text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                                Tim customer service kami siap membantu Anda 24/7 untuk semua kebutuhan perbankan
                            </CardDescription>
                        </CardContent>
                        <CardFooter className="justify-center pt-4">
                            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                                <Button size="lg" className="bg-red-600 hover:bg-red-700 dark:bg-red-700 dark:hover:bg-red-800 transition-all duration-300 hover:scale-105">
                                    <Headphones className="mr-2 h-5 w-5" />
                                    Hubungi Kami
                                </Button>
                                <Button variant="outline" size="lg" className="border-gray-300 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-700 transition-all duration-300 hover:scale-105">
                                    <HelpCircle className="mr-2 h-5 w-5" />
                                    FAQ & Bantuan
                                </Button>
                            </div>
                        </CardFooter>
                    </Card>
                </div>
            </section>

            
            <section className="bg-gray-50 dark:bg-gray-900 py-12 md:py-16 lg:py-20">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <Card className="border-0 shadow-2xl bg-white dark:bg-gray-800">
                        <CardContent className="p-0">
                            <div className="grid items-center gap-6 sm:gap-8 lg:gap-12 lg:grid-cols-2">
                                <div className="flex flex-col items-center text-center lg:items-start lg:text-left order-2 lg:order-1 p-6 sm:p-8 lg:p-12">
                                    <h1 className="my-4 sm:my-6 text-pretty text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 dark:text-gray-100 leading-tight">
                                        Solusi Perbankan Terdepan untuk Sulawesi Utara
                                    </h1>
                                    <p className="text-muted-foreground mb-8 max-w-xl lg:text-xl">
                                        Nikmati kemudahan layanan perbankan digital yang inovatif dan terpercaya. Bank SulutGo hadir untuk mendukung kebutuhan finansial Anda dengan teknologi terdepan dan pelayanan prima.
                                    </p>
                                    <div className="flex flex-col sm:flex-row gap-4 w-full lg:w-auto">
                                        <Button size="lg" className="bg-red-600 hover:bg-red-700 dark:bg-red-700 dark:hover:bg-red-800 dark:text-white">
                                            <CreditCard className="mr-2 h-5 w-5" />
                                            Buka Rekening
                                        </Button>
                                        <Button variant="outline" size="lg">
                                            <Globe className="mr-2 h-5 w-5" />
                                            Layanan Digital
                                        </Button>
                                    </div>
                                </div>
                                <div className="order-1 lg:order-2 p-6 sm:p-8 lg:p-12">
                                    <div className="relative overflow-hidden rounded-xl">
                                        <iframe 
                                            width="560" 
                                            height="315" 
                                            src="https://www.youtube.com/embed/-cD2po3pmNE" 
                                            className="w-full h-48 sm:h-64 md:h-72 lg:h-80 xl:h-96 rounded-md shadow-lg border border-gray-200 dark:border-gray-700" 
                                            title="Bank SulutGo - Solusi Perbankan Digital Terdepan"
                                            frameBorder="0"
                                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                            referrerPolicy="strict-origin-when-cross-origin"
                                            allowFullScreen
                                        ></iframe>
                                    </div>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </section>
        </AppLayout>
    );

}
