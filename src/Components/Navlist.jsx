import {
  DeleteOutlineOutlined as Delete,
  LightbulbOutlined as LightBulb,
} from "@mui/icons-material";
import { List, ListItem, ListItemIcon, ListItemText } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
const Navlist = () => {
  const navList = [
    {
      id: 1,
      name: "Notes",
      icon: <LightBulb />,
      route: "/",
    },
    {
      id: 2,
      name: "Trash",
      icon: <Delete />,
      route: "/delete",
    },
  ];
  return (
    <>
      <List>
        {navList.map((list) => (
          <ListItem button key={list.id}>
            <Link
              to={list.route}
              style={{
                textDecoration: "none",
                display: "flex",
                color: "inherit",
              }}
            >
              <ListItemIcon style={{ alignItems: "center" }}>
                {list.icon}
              </ListItemIcon>
              <ListItemText primary={list.name} />
            </Link>
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default Navlist;
