import react from "react"
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api"

const Map = () => {
    const {} = useLoadScript({googleMapsApiKey: " "});
    return(
      <div className="General-Map-Container"></div>
    )
}

export default Map