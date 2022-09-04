import { LastOrder } from "../../../components/panelAdmin/LastOrder";
import LayoutPanel from "../../../components/panelAdmin/Layout";
const OrdersNow = () => {
  return (
    <LayoutPanel>
      <LastOrder now />
    </LayoutPanel>
  );
};

export default OrdersNow;
