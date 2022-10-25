import {
  DeleteForeverOutlined,
  DeleteOutline,
  EditOutlined,
  Restore,
  RestoreFromTrashOutlined,
} from "@mui/icons-material";
import {
  Card,
  CardActions,
  CardContent,
  styled,
  Typography,
} from "@mui/material";
import React, { useContext } from "react";
import { DataContext } from "../context/DataProvider";
const CardStyled = styled(Card)`
  width: 240px;
  margin: 8px;
  box-shadow: none;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
`;
const TrashNote = ({ note }) => {
  const { notes, setNotes, deletedNotes, setDeletedNotes } =
    useContext(DataContext);

  const deleteNote = (note) => {
    const updatedNotes = notes.filter((data) => data.id !== note.id);
    setDeletedNotes(updatedNotes);
  };
  const restoreNote = (note) => {
    const updatedNotes = deletedNotes.filter((data) => data.id !== note.id);
    setNotes(updatedNotes);
    setDeletedNotes((prevArr) => [note, ...prevArr]);
  };

  return (
    <CardStyled>
      <CardContent>
        <Typography>{note.heading}</Typography>
        <Typography>{note.text}</Typography>
      </CardContent>
      <CardActions>
        <DeleteForeverOutlined
          fontSize="small"
          onClick={() => deleteNote(note)}
        />
        <RestoreFromTrashOutlined
          fontSize="small"
          onClick={() => restoreNote(note)}
          style={{ marginLeft: "auto" }}
        />
      </CardActions>
    </CardStyled>
  );
};

export default TrashNote;
