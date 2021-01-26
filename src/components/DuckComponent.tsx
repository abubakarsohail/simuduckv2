import { Box, MenuItem, Paper, TextField } from "@material-ui/core";
import Duck from "../ducks/Duck";
import * as FlyBehaviors from "../flyBehaviors";
import * as QuackBehaviors from "../quackBehaviors";

export interface DuckComponentProps {
  duck: Duck;
}

const DuckComponent = ({ duck }: DuckComponentProps) => {
  // List of all fly behaviors
  const flyBehaviors = Object.values(FlyBehaviors).map((value) => new value());

  // List of all quack behaviors
  const quackBehaviors = Object.values(QuackBehaviors).map(
    (value) => new value()
  );

  const handleChangeFlyBehavior = (event: any) => {
    duck.setFlyBehavior(flyBehaviors[event.target.value]);
  };

  return (
    <Paper sx={{ padding: 1 }}>
      <Box sx={{ display: "flex", justifyContent: "space-around" }}>
        {/* Select Fly Behavior */}
        <TextField
          select
          defaultValue={flyBehaviors.findIndex(
            (flyBehavior) =>
              flyBehavior.constructor.name === duck.flyBehavior.constructor.name
          )}
          onChange={handleChangeFlyBehavior}
        >
          {flyBehaviors.map((flyBehavior, index) => (
            <MenuItem key={index} value={index}>
              {flyBehavior.constructor.name}
            </MenuItem>
          ))}
        </TextField>

        {/* Select Quack Behavior */}
        <TextField
          select
          defaultValue={quackBehaviors.findIndex(
            (quackBehavior) =>
              quackBehavior.constructor.name ===
              duck.quackBehavior.constructor.name
          )}
          onChange={handleChangeFlyBehavior}
        >
          {quackBehaviors.map((quackBehavior, index) => (
            <MenuItem key={index} value={index}>
              {quackBehavior.constructor.name}
            </MenuItem>
          ))}
        </TextField>
      </Box>

      <Box sx={{ marginTop: 8, display: "flex", justifyContent: "center" }}>
        <img
          src={`/images/${duck.imgSrc}`}
          width={100}
          height={100}
          alt={duck.imgSrc}
        />
      </Box>
    </Paper>
  );
};

export default DuckComponent;
