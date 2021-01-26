import { Box } from "@material-ui/core";

interface ColorComponentProps {
  color: string;
  children: JSX.Element;
}

const ColorComponent = ({ color, children }: ColorComponentProps) => {
  return (
    <Box sx={{ margin: 1, border: 2, borderColor: { color } }}>{children}</Box>
  );
};

export default ColorComponent;
