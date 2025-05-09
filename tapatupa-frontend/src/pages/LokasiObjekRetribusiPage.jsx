import React from 'react';
import AdminLayout from '../components/layouts/AdminLayout';
import LokasiObjekRetribusiList from '../components/LokasiObjekRetribusi/LokasiObjekRetribusiList';
import JenisPermohonanForm from '../components/JenisPermohonan/JenisPermohonanForm';

const JenisPermohonanPage = () => {
    const [reload, setReload] = React.useState(false);

    const triggerReload = () => {
        setReload(prev => !prev);
    };

    return (
        <div>
            <AdminLayout>
                <JenisPermohonanForm onSuccess={triggerReload} />
                <hr />
                <LokasiObjekRetribusiList key={reload} />
            </AdminLayout>
        </div>
    );
};

export default JenisPermohonanPage;