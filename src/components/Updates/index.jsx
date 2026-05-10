import React from 'react'
import './index.css'
import { UpdatesData } from '../../Data/UpdatesData'

/**
 * Updates Component
 * Displays a list of recent activities or notifications
 *
 * - Updates Section (Maps through UpdatesData)
 * - Notification Details (Displays user image, name, message, and time)
 *
 * Used in: RightSide component
 */
const Updates = () => {
  return (
    <div className="Updates">
      {UpdatesData.map((update, id) => {
        return (
          <div className="update" key={id}>
            {update.img && <img src={update.img} alt="profile" />}
            <div className="notification">
              <div style={{ marginBottom: '0.5rem' }}>
                <span>{update.name}</span>
                <span> {update.notification}</span>
              </div>
              <span>{update.time}</span>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default Updates
