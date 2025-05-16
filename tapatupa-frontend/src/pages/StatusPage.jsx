import React, { useState } from 'react';
import AdminLayout from '../components/layouts/AdminLayout';
import StatusForm from '../components/Status/StatusForm';
import StatusList from '../components/Status/StatusList';

const StatusPage = () => {
    const [reload, setReload] = useState(false);
    const [selectedData, setSelectedData] = useState(null);

    const triggerReload = () => setReload(prev => !prev);

    return (
        <AdminLayout>
            <StatusForm
                onSuccess={triggerReload}
                selectedData={selectedData}
                setSelectedData={setSelectedData}
            />
            <hr />
            <StatusList
                reloadTrigger={reload}
                onEdit={setSelectedData}
            />
        </AdminLayout>
    );
};

export default StatusPage;
