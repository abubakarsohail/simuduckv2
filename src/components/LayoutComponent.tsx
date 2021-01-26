import { useState } from "react";
import Layout from "../layouts/Layout";
import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  FormControlLabel,
  Grid,
  Link,
  MenuItem,
  RadioGroup,
  Radio,
  TextField,
  IconButton,
} from "@material-ui/core";
import * as Colors from "../colors";
import * as Ducks from "../ducks";
import * as Layouts from "../layouts";
import Component from "../Component";
import { Add } from "@material-ui/icons";

interface LayoutComponentProps {
  layout: Layout;
}
const LayoutComponent = ({ layout }: LayoutComponentProps) => {
  const [type, setType] = useState(layout.type);
  const [components, setComponents] = useState<Component[]>(layout.components);
  const [open, setOpen] = useState(false);
  const [duckIndex, setDuckIndex] = useState(0);
  const [layoutIndex, setLayoutIndex] = useState(0);
  const [isLayout, setIsLayout] = useState("duck");

  const colors = Object.values(Colors);
  const ducks = Object.values(Ducks);
  const layouts = Object.values(Layouts);

  const handleAdd = () => {
    let component: Component;
    if (isLayout === "layout") {
      component = new layouts[layoutIndex]();
    } else {
      component = new ducks[duckIndex]();
    }
    layout.add(component);
    setComponents(layout.components.slice());
    setOpen(false);
  };

  const handleColor = (componentIndex: number, colorIndex: number) => {
    layout.componentIndex = componentIndex;
    layout.colorIndex = colorIndex;
    layout.colorCommand.execute();
    layout.undoCommands.push(layout.colorCommand);
    setComponents(layout.components.slice());
  };

  const handleLayoutColor = (colorIndex: number) => {
    layout.colorAllIndex = colorIndex;
    layout.colorAllCommand.execute();
    layout.undoCommands.push(layout.colorAllCommand);
    setComponents(layout.components.slice());
  };

  const handleUndo = () => {
    const command = layout.undoCommands.pop();
    command?.undo();
    setComponents(layout.components.slice());
  };

  return (
    <Box sx={{ margin: 1 }}>
      {/* Select layout */}
      <Box sx={{ display: "flex", justifyContent: "space-around" }}>
        <Button onClick={handleUndo}>Undo</Button>
        <TextField
          select
          value={type}
          onChange={({ target }) => setType(target.value)}
        >
          <MenuItem value="grid">Grid</MenuItem>
          <MenuItem value="linear">Linear</MenuItem>
        </TextField>
      </Box>

      <Grid container spacing={2}>
        {colors.map((color, colorIndex) => (
          <Link
            key={colorIndex}
            href="#"
            sx={{ marginLeft: 1 }}
            onClick={() => handleLayoutColor(colorIndex)}
          >
            {color.name}
          </Link>
        ))}
        {type === "grid"
          ? components.map((component, componentIndex) => (
              <Grid key={componentIndex} item xs={4}>
                {colors.map((color, colorIndex) => (
                  <Link
                    key={colorIndex}
                    href="#"
                    sx={{ marginLeft: 1 }}
                    onClick={() => handleColor(componentIndex, colorIndex)}
                  >
                    {color.name}
                  </Link>
                ))}
                {component.display()}
              </Grid>
            ))
          : components.map((component, componentIndex) => (
              <Grid key={componentIndex} item xs={12}>
                {colors.map((color, colorIndex) => (
                  <Link
                    key={colorIndex}
                    sx={{ marginLeft: 1 }}
                    onClick={() => handleColor(componentIndex, colorIndex)}
                  >
                    {color.name}
                  </Link>
                ))}
                {component.display()}
              </Grid>
            ))}
      </Grid>

      {/* Add new ducks */}
      <IconButton color="primary" onClick={() => setOpen(!open)}>
        <Add />
      </IconButton>

      {/* Dialog to add new duck */}
      <Dialog open={open} onClose={() => setOpen(false)} fullWidth>
        <DialogTitle>Add New Duck</DialogTitle>
        <DialogContent>
          {/* Select Duck */}
          <RadioGroup
            value={isLayout}
            row
            onChange={({ target }) => setIsLayout(target.value)}
          >
            <FormControlLabel value="duck" control={<Radio />} label="Duck" />
            <FormControlLabel
              value="layout"
              control={<Radio />}
              label="Layout"
            />
          </RadioGroup>
          <Grid container spacing={2}>
            <Grid item>
              <TextField
                select
                value={duckIndex}
                fullWidth
                onChange={({ target }) => setDuckIndex(parseInt(target.value))}
              >
                {ducks.map((duck, index) => (
                  <MenuItem key={index} value={index}>
                    {duck.name}
                  </MenuItem>
                ))}
              </TextField>
            </Grid>

            <Grid item>
              <TextField
                select
                value={layoutIndex}
                fullWidth
                onChange={({ target }) =>
                  setLayoutIndex(parseInt(target.value))
                }
              >
                {layouts.map((layout, index) => (
                  <MenuItem key={index} value={index}>
                    {layout.name}
                  </MenuItem>
                ))}
              </TextField>
            </Grid>
          </Grid>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleAdd}>Add</Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default LayoutComponent;
