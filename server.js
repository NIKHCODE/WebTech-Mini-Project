const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const connectDB = require('./config/database');
const { createServer } = require('http');
const { Server } = require('socket.io');

// Load env vars
dotenv.config();

// Connect to database
connectDB();

const app = express();
const server = createServer(app);
const io = new Server(server, {
  cors: {
    origin: process.env.CLIENT_URL,
    methods: ['GET', 'POST']
  }
});

// Middleware
app.use(cors());
app.use(express.json());

// Middleware
app.use(cors());
app.use(express.json());

// ADD THIS ROUTE - Simple API test route
app.get('/api', (req, res) => {
  res.json({ 
    message: '🎬 PlotTwist API is working!',
    status: 'success',
    available_routes: [
      '/api/auth',
      '/api/predictions', 
      '/api/series',
      '/api/users',
      '/api/chat'
    ]
  });
});

// Your existing routes continue here...
app.use('/api/auth', require('./routes/auth'));
app.use('/api/predictions', require('./routes/predictions'));
app.use('/api/series', require('./routes/series'));
app.use('/api/users', require('./routes/users'));
app.use('/api/chat', require('./routes/chat'));

// Routes
app.use('/api/auth', require('./routes/auth'));
app.use('/api/predictions', require('./routes/predictions'));
app.use('/api/series', require('./routes/series'));
app.use('/api/users', require('./routes/users'));
app.use('/api/chat', require('./routes/chat'));
// Add this with your other routes
app.use('/api/dashboard', require('./routes/dashboard'));

// Socket.io for real-time chat
io.on('connection', (socket) => {
  console.log('🔌 User connected:', socket.id);

  socket.on('join-chat', (seriesId) => {
    socket.join(seriesId);
    console.log(`User ${socket.id} joined chat for series ${seriesId}`);
  });

  socket.on('send-message', (data) => {
    io.to(data.seriesId).emit('new-message', data);
  });

  socket.on('disconnect', () => {
    console.log('❌ User disconnected:', socket.id);
  });
});

// Basic route
app.get('/', (req, res) => {
  res.json({ 
    message: '🎬 PlotTwist API is running!',
    version: '1.0.0'
  });
});

const PORT = process.env.PORT || 5000;

server.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
  console.log(`🔗 API: http://localhost:${PORT}/api`);
  console.log(`📚 MongoDB: ${process.env.MONGODB_URI}`);
});