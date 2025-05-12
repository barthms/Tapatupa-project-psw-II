import React from 'react';
import AdminLayout from '../components/layouts/AdminLayout';
import JenisJangkaWaktuForm from '../components/JenisJangkaWaktu/JenisJangkaWaktuForm';
import JenisJangkaWaktuList from '../components/JenisJangkaWaktu/JenisJangkaWaktuList';

const JenisJangkaWaktuPage = () => {
    const [reloadTrigger, setReloadTrigger] = React.useState(0);

    const triggerReload = () => setReloadTrigger(prev => prev + 1);

    const [selectedData, setSelectedData] = React.useState(null);

    return (
        <AdminLayout>
            <JenisJangkaWaktuForm
                onSuccess={triggerReload}
                selectedData={selectedData}
                setSelectedData={setSelectedData}
            />
            <hr />
            <JenisJangkaWaktuList
                onEdit={setSelectedData}
                reloadTrigger={reloadTrigger}
            />
        </AdminLayout>
    );
};


export default JenisJangkaWaktuPage;
