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
import FavoriteIcon from "@mui/icons-material/Favorite";
import { Button } from "@mui/material";

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

  const usersFavourite = [
    { name: "Lekki Golf House", location: "kado, Abuja", price: "40,000,000" },
  ];

  const DrawerList = (
    <Box sx={{ width: 300 }} role="presentation" onClick={toggleDrawer(false)}>
      {/* <div className="h-screen flex justify-center items-center">
        <div className="w-full h-full my-10 flex justify-center items-center">
          <div>
            <p className="text-sm">Nothing to show at the moment</p>
            <div className="flex justify-center items-center">
              <GetStartedButton text={"Explore"} />
            </div>
          </div>
        </div>
      </div> */}
      <div className="flex flex-col gap-2">
        <div className="my-2">
          <h1 className="text-center text-xl md:text-2xl font-bold text-[#404b82] py-4 px-6 bg-white border-b-4 border-[#404b82] shadow-lg rounded-lg tracking-wide">
            My Favorites <FavoriteIcon />
          </h1>
        </div>
        <div className="p-2">
          <List>
            {["Inbox", "Starred", "Send email", "Drafts"].map((text, index) => (
              <ListItem key={text} disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                  </ListItemIcon>
                  <ListItemText primary={text} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
          <Divider />
        </div>
        <div className="flex justify-center items-center">
          <Button
            size="small"
            variant="contained"
            sx={{ textTransform: "initial", bgcolor: "#404b82" }}
          >
            clear all
          </Button>
        </div>
      </div>
    </Box>
  );

  return (
    <div>
      <IconButton onClick={toggleDrawer(true)}>
        <StyledBadge
          badgeContent={1}
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
