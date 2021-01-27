import * as Colors from "../colors";
import Command from "../commands/Command";
import Component from "../Component";
import { ColorAllCommand, ColorCommand } from "../commands";
import ColorDecorator from "../colors/ColorDecorator";

abstract class Layout extends Component {
  components: Component[] = [];
  type: string = "";
  colorAllIndex: number = 0;
  colorIndex: number = 0;
  componentIndex = 0;
  colorCommand: Command = new ColorCommand(this);
  colorAllCommand: Command = new ColorAllCommand(this);

  undoCommand!: Command;
  redoCommand!: Command;

  add = (component: Component) => {
    this.components.push(component);
  };

  colorAll = () => {
    this.components = this.components.map(
      (component) => new (Object.values(Colors)[this.colorAllIndex])(component)
    );
  };

  color = () => {
    const component: Component = this.components[this.componentIndex];
    const decoratedComponent = new (Object.values(Colors)[this.colorIndex])(
      component
    );
    this.components[this.componentIndex] = decoratedComponent;
  };

  removeColor = () => {
    const component: Component = this.components[this.componentIndex];
    const undecoratedComponent = (component as ColorDecorator).component;
    this.components[this.componentIndex] = undecoratedComponent;
  };

  removeAllColor = () => {
    this.components = this.components.map(
      (component) => (component as ColorDecorator).component
    );
  };
}

export default Layout;
