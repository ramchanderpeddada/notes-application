import {
  DeleteOutlineOutlined as Delete,
  LightbulbOutlined as LightBulb,
  ArchiveOutlined as Archive,
} from "@mui/icons-material";
import { List, ListItem, ListItemIcon, ListItemText } from "@mui/material";
import React from "react";

const Navlist = () => {
  const navList = [
    {
      id: 1,
      name: "Notes",
      icon: <LightBulb />,
    },
    {
      id: 2,
      name: "Archive",
      icon: <Archive />,
    },
    {
      id: 3,
      name: "Bin",
      icon: <Delete />,
    },
  ];
  return (
    <>
      <List>
        {navList.map((list) => (
          <ListItem button key={list.id}>
            <ListItemIcon>{list.icon}</ListItemIcon>
            <ListItemText primary={list.name} />
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default Navlist;
