import { Box, Grid, styled } from "@mui/material";
import React, { useContext } from "react";
import { DataContext } from "../context/DataProvider";
import EmptyNotes from "./EmptyNotes";
import MainForm from "./MainForm";
import Note from "./SingleNoteCard";

const DrawerHeader = styled("div")(({ theme }) => ({
  ...theme.mixins.toolbar,
}));

const Notes = () => {
  const { notes } = useContext(DataContext);
  return (
    <>
      <Box sx={{ display: "flex", width: "100%" }}>
        <Box sx={{ width: "100%", p: 3 }}>
          <DrawerHeader />
          <MainForm />
          {notes.length > 0 ? (
            <Grid container style={{ marginTop: 16 }}>
              {notes.map((note) => (
                <Grid item>
                  <Note note={note} />
                </Grid>
              ))}
            </Grid>
          ) : (
            <EmptyNotes name="Notes" />
          )}
        </Box>
      </Box>
    </>
  );
};

export default Notes;
