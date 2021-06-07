import React, { useState } from "react";
import {
  AppBar,
  Divider,
  Drawer,
  IconButton,
  Toolbar,
  Tooltip,
  Typography,
} from "../modules/materialUI-module";
import {
  BookIcon,
  ChevronLeftIcon,
  HomeIcon,
  MenuIcon,
  PeopleIcon,
} from "../modules/iconsUI-module";
import { useHistory } from "react-router-dom";
export default function AppTopBar() {
  const [open, setOpen] = useState(false);

  let history = useHistory();

  const handleRedirect = (path) => {
    history.push(path);
  };

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };
  return (
    <div className="ba-appTopBar">
      <AppBar position="static">
        <Toolbar>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            onClick={handleDrawerOpen}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6">Blog App</Typography>
        </Toolbar>
      </AppBar>
      <Drawer variant="persistent" anchor="left" open={open}>
        <IconButton onClick={handleDrawerClose}>
          <ChevronLeftIcon />
        </IconButton>
        <Tooltip title="Home page">
          <IconButton onClick={() => handleRedirect("/home")}>
            <HomeIcon />
          </IconButton>
        </Tooltip>
        <Tooltip title="Posts">
          <IconButton onClick={() => handleRedirect("/posts")}>
            <BookIcon />
          </IconButton>
        </Tooltip>
        <Tooltip title="Users" onClick={() => handleRedirect("/users")}>
          <IconButton>
            <PeopleIcon />
          </IconButton>
        </Tooltip>
        <Divider />
      </Drawer>
    </div>
  );
}
