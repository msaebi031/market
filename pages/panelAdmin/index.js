import LayoutPanel from "../../components/panelAdmin/Layout";

import Budget from "../../components/panelAdmin/Budget";
import Nemodar from "../../components/panelAdmin/Sales";
import { LastOrder } from "../../components/panelAdmin/LastOrder";

const panelAdmin = () => {
  return (
    <LayoutPanel>
      <Budget />
      <Nemodar />
      <LastOrder />
    </LayoutPanel>
  );
};

export default panelAdmin;
