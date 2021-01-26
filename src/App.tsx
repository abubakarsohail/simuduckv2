import { GridLayout } from "./layouts";

const App = () => {
  const gridLayout = new GridLayout();

  return <div>{gridLayout.display()}</div>;
};

export default App;
