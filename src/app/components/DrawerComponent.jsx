"use client";
import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItemButton from "@mui/material/ListItemButton";
import Badge from "@mui/material/Badge";
import { styled } from "@mui/material/styles";
import IconButton from "@mui/material/IconButton";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import GetStartedButton from "./buttons/GetStratedButton";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { Button } from "@mui/material";
import FavoriteBorder from "@mui/icons-material/FavoriteBorder";
import Favorite from "@mui/icons-material/Favorite";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import Checkbox from "@mui/material/Checkbox";
export default function DrawerComponent() {
  const [open, setOpen] = React.useState(false);
  const label = { inputProps: { "aria-label": "Checkbox demo" } };
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
    {
      name: "Steel mansion Jamaican Cresent",
      location: "Lagos",
      price: "10,000,000",
    },
  ];

  const usersFavourite2 = [];

  const DrawerList = (
    <Box sx={{ width: 300 }} role="presentation">
      {usersFavourite2.length <= 0 ? (
        <>
          <div className="h-screen flex justify-center items-center">
            <div className="w-full h-full my-10 flex justify-center items-center">
              <div>
                <p className="text-sm">Nothing to show at the moment</p>
                <div className="flex justify-center items-center">
                  <GetStartedButton
                    text={"Explore"}
                    param={"all-properties"}
                    type={"all"}
                  />
                </div>
              </div>
            </div>
          </div>
        </>
      ) : (
        <>
          <div className="flex flex-col gap-2">
            <div className="my-2">
              <h1 className="text-center text-xl md:text-2xl font-bold text-[#404b82] py-4 px-6 bg-white border-b-4 border-[#404b82] shadow-lg rounded-lg tracking-wide">
                My Favorites <FavoriteIcon />
              </h1>
            </div>
            <div className="p-2">
              <List>
                {usersFavourite2.map((item, index) => (
                  <div key={index}>
                    <div className="flex items-center justify-between line-clamp-1">
                      <div className="flex items-center">
                        <span className="text-xs text-[#404b82] pr-1">
                          ({index + 1})
                        </span>{" "}
                        <span className="text-sm text-[#404b82]">
                          {item.name}
                        </span>{" "}
                        <span className="h-10 w-[0.1rem] bg-slate-400 mx-1"></span>
                        <p className="text-gray-700 text-sm flex items-center">
                          <LocationOnIcon
                            fontSize="small"
                            sx={{ color: "#404b82" }}
                          />
                          {item.location}.
                        </p>
                      </div>
                      <Checkbox
                        {...label}
                        icon={
                          <FavoriteBorder
                            sx={{ color: "#ff8433" }}
                            fontSize="small"
                          />
                        }
                        checkedIcon={<Favorite fontSize="small" />}
                      />
                    </div>
                    <Divider />
                  </div>
                ))}
              </List>
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
        </>
      )}
    </Box>
  );

  return (
    <div>
      <IconButton onClick={toggleDrawer(true)}>
        <StyledBadge
          badgeContent={0}
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
