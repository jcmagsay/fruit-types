import { Fruit } from "./fruit.model";

export class Banana extends Fruit {
  constructor() {
    super(this.constructor.name, "yellow");
  }

  peel() {
    console.log('You have peeled the banana');
  }

  eat() {
    // TODO: this can be a shared method
    console.log('You have eaten the banana');
  }

  slipped() {
    console.log('You have slipped on the banana peel');
  }
}
