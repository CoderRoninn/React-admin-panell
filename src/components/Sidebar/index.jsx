import React, { useState } from 'react'
import Logo from '../../images/shopping-bag-icon.svg'
import './index.css'
import { SidebarData } from '../../Data/SidebarData'
import { UilSignOutAlt, UilBars } from '@iconscout/react-unicons'

/**
 * Sidebar Component
 * Navigation sidebar for the admin dashboard
 */
const Sidebar = () => {
  // state to keep track of selected menu item
  const [selected, setSelected] = useState(0)
  const [expanded, setExpanded] = useState(true)

  return (
    <>
      <div
        className="bars"
        style={{ left: expanded ? '60%' : '5%' }}
        onClick={() => setExpanded(!expanded)}
      >
        <UilBars />
      </div>
      <div
        className="Sidebar"
        style={expanded ? { left: '0' } : { left: '-60%' }}
      >
      {/* logo */}
      <div className="logo">
        <img src={Logo} alt="logo" />
        <span>Shops</span>
      </div>

      {/* menu */}
      <div className="menu">
        {/* mapping through SidebarData to create menu items */}
        {SidebarData.map((item, index) => {
          return (
            <div
              className={selected === index ? 'menuItem active' : 'menuItem'}
              key={index}
              onClick={() => setSelected(index)}
            >
              <div>
                <item.icon />
              </div>
              <span>{item.heading}</span>
            </div>
          )
        })}

        <div className="menuItem">
          <UilSignOutAlt />
        </div>
      </div>
    </div>
    </>
  )
}

export default Sidebar
