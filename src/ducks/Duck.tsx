import Component from "../Component";
import FlyBehavior from "../flyBehaviors/FlyBehavior";
import FlyNoWay from "../flyBehaviors/FlyNoWay";
import MuteQuack from "../quackBehaviors/MuteQuack";
import QuackBehavior from "../quackBehaviors/QuackBehavior";
import { DuckComponent } from "../components";

abstract class Duck extends Component {
  flyBehavior: FlyBehavior = new FlyNoWay();
  quackBehavior: QuackBehavior = new MuteQuack();
  imgSrc = "";

  setFlyBehavior = (flyBehavior: FlyBehavior) => {
    this.flyBehavior = flyBehavior;
  };

  setQuackBehavior = (quackBehavior: QuackBehavior) => {
    this.quackBehavior = quackBehavior;
  };

  display = (): JSX.Element => {
    return <DuckComponent duck={this} />;
  };
}
export default Duck;
