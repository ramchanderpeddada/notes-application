import React from "react";
import Notes from "./Notes/Notes";
import SwipeDrawer from "./SwipeDrawer";

function Home() {
  return (
    <>
      <SwipeDrawer />
      <Notes />
    </>
  );
}

export default Home;
