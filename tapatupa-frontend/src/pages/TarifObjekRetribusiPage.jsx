// TarifObjekRetribusiPage.jsx
import React, { useState, useEffect } from 'react';
import AdminLayout from '../components/layouts/AdminLayout';
import TarifObjekRetribusiForm from '../components/TarifObjekRetribusi/TarifObjekRetribusiForm';
import TarifObjekRetribusiList from '../components/TarifObjekRetribusi/TarifObjekRetribusiList';
import { fetchTarifObjekRetribusi, deleteTarifObjekRetribusi } from '../api/TarifObjekRetribusiAPI';

const TarifObjekRetribusiPage = () => {
    const [data, setData] = useState([]);
    const [reload, setReload] = useState(false);
    const [selectedItem, setSelectedItem] = useState(null);

    useEffect(() => {
        const loadData = async () => {
            try {
                const res = await fetchTarifObjekRetribusi();
                setData(res);
            } catch (err) {
                console.error('Gagal mengambil data:', err);
            }
        };
        loadData();
    }, [reload]);

    const triggerReload = () => setReload(prev => !prev);

    const handleEdit = (item) => {
        setSelectedItem(item);
    };

    const handleDelete = async (id) => {
        if (!window.confirm('Yakin ingin menghapus data ini?')) return;
        
        try {
            await deleteTarifObjekRetribusi(id);
            triggerReload();
        } catch (err) {
            console.error('Gagal menghapus data:', err);
            alert('Gagal menghapus data.');
        }
    };

    return (
        <AdminLayout>
            <TarifObjekRetribusiForm 
                onSuccess={triggerReload} 
                editData={selectedItem}
                resetEditMode={() => setSelectedItem(null)}
            />
            <hr />
            <TarifObjekRetribusiList 
                data={data} 
                onEdit={handleEdit} 
                onDelete={handleDelete} 
            />
        </AdminLayout>
    );
};

export default TarifObjekRetribusiPage;