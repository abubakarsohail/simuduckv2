import Layout from "../layouts/Layout";
import Command from "./Command";

class ColorAllCommand implements Command {
  layout: Layout;

  constructor(layout: Layout) {
    this.layout = layout;
  }

  execute = () => {
    this.layout.colorAll();
  };

  undo = () => {
    this.layout.removeAllColor();
  };

  redo = () => {
    this.layout.colorAll();
  };
}

export default ColorAllCommand;
