    class Bird {
        constructor(name, color) {
            this.name = name;
            this.color = color;
        }
        speak() {
            console.log(`My name is ${this.name} and I am a ${this.color} bird.`);
        };       
        fly() {
            console.log(`I'm ${this.name} and I can fly high in the blue sky!`);
        };
    }

    class Pigeon extends Bird {
        constructor(name, color) {
            super(name, color);
        }
        eatPizza() {
            console.log("Delicious pizza!");
        }
      }

      class Penguin extends Bird {
        constructor(name, color) {
            super(name, color); 
        }
        speak() {
            console.log(`Hi! I'm ${this.name} and I'm a ${this.color} penguin.`);
        };
        fly() {
            console.log(`Whoops, I can't fly. Waddle waddle.`);
        }
    }

    class Parrot extends Bird {
        constructor(name, color) {
            super(name, color); 
        }
        speak() {
            console.log(`Hi! I'm ${this.name} and I'm a ${this.color} parrot.`);
            console.log(`Happy Bird-day to meee!`);
        };

    }

    const myBird = new Bird("Tweety", "Yellow");
    myBird.speak();
    myBird.fly();

    const pippa = new Pigeon("Pippa", "Grey");
    pippa.speak();
    pippa.fly();
    pippa.eatPizza();

    const pingu = new Penguin("Pingu", "Black & White");
    pingu.speak();
    pingu.fly();

    const ollie = new Parrot("Ollie", "Green");
    ollie.speak();


  