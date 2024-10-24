"use client";
import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import Badge from "@mui/material/Badge";
import { styled } from "@mui/material/styles";
import IconButton from "@mui/material/IconButton";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import GetStartedButton from "./buttons/GetStratedButton";

export default function DrawerComponent() {
  const [open, setOpen] = React.useState(false);

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

  const DrawerList = (
    <Box sx={{ width: 300 }} role="presentation" onClick={toggleDrawer(false)}>
      <div className="h-screen flex justify-center items-center">
        <div className="w-full h-full my-10 flex justify-center items-center">
          <div>
            <p className="text-sm">Nothing to show at the moment</p>
            <div className="flex justify-center items-center">
              <GetStartedButton text={"Explore"} />
            </div>
          </div>
        </div>
      </div>
      {/* <List>Ahmeds House</List>
      <Divider />
      <List>Kunle House</List>
      <Divider /> */}
    </Box>
  );

  return (
    <div>
      <IconButton onClick={toggleDrawer(true)}>
        <StyledBadge
          badgeContent={4}
          color="success"
          anchorOrigin={{
            vertical: "top",
            horizontal: "right",
          }}
        >
          <ShoppingCartIcon fontSize="large" sx={{ color: "#ff8433" }} />
        </StyledBadge>
      </IconButton>
      <Drawer open={open} onClose={toggleDrawer(false)}>
        {DrawerList}
      </Drawer>
    </div>
  );
}
