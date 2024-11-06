"use client";
import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Badge from "@mui/material/Badge";
import { styled } from "@mui/material/styles";
import IconButton from "@mui/material/IconButton";
import { useState, useEffect } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close"; // Import the CloseIcon
import MobileNavBarItem from "./ResponsiveNavBarItems";

export default function DrawerComponentTwo() {
  const [open, setOpen] = useState(false);
  const [favorites, setFavorites] = useState([]);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  const StyledBadge = styled(Badge)(({ theme }) => ({
    "& .MuiBadge-badge": {
      right: -3,
      top: 13,
      border: `2px solid ${theme.palette.background.paper}`,
      padding: "0 4px",
    },
  }));

  useEffect(() => {
    const storedFavorites = JSON.parse(localStorage.getItem("favorites")) || [];
    setFavorites(storedFavorites);
  }, []);

  const handleClearFavorites = () => {
    localStorage.removeItem("favorites");
    setFavorites([]);
    setOpen(false);
  };

  const DrawerList = (
    <Box sx={{ width: 200 }} role="presentation">
      <MobileNavBarItem />
    </Box>
  );

  return (
    <div className="block md:hidden">
      <IconButton onClick={toggleDrawer(!open)}>
        {open ? (
          <CloseIcon fontSize="medium" sx={{ color: "#ff8433" }} />
        ) : (
          <MenuIcon fontSize="medium" sx={{ color: "#ff8433" }} />
        )}
      </IconButton>
      <Drawer open={open} onClose={toggleDrawer(false)}>
        {DrawerList}
      </Drawer>
    </div>
  );
}
