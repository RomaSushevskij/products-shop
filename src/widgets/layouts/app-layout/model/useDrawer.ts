import { useState } from "react";

export const useDrawer = () => {
  const [isDrawerOpen, setDrawerOpen] = useState(false);

  const openDrawer = () => {
    setDrawerOpen(true);
  };

  const closeDrawer = () => {
    setDrawerOpen(false);
  };

  return {
    isDrawerOpen,
    openDrawer,
    closeDrawer,
  };
};
