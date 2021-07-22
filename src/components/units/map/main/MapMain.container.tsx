import React from "react";
import MapUI from "./MapMain.presenter";

const Map = () => {
  const [title, setTitle] = React.useState("");

  return <MapUI title={title} setTitle={setTitle} />;
};

export default Map;
