import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
} from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import { DataContext } from "../context/DataProvider";
import axios from "axios";

const MainForm = () => {
  const [open, setOpen] = React.useState(false);
  const { setNotes } = useContext(DataContext);

  const handleDialog = () => {
    setOpen(!open);
  };

  const [addNote, setAddNote] = useState({ title: "", heading: "" });

  useEffect(() => {
    axios
      .get("http://localhost:3006/notes")
      .then((res) => setNotes(res.data))
      .catch((err) => console.error(err));
  }, [open]);

  const addNotes = () => {
    setOpen(false);
    axios
      .post("http://localhost:3006/notes", {
        title: addNote.heading,
        text: addNote.text,
      })
      .catch((error) => console.error(error));
  };

  return (
    <>
      <Box>
        <Button variant="outlined" onClick={handleDialog}>
          ADD
        </Button>

        <Dialog open={open} onClose={handleDialog}>
          <DialogTitle>Add Note</DialogTitle>
          <DialogContent>
            <TextField
              autoFocus
              margin="dense"
              label="Title"
              fullWidth
              variant="outlined"
              value={addNote.heading}
              name="heading"
              onChange={(e) => {
                setAddNote({ ...addNote, heading: e.target.value });
              }}
            />
            <TextField
              autoFocus
              margin="dense"
              variant="outlined"
              label="Notes.."
              fullWidth
              multiline
              value={addNote.text}
              name="text"
              onChange={(e) => {
                setAddNote({ ...addNote, text: e.target.value });
              }}
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={handleDialog}>Cancel</Button>
            <Button onClick={(e) => addNotes(e)}>Add</Button>
          </DialogActions>
        </Dialog>
      </Box>
    </>
  );
};

export default MainForm;
