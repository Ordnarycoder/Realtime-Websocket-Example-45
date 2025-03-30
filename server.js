const WebSocket = require('ws');

// Create a WebSocket server on port 8080
const wss = new WebSocket.Server({ port: 8080 });

wss.on('connection', (ws) => {
  console.log('A client connected.');

  // Send an initial welcome message
  ws.send('Hello! WebSocket connection established.');

  // Every second, send the current time to the connected client
  const sendTime = setInterval(() => {
    const currentTime = new Date().toLocaleTimeString();
    ws.send(`Current Time: ${currentTime}`);
  }, 1000);

  // Clear the interval when the client disconnects
  ws.on('close', () => {
    console.log('Client disconnected.');
    clearInterval(sendTime);
  });
});

console.log('WebSocket server is running on ws://localhost:8080');
