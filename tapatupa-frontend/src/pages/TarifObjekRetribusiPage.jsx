import React from 'react';
import AdminLayout from '../components/layouts/AdminLayout';
import TarifObjekRetribusiForm from '../components/TarifObjekRetribusi/TarifObjekRetribusiForm';
import TarifObjekRetribusiList from '../components/TarifObjekRetribusi/TarifObjekRetribusiList';

const TarifObjekRetribusiPage = () => {
    const [reload, setReload] = React.useState(false);

    const triggerReload = () => {
        setReload(prev => !prev);
    };

    return (
        <AdminLayout>
            <TarifObjekRetribusiForm onSuccess={triggerReload} />
            <hr />
            <TarifObjekRetribusiList key={reload} />
        </AdminLayout>
    );
};

export default TarifObjekRetribusiPage;
