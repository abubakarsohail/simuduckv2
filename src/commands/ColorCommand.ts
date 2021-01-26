import Layout from "../layouts/Layout";
import Command from "./Command";

class ColorCommand implements Command {
  layout: Layout;

  constructor(layout: Layout) {
    this.layout = layout;
  }

  execute = () => {
    this.layout.color();
  };

  undo = () => {
    this.layout.removeColor();
  };
}

export default ColorCommand;
