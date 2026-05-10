import React from 'react'
import './index.css'
import Updates from '../Updates'
import CustomerReview from '../CustomerReview'

/**
 * RightSide Component
 * The right-most column of the dashboard
 * 
 * - Updates Section (User notification/activity feed)
 * - Customer Review Section (Graphical feedback analysis)
 * 
 * Used in: App.js
 */
const RightSide = () => {
    return (
        <div className="RightSide">
            <div>
                <h3>Updates</h3>
                <Updates />
            </div>
            <div>
                <h3>Customer Review</h3>
                <CustomerReview />
            </div>
        </div>
    )
}

export default RightSide
