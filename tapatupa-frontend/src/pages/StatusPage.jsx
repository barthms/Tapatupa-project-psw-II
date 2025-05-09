import React from 'react';
import AdminLayout from '../components/layouts/AdminLayout';
import StatusForm from '../components/Status/StatusForm';
import StatusList from '../components/Status/StatusList';

const StatusPage = () => {
    const [reload, setReload] = React.useState(false);

    const triggerReload = () => {
        setReload(prev => !prev);
    };

    return (
        <AdminLayout>
            <StatusForm onSuccess={triggerReload} />
            <hr />
            <StatusList key={reload} />
        </AdminLayout>
    );
};

export default StatusPage;
