import { Box, Grid, styled } from "@mui/material";
import React, { useContext } from "react";
import { DataContext } from "../context/DataProvider";
import EmptyNotes from "../Notes/EmptyNotes";
import TrashNote from "./TrashNote";

const DrawerHeader = styled("div")(({ theme }) => ({
  ...theme.mixins.toolbar,
}));

const TrashNotes = () => {
  const { deletedNotes } = useContext(DataContext);
  return (
    <>
      <Box sx={{ display: "flex", width: "100%" }}>
        <Box sx={{ width: "100%", p: 3 }}>
          <DrawerHeader />
          {deletedNotes.length > 0 ? (
            <Grid container style={{ marginTop: 16 }}>
              {deletedNotes.map((note) => (
                <Grid item>
                  <TrashNote note={note} />
                </Grid>
              ))}
            </Grid>
          ) : (
            <EmptyNotes />
          )}
        </Box>
      </Box>
    </>
  );
};

export default TrashNotes;
