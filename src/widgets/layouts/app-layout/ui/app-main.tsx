import { PropsWithChildren } from "react";
import Container from "@mui/material/Container";

export const AppMain = ({ children }: PropsWithChildren) => {
  return (
    <Container component={"main"} sx={{ p: 3, pt: 12 }}>
      {children}
    </Container>
  );
};
