export class Fruit {

  constructor(fruitType, color, size) {
    this.fruitType = fruitType;
    this.color = color;
    this.size = size;

    this.init(fruitType);
  }

  init() {
    console.log({ fruitType });
  }

}
