import React from 'react';
import AdminLayout from '../components/layouts/AdminLayout';
import JenisPermohonanList from '../components/JenisPermohonan/JenisPermohonanList';
import JenisPermohonanForm from '../components/JenisPermohonan/JenisPermohonanForm';

const JenisPermohonanPage = () => {
    const [reload, setReload] = React.useState(false);
    const [editing, setEditing] = React.useState(null);

    const triggerReload = () => {
        setReload(prev => !prev);
    };

    const handleEdit = (item) => {
        setEditing(item);
    };

    const clearEditing = () => {
        setEditing(null);
    };

    return (
        <AdminLayout>
            <JenisPermohonanForm
                onSuccess={triggerReload}
                editing={editing}
                clearEditing={clearEditing}
            />
            <hr />
            <JenisPermohonanList
                key={reload}
                onEdit={handleEdit}
                onSuccess={triggerReload}
            />
        </AdminLayout>
    );
};

export default JenisPermohonanPage;
