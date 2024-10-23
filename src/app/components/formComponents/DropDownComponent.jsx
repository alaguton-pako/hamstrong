import Box from "@mui/material/Box";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

export default function DropDownComponent({ value, onChange, options = [] }) {
  return (
    <Box sx={{ width: "9rem" }}>
      <FormControl fullWidth>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={value}
          onChange={onChange}
          size="small"
        >
          {options.map((option, index) => (
            <MenuItem
              sx={{
                fontSize: "0.8rem",
              }}
              key={index}
              value={option.value}
            >
              {option.label}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
}
