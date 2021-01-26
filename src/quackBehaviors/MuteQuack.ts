import QuackBehavior from "./QuackBehavior";

class MuteQuack implements QuackBehavior {
  quack = (): string => {
    return "MuteQuack";
  };
}

export default MuteQuack;
