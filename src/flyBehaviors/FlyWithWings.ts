import FlyBehavior from "./FlyBehavior";

class FlyWithWings implements FlyBehavior {
  fly = (): string => {
    return "FlyWithWings";
  };
}

export default FlyWithWings;
