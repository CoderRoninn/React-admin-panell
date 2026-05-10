import React from 'react'
import './index.css'
import { CardsData } from '../../Data/CardsData'
import Card from '../Card'

/**
 * Cards Component
 * Renders a list of analytical cards
 *
 * - Cards Mapping (Iterates through CardsData)
 * - Card Component (Individual card item)
 *
 * Used in: MainDash
 */
const Cards = () => {
  return (
    <div className="Cards">
      {/* Iterate through each card in the data */}
      {CardsData.map((card, id) => {
        return (
          <div className="parentContainer" key={id}>
            {/* Render a Card component and pass data as props */}
            <Card
              title={card.title}
              color={card.color}
              barValue={card.barValue}
              value={card.value}
              png={card.png}
              series={card.series}
            />
          </div>
        )
      })}
    </div>
  )
}

export default Cards
