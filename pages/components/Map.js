import { useEffect, useState } from 'react'
import tw from "tailwind-styled-components"
import mapboxgl from '!mapbox-gl';

mapboxgl.accessToken = 
'pk.eyJ1Ijoic2ltaW9uYW5kcmVpMjMiLCJhIjoiY2tzMHJ4Z3VhMTV1azJvbXJpdWV4Y29qdCJ9.-laa7PjlsPwLFYKdR-OMVg';

function Map( {pickupCoordinates,dropoffCoordinates}) {


    useEffect(() => {
       const map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/simionandrei23/ckvmbjwgo361y15qtvrzxv62v',
        center: [44.439663, 26.096306],
        zoom: 3,
        });

        if(pickupCoordinates) {

            addToMap(map, pickupCoordinates)

        }

        if(dropoffCoordinates) {

            addToMap(map, dropoffCoordinates)

        }

        if(pickupCoordinates && dropoffCoordinates) {
            map.fitBounds([
                pickupCoordinates, dropoffCoordinates
            ], {
                padding: 80
            })
        }

      }, [pickupCoordinates, dropoffCoordinates]);

      const addToMap = (map, pickupCoordinates, dropoffCoordinates) => {

        const marker1 = new mapboxgl.Marker()
            .setLngLat(pickupCoordinates, dropoffCoordinates)
            .addTo(map);

      }

      

    return (
        <Wrapper id = 'map'>
            
        </Wrapper>
    )
}

const Wrapper = tw.div`

    flex flex-col flex-1

`

export default Map
