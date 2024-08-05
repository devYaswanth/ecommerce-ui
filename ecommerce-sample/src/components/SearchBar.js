import React from 'react';
import { TextField, IconButton } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

function SearchBar({ onSearch }) {
  return (
    <div>
      <TextField
        label="Search"
        sx={{ mb: 2, ml:2 }}
        onChange={(e) => onSearch(e.target.value)}
        InputProps={{
          endAdornment: (
            <IconButton>
              <SearchIcon />
            </IconButton>
          ),
        }}
      />
    </div>
  );
}

export default SearchBar;
