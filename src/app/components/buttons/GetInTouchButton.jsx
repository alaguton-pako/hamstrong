"use client";
import { Button } from "@mui/material";
import { WhatsApp } from "@mui/icons-material";

const GetInTouchButton = ({ message, imageUrl, text }) => {
  const phoneNumber = "2347035648652";
  const handleClick = () => {
    let url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      message
    )}`;
    if (imageUrl) {
      url += `%0A${encodeURIComponent(imageUrl)}`;
    }
    window.open(url, "_blank");
  };

  return (
    <div>
      <Button
        endIcon={<WhatsApp />}
        variant="contained"
        sx={{
          bgcolor: "#e99767",
          marginY: "1rem",
          textTransform: "initial",
          borderColor: "#ff8433",
          fontWeight: "600",
          color: "#fff",
          "&:hover": {
            backgroundColor: "#ff8433",
            color: "#fff",
            borderColor: "#ff8433",
          },
        }}
        onClick={handleClick}
      >
        {text}
      </Button>
    </div>
  );
};

export default GetInTouchButton;
