import React, { createContext, useState } from "react";

export const DataContext = createContext(null);

const DataProvider = ({ children, note }) => {
  const [notes, setNotes] = useState([]);
  const [editNote, setEditNote] = useState(note);
  const [trashNotes, setTrashNotes] = useState([]);
  return (
    <>
      <DataContext.Provider
        value={{
          notes,
          setNotes,
          editNote,
          setEditNote,
          trashNotes,
          setTrashNotes,
        }}
      >
        {children}
      </DataContext.Provider>
    </>
  );
};

export default DataProvider;
