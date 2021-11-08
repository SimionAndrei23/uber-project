import Link from 'next/Link'
import { useState, useEffect, useRef } from 'react'
import tw from "tailwind-styled-components"
import { carList } from '../data/carList'
const RideSelector = ( {pickupCoordinates, dropoffCoordinates}) => {

    const [rideDuration, setRideDuration] = useState(0)

    const [pickCar, setPickCar] = useState('')

    const [priceCar, setPriceCar] = useState('')

    const [imageCar, setImageCar] = useState('')

    // Retrive the duration from MAPBOX API based on the coordinates:
    // 1. pickupCoordinates
    // 2.dropoffCoordinates

    // We need 2 pickupCoordinates, one from the X axis and the other one for Y axis to identify the actual pinned location

    useEffect( async () => {
        await fetch(`https://api.mapbox.com/directions/v5/mapbox/driving/${pickupCoordinates[0]},${pickupCoordinates[1]};${dropoffCoordinates[0]},${dropoffCoordinates[1]}?` +
        new URLSearchParams({
            access_token: 'pk.eyJ1Ijoic2ltaW9uYW5kcmVpMjMiLCJhIjoiY2tzMHJ4Z3VhMTV1azJvbXJpdWV4Y29qdCJ9.-laa7PjlsPwLFYKdR-OMVg',
        })
    )
    .then(result => result.json())
    .then(data => setRideDuration(data.routes[0].duration / 100))
    },[pickupCoordinates,dropoffCoordinates])

    const chooseCar = (name, multiplier, imageURL) => {

        setPickCar(name)

        setPriceCar(multiplier)

        setImageCar(imageURL)

    }

    return (
        <RideContainer>
            <RideHeader> Choose a ride, or swipe up for more </RideHeader>
            <RideCars class = 'rideCars'>
                {carList?.map(({index,imageURL, name, multiplier}) => (
                    <CarList onClick = { () => chooseCar(name,multiplier, imageURL)} key = {index}>
                        <CarListImage>
                            <CarImage src = {imageURL} alt = 'imageCar' />
                        </CarListImage>
                        <CarDetails>
                            <Name> {name} </Name>
                            <Time> 5 min away </Time>
                        </CarDetails>
                        <PriceRide>
                            {'$' + (rideDuration * multiplier).toFixed(2)}
                        </PriceRide>
                    </CarList>
                ))}
            </RideCars>
            <ConfirmContainer>
            <Link href = {{
                    pathname: '/final',
                    query: {
                        pickCar: pickCar,
                        multiplier: priceCar,
                        rideDuration: rideDuration,
                        imageCar: imageCar
                    }
                }}>
                <ConfirmButton>
                    Confirm {pickCar}
                </ConfirmButton>
            </Link>  
            </ConfirmContainer>
        </RideContainer>
    )
}

const RideContainer = tw.div`
    flex flex-col
`

const RideHeader = tw.div`
    flex items-center justify-center py-2 border-b
`

const RideCars = tw.div`
   flex flex-col flex-1  h-[27rem] md:h-[30rem] overflow-hidden overflow-y-auto scrollbar-thin scrollbar-thumb-900 scrollbar-track-gray-100
`

const CarList = tw.div`
    flex items-center my-4 px-4 cursor-pointer
`

const CarListImage = tw.div`
`

const CarImage = tw.img`
    h-12 md:h-24  object-cover
`

const CarDetails = tw.div`
    flex flex-1 flex-col justify-center ml-2 md:ml-10
`

const Name = tw.h1`
    font-semibold
`

const Time = tw.span`
    text-blue-400 text-sm
`

const PriceRide = tw.p`
    font-semibold
`

const ConfirmContainer = tw.div`
    flex items-center justify-center p-2 border-t
`

const ConfirmButton = tw.button`
    bg-black text-white px-20 w-96 py-2 my-2 rounded-md transform transition duration-500 ease-out hover:bg-green-500 hover:text-black
`

export default RideSelector
