import { UilUsdSquare, UilMoneyWithdrawal, UilClipboardAlt } from "@iconscout/react-unicons";

/**
 * CardsData
 * Analytical data for dashboard cards
 *
 * - Cards Data List (Contains titles, colors, values, and series data)
 *
 * Used in: Cards component
 */
export const CardsData = [
  {
    title: "Sales",
    color: {
      backGround: "linear-gradient(180deg, #1c222d 0%, #11151c 100%)",
      boxShadow: "0px 10px 20px 0px rgba(125, 50, 245, 0.2)",
      barColor: "#7d32f5",
    },
    barValue: 70,
    value: "25,970",
    png: UilUsdSquare,
    series: [
      {
        name: "Sales",
        data: [31, 40, 28, 51, 42, 109, 100],
      },
    ],
  },
  {
    title: "Revenue",
    color: {
      backGround: "linear-gradient(180deg, #1c222d 0%, #11151c 100%)",
      boxShadow: "0px 10px 20px 0px rgba(255, 145, 157, 0.2)",
      barColor: "#FF919D",
    },
    barValue: 80,
    value: "14,270",
    png: UilMoneyWithdrawal,
    series: [
      {
        name: "Revenue",
        data: [10, 100, 50, 70, 80, 30, 40],
      },
    ],
  },
  {
    title: "Expenses",
    color: {
      backGround: "linear-gradient(180deg, #1c222d 0%, #11151c 100%)",
      boxShadow: "0px 10px 20px 0px rgba(248, 212, 154, 0.2)",
      barColor: "#F8D49B",
    },
    barValue: 60,
    value: "4,270",
    png: UilClipboardAlt,
    series: [
      {
        name: "Expenses",
        data: [10, 25, 15, 30, 12, 15, 20],
      },
    ],
  },
];
