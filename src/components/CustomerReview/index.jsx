import React from 'react'
import Chart from 'react-apexcharts'
import { ReviewData } from '../../Data/ReviewData'

/**
 * CustomerReview Component
 * Displays an area chart for customer reviews
 * 
 * Used in: RightSide component
 */
const CustomerReview = () => {
  return (
    <div className="CustomerReview">
      <Chart options={ReviewData.options} series={ReviewData.series} type="area" />
    </div>
  )
}

export default CustomerReview
