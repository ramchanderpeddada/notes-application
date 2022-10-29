import {
  DeleteForeverOutlined,
  RestoreFromTrashOutlined,
} from "@mui/icons-material";
import {
  Card,
  CardActions,
  CardContent,
  IconButton,
  styled,
  Typography,
} from "@mui/material";
import axios from "axios";
import React, { useContext } from "react";
import { DataContext } from "../context/DataProvider";
const CardStyled = styled(Card)`
  width: 240px;
  margin: 8px;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  margin-top: 3rem;
`;
const TrashNote = ({ note }) => {
  const { setNotes, trashNotes, setTrashNotes } = useContext(DataContext);

  const deleteNote = (note) => {
    const updatedNotes = trashNotes.filter((data) => data.id !== note.id);
    setTrashNotes(updatedNotes);
    axios
      .delete(`http://localhost:3006/notes/${note.id}`, {
        title: note.heading,
        text: note.text,
      })
      .then((res) => setNotes(res.data))
      .catch((error) => console.error(error));
  };
  const restoreNote = (note) => {
    const updatedNotes = trashNotes.filter((data) => data.id !== note.id);
    setTrashNotes(updatedNotes);
    setNotes((prevArr) => [note, ...prevArr]);
  };

  return (
    <>
      <CardStyled>
        <CardContent>
          <Typography>{note.heading}</Typography>
          <Typography>{note.text}</Typography>
        </CardContent>
        <CardActions>
          <IconButton onClick={() => deleteNote(note)}>
            <DeleteForeverOutlined
              fontSize="small"
              style={{ marginLeft: "auto" }}
            />
          </IconButton>
          <IconButton onClick={() => restoreNote(note)}>
            <RestoreFromTrashOutlined fontSize="small" />
          </IconButton>
        </CardActions>
      </CardStyled>
    </>
  );
};

export default TrashNote;
