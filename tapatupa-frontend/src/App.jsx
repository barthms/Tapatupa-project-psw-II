import { BrowserRouter, Routes, Route } from 'react-router-dom';
import JenisPermohonanPage from './pages/JenisPermohonan';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/jenis-permohonan" element={<JenisPermohonanPage />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
