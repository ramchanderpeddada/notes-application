import { Box } from "@mui/material";
import React from "react";
import Notes from "./Notes/Notes";
import SwipeDrawer from "./SwipeDrawer";

function Home() {
  return (
    <>
      <Box style={{ width: "100%", display: "flex", justifyContent: "center" }}>
        <SwipeDrawer />
        <Notes />
      </Box>
    </>
  );
}

export default Home;
