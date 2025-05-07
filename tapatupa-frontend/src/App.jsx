import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import JenisPermohonanPage from "./pages/JenisPermohonanPage";
import LokasiObjekRetribusiPage from "./pages/LokasiObjekRetribusiPage";
import JenisObjekRetribusiPage from "./pages/JenisObjekRetribusiPage";
import ObjekRetribusiPage from "./pages/ObjekRetribusiPage";
import JenisJangkaWaktuPage from "./pages/JenisJangkaWaktuPage";
import TarifObjekRetribusiPage from './pages/TarifObjekRetribusiPage';

export default function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<JenisPermohonanPage />} />
                <Route path="/admin/jenis-permohonan" element={<JenisPermohonanPage />} />
                <Route path="/admin/lokasi-objek" element={<LokasiObjekRetribusiPage />} />
                <Route path="/admin/jenis-objek" element={<JenisObjekRetribusiPage />} />
                <Route path="/admin/objek-retribusi" element={<ObjekRetribusiPage />} />
                <Route path="/admin/jenis-jangka-waktu" element={<JenisJangkaWaktuPage />} />
                <Route path="/admin/tarif-objek" element={<TarifObjekRetribusiPage />} />
            </Routes>
        </Router>
    );
}
