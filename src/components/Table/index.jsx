import React, { useState } from 'react';
import './index.css';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useTableData } from '../../hooks/useTableData';
import { UilTrash, UilEdit, UilCheck } from '@iconscout/react-unicons';
import AddForm from '../AddForm';

/**
 * Table Component
 * Renders the "Recent Orders" table using Material UI.
 *
 * - Table Layout (TableContainer, Table, TableHead, TableBody)
 * - Dynamic Status Styling (makeStyles function)
 * - Data Integration (Uses useTableData hook)
 * - Create Action (Uses AddForm component)
 *
 * Used in: MainDash component
 */


// Function to provide dynamic styles (colors) based on order status for Dark Mode
const makeStyles = (status) => {
    if (status === 'Approved') {
        return {
            background: 'rgba(0, 255, 135, 0.12)',
            color: '#00ff87',
            border: '1px solid rgba(0, 255, 135, 0.2)'
        }
    } else if (status === 'Pending') {
        return {
            background: 'rgba(255, 95, 109, 0.12)',
            color: '#ff5f6d',
            border: '1px solid rgba(255, 95, 109, 0.2)'
        }
    } else {
        return {
            background: 'rgba(0, 183, 255, 0.12)',
            color: '#00b7ff',
            border: '1px solid rgba(0, 183, 255, 0.2)'
        }
    }
}

const BasicTable = () => {
    // Custom hook to manage table data and delete functionality
    const { rows, deleteRow, addRow, updateRow } = useTableData();

    // State to track which row is being edited (by name)
    const [editingName, setEditingName] = useState(null);
    // State to hold the temporary data during editing
    const [editData, setEditData] = useState({});

    /**
     * startEdit function
     * Initializes the edit mode for a specific row
     * @param {Object} row - The row data to edit
     */
    const startEdit = (row) => {
        setEditingName(row.name);
        setEditData(row);
    };

    /**
     * handleUpdate function
     * Saves the edited data using the hook and exits edit mode
     */
    const handleUpdate = () => {
        updateRow(editingName, editData);
        setEditingName(null);
    };

    return (
        <div className="Table">
        <div className="tableHeader">
            <h3>Recent Orders</h3>
            <AddForm addRow={addRow} />
        </div>

            <TableContainer component={Paper} style={{ boxShadow: "0px 13px 20px 0px #80808029" }}> {/* Main wrapper for layout and shadow */}
                <Table sx={{ minWidth: 650 }} aria-label="simple table"> {/* The actual table element */}
                    <TableHead> {/* Header section for column titles */}
                        <TableRow> {/* A single horizontal row */}
                            <TableCell>Product</TableCell> {/* Individual cell in a row */}
                            <TableCell align="left">Tracking ID</TableCell>
                            <TableCell align="left">Date</TableCell>
                            <TableCell align="left">Status</TableCell>
                            <TableCell align="left"></TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody> {/* Main section for data rows */}
                        {rows.map((row) => (
                            <TableRow
                                key={row.name}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell component="th" scope="row">
                                    {editingName === row.name ? (
                                        <input 
                                            value={editData.name} 
                                            onChange={(e) => setEditData({...editData, name: e.target.value})}
                                            style={{ width: '100%', border: '1px solid #ccc', borderRadius: '4px' }}
                                        />
                                    ) : row.name}
                                </TableCell>
                                <TableCell align="left">
                                    {editingName === row.name ? (
                                        <input 
                                            type="number"
                                            value={editData.trackingId} 
                                            onChange={(e) => setEditData({...editData, trackingId: e.target.value})}
                                            style={{ width: '80px', border: '1px solid #ccc', borderRadius: '4px' }}
                                        />
                                    ) : row.trackingId}
                                </TableCell>
                                <TableCell align="left">{row.date}</TableCell>
                                <TableCell align="left">
                                    {editingName === row.name ? (
                                        <select 
                                            value={editData.status} 
                                            onChange={(e) => setEditData({...editData, status: e.target.value})}
                                            style={{ border: '1px solid #ccc', borderRadius: '4px' }}
                                        >
                                            <option value="Approved">Approved</option>
                                            <option value="Pending">Pending</option>
                                            <option value="Delivered">Delivered</option>
                                        </select>
                                    ) : (
                                        <span className="status" style={makeStyles(row.status)}>{row.status}</span>
                                    )}
                                </TableCell>
                                <TableCell align="left" className="Details">
                                    <div style={{ display: 'flex', gap: '10px' }}>
                                        {editingName === row.name ? (
                                            <UilCheck 
                                                style={{ color: 'green', cursor: 'pointer' }} 
                                                onClick={handleUpdate}
                                            />
                                        ) : (
                                            <UilEdit 
                                                style={{ color: 'blue', cursor: 'pointer' }} 
                                                onClick={() => startEdit(row)}
                                            />
                                        )}
                                        <UilTrash 
                                            style={{ color: 'red', cursor: 'pointer' }} 
                                            onClick={() => deleteRow(row.name)}
                                        />
                                    </div>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    );
};

export default BasicTable;
