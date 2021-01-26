import Component from "../Component";

abstract class ColorDecorator extends Component {
  color: string = "";
  component: Component;

  constructor(component: Component) {
    super();
    this.component = component;
  }
}

export default ColorDecorator;
