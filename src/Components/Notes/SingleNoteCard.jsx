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
  DialogTitle,
  IconButton,
} from "@mui/material";
import axios from "axios";
import React, { useContext, useState } from "react";
import { DataContext } from "../context/DataProvider";

const CardStyled = styled(Card)`
  width: 240px;
  margin: 8px;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
`;

const Note = ({ note }) => {
  const [open, setOpen] = useState(false);
  const handleClose = () => {
    setOpen(false);
  };

  const { notes, setNotes, setTrashNotes } = useContext(DataContext);
  const [editNote, setEditNote] = useState(note);

  const deleteNote = (note) => {
    const updatedNotes = notes.filter((data) => data.id !== note.id);
    setNotes(updatedNotes);
    alert("Moved to Bin!!");
    setTrashNotes((prevArr) => [note, ...prevArr]);
  };

  const editNoteIcon = () => {
    setOpen(true);
  };

  const editNotes = () => {
    setNotes([editNote, ...notes?.filter((data) => data?.id !== note?.id)]);
    setOpen(false);
    axios
      .put(`http://localhost:3006/notes/${note.id}`, {
        title: editNote.title,
        text: editNote.text,
      })
      .then(() => axios.get("http://localhost:3006/notes"))
      .catch((error) => console.error(error));
  };

  return (
    <>
      <CardStyled>
        <CardContent>
          <Typography>{note.title}</Typography>
          <Typography>{note.text}</Typography>
        </CardContent>
        <CardActions sx={{ display: "flex", justifyContent: "flex-end" }}>
          <IconButton onClick={() => editNoteIcon()}>
            <EditOutlined fontSize="small" style={{ marginLeft: "auto" }} />
          </IconButton>
          <IconButton onClick={() => deleteNote(note)}>
            <DeleteOutline fontSize="small" />
          </IconButton>
        </CardActions>
      </CardStyled>

      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Edit Note</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            label="Title"
            fullWidth
            variant="outlined"
            value={editNote?.title}
            onChange={(e) =>
              setEditNote((prev) => ({ ...prev, title: e.target.value }))
            }
            name="title"
          />
          <TextField
            autoFocus
            margin="dense"
            label="Notes.."
            fullWidth
            multiline
            onChange={(e) =>
              setEditNote((prev) => ({ ...prev, text: e.target.value }))
            }
            variant="outlined"
            value={editNote?.text}
            name="text"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={editNotes}>Edit</Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default Note;
