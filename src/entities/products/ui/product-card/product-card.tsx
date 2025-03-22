import { ReactElement } from "react";

import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import LocalFireDepartmentIcon from "@mui/icons-material/LocalFireDepartment";
import Stack from "@mui/material/Stack";
import Chip from "@mui/material/Chip";

import { formatToCurrency } from "@/shared/lib/format-to-currency";

import { TProduct } from "../../model/types";

export const ProductCard = ({
  product,
  addToCardSlot,
}: {
  product: TProduct;
  addToCardSlot: ReactElement;
}) => {
  const { title, price, description, isNew, brand } = product;
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography gutterBottom variant="body1" component="div">
          {brand}
        </Typography>
        <Typography variant="body2" sx={{ color: "text.secondary" }}>
          {description}
        </Typography>
        <Stack flexDirection={"row"} alignItems={"center"} justifyContent={"space-between"}>
          <Typography variant="h6" fontWeight={700} sx={{ my: 4 }}>
            {formatToCurrency(price, "EUR")}
          </Typography>

          {isNew && (
            <Chip
              icon={<LocalFireDepartmentIcon />}
              label="New Product"
              variant="filled"
              color={"error"}
            />
          )}
        </Stack>

        <Stack flexDirection={"row"} justifyContent={"center"}>
          {addToCardSlot}
        </Stack>
      </CardContent>
    </Card>
  );
};
