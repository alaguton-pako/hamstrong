// components/FacebookShareButton.js
import React from "react";
import IconButton from "@mui/material/IconButton";
import FacebookIcon from "@mui/icons-material/Facebook";
import { Tooltip } from "@mui/material";

const FacebookShareButton = ({ title, description, url }) => {
  const handleShare = () => {
    const facebookUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
      url
    )}&quote=${encodeURIComponent(`${title} - ${description}`)}`;
    window.open(facebookUrl, "_blank");
  };

  return (
    <Tooltip title="share on facebook" arrow>
      <IconButton onClick={handleShare}>
        <FacebookIcon sx={{ color: "#ff8433" }} fontSize="small" />
      </IconButton>
    </Tooltip>
  );
};

export default FacebookShareButton;
