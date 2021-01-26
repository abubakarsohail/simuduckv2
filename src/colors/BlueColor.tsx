import Component from "../Component";
import ColorComponent from "../components/ColorComponent";
import ColorDecorator from "./ColorDecorator";

class BlueColor extends ColorDecorator {
  constructor(component: Component) {
    super(component);
    this.color = "blue";
  }

  display = (): JSX.Element => {
    return (
      <ColorComponent color={this.color}>
        {this.component.display()}
      </ColorComponent>
    );
  };
}

export default BlueColor;
