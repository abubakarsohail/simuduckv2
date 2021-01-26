import Component from "../Component";
import ColorComponent from "../components/ColorComponent";
import ColorDecorator from "./ColorDecorator";

class RedColor extends ColorDecorator {
  constructor(component: Component) {
    super(component);
    this.color = "red";
  }

  display = (): JSX.Element => {
    return (
      <ColorComponent color={this.color}>
        {this.component.display()}
      </ColorComponent>
    );
  };
}

export default RedColor;
