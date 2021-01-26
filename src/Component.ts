abstract class Component {
  add = (component: Component): void => {
    throw new Error("Not Implemented");
  };

  abstract display(): JSX.Element;
}

export default Component;
