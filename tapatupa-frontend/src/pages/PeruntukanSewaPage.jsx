import React from 'react';
import AdminLayout from '../components/layouts/AdminLayout';
import PeruntukanSewaForm from '../components/PeruntukanSewa/PeruntukanSewaForm';
import PeruntukanSewaList from '../components/PeruntukanSewa/PeruntukanSewaList';

const PeruntukanSewaPage = () => {
    const [reload, setReload] = React.useState(false);

    const triggerReload = () => setReload(prev => !prev);

    return (
        <AdminLayout>
            <PeruntukanSewaForm onSuccess={triggerReload} />
            <hr />
            <PeruntukanSewaList key={reload} />
        </AdminLayout>
    );
};

export default PeruntukanSewaPage;
