import { useEffect, useState } from 'react';
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

    useEffect(() => {

        if (tipePeta === '1') {
            setMapUrl('http://mt0.google.com/vt/lyrs=s,h&x={x}&y={y}&z={z}')
        } else if (tipePeta === '2') {
            setMapUrl('http://mt0.google.com/vt/lyrs=m&x={x}&y={y}&z={z}')
        } else if (tipePeta === '3') {
            setMapUrl('https://{s}.tile.openstreetmap.fr/osmfr/{z}/{x}/{y}.png')
            console.log("peta openstreet")
        }

    }, [mapUrl, tipePeta])

    const center = [-2.735488799778783, 102.90157669923218]


    return (
        <>
            {console.log(mapUrl)}
            <MapContainer center={center} zoom={13} scrollWheelZoom={true}>
                <TileLayer
                    url={mapUrl}
                />

            </MapContainer>
        </>
    )
}