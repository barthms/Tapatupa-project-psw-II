import React from 'react';
import AdminLayout from '../components/layouts/AdminLayout';
import WajibRetribusiForm from '../components/WajibRetribusi/WajibRetribusiForm';
import WajibRetribusiList from '../components/WajibRetribusi/WajibRetribusiList';

const WajibRetribusiPage = () => {
    const [reload, setReload] = React.useState(false);
    const triggerReload = () => setReload(prev => !prev);

    return (
        <AdminLayout>
            <WajibRetribusiForm onSuccess={triggerReload} />
            <hr />
            <WajibRetribusiList key={reload} />
        </AdminLayout>
    );
};

export default WajibRetribusiPage;
