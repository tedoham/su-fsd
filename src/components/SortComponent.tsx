import * as React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { sortedItems } from "../../utils/util";


const SortComponent = ({sortBy, handleItemChange}: any) => {
  return (
    <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Sort Data</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={sortBy}
              label="Sort Data"
              onChange={(ev) => handleItemChange(ev)}
            >
              {sortedItems &&
                sortedItems.map((item: any) => (
                  <MenuItem key={item.name} value={item.name}>
                    {item.title}
                  </MenuItem>
                ))}
            </Select>
          </FormControl>
  )
}

export default SortComponent