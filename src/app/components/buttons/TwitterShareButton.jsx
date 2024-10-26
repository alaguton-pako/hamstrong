// components/TwitterShareButton.js
import React from "react";
import IconButton from "@mui/material/IconButton";
import XIcon from "@mui/icons-material/X";
import { Tooltip } from "@mui/material";

const TwitterShareButton = ({ title, description, url }) => {
  const handleShare = () => {
    const twitterText = `${title} - ${description}`;
    const twitterUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(
      twitterText
    )}&url=${encodeURIComponent(url)}`;
    window.open(twitterUrl, "_blank");
  };

  return (
    <Tooltip title="share on X" arrow>
      <IconButton onClick={handleShare}>
        <XIcon sx={{ color: "#ff8433" }} fontSize="small" />
      </IconButton>
    </Tooltip>
  );
};

export default TwitterShareButton;
