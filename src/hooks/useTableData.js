import { useState, useEffect } from "react";
import { TableData as initialData } from "../Data/TableData";

/**
 * useTableData Hook
 * Manages the state and logic for the Recent Orders table with persistence.
 * 
 * - Persistence (Uses localStorage to save/load data)
 * - State Management (useState for table rows)
 * - Delete Logic (Filters out rows by name)
 */
export const useTableData = () => {
    // Initialize state: Check localStorage first, otherwise use initialData
    const [rows, setRows] = useState(() => {
        const savedData = localStorage.getItem("dashboard_table_data");
        return savedData ? JSON.parse(savedData) : initialData;
    });

    // Automatically save to localStorage whenever 'rows' changes
    useEffect(() => {
        localStorage.setItem("dashboard_table_data", JSON.stringify(rows));
    }, [rows]);

    const deleteRow = (name) => {
        const updatedRows = rows.filter((row) => row.name !== name);
        setRows(updatedRows);
    };

    /**
     * addRow function
     * Adds a new row object to the beginning of the rows state
     * @param {Object} newRow - The order object to add
     */
    const addRow = (newRow) => {
        setRows([newRow, ...rows]);
    };

    /**
     * updateRow function
     * Updates an existing row in the state
     * @param {string} name - The original name of the row to find
     * @param {Object} updatedRow - The new data for that row
     */
    const updateRow = (name, updatedRow) => {
        const updatedRows = rows.map((row) => (row.name === name ? updatedRow : row));
        setRows(updatedRows);
    };

    return { rows, deleteRow, addRow, updateRow };
};
