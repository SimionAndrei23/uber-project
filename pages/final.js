import { useRouter } from 'next/router'
import tw from "tailwind-styled-components"

const final = () => {

    const router = useRouter()

    const { pickCar, multiplier, rideDuration, imageCar} = router.query

    return (
        <Wrapper>
            <WrapperUnder></WrapperUnder>
            <MessageWrapper>
                <Message1>
                    Congrats, you've ordered an  <InnerMessage> {pickCar} </InnerMessage>
                </Message1>
                <Message2>
                    For the price of <InnerMessage> {'$' + (rideDuration * multiplier).toFixed(2)} </InnerMessage>
                </Message2>
            </MessageWrapper>
            <ImageCar>
                <Image src = {imageCar} />
            </ImageCar>
            <MessageCenter>
                    <Message> Hurry uppp! </Message>
                </MessageCenter>
        </Wrapper>
    )
}

const Wrapper = tw.div`
    relative flex flex-col min-h-screen
`

const WrapperUnder = tw.div`
    absolute w-full h-full clipPath2 bg-gray-100 bg-opacity-60 z-10
`

const MessageWrapper = tw.div`
    flex justify-center items-center flex-col mt-8
`

const Message1 = tw.h1`
    font-semibold text-2xl
`

const Message2 = tw.h1`
    font-semibold text-2xl mt-6
`

const InnerMessage = tw.span`
    font-semibold text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-blue-500
`

const ImageCar = tw.div`
   flex flex-col flex-1 items-center justify-center z-20
`

const Image = tw.img`
    h-56 object-cover mt-10 
`

const MessageCenter = tw.div`
   flex flex-col flex-1 items-center justify-center z-20
`

const Message = tw.p`
    text-3xl text-transparent bg-clip-text bg-gradient-to-tr from-black via-gray-500 to-white
`

export default final
