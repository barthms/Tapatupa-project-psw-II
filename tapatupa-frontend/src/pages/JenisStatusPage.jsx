import React from 'react';
import AdminLayout from '../components/layouts/AdminLayout';
import JenisStatusForm from '../components/JenisStatus/JenisStatusForm';
import JenisStatusList from '../components/JenisStatus/JenisStatusList';

const JenisStatusPage = () => {
    const [reload, setReload] = React.useState(false);

    const triggerReload = () => setReload(prev => !prev);

    return (
        <AdminLayout>
            <JenisStatusForm onSuccess={triggerReload} />
            <hr />
            <JenisStatusList key={reload} />
        </AdminLayout>
    );
};

export default JenisStatusPage;
