"use client";
import Badge from "@mui/material/Badge";
import { styled } from "@mui/material/styles";
import IconButton from "@mui/material/IconButton";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    right: -3,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: "0 4px",
  },
}));

export default function FavouriteComponent() {
  const handleClick = () => {
    alert("users will be able to find marked as favourite here");
  };
  return (
    <IconButton onClick={handleClick}>
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
  );
}