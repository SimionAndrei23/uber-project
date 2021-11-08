import { useState,useEffect } from 'react'
import tw from "tailwind-styled-components"
import Map from './components/Map'
import { useRouter } from 'next/router'
import RideSelector from './components/RideSelector'
import Link from 'next/Link'


const confirm =  () => {

    const router = useRouter()

    const { pickup,dropoff } = router.query

    const [pickupCoordinates, setPickupCoordinates] = useState([0,0])
    const [dropoffCoordinates, setDropoffCoordinates] = useState([0,0])


    const getPickupCoordinates = async (pickup) => {



        await fetch(`https://api.mapbox.com/geocoding/v5/mapbox.places/${pickup}.json?` +
            new URLSearchParams({
                access_token: 'pk.eyJ1Ijoic2ltaW9uYW5kcmVpMjMiLCJhIjoiY2tzMHJ4Z3VhMTV1azJvbXJpdWV4Y29qdCJ9.-laa7PjlsPwLFYKdR-OMVg',
                limit: 1

            })
        )
        .then(response => response.json())
        .then(data => setPickupCoordinates(data?.features[0]?.center))

    }

    const getDropOFFCoordinates = async (dropoff) => {


        await fetch(`https://api.mapbox.com/geocoding/v5/mapbox.places/${dropoff}.json?` +
            new URLSearchParams({
                access_token: 'pk.eyJ1Ijoic2ltaW9uYW5kcmVpMjMiLCJhIjoiY2tzMHJ4Z3VhMTV1azJvbXJpdWV4Y29qdCJ9.-laa7PjlsPwLFYKdR-OMVg',
                limit: 1

            })
        )
        .then(response => response.json())
        .then(data => setDropoffCoordinates(data?.features[0]?.center))

    }

    useEffect(() => {
        getPickupCoordinates(pickup)
        getDropOFFCoordinates(dropoff)
    },[pickup,dropoff])

    return (
        <Wrapper>
            <ButtonContainer>
                <Link href = '/search'>
                    <BackButton src = 'https://img.icons8.com/material-outlined/344/back.png' />
                </Link>
            </ButtonContainer>
           <Map pickupCoordinates={pickupCoordinates} dropoffCoordinates = {dropoffCoordinates} />
           <RideSelector pickupCoordinates={pickupCoordinates} dropoffCoordinates = {dropoffCoordinates} />
        </Wrapper>
    )
}

const Wrapper = tw.div`
    flex flex-col min-h-screen
`
const ButtonContainer = tw.div`
    absolute top-4 left-4 z-10 rounded-full bg-white box-shadow cursor-pointer
`

const BackButton = tw.img`
    h-10 w-10 object-cover
`

export default confirm
