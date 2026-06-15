# CompliTrack — JPL Mines

## Setup Instructions

### Backend (server/)

1. Open terminal in `server/` folder
2. Create `.env` file:
```
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=jplmines_secret_2026
EMAIL_USER=your_gmail@gmail.com
EMAIL_PASS=your_16digit_app_password
```
3. Install and run:
```
npm install
node seed.js
npm start
```

### Frontend (client/)

1. Open terminal in `client/` folder
2. Create `.env` file:
```
VITE_API_URL=http://localhost:5000/api
```
3. Install and run:
```
npm install
npm run dev
```

### Login
- URL: http://localhost:5173
- Email: admin@jplmines.com
- Password: Admin@123

### Features
- Admin Dashboard: Add/Edit/Delete compliances, assign to users, track status
- User Dashboard: See assigned tasks, mark complete
- Email alerts at 10 AM IST daily for due/overdue/reminder dates
- Alert logs history
