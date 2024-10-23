import Link from "next/link";
import { Button } from "@mui/material";

const GetStartedButton = ({ text, filter, param }) => {
  const href = filter
    ? {
        pathname: `/properties/${param}`,
        query: { filter },
      }
    : `/properties/${param}`;
  return (
    <div>
      <Link href={href}>
        <Button
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
          {text}
        </Button>
      </Link>
    </div>
  );
};

export default GetStartedButton;