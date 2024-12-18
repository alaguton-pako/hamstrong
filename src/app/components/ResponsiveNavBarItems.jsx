import * as React from "react";
import ListSubheader from "@mui/material/ListSubheader";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Collapse from "@mui/material/Collapse";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import AttachMoneyOutlined from "@mui/icons-material/AttachMoneyOutlined";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";
import HomeWorkIcon from "@mui/icons-material/HomeWork";
import RequestPageIcon from "@mui/icons-material/RequestPage";
import Link from "next/link";
import AddPostModal from "./AddPostModal";

export default function MobileNavBarItem() {
  const [open, setOpen] = React.useState({
    buy: false,
    rent: false,
    shortlet: false,
    request: false,
  });

  const handleClick = (category) => {
    setOpen((prevOpen) => ({ ...prevOpen, [category]: !prevOpen[category] }));
  };

  return (
    <List
      sx={{}}
      component="nav"
      aria-labelledby="nested-list-subheader"
      subheader={
        <ListSubheader
          component="div"
          id="nested-list-subheader"
          sx={{ bgcolor: "#ff9a5e", color: "#fff" }}
        >
          Hamstrong Realty Limited
        </ListSubheader>
      }
    >
      {/* Buy Section */}
      <ListItemButton onClick={() => handleClick("buy")}>
        <ListItemIcon>
          <AttachMoneyOutlined
            sx={{ color: open.buy ? "#ff9a5e" : "text.secondary" }}
          />
        </ListItemIcon>
        <ListItemText
          primary="Buy"
          sx={{
            color: open.buy ? "#ff9a5e" : "text.secondary",
          }}
          primaryTypographyProps={{
            fontSize: "0.9rem",
          }}
        />

        {open.buy ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={open.buy} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          {["House", "Land", "Commercial Property", "All Properties"].map(
            (item) => (
              <ListItemButton key={item} sx={{ pl: 4 }}>
                <Link
                  href={{
                    pathname: `/properties/${item
                      .toLowerCase()
                      .replace(/\s+/g, "-")}`,
                    query: { type: "sale" },
                  }}
                >
                  <ListItemText
                    primary={item}
                    sx={{ color: "text.primary" }}
                    primaryTypographyProps={{
                      fontSize: "0.8rem",
                    }}
                  />
                </Link>
              </ListItemButton>
            )
          )}
        </List>
      </Collapse>

      {/* Rent Section */}
      <ListItemButton onClick={() => handleClick("rent")}>
        <ListItemIcon>
          <LocalOfferIcon
            sx={{ color: open.rent ? "#ff9a5e" : "text.secondary" }}
          />
        </ListItemIcon>
        <ListItemText
          primary="Rent"
          sx={{ color: open.rent ? "#ff9a5e" : "text.secondary" }}
          primaryTypographyProps={{
            fontSize: "0.9rem",
          }}
        />
        {open.rent ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={open.rent} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          {["House", "Land", "Commercial Property", "All Properties"].map(
            (item) => (
              <ListItemButton key={item} sx={{ pl: 4 }}>
                <Link
                  href={{
                    pathname: `/properties/${item
                      .toLowerCase()
                      .replace(/\s+/g, "-")}`,
                    query: { type: "rent" },
                  }}
                >
                  <ListItemText
                    primary={item}
                    sx={{ color: "text.primary" }}
                    primaryTypographyProps={{
                      fontSize: "0.8rem",
                    }}
                  />
                </Link>
              </ListItemButton>
            )
          )}
        </List>
      </Collapse>

      {/* Shortlet Section */}
      <ListItemButton onClick={() => handleClick("shortlet")}>
        <ListItemIcon>
          <HomeWorkIcon
            sx={{ color: open.shortlet ? "#ff9a5e" : "text.secondary" }}
          />
        </ListItemIcon>
        <ListItemText
          primary="Shortlet"
          sx={{ color: open.shortlet ? "#ff9a5e" : "text.secondary" }}
          primaryTypographyProps={{
            fontSize: "0.9rem",
          }}
        />
        {open.shortlet ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={open.shortlet} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          {[
            "Shortlet Abuja",
            "Shortlet Lagos",
            "Shortlet Ibadan",
            "All Shortlet",
          ].map((item) => (
            <ListItemButton key={item} sx={{ pl: 4 }}>
              <Link
                href={{
                  pathname: `/properties/${item
                    .toLowerCase()
                    .replace(/\s+/g, "-")
                    .replace("all-shortlet", "shortlet-all")}`,
                  query: { type: "shortlet" },
                }}
              >
                <ListItemText
                  primary={item}
                  sx={{ color: "text.primary", fontSize: "0.1rem" }}
                  primaryTypographyProps={{
                    fontSize: "0.8rem",
                  }}
                />
              </Link>
            </ListItemButton>
          ))}
        </List>
      </Collapse>

      {/* Request Section */}
      <ListItemButton onClick={() => handleClick("request")}>
        <ListItemIcon>
          <RequestPageIcon
            sx={{ color: open.request ? "#ff9a5e" : "text.secondary" }}
          />
        </ListItemIcon>
        <ListItemText
          primary="Request"
          sx={{ color: open.request ? "#ff9a5e" : "text.secondary" }}
          primaryTypographyProps={{
            fontSize: "0.9rem",
          }}
        />
        {open.request ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={open.request} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
       
            <AddPostModal />
          <ListItemButton sx={{ pl: 4 }}>
            <Link href={"/requests"}>
              <ListItemText
                primary="View Request"
                sx={{ color: "text.primary", fontSize: "0.1rem" }}
                primaryTypographyProps={{
                  fontSize: "0.8rem",
                }}
              />
            </Link>
          </ListItemButton>
        </List>
      </Collapse>
    </List>
  );
}
