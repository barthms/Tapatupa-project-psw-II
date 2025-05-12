import React from 'react';
import AdminLayout from '../components/layouts/AdminLayout';
import JenisStatusForm from '../components/JenisStatus/JenisStatusForm';
import JenisStatusList from '../components/JenisStatus/JenisStatusList';

const JenisStatusPage = () => {
    const [reload, setReload] = React.useState(false);
    const [editData, setEditData] = React.useState(null);

    const triggerReload = () => setReload(prev => !prev);

    return (
        <AdminLayout>
            <JenisStatusForm 
                onSuccess={() => {
                    triggerReload();
                    setEditData(null); // Reset form ke mode tambah
                }} 
                editData={editData} 
            />
            <hr />
            <JenisStatusList reload={reload} onEdit={setEditData} />
        </AdminLayout>
    );
};

export default JenisStatusPage;
