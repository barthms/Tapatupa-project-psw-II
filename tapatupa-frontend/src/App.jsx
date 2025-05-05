import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import JenisPermohonanPage from "./pages/JenisPermohonanPage";
// import JenisObjekRetribusiPage from "./pages/JenisObjekRetribusiPage";


export default function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<JenisPermohonanPage />} />
                {/* <Route path="/admin/jenisPermohonan" element={<JenisPermohonanPage />} /> */}
                {/* <Route path="/admin/jenis-objek" element={<JenisObjekRetribusiPage />} /> */}
            </Routes>
        </Router>
    );
}
