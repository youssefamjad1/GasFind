# ⛽ Gas Find — Fuel Price Finder & Nearby Stations Locator

**Gas Find** is a **full-stack web application** built with the **MERN stack (MongoDB, Express, React, Node.js)**. It allows users to **locate nearby gas stations**, **compare fuel prices** (Gazoil and Essence), and get **directions to the cheapest or nearest station**. Users can explore a **list view** or **interactive map view**, both powered by real-time geolocation.

> 🛠️ Project Repository: [github.com/youssefamjad1/GasFind](https://github.com/youssefamjad1/GasFind)

---

## 🔍 Features

- 📍 **Real-Time Geolocation:** Automatically detects the user's location using the browser’s geolocation API.
- 🗺️ **Map & List Views:** Toggle between a list of stations and a map-based interface.
- ⛽ **Nearby Stations:** Displays nearby gas stations based on the user’s coordinates.
- 💵 **Fuel Price Comparison:** Shows the best Gazoil and Essence prices.
- 🧭 **Itinerary / Directions:** Allows users to view navigation routes to the selected station.
- 🔐 **Admin Panel:** Secure login system to manage station data and prices.

---

## 🛠️ Tech Stack

### Frontend
- **React**
- **React Router**
- **Axios**
- **Leaflet.js** for map integration
- **Sass/CSS Modules**

### Backend
- **Node.js**
- **Express.js**
- **MongoDB** with **Mongoose**
- **JWT** for authentication
- **dotenv** for environment configuration

---

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/youssefamjad1/ar5ascarburant.git
cd ar5ascarburant
2. Setup Frontend

cd frontend
npm install
npm start
3. Setup Backend

cd backend
npm install
npm run dev
Make sure to add a .env file in /backend with the following:

PORT=5000
MONGO_URI=your_mongodb_uri
JWT_SECRET=your_jwt_secret
ADMIN_PASSWORD=your_admin_password