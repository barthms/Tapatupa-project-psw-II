import React from 'react';
import AdminLayout from '../components/layouts/AdminLayout';
import JenisPermohonanList from '../components/JenisPermohonan/JenisPermohonanList';

const JenisPermohonanPage = () => {
    return (
        <AdminLayout>
            <JenisPermohonanList />
        </AdminLayout>
    );
};

export default JenisPermohonanPage;