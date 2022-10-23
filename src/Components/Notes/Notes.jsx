import { Box, styled } from "@mui/material";
import React from "react";
import Form from "./Form";

const DrawerHeader = styled("div")(({ theme }) => ({
  ...theme.mixins.toolbar,
}));

const Notes = () => {
  return (
    <>
      <Box sx={{ display: "flex" }}>
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          <DrawerHeader />
          <Form />
        </Box>
      </Box>
    </>
  );
};

export default Notes;
