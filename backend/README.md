# Epilepsy Awareness Hub - Backend API

Node.js + Express + MongoDB backend for the Epilepsy Awareness Hub application.

## Features

- ✅ User authentication with JWT
- ✅ CRUD operations for posts
- ✅ File upload support
- ✅ Real-time updates with Socket.IO
- ✅ Role-based access control (user, admin)
- ✅ Comment system
- ✅ Input validation with Express Validator

## Setup

### Prerequisites
- Node.js (v16 or higher)
- MongoDB (local or MongoDB Atlas)
- npm or pnpm

### Installation

1. Install dependencies:
```bash
npm install
# or
pnpm install
```

2. Create `.env` file in the backend directory:
```bash
cp .env.example .env
```

3. Update `.env` with your configuration:
```
MONGODB_URI=mongodb://localhost:27017/epilepsy-hub
PORT=5001
JWT_SECRET=your_secure_secret_key
JWT_EXPIRE=7d
CORS_ORIGIN=http://localhost:5000
```

### Running the Server

**Development mode** (with hot reload):
```bash
npm run dev
```

**Production mode**:
```bash
npm start
```

The server will start on `http://localhost:5001`

## API Endpoints

### Authentication
- `POST /api/auth/register` - Register new user
- `POST /api/auth/login` - Login user
- `GET /api/auth/me` - Get current user (requires token)

### Posts
- `GET /api/posts` - Get all posts
- `GET /api/posts/:id` - Get single post
- `POST /api/posts` - Create post (requires auth, supports file upload)
- `PUT /api/posts/:id` - Update post (requires auth)
- `DELETE /api/posts/:id` - Delete post (requires auth)
- `POST /api/posts/:id/comments` - Add comment to post (requires auth)

## Authentication

All protected endpoints require a JWT token in the Authorization header:
```
Authorization: Bearer <your_token>
```

## File Upload

The `/api/posts` POST endpoint supports image uploads. Uploaded files are stored in the `uploads` directory and served via the `/uploads` route.

## Real-time Features (WebSocket)

The backend uses Socket.IO for real-time updates:

- `join-room` - Join a notification room
- `post-update` - Broadcast post changes
- `new-comment` - Broadcast new comments
- `send-notification` - Send real-time notifications

## Database Models

### User
- firstName, lastName, email (unique), password (hashed)
- role (user/admin), isActive, profileImage
- timestamps

### Post
- title, content, category (story/article/resource/news)
- author (User reference), image, likes, comments
- published status
- timestamps

## Connecting to Frontend

Update your Next.js frontend `.env.local`:
```
NEXT_PUBLIC_API_URL=http://localhost:5001/api
NEXT_PUBLIC_SOCKET_URL=http://localhost:5001
```

Then use in your frontend:
```javascript
const apiUrl = process.env.NEXT_PUBLIC_API_URL;
const socketUrl = process.env.NEXT_PUBLIC_SOCKET_URL;
```

## Development

- Install nodemon: `npm run dev` uses automatic reload
- Check logs in console for API requests and Socket.IO connections
- Test endpoints using Postman or similar tools

## Deployment

For production deployment:

1. Set environment variables on your hosting platform
2. Ensure MongoDB Atlas is configured for production
3. Use a process manager like PM2: `pm2 start src/server.js`
4. Set `NODE_ENV=production`

## Troubleshooting

**MongoDB Connection Error**: Check MONGODB_URI and ensure MongoDB is running
**CORS Error**: Verify CORS_ORIGIN matches your frontend URL
**File Upload Error**: Check file permissions and UPLOAD_DIR exists
**Token Issues**: Ensure JWT_SECRET is consistent and token is included in Authorization header
