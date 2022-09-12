import { useEffect, useState, useRef } from 'react';
import {
    MapContainer,
    TileLayer,
    LayersControl,
    LayerGroup,
    FeatureGroup,
    Marker,
    Circle,
    Popup,

} from 'react-leaflet'

export default function Maps(props) {

    const tipePeta = props.tipePeta;
    const [mapUrl, setMapUrl] = useState("http://mt0.google.com/vt/lyrs=s,h&x={x}&y={y}&z={z}")
    const ref = useRef(null);

    useEffect(() => {

        var mapUrls;

        if (tipePeta === '1') {
            mapUrls = 'http://mt0.google.com/vt/lyrs=s,h&x={x}&y={y}&z={z}'
            setMapUrl(mapUrls)
        } else if (tipePeta === '2') {
            mapUrls = 'http://mt0.google.com/vt/lyrs=m&x={x}&y={y}&z={z}'
            setMapUrl(mapUrls)
        } else if (tipePeta === '3') {
            mapUrls = 'https://{s}.tile.openstreetmap.fr/osmfr/{z}/{x}/{y}.png'
            setMapUrl(mapUrls)
            console.log("peta openstreet")
        }

        if (ref.current) {
            ref.current.setUrl(mapUrls);
        }

    }, [mapUrl, tipePeta])

    const center = [-2.735488799778783, 102.90157669923218]


    return (
        <>
            {console.log(mapUrl)}
            <MapContainer center={center} zoom={13} scrollWheelZoom={true}>
                <TileLayer
                    ref={ref}
                    url={mapUrl}
                />

            </MapContainer>
        </>
    )
}