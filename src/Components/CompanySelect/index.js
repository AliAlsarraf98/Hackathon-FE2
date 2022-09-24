import React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

const CompanySelect = ({ company, onSelectCompany }) => {
  return (
    <Box sx={{ width: 200, marginBottom: 2 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Company Name</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={company}
          label="Company"
          onChange={onSelectCompany}
        >
          <MenuItem value={10}>Ledger</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
};

export default CompanySelect;
