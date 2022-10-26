import {
  DeleteForeverOutlined,
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
  margin-top: 3rem;
`;
const TrashNote = ({ note }) => {
  const { setNotes, trashNotes, setTrashNotes } = useContext(DataContext);

  const deleteNote = (note) => {
    const updatedNotes = trashNotes.filter((data) => data.id !== note.id);
    setTrashNotes(updatedNotes);
  };
  const restoreNote = (note) => {
    const updatedNotes = trashNotes.filter((data) => data.id !== note.id);
    setTrashNotes(updatedNotes);
    setNotes((prevArr) => [note, ...prevArr]);
    alert("succesfully Restored");
  };

  return (
    <>
      <CardStyled>
        <CardContent>
          <Typography>{note.heading}</Typography>
          <Typography>{note.text}</Typography>
        </CardContent>
        <CardActions>
          <DeleteForeverOutlined
            fontSize="small"
            onClick={() => deleteNote(note)}
            style={{ marginLeft: "auto" }}
          />
          <RestoreFromTrashOutlined
            fontSize="small"
            onClick={() => restoreNote(note)}
          />
        </CardActions>
      </CardStyled>
    </>
  );
};

export default TrashNote;
