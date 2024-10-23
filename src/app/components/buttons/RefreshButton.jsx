import Link from "next/link";
import { Button } from "@mui/material";
import { Refresh } from "@mui/icons-material";
const Refreshbutton = () => {
  return (
    <div>
      <Link href="/">
        <Button
          variant="contained"
          startIcon={<Refresh />}
          sx={{
            textTransform: "initial",
          }}
        >
          refresh
        </Button>
      </Link>
    </div>
  );
};

export default Refreshbutton;