import LayoutComponent from "../components/LayoutComponent";
import Layout from "./Layout";

class LinearLayout extends Layout {
  constructor() {
    super();
    this.type = "linear";
  }

  display = (): JSX.Element => {
    return <LayoutComponent layout={this} />;
  };
}

export default LinearLayout;
