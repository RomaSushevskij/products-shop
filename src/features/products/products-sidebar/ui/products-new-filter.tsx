import { ChangeEvent } from "react";

import Switch from "@mui/material/Switch";
import FormControlLabel from "@mui/material/FormControlLabel";

export const ProductsNewFilter = ({
  value,
  onChange,
}: {
  value: boolean;
  onChange: (value: boolean) => void;
}) => {
  const handleChange = (_: ChangeEvent<HTMLInputElement>, checked: boolean) => {
    onChange(checked);
  };

  return (
    <FormControlLabel
      control={<Switch checked={value} onChange={handleChange} name="isNew" />}
      label=" Only new"
    />
  );
};
