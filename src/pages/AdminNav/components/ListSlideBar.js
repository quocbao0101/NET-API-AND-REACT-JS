import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import React, { useState } from "react";
import clsx from "clsx";
import { Link } from "react-router-dom";
import { Collapse } from "@material-ui/core";
import { useStyles } from "./Constants";
import { listMenuData } from "./Constants";



function ListSlideBar({ location, drawerOpen }) {
  const classes = useStyles();
  const [activeKey, setActiveKey] = useState("");
  const handleSetActiveKey = (key) => {
    console.log(key)
    if (activeKey === key) {
      setActiveKey("");
    } else {
      setActiveKey(key);
    }
  };
  return (
    <div className={classes.root}>
      <List component="nav" aria-label="main mailbox folders">
        {listMenuData.map((element) => (
          <div key={element.key}>
            <ListItem
              key={element.key}
              component={Link}
              to={element.path}
              button
              onClick={() => handleSetActiveKey(element.key)}
              className={clsx(classes.listItem, {
                [classes.activeMenu]:
                  activeKey === element.key ||
                  location.pathname === element.path,
              })}
            >
              <ListItemIcon>
                <span className={(
                  activeKey === element.key
                  || location.pathname === element.path) ? classes.icon : ''}>
                  {element.icon}
                </span>
              </ListItemIcon>
              <ListItemText primary={element.name} />
            </ListItem>

            <Collapse
              in={activeKey === element.key && drawerOpen}
              timeout="auto"
              unmountOnExit
            >
              <List component="div" disablePadding>
                {Array.isArray(element.subMenu) &&
                  element.subMenu.map((item) => (
                    <ListItem
                      key={item.key}
                      component={Link}
                      to={item.path}
                      button
                      className={clsx(classes.listSubItem, {
                        [classes.activeSubMenu]: location.pathname === item.path,
                      })}
                    >
                      <ListItemText primary={item.name} />
                    </ListItem>
                  ))}
              </List>
            </Collapse>
          </div>
        ))}
      </List>
    </div>
  );
}

export default ListSlideBar;
