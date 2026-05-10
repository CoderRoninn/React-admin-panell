import React, { useState } from 'react';
import './index.css';
import { UilPlus } from '@iconscout/react-unicons';

/**
 * AddForm Component
 * Separated logic for adding a new order to the table.
 * 
 * @param {Function} addRow - Function from custom hook to add data
 */
const AddForm = ({ addRow }) => {
    const [isAdding, setIsAdding] = useState(false);
    const [newRow, setNewRow] = useState({
        name: '',
        trackingId: '',
        status: 'Approved'
    });

    /**
     * handleAdd function
     * Validates input and calls the addRow function passed as a prop
     */
    const handleAdd = () => {
        // Check if product name exists and tracking ID is a valid number
        if (newRow.name && newRow.trackingId && !isNaN(newRow.trackingId)) {
            addRow({
                ...newRow,
                // Automatically generate current date in "10 May 2026" format
                date: new Date().toLocaleDateString('en-GB', {
                    day: 'numeric',
                    month: 'short',
                    year: 'numeric'
                })
            });
            // Reset form
            setNewRow({ name: '', trackingId: '', status: 'Approved' });
            setIsAdding(false);
        } else {
            alert("Please enter a valid Product Name and a numeric Tracking ID!");
        }
    };

    return (
        <div className="AddFormContainer">
            <div className="AddFormHeader">
                {/* Toggle button for adding a new row */}
                <div 
                    className="addButton" 
                    onClick={() => setIsAdding(!isAdding)}
                >
                    <UilPlus />
                </div>
            </div>

            {/* Inline Add Form */}
            {isAdding && (
                <div className="addForm">
                    <input 
                        type="text" 
                        placeholder="Product Name" 
                        value={newRow.name}
                        onChange={(e) => setNewRow({...newRow, name: e.target.value})}
                    />
                    <input 
                        type="number" 
                        placeholder="Tracking ID" 
                        value={newRow.trackingId}
                        onChange={(e) => setNewRow({...newRow, trackingId: e.target.value})}
                    />
                    <select 
                        value={newRow.status}
                        onChange={(e) => setNewRow({...newRow, status: e.target.value})}
                    >
                        <option value="Approved">Approved</option>
                        <option value="Pending">Pending</option>
                        <option value="Delivered">Delivered</option>
                    </select>
                    <button onClick={handleAdd}>Add</button>
                </div>
            )}
        </div>
    );
};

export default AddForm;
