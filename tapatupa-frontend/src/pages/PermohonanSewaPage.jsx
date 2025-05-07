import React from 'react';
import AdminLayout from '../components/layouts/AdminLayout';
import PermohonanSewaForm from '../components/PermohonanSewa/PermohonanSewaForm';
import PermohonanSewaList from '../components/PermohonanSewa/PermohonanSewaList';

const PermohonanSewaPage = () => {
    const [reload, setReload] = React.useState(false);

    const triggerReload = () => {
        setReload(prev => !prev);
    };

    return (
        <AdminLayout>
            <PermohonanSewaForm onSuccess={triggerReload} />
            <hr />
            <PermohonanSewaList key={reload} />
        </AdminLayout>
    );
};

export default PermohonanSewaPage;
