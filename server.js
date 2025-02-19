const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');
const chatRoutes = require('./routes/chat');

const app = express();

// Middleware
app.use(cors());
app.use(cors({
    origin: 'http://localhost:3001', // Allow frontend to access
    methods: ['GET', 'POST'], // Allowed methods
    allowedHeaders: ['Content-Type']
  }));
// Routes
app.use('/api', chatRoutes);

// Connect to DB and start the server
connectDB();

const PORT = process.env.PORT || 5000;
console.log("Before starting the server...");
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
