import React from 'react'
import Cards from '../Cards'
import Table from '../Table'
import './index.css'

/**
 * MainDash Component
 * Central container for the main dashboard content
 * 
 * - Header (Displays "Dashboard")
 * - Cards Section (Analytical summary cards)
 * - Table Section (Recent orders table)
 * 
 * Used in: App.js
 */
const MainDash = () => {
    return (
        <div className="MainDash">
            <h1>Dashboard</h1>
            <Cards />
            <Table />
        </div>
    )
}

export default MainDash
