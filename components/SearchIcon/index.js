import { SearchOutlined } from "@mui/icons-material";
import { Box, IconButton, List, ListItemButton } from "@mui/material";
import { useState } from "react";
import { useSelector } from "react-redux";

const SearchIcon = () => {
  const { product } = useSelector((state) => state);
  const [useSearch, setUseSearch] = useState("");
  const filteredCart = product.filter((p) => p.name.includes(useSearch));

  //   const patch = window.location.pathname.split("/");
  //  console.log();

  return (
    <Box display="block" className="w-100">
      <Box className="search-box">
        <input
          onChange={(e) => setUseSearch(e.target.value)}
          className="search-box__input"
          placeholder="سرچ"
        />
        <IconButton className="search-box__icon">
          <SearchOutlined className="iconFont navbar-hover" />
        </IconButton>
      </Box>
      {useSearch ? (
        <List
          className="search-box__list"
          variant="outlined"
          sx={{
            position: "absolute",
            // top: 55,
            // left: 193,
            borderRadius: "sm",
            maxWidth: 340,
          }}
        >
          {filteredCart.map((item, index) => (
            <ListItemButton key={index} href={`/showcart?search=${item.name}`}>
              {item.name}
            </ListItemButton>
          ))}
        </List>
      ) : (
        ""
      )}
    </Box>
  );
};

export default SearchIcon;
