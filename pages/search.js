
import tw from "tailwind-styled-components"
import Lottie from 'react-lottie';
import animationData from '../public/car.json'
import Router from 'next/router'

const search = () => {

    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
          preserveAspectRatio: "xMidYMid slice"
        }
      };

    return (
        <Wrapper>
            <ButtonContainer>
                <BackButton onClick = { () => Router.back() } src = 'https://img.icons8.com/material-rounded/344/back.png' />
            </ButtonContainer>
            <InputContainer>
               <FromToIcons>
                    <Circle src = 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Circle_Grey_Solid.svg/1024px-Circle_Grey_Solid.svg.png' />
                    <Line src = 'https://images.squarespace-cdn.com/content/v1/5b345f558ab7221aa3d4e473/1541114207687-EWU178HM3NL8SAV6OBHT/gray-vertical-line.png' />
                    <Square src = 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1e/U%2B25A0.svg/1200px-U%2B25A0.svg.png' />
               </FromToIcons>
                <InputForm>
                    <Input placeholder = 'Pick a location...' />
                    <Input placeholder = 'Where to...' />
                </InputForm>
                <Plus src = 'https://www.freepnglogos.com/uploads/plus-icon/plus-icon-plus-math-icon-download-icons-9.png' />
            </InputContainer>
            <ButtonPlaces>
                <Star src = 'https://i.ibb.co/ZVRyJZ6/star-icon-removebg-preview.png' />
                Saved Places
            </ButtonPlaces>
            <ButtonConfirm>
                <Button>
                    Confirm Locations
                </Button>
            </ButtonConfirm>
            <ButtonConfirm>
                <UberLogo src = 'https://i.ibb.co/VQwGSCC/uber-removebg-preview.png' />
            </ButtonConfirm>
            <LottieContainer>
            <Lottie 
	            options={defaultOptions}
                width = {400}
                height = {430} 
            />
            </LottieContainer>
        </Wrapper>
    )
}

const Wrapper = tw.div`
    bg-gray-200 min-h-screen
`

const ButtonContainer = tw.div`
    bg-white 
`

const BackButton = tw.img`
    h-16 cursor-pointer
`

const InputContainer = tw.div`
flex items-center gap-2 px-2 bg-white
`

const FromToIcons = tw.div`
    flex flex-col items-center
`

const Circle = tw.img`
    w-4 h-4
`

const Line = tw.img`
    w-10 h-10
`

const Square = tw.img`
    w-4 h-4
`

const InputForm = tw.div`
    flex flex-col flex-1
`

const Input = tw.input`
    h-10 bg-gray-200 my-2 rounded-xl p-2 outline-none border-none 
`

const Plus = tw.img`
    h-8 w-8 p-[2px] rounded-full bg-gray-200 cursor-pointer
`

const ButtonPlaces = tw.div`
    flex items-center bg-white gap-2 mt-2 p-4
`

const ButtonConfirm = tw.div`
    flex items-center justify-center mt-12
`

const Button = tw.button`

    text-center rounded-md bg-black text-white border-2 w-96 py-2 transform transition duration-500 hover:bg-white hover:text-black 

`

const Star = tw.img`
    bg-gray-300 p-2 rounded-full w-10 h-10 object-cover
`

const LottieContainer = tw.div`
    mb-20
`

const UberLogo = tw.img`
    w-20 h-20 object-cover
`

export default search
