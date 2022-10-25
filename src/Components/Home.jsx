import { Box } from "@mui/material";
import React from "react";
import Notes from "./Notes/Notes";
import SwipeBar from "./SwipeBar";

function Home() {
  return (
    <>
      <Box style={{ width: "100%", display: "flex", justifyContent: "center" }}>
        <SwipeBar />
        <Notes />
      </Box>
    </>
  );
}

export default Home;
