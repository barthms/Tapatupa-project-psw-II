import React from 'react';
import AdminLayout from '../components/layouts/AdminLayout';
import JenisJangkaWaktuForm from '../components/JenisJangkaWaktu/JenisJangkaWaktuForm';
import JenisJangkaWaktuList from '../components/JenisJangkaWaktu/JenisJangkaWaktuList';

const JenisJangkaWaktuPage = () => {
    const [reload, setReload] = React.useState(false);

    const triggerReload = () => setReload(prev => !prev);

    return (
        <AdminLayout>
            <JenisJangkaWaktuForm onSuccess={triggerReload} />
            <hr />
            <JenisJangkaWaktuList key={reload} />
        </AdminLayout>
    );
};

export default JenisJangkaWaktuPage;
