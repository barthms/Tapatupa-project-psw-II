import { useState } from 'react';
import JenisPermohonanList from '../components/JenisPermohonan/JenisPermohonanList';
import JenisPermohonanForm from '../components/JenisPermohonan/JenisPermohonanForm';

export default function JenisPermohonanPage() {
    const [selected, setSelected] = useState(null);
    const [refresh, setRefresh] = useState(false);

    const handleEdit = (item) => setSelected(item);
    const handleSuccess = () => {
        setSelected(null);
        setRefresh(!refresh);
    };

    return (
        <div>
            <h1>Jenis Permohonan</h1>
            <JenisPermohonanForm selected={selected} onSuccess={handleSuccess} />
            <JenisPermohonanList key={refresh} onEdit={handleEdit} />
        </div>
    );
}
