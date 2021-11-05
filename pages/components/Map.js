import { useEffect } from 'react'
import tw from "tailwind-styled-components"
import mapboxgl from '!mapbox-gl';

mapboxgl.accessToken = 
'pk.eyJ1Ijoic2ltaW9uYW5kcmVpMjMiLCJhIjoiY2tzMHJ4Z3VhMTV1azJvbXJpdWV4Y29qdCJ9.-laa7PjlsPwLFYKdR-OMVg';

function Map() {

    useEffect(() => {
       const map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/simionandrei23/ckvmbjwgo361y15qtvrzxv62v',
        center: [ 26.10626, 44.43225],
        zoom: 3,
        });
      });

    return (
        <Wrapper id = 'map'>
            
        </Wrapper>
    )
}

const Wrapper = tw.div`

    flex-1

`

export default Map
