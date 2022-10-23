import {
  DeleteOutlineOutlined as Delete,
  LightbulbOutlined as LightBulb,
  ArchiveOutlined as Archive,
  NotificationsNoneOutlined as Notification,
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
      name: "Reminders",
      icon: <Notification />,
    },
    {
      id: 3,
      name: "Archive",
      icon: <Archive />,
    },
    {
      id: 4,
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
