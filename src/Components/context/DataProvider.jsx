import React, { createContext, useState } from "react";

export const DataContext = createContext(null);
const DataProvider = ({ children }) => {
  const [notes, setNotes] = useState([]);
  const [editNotes, setEditedNote] = useState([]);
  const [deletedNotes, setDeletedNotes] = useState([]);
  return (
    <>
      <DataContext.Provider
        value={{
          notes,
          setNotes,
          editNotes,
          setEditedNote,
          deletedNotes,
          setDeletedNotes,
        }}
      >
        {children}
      </DataContext.Provider>
    </>
  );
};

export default DataProvider;
