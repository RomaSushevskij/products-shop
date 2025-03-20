"use client";

import { PropsWithChildren } from "react";
import Box from "@mui/material/Box";

import { AppBar } from "./app-bar";
import { AppDrawer } from "./app-drawer";
import { AppMain } from "./app-main";
import { useDrawer } from "../model/useDrawer";

export const AppLayout = ({ children }: PropsWithChildren) => {
  const { isDrawerOpen, openDrawer, closeDrawer } = useDrawer();

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar onMenuBtnClick={openDrawer} />
      <AppDrawer isOpen={isDrawerOpen} onClick={closeDrawer} />
      <AppMain>{children}</AppMain>
    </Box>
  );
};
