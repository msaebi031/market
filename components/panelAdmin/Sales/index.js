import { Grid } from "@mui/material";
import {Sales} from "./Sales";
import { TraficTotal } from "./TraficTotal";

const Nemodar = () => {
    return ( 
        <Grid container spacing={2}>
            <Grid item xs={12} md={8}>
               <Sales />
            </Grid>
            <Grid item xs={12} md={4}>
                <TraficTotal />
            </Grid>
        </Grid>
     );
}
 
export default Nemodar;