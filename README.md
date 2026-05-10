
# Modern Dark Admin Dashboard

A premium, responsive admin dashboard built with React. This project features a sleek dark mode aesthetic with full CRUD functionality for managing orders.

## 🚀 Features

- **Full CRUD:** Create, Read, Update, and Delete orders.
- **Modern Dark UI:** Premium aesthetic with purple accents and glassmorphism.
- **Fully Responsive:** Optimized for desktop, tablet, and mobile screens.
- **Interactive Charts:** Data visualization using ApexCharts.
- **Smooth Animations:** Powered by Framer Motion.

## 🛠️ Tech Stack

- **Framework:** React.js
- **UI Components:** Material UI (MUI)
- **Icons:** Unicons
- **Charts:** ApexCharts
- **Animations:** Framer Motion
- **Styling:** Pure CSS (Variables-based)

## 💾 Data Management

This application uses **LocalStorage** for data persistence. 
- All CRUD operations (adding, editing, or deleting orders) are saved in your browser's local storage.
- Data stays saved even after you refresh the page or close the browser.
- Uses a custom React Hook (`useTableData`) for clean state management.

## 💻 How to Run

1. **Clone the repository:**
   ```bash
   git clone https://github.com/CoderRoninn/react-admin-panel.git
   ```

2. **Install dependencies:**
   ```bash
   yarn install
   # or
   npm install
   ```

3. **Start the development server:**
   ```bash
   yarn start
   # or
   npm start
   ```

## 📂 Project Structure

- `src/components`: Reusable UI elements (Sidebar, Table, Cards, etc.)
- `src/Pages`: Main page layouts (Dashboard).
- `src/interfaces`: Data structure documentation (JSDoc).
- `src/hooks`: Custom logic for data handling (CRUD).
- `src/Data`: Mock data and configurations.

---
Developed with ❤️ by [CoderRoninn](https://github.com/CoderRoninn)
