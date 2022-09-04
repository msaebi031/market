import { Avatar, Badge } from "@mui/material";
import Link from "next/link";
import ShoppingCartCheckoutIcon from "@mui/icons-material/ShoppingCartCheckout";
import { useSelector } from "react-redux";

const Fixed = () => {
  const { cart } = useSelector((state) => state);
  return (
    <Link href="/buygoods">
      <Avatar className="avatar-header curser-pointer">
        <Badge badgeContent={cart.length} color="dark">
          <ShoppingCartCheckoutIcon className="size-fixed" />
        </Badge>
      </Avatar>
    </Link>
  );
};

export default Fixed;
