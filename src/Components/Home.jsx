import { Box } from "@mui/material";
import React from "react";
import Notes from "./Notes/Notes";
import SwipeBar from "./SwipeBar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import TrashNotes from "./Trash/TrashNotes";
function Home() {
  return (
    <>
      <Box style={{ width: "100%", display: "flex" }}>
        <Router>
          <SwipeBar />
          <Routes>
            <Route path="/" element={<Notes />} />
            <Route path="/delete" element={<TrashNotes />} />
          </Routes>
        </Router>
      </Box>
    </>
  );
}

export default Home;
