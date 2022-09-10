import { IconButton, OutlinedInput } from "@mui/material";
import { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";

const ProductSearch = ({ handleSearch }) => {
  const [searchItem, setUseSearch] = useState("");

  return (
    <OutlinedInput
      placeholder="نام محصول را وارد کنید ..."
      className="product-Search font-light"
      onChange={(e) => setUseSearch(e.target.value)}
      value={searchItem}
      endAdornment={
        <IconButton position="end" onClick={() => handleSearch(searchItem)}>
          <SearchIcon color="warning" />
        </IconButton>
      }
      fullWidth
    />
  );
};
export default ProductSearch;
