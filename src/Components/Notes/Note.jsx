import {
  ArchiveOutlined,
  DeleteOutline,
  EditOutlined,
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
const Note = ({ note }) => {
  const { notes, setNotes, setArchiveNotes, setDeletedNotes } =
    useContext(DataContext);

  const editNote = () => {};
  const archiveNote = (note) => {
    const updatedNotes = notes.filter((data) => data.id !== note.id);
    setNotes(updatedNotes);
    setArchiveNotes((prevArr) => [note, ...prevArr]);
  };
  const deleteNote = (note) => {
    const updatedNotes = notes.filter((data) => data.id !== note.id);
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
        <EditOutlined
          fontSize="small"
          style={{ marginLeft: "auto" }}
          onClick={() => editNote()}
        />
        <ArchiveOutlined fontSize="small" onClick={() => archiveNote(note)} />
        <DeleteOutline fontSize="small" onClick={() => deleteNote(note)} />
      </CardActions>
    </CardStyled>
  );
};

export default Note;