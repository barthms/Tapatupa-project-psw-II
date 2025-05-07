import React, { useState } from 'react';
import JenisObjekRetribusiForm from '../components/JenisObjekRetribusi/JenisObjekRetribusiForm';
import JenisObjekRetribusiList from '../components/JenisObjekRetribusi/JenisObjekRetribusiList';
import AdminLayout from '../components/layouts/AdminLayout';

const JenisObjekRetribusiPage = () => {
    const [reload, setReload] = useState(false);
    const triggerReload = () => setReload(prev => !prev);

    return (
        <AdminLayout>
            <JenisObjekRetribusiForm onSuccess={triggerReload} />
            <hr />
            <JenisObjekRetribusiList key={reload} />
        </AdminLayout>
    );
};

export default JenisObjekRetribusiPage;
