import Box from "@mui/material/Box";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

export default function DropDownComponent({ value, onChange, options = [] }) {
  return (
    <div className="w-full md:w-[9rem]">
      <FormControl fullWidth>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={value}
          onChange={onChange}
          size="small"
          fullWidth
        >
          {options.map((option, index) => (
            <MenuItem
              sx={{
                fontSize: "0.8rem",
                width: "100%",
              }}
              key={index}
              value={option.value}
            >
              {option.label}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
}
