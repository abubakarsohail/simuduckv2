import FlyBehavior from "./FlyBehavior";

class FlyNoWay implements FlyBehavior {
  fly = (): string => {
    return "FlyNoWay";
  };
}

export default FlyNoWay;
