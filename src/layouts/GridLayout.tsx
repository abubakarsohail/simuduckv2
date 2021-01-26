import LayoutComponent from "../components/LayoutComponent";
import Layout from "./Layout";

class GridLayout extends Layout {
  constructor() {
    super();
    this.type = "grid";
  }

  display = (): JSX.Element => {
    return <LayoutComponent layout={this} />;
  };
}

export default GridLayout;
