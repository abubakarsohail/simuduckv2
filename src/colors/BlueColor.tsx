import Component from "../Component";
import ColorDecorator from "./ColorDecorator";

class BlueColor extends ColorDecorator {
  constructor(component: Component) {
    super(component);
    this.color = "blue";
  }
}

export default BlueColor;
