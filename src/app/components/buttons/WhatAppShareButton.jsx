// components/WhatsAppShareButton.js
import React from "react";
import IconButton from "@mui/material/IconButton";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import { Tooltip } from "@mui/material";

const WhatsAppShareButton = ({ title, description, url }) => {
  const handleShare = () => {
    const whatsappText = `${title} - ${description} ${url}`;
    const whatsappUrl = `https://wa.me/?text=${encodeURIComponent(
      whatsappText
    )}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <Tooltip title="share on whatsapp" arrow>
      <IconButton onClick={handleShare}>
        <WhatsAppIcon sx={{ color: "#25D366" }} fontSize="small" />
      </IconButton>
    </Tooltip>
  );
};

export default WhatsAppShareButton;
