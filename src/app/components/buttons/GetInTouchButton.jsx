import { Button } from "@mui/material";
import { WhatsApp } from "@mui/icons-material";

const GetInTouchButton = () => {
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
      >
        Ready to Close a Deal?
      </Button>
    </div>
  );
};

export default GetInTouchButton;