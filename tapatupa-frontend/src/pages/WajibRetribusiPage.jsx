import React, { useState } from 'react';
import AdminLayout from '../components/layouts/AdminLayout';
import WajibRetribusiForm from '../components/WajibRetribusi/WajibRetribusiForm';
import WajibRetribusiList from '../components/WajibRetribusi/WajibRetribusiList';

const WajibRetribusiPage = () => {
    const [reload, setReload] = useState(false);
    const [selectedData, setSelectedData] = useState(null);

    const triggerReload = () => setReload(prev => !prev);

    return (
        <AdminLayout>
            <WajibRetribusiForm 
                onSuccess={triggerReload} 
                selectedData={selectedData} 
                setSelectedData={setSelectedData} />
            <hr />
            <WajibRetribusiList 
                reloadTrigger={reload} 
                onEdit={setSelectedData} />
        </AdminLayout>
    );
};

export default WajibRetribusiPage;
