function DigitalPal() {
  this.hungry = false;
  this.sleepy = false;
  this.bored = true;
  this.age = 0;

  this.feed = function() {
    if (this.hungry === true) {
      console.log(`That was so Yummy!`);
      this.hungry = false;
      this.sleepy = true;
    } else {
      console.log(`No Thanks! I'm full!`);
    }
  };

  this.sleep = function() {
    if (this.sleepy === true) {
      console.log(`Zzzzzzzzzzzz *snor* zzzzzzzzzz`);
      this.sleepy = false;
      this.bored = true;
      increaseAge();
    } else {
      console.log(`No way!  I'm not tired!`);
    }
  };

  this.play = function() {
    if (this.bored === true) {
      console.log(`Yah!! Let's Play!`);
      this.hungry = true;
      this.bored = false;
    } else {
      console.log(`Not right now. Later?`);
    }
  };

  this.increaseAge = function() {
    this.age++;
    console.log(`Happy Birthday to me! I'm now ${this.age} days old`);
  };
}

let dog = new DigitalPal();
dog.outside = false;

dog.bark;
