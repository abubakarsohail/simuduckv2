import Component from "../Component";
import ColorComponent from "../components/ColorComponent";

abstract class ColorDecorator extends Component {
  color: string = "";
  component: Component;

  constructor(component: Component) {
    super();
    this.component = component;
  }

  display = (): JSX.Element => {
    return (
      <ColorComponent color={this.color}>
        {this.component.display()}
      </ColorComponent>
    );
  };
}

export default ColorDecorator;
