/**
 * Dashboard Data Models (Interfaces)
 * 
 * This file defines the structure of data used throughout the application.
 * Since this is a JavaScript project, we use JSDoc to represent these "interfaces"
 * to provide documentation and type guidance.
 */

/**
 * @interface IOrder
 * @description Represents a single order in the Recent Orders table
 * @property {string} name - Name of the product
 * @property {number} trackingId - Unique tracking ID for the order
 * @property {string} date - Date when the order was placed
 * @property {string} status - Current status (Approved, Pending, Delivered)
 */

/**
 * @interface ICard
 * @description Represents the data structure for analytical dashboard cards
 * @property {string} title - Title of the card (e.g., Sales, Revenue)
 * @property {Object} color - Visual color settings
 * @property {string} color.backGround - CSS background or gradient
 * @property {string} color.boxShadow - CSS box-shadow property
 * @property {number} barValue - Numeric percentage for the circular progress bar
 * @property {string} value - The main value displayed on the card
 * @property {React.Component} png - The icon component from Unicons
 * @property {Array} series - Data series for the ApexCharts graph
 */

/**
 * @interface ISidebarItem
 * @description Structure for menu items in the sidebar
 * @property {React.Component} icon - Icon component
 * @property {string} heading - Label displayed in the menu
 */

/**
 * @interface IUpdate
 * @description Represents a notification or update item
 * @property {string} img - Profile image path
 * @property {string} name - User name
 * @property {string} noti - Notification content
 * @property {string} time - Relative time of the update
 */
