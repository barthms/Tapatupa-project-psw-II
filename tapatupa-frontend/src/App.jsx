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
                <Route path="/jenisPermohonan" element={<JenisPermohonanPage />} />
                <Route path="/lokasiObjek" element={<LokasiObjekRetribusiPage />} />
                <Route path="/jenisObjekRetribusi" element={<JenisObjekRetribusiPage />} />
                <Route path="/objekRetribusi" element={<ObjekRetribusiPage />} />
                <Route path="/jenisJangkaWaktu" element={<JenisJangkaWaktuPage />} />
                <Route path="/tarifObjekRetribusi" element={<TarifObjekRetribusiPage />} />
                <Route path="/jangkaWaktuSewa" element={<JangkaWaktuSewaPage />} />
                <Route path="/permohonanSewa" element={<PermohonanSewaPage />} />
                <Route path="/wajibRetibusi" element={<WajibRetribusiPage />} />
                <Route path="/status" element={<StatusPage />} />
                <Route path="/jenisStatus" element={<JenisStatusPage />} />
                <Route path="/peruntukanSewa" element={<PeruntukanSewaPage />} />
            </Routes>
        </Router>
    );
}
