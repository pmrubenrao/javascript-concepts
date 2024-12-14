const EventEmitter = require('events');

class ChatRoom extends EventEmitter {
  join(username) {
    this.emit('join', username);
  }
  message(username, msg) {
    this.emit('message', username, msg);
  }
}

const chat = new ChatRoom();

chat.on('join', (username) => {
  console.log(`${username}: joined the room`);
});
chat.on('message', (username, msg) => {
  console.log(`${username}: ${msg}`);
});

chat.join('Alice');
chat.join('Bob');

chat.message('Alice:', 'Hello folks thanks for inviting me');
chat.message('Bob:', 'Hello everyone');
