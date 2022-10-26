import { DeleteOutline, EditOutlined } from "@mui/icons-material";
import {
  Card,
  CardActions,
  CardContent,
  styled,
  Typography,
  Dialog,
  DialogContent,
  TextField,
  DialogActions,
  Button,
} from "@mui/material";
import React, { useContext, useState } from "react";
import { DataContext } from "../context/DataProvider";
const CardStyled = styled(Card)`
  width: 240px;
  margin: 8px;
  box-shadow: none;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
`;
const Note = ({ note }) => {
  const [open, setOpen] = useState(false);
  const [editNotes, setEditedNotes] = useState(false);
  const handleClose = () => {
    setOpen(false);
  };

  const { notes, setNotes, setTrashNotes } = useContext(DataContext);

  const deleteNote = (note) => {
    const updatedNotes = notes.filter((data) => data.id !== note.id);
    setNotes(updatedNotes);
    alert("Moved to Bin!!");
    setTrashNotes((prevArr) => [note, ...prevArr]);
  };
  const editNote = (note) => {
    setOpen(true);
  };

  return (
    <>
      <CardStyled>
        <CardContent>
          <Typography>{note.heading}</Typography>
          <Typography>{note.text}</Typography>
        </CardContent>
        <CardActions>
          <EditOutlined
            fontSize="small"
            style={{ marginLeft: "auto" }}
            onClick={() => editNote(note)}
          />

          <DeleteOutline fontSize="small" onClick={() => deleteNote(note)} />
        </CardActions>
      </CardStyled>

      <Dialog open={open} onClose={handleClose} fullWidth>
        <DialogContent>
          <Typography variant="h4">Edit</Typography>
          <TextField
            style={{ display: "flex" }}
            id="standard-basic"
            variant="standard"
            margin="normal"
          />
          <TextField
            style={{ display: "flex" }}
            id="standard-basic"
            variant="standard"
            margin="normal"
          />
        </DialogContent>
        <DialogActions style={{ display: "flex", justifyContent: "center" }}>
          <Button onClick={handleClose} variant="contained" color="success">
            submit
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default Note;
