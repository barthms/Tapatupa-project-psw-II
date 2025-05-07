import React from 'react';
import AdminLayout from '../components/layouts/AdminLayout';
import ObjekRetribusiForm from '../components/ObjekRetribusi/ObjekRetribusiForm';
import ObjekRetribusiList from '../components/ObjekRetribusi/ObjekRetribusiList';

const ObjekRetribusiPage = () => {
    const [reload, setReload] = React.useState(false);

    const triggerReload = () => {
        setReload(prev => !prev);
    };

    return (
        <AdminLayout>
            <ObjekRetribusiForm onSuccess={triggerReload} />
            <hr />
            <ObjekRetribusiList key={reload} />
        </AdminLayout>
    );
};

export default ObjekRetribusiPage;
