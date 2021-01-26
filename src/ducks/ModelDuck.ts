import { FlyNoWay } from "../flyBehaviors";
import { MuteQuack } from "../quackBehaviors";
import Duck from "./Duck";

class ModelDuck extends Duck {
  constructor() {
    super();
    this.flyBehavior = new FlyNoWay();
    this.quackBehavior = new MuteQuack();
    this.imgSrc = "model.jpeg";
  }
}

export default ModelDuck;
