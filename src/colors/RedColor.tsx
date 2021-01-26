import Component from "../Component";
import ColorDecorator from "./ColorDecorator";

class RedColor extends ColorDecorator {
  constructor(component: Component) {
    super(component);
    this.color = "red";
  }
}

export default RedColor;
