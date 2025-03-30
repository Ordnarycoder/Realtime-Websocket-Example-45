# Real-Time Data Update with WebSocket

This project demonstrates how to create a real-time data update system using WebSockets entirely in JavaScript. It includes a Node.js WebSocket server that broadcasts updated data (in this example, the current time) every second, along with a simple HTML/JavaScript client that connects to the server and displays the real-time updates.

## Features

- **Real-Time Updates:** The server sends data (current time) every second to connected clients.
- **Full-Duplex Communication:** Utilizes WebSocket protocol for two-way communication between client and server.
- **Persistent Connection:** Once established, the WebSocket connection remains open, allowing continuous data exchange.
- **Simple Client Interface:** A basic HTML page that displays data updates in real-time.
- **Easy to Extend:** The project serves as a foundation for building more complex real-time applications (e.g., chat apps, live dashboards, etc.).

## Requirements

- [Node.js](https://nodejs.org/) (v10 or later recommended)
- npm (Node Package Manager)

## Setup Instructions

### 1. Clone the Repository

Clone this repository to your local machine:

```bash
git clone https://github.com/Ordnarycoder/Realtime-Websocket-Example-45.git
cd realtime-websocket
