const EventEmitter = require('events');

class Counter extends EventEmitter {
  start(interval) {
    let remainingTime = interval;
    const intervalid = setInterval(() => {
      if (remainingTime !== 0) {
        this.emit('tick', remainingTime);
        remainingTime--;
      } else {
        this.emit('done', remainingTime);
        clearInterval(intervalid);
      }
    }, 1000);
  }
}

const myCounter = new Counter();

myCounter.on('tick', (timeLeft) => {
  console.log(`${timeLeft} seconds left...`);
});

myCounter.on('done', () => {
  console.log('Done: Countdown complete!');
});

myCounter.start(4);
