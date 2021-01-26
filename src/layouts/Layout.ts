import Component from "../Component";

abstract class Layout extends Component {
  components: Component[] = [];
  type: string = "";

  add = (component: Component) => {
    this.components.push(component);
  };
}

export default Layout;
