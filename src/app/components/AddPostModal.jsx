import * as React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import AddPost from "./AddPost";
import { ListItemButton, ListItemText } from "@mui/material";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  bgcolor: "background.paper",
  border: "1px solid #ffccaa",
  boxShadow: 24,
  p: 4,
  maxHeight: "80vh", // Set maximum height
  overflowY: "auto", // Make it scrollable if content exceeds maxHeight
  borderRadius: "8px", // Optional: Add rounded corners for better UI
};

export default function AddPostModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <li className="block md:hidden">
        <ListItemButton onClick={handleOpen} sx={{ pl: 4 }}>
          <ListItemText
            primary="Make Request"
            sx={{ color: "text.primary", fontSize: "0.1rem" }}
            primaryTypographyProps={{
              fontSize: "0.8rem",
            }}
          />
        </ListItemButton>
      </li>
      <li
        onClick={handleOpen}
        className="hidden md:block py-2 px-4 hover:bg-[#ff9a5e] hover:text-white hover:rounded-md cursor-pointer transition duration-200"
      >
        Post a Request
      </li>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <AddPost setOpen={setOpen} />
        </Box>
      </Modal>
    </div>
  );
}
