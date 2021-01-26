import { FlyWithWings } from "../flyBehaviors";
import { Quack } from "../quackBehaviors";
import Duck from "./Duck";

class MallardDuck extends Duck {
  constructor() {
    super();
    this.flyBehavior = new FlyWithWings();
    this.quackBehavior = new Quack();
    this.imgSrc = "mallard.jpeg";
  }
}

export default MallardDuck;
