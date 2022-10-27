import React from "react";
import { VectorMap } from "react-jvectormap";
import "./mapStyles.css";

const mapData = {
  //DE: 0
};


const MapNew = () => {
  return (
      <VectorMap
        map={"usIlChicagoMill"}
        backgroundColor="transparent" //change it to ocean blue: #0077be
        zoomOnScroll={true}
        containerStyle={{
          width: "100%",
          height: "500px"
        }}
 //gets the country code
        containerClassName="map"
      />
  );
};

export default MapNew
