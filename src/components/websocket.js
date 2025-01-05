// WebSocket Connection States
/*
WebSocket.CONNECTING = 0  // Socket has been created. Connection is in progress.
WebSocket.OPEN = 1       // Connection is open and ready to communicate.
WebSocket.CLOSING = 2    // Connection is in the process of closing.
WebSocket.CLOSED = 3     // Connection is closed or couldn't be opened.
*/

class WebSocketClient {
    constructor(url) {
      this.url = url;
      this.reconnectAttempts = 0;
      this.maxReconnectAttempts = 5;
      this.reconnectInterval = 1000; // Start with 1 second
      this.heartbeatInterval = null;
      this.connection = null;
    }
  
    connect() {
      console.log('Attempting to connect to WebSocket...');
      
      // Create WebSocket connection
      this.connection = new WebSocket(this.url);
  
      // Connection opened
      this.connection.onopen = (event) => {
        console.log('WebSocket connection established!', event);
        this.reconnectAttempts = 0;
        this.startHeartbeat();
        
        // Example: Join a room after connection
        this.send({ type: 'join', room: 'example-room' });
      };
  
      // Connection closed
      this.connection.onclose = (event) => {
        console.log('WebSocket connection closed:', event);
        this.stopHeartbeat();
  
        if (event.wasClean) {
          console.log(`Clean close: code=${event.code}, reason=${event.reason}`);
        } else {
          console.log('Connection died');
          this.attemptReconnect();
        }
      };
  
      // Connection error
      this.connection.onerror = (error) => {
        console.error('WebSocket error:', error);
        // Handle specific error types
        if (error instanceof Event) {
          console.log('Network level error');
        }
      };
  
      // Receiving messages
      this.connection.onmessage = (event) => {
        console.log('Message received:', event);
        
        try {
          const data = JSON.parse(event.data);
          this.handleMessage(data);
        } catch (error) {
          console.error('Error parsing message:', error);
        }
      };
    }
  
    // Handle different types of messages
    handleMessage(data) {
      switch (data.type) {
        case 'ping':
          this.send({ type: 'pong' });
          break;
        case 'update':
          console.log('Received update:', data.payload);
          break;
        case 'error':
          console.error('Server error:', data.message);
          break;
        default:
          console.log('Unknown message type:', data.type);
      }
    }
  
    // Implement exponential backoff for reconnection
    attemptReconnect() {
      if (this.reconnectAttempts < this.maxReconnectAttempts) {
        const timeout = this.reconnectInterval * Math.pow(2, this.reconnectAttempts);
        console.log(`Reconnecting in ${timeout}ms...`);
        
        setTimeout(() => {
          console.log(`Reconnection attempt ${this.reconnectAttempts + 1}...`);
          this.reconnectAttempts++;
          this.connect();
        }, timeout);
      } else {
        console.error('Max reconnection attempts reached');
        // Emit error event or handle failure
      }
    }
  
    // Implement heartbeat to keep connection alive
    startHeartbeat() {
      this.heartbeatInterval = setInterval(() => {
        if (this.isConnected()) {
          this.send({ type: 'ping' });
        }
      }, 30000); // Every 30 seconds
    }
  
    stopHeartbeat() {
      if (this.heartbeatInterval) {
        clearInterval(this.heartbeatInterval);
        this.heartbeatInterval = null;
      }
    }
  
    // Safe send method with connection check
    send(data) {
      if (!this.isConnected()) {
        console.error('Cannot send message - connection not open');
        return false;
      }
  
      try {
        this.connection.send(JSON.stringify(data));
        return true;
      } catch (error) {
        console.error('Error sending message:', error);
        return false;
      }
    }
  
    // Check if connection is healthy
    isConnected() {
      return this.connection && this.connection.readyState === WebSocket.OPEN;
    }
  
    // Clean disconnect
    disconnect() {
      if (this.connection) {
        this.stopHeartbeat();
        this.connection.close(1000, 'User initiated disconnect');
      }
    }
  }
  
  // Usage Example
  const wsClient = new WebSocketClient('wss://example.com/ws');
  
  // Connect
  wsClient.connect();
  
  // Send message
  wsClient.send({ 
    type: 'message', 
    payload: { text: 'Hello server!' } 
  });
  
  // Handle specific messages
  wsClient.handleMessage = (data) => {
    if (data.type === 'chatMessage') {
      console.log(`New chat message: ${data.message}`);
    }
  };
  
  // Cleanup on page unload
  window.addEventListener('beforeunload', () => {
    wsClient.disconnect();
  });