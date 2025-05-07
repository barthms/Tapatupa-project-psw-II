import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import JenisPermohonanPage from "./pages/JenisPermohonanPage";
import LokasiObjekRetribusiPage from "./pages/LokasiObjekRetribusiPage";
import JenisObjekRetribusiPage from "./pages/JenisObjekRetribusiPage";
import ObjekRetribusiPage from "./pages/ObjekRetribusiPage";
import JenisJangkaWaktuPage from "./pages/JenisJangkaWaktuPage";
import TarifObjekRetribusiPage from './pages/TarifObjekRetribusiPage';
import JangkaWaktuSewaPage from "./pages/JangkaWaktuSewaPage";
import PermohonanSewaPage from './pages/PermohonanSewaPage';
import WajibRetribusiPage from './pages/WajibRetribusiPage';
import StatusPage from "./pages/StatusPage";
import JenisStatusPage from "./pages/JenisStatusPage";
import PeruntukanSewaPage from "./pages/PeruntukanSewaPage";

export default function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<JenisPermohonanPage />} />
                <Route path="/jenis-permohonan" element={<JenisPermohonanPage />} />
                <Route path="/lokasi-objek" element={<LokasiObjekRetribusiPage />} />
                <Route path="/jenis-objek-retribusi" element={<JenisObjekRetribusiPage />} />
                <Route path="/objek-retribusi" element={<ObjekRetribusiPage />} />
                <Route path="/jenis-jangka-waktu" element={<JenisJangkaWaktuPage />} />
                <Route path="/tarif-objek-retribusi" element={<TarifObjekRetribusiPage />} />
                <Route path="/jangka-waktu-sewa" element={<JangkaWaktuSewaPage />} />
                <Route path="/permohonan-sewa" element={<PermohonanSewaPage />} />
                <Route path="/wajib-retribusi" element={<WajibRetribusiPage />} />
                <Route path="/status" element={<StatusPage />} />
                <Route path="/jenis-status" element={<JenisStatusPage />} />
                <Route path="/peruntukan-sewa" element={<PeruntukanSewaPage />} />
            </Routes>
        </Router>
    );
}
