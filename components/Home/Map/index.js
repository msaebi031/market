import { Fragment } from "react";
import Adress from "./Adress";
import NeshanMap from "./Map";

const Map = () => {
    return (
        <Fragment>
            <Adress />
            <NeshanMap
                options={{
                    key: 'web.F0lx0ByUPF3E4UQ0ou6TKcfrT1guDYilNeLUG7Em',
                    center: [32.809634, 50.947303],
                    zoom: 15
                }}
                onInit={(L, myMap) => {
                    let marker = L.marker([32.809634, 50.947303])
                        .addTo(myMap)
                        .bindPopup('ما اینجا هستیم.');

                    // myMap.on('click', function (e) {
                    //     marker.setLatLng(e.latlng)
                    // });

                    L.circle([32.809634, 50.947303], {
                        color: 'red',
                        fillColor: '#f03',
                        fillOpacity: 0.2,
                        radius: 500
                    }).addTo(myMap);
                }}
            />
        </Fragment>
    );
};

export default Map;
