export const setupSocketHandlers = (io) => {
  io.on('connection', (socket) => {
    console.log('New user connected:', socket.id);

    // Join a room for real-time updates
    socket.on('join-room', (room) => {
      socket.join(room);
      console.log(`User joined room: ${room}`);
    });

    // Leave a room
    socket.on('leave-room', (room) => {
      socket.leave(room);
      console.log(`User left room: ${room}`);
    });

    // Real-time notifications
    socket.on('send-notification', (data) => {
      io.to(data.room).emit('notification', {
        message: data.message,
        timestamp: new Date(),
      });
    });

    // Live updates for posts
    socket.on('post-update', (data) => {
      io.emit('post-updated', {
        postId: data.postId,
        action: data.action, // 'created', 'updated', 'deleted'
        post: data.post,
        timestamp: new Date(),
      });
    });

    // Live comments
    socket.on('new-comment', (data) => {
      io.to(`post-${data.postId}`).emit('comment-added', {
        postId: data.postId,
        comment: data.comment,
        timestamp: new Date(),
      });
    });

    socket.on('disconnect', () => {
      console.log('User disconnected:', socket.id);
    });
  });
};
