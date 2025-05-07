import React, { useState } from 'react';
import AdminLayout from '../components/layouts/AdminLayout';
import JangkaWaktuSewaForm from '../components/JangkaWaktuSewa/JangkaWaktuSewaForm';
import JangkaWaktuSewaList from '../components/JangkaWaktuSewa/JangkaWaktuSewaList';

const JangkaWaktuSewaPage = () => {
    const [reload, setReload] = useState(false);

    return (
        <AdminLayout>
            <JangkaWaktuSewaForm onSuccess={() => setReload(prev => !prev)} />
            <hr />
            <JangkaWaktuSewaList key={reload} />
        </AdminLayout>
    );
};

export default JangkaWaktuSewaPage;
