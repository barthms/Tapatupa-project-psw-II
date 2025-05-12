import React, { useState } from 'react';
import JenisObjekRetribusiForm from '../components/JenisObjekRetribusi/JenisObjekRetribusiForm';
import JenisObjekRetribusiList from '../components/JenisObjekRetribusi/JenisObjekRetribusiList';
import AdminLayout from '../components/layouts/AdminLayout';

const JenisObjekRetribusiPage = () => {
    const [reload, setReload] = useState(false);
    const [selectedData, setSelectedData] = useState(null);

    const triggerReload = () => setReload(prev => !prev);

    return (
        <AdminLayout>
            <JenisObjekRetribusiForm
                onSuccess={triggerReload}
                selectedData={selectedData}
                setSelectedData={setSelectedData}
            />
            <hr />
            <JenisObjekRetribusiList
                reloadTrigger={reload}
                onEdit={setSelectedData}
            />
        </AdminLayout>
    );
};

export default JenisObjekRetribusiPage;
