import QuackBehavior from "./QuackBehavior";

class Quack implements QuackBehavior {
  quack = (): string => {
    return "Quack";
  };
}

export default Quack;
