import React, { createContext, useState } from "react";

export const DataContext = createContext(null);
const DataProvider = ({ children }) => {
  const [notes, setNotes] = useState([]);
  const [archiveNotes, setArchiveNotes] = useState([]);
  const [deletedNote, setDeletedNotes] = useState([]);
  return (
    <>
      <DataContext.Provider
        value={{
          notes,
          setNotes,
          archiveNotes,
          setArchiveNotes,
          deletedNote,
          setDeletedNotes,
        }}
      >
        {children}
      </DataContext.Provider>
    </>
  );
};

export default DataProvider;
