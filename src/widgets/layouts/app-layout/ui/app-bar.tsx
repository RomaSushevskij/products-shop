import Toolbar from "@mui/material/Toolbar";
import Bar from "@mui/material/AppBar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import Badge from "@mui/material/Badge";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";

import { useShoppingCartContext } from "@/shared/providers/shopping-cart-provider";
import { formatToCurrency } from "@/shared/lib/format-to-currency";

export const AppBar = () => {
  const shoppingCartContext = useShoppingCartContext();

  const totalPrice = formatToCurrency(shoppingCartContext?.cartItemsTotalPrice ?? 0, "EUR");

  return (
    <Bar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Shop
        </Typography>
        <IconButton size="large" aria-label="show 4 new mails" color="inherit" sx={{ mr: 2 }}>
          <Badge badgeContent={shoppingCartContext?.cartItemsCount ?? 0} color="error">
            <ShoppingBasketIcon />
          </Badge>
        </IconButton>
        <Typography variant="h6" component="div">
          {totalPrice}
        </Typography>
      </Toolbar>
    </Bar>
  );
};
