import React from 'react';
import AdminLayout from '../components/layouts/AdminLayout';
import JenisPermohonanList from '../components/JenisPermohonan/JenisPermohonanList';
import JenisPermohonanForm from '../components/JenisPermohonan/JenisPermohonanForm';

const JenisPermohonanPage = () => {
    const [reload, setReload] = React.useState(false);

    const triggerReload = () => {
        setReload(prev => !prev);
    };

    return (
        <>
            <div className=''>
                <AdminLayout>
                    <JenisPermohonanForm onSuccess={triggerReload} />
                    <hr />
                    <JenisPermohonanList key={reload} />
                </AdminLayout>
            </div>
        </>
    );
};

export default JenisPermohonanPage;