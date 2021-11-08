import React, { useEffect } from 'react'
import tw from "tailwind-styled-components"
import { useRouter } from 'next/router'
import { signInWithPopup, onAuthStateChanged } from 'firebase/auth'
import { auth,provider } from '../firebase'

const Login = () => {

    const router = useRouter()

    useEffect(() => {
        onAuthStateChanged(auth,(user) => {
            if(user) {
                router.push('/')
            }
        })
    }, [])

    return (
        <Wrapper>
            <WrapperUnder></WrapperUnder>
            <Logo>
                <UberLogo src = 'https://i.ibb.co/2YvPqB4/logo-uber-removebg-preview.png' />
            </Logo>
            <BackgroundImage src = 'https://www.uber-assets.com/image/upload/q_auto:eco,c_fill,w_558,h_372/v1565733741/assets/0f/9719ad-69a4-4c0d-9444-ce6d8c3f9759/original/Signup.svg' />
            <SignInWrapper>
                <SignInButton onClick = { () => signInWithPopup(auth,provider)}> Sign in with Google </SignInButton>
            </SignInWrapper>
        </Wrapper>
    )
}

const Wrapper = tw.div`
    relative flex flex-col min-h-screen bg-gray-200 z-20
`

const WrapperUnder = tw.div`
    absolute top-0 left-0 w-full h-1/2 bg-white bg-opacity-40 z-10
`

const UberLogo = tw.img`

    h-32 w-32 object-cover z-20

`

const SignInWrapper = tw.div`
    flex items-center justify-center mt-20
`

const SignInButton = tw.button`
    text-white text-center bg-black rounded-md mx-4 p-2 w-96 cursor-pointer shadow-md
`

const Logo = tw.div`
    flex items-center justify-center
`

const BackgroundImage = tw.img`
    object-contain w-full h-96 mt-10 z-20
`

export default Login
