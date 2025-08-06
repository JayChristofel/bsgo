import { Routes, Route } from 'react-router-dom'


import Dashboard from './pages/Dashboard'

// Product Pages
import  Simpeda  from './pages/product/simpeda'
import TabunganBunaken from './pages/product/tabungan-bunaken'
import Sejarah from './pages/tentang-kami/sejarah'
import Report from './pages/tentang-kami/report'

// // Other Pages
import Lokasi from './pages/lokasi'
import News from './pages/berita'
import BeritaDetail from './pages/berita-show'

export default function Router() {
    return (
        <Routes>
            <Route path="/" element={<Dashboard />} />
                               
                {/* Product Pages */}
                <Route path="products-services">
                    <Route path="simpeda" element={<Simpeda />} />
                    <Route path="tabungan-bunaken" element={<TabunganBunaken />} />
                </Route>
                
                {/* Company Pages */}
                <Route path="our-locations" element={<Lokasi />} />

                {/* News Pages */}
                <Route path="news" element={<News />} />
                <Route path="news/:id" element={<BeritaDetail />} />
                
                {/* About Pages */}
                <Route path="about">
                    <Route path="sejarah" element={<Sejarah />} />
                    <Route path="visi-misi" element={<Sejarah />} />
                    <Route path="struktur-organisasi" element={<Sejarah />} />
                    <Route path="manajemen" element={<Sejarah />} />
                </Route>
                
                {/* Investor Pages */}
                <Route path="investor">
                    <Route path="tata-kelola" element={<Report />} />
                    <Route path="publikasi" element={<Report />} />
                    <Route path="informasi-saham" element={<Report />} />
                    <Route path="reports" element={<Report />} />
                </Route>
        </Routes>
    )
}

