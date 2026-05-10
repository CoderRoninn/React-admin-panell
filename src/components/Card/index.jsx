import React, { useState } from 'react'
import { motion, AnimateSharedLayout } from 'framer-motion'
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar'
import 'react-circular-progressbar/dist/styles.css';
import { UilTimes } from '@iconscout/react-unicons'
import Chart from 'react-apexcharts'
import { ChartData } from '../../Data/ChartData'
import './index.css'

/**
 * Card Component
 * A multi-state card that can switch between compact and expanded views.
 *
 * - Compact View: Shows a summary with a circular progress bar.
 * - Expanded View: Shows detailed data using an area chart.
 * - Interaction: Toggles expansion state on click or close button.
 *
 * Used in: Cards.jsx
 */


// CompactCard: The small view showing a summary (percentage, title, value). Click to expand.
const CompactCard = ({ params, setExpanded }) => {
  const Png = params.png;
  return (
    <motion.div
      className="CompactCard"
      style={{
        background: params.color.backGround,
        boxShadow: params.color.boxShadow,
      }}
      onClick={setExpanded}
      layoutId="expandableCard"
    >
      <div className="radialBar">
        <CircularProgressbar
          value={params.barValue}
          text={`${params.barValue}%`}
          styles={buildStyles({
            pathColor: params.color.barColor,
            textColor: "white",
            trailColor: "#2d3139",
            textSize: "22px",
          })}
        />
        <div className="iconContainer">
           <Png />
        </div>
      </div>
      <div className="detail">
        <span>${params.value}</span>
        <span style={{ color: params.color.barColor }}>{params.title.toUpperCase()}</span>
        <span>Last 24 hours</span>
      </div>
    </motion.div>
  )
}


// ExpandedCard: The large view showing a detailed chart. Click 'X' to close.
const ExpandedCard = ({ params, setExpanded }) => {
  return (
    <motion.div
      className="ExpandedCard"
      style={{
        background: params.color.backGround,
        boxShadow: params.color.boxShadow,
      }}
      layoutId="expandableCard"
    >
      <div style={{ alignSelf: "flex-end", cursor: "pointer", color: "white" }}>
        <UilTimes onClick={setExpanded} />
      </div>
      <span>{params.title}</span>
      <div className="chartContainer">
        <Chart series={params.series} type="area" options={ChartData.options} />
      </div>
      <span>Last 24 hours</span>
    </motion.div>
  );
};

// Main Card component
const Card = (information) => {
  // State to track if the card is expanded or compact
  const [expanded, setExpanded] = useState(false)

  return (
    <AnimateSharedLayout>
      {expanded ? (
        // Set expanded to false to close the card
        <ExpandedCard params={information} setExpanded={() => setExpanded(false)} />
      ) : (
        // Set expanded to true to open the card
        <CompactCard params={information} setExpanded={() => setExpanded(true)} />
      )}
    </AnimateSharedLayout>
  )
}

export default Card
