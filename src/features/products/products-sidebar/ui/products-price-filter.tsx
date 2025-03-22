import { ChangeEvent } from "react";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Slider from "@mui/material/Slider";

import { TProductsFilters } from "../model/types";

export const ProductsPriceFilter = ({
  value,
  onChange,
  min,
  max,
}: {
  value: TProductsFilters["price"];
  onChange: (value: TProductsFilters["price"]) => void;
  min: number;
  max: number;
}) => {
  const handleSliderChange = (_: Event, newValue: number | number[]) => {
    if (Array.isArray(newValue)) {
      onChange({ from: newValue[0], to: newValue[1] });
    }
  };

  const handleTextFieldChange =
    (priceBound: "from" | "to") => (event: ChangeEvent<HTMLInputElement>) => {
      const newValue = parseFloat(event.target.value);

      switch (priceBound) {
        case "from": {
          onChange({ from: newValue, to: value.to });
          break;
        }
        case "to": {
          onChange({ from: value.from, to: newValue });
          break;
        }
      }
    };

  return (
    <Stack component={"label"} flexDirection={"column"} gap={1}>
      <Typography variant={"body2"} fontWeight={"700"}>
        Price
      </Typography>
      <Stack flexDirection={"row"} gap={2} sx={{ mb: 2 }}>
        <TextField value={value.from} onChange={handleTextFieldChange("from")} type={"number"} />
        <TextField value={value.to} onChange={handleTextFieldChange("to")} type={"number"} />
      </Stack>

      <Slider
        value={[value.from, value.to]}
        onChange={handleSliderChange}
        valueLabelDisplay="auto"
        min={min}
        max={max}
        disableSwap
      />
    </Stack>
  );
};
