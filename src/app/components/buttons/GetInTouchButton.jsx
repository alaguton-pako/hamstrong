"use client";
import { Button } from "@mui/material";
import { WhatsApp } from "@mui/icons-material";

const GetInTouchButton = ({
  message,
  imageUrl,
  text,
  phoneNumber: customPhoneNumber,
}) => {
  const defaultPhoneNumber = "2347035648652"; // Default number

  // Function to ensure country code is present
  const formatPhoneNumber = (number) => {
    if (!number) return defaultPhoneNumber; // Fallback if no number is provided

    // Check if the number starts with '234' (Nigeria's country code)
    return number.startsWith("234") ? number : `234${number}`;
  };

  const phoneNumber = formatPhoneNumber(
    customPhoneNumber || defaultPhoneNumber
  ); // Ensure valid number

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
