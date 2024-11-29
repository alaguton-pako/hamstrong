import React from "react";
import IconButton from "@mui/material/IconButton";
import LinkIcon from "@mui/icons-material/Link";
import { Tooltip } from "@mui/material";
import { toast } from "react-toastify";

const CopyToClipboardButton = ({ uuid }) => {
  const baseUrl =
    "https://hamstrongrealty.netlify.app/properties/all-properties";
  const propertyUrl = `${baseUrl}/${uuid}`;

  const handleCopy = () => {
    navigator.clipboard
      .writeText(propertyUrl)
      .then(() => {
        toast.info("Link copied to clipboard!");
      })
      .catch((err) => {
        console.error("Failed to copy: ", err);
        toast.error("Failed to copy at the moment, please try again later");
      });
  };

  return (
    <Tooltip title="copy link" arrow>
      <IconButton onClick={handleCopy}>
        <LinkIcon sx={{ color: "#555" }} fontSize="small" />
      </IconButton>
    </Tooltip>
  );
};

export default CopyToClipboardButton;
