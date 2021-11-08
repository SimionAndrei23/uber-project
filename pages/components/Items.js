import { useEffect, useState} from 'react'
import tw from "tailwind-styled-components"
import Link from 'next/Link'
import { auth } from '../../firebase'
import { onAuthStateChanged, signOut } from "firebase/auth";
import { useRouter } from 'next/router'

const Items = () => {

    const [user, setUser] = useState(null)

    const router = useRouter()

    useEffect(() => {
        return onAuthStateChanged(auth, (user) => {
            if(user) {
                setUser({
                    name: user.displayName,
                    photo: user.photoURL,
                })
              }
              else {
                  setUser(null)
                  router.push('/login')
              }
        })
    },[])

    return (
        <ItemsContainer>
            <ContainerUnder></ContainerUnder>
            <Header>
                <UberLogo src = 'https://download.logo.wine/logo/Uber/Uber-Logo.wine.png' />
                <Profile>
                    <Name> { user && user.name} </Name>
                    <UserImage onClick = { () => signOut(auth)} src = { user && user.photo} />
                </Profile>
            </Header>
            <ActionButtons>
                <Link href = '/search'>
                    <ActionButton>
                        <ActionButtonImage src = 'https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,w_956,h_637/v1555367310/assets/30/51e602-10bb-4e65-b122-e394d80a9c47/original/Final_UberX.png' /> 
                        Ride 
                    </ActionButton></Link>
                <ActionButton>
                <ActionButtonImage src = "https://i.ibb.co/vY4wYjZ/uber-bike-removebg-preview.png"  />  
                    Wheels 
                </ActionButton>
                <ActionButton>
                <ActionButtonImage src = "https://i.ibb.co/C1JznsJ/reserve-logo-removebg-preview.png"  />   
                    Reserve 
                </ActionButton>
            </ActionButtons>
            <InputButton>
                Where to, dear customer?
            </InputButton>
        </ItemsContainer>
    )
}

const ItemsContainer = tw.div`
    relative p-4 
`

const ContainerUnder = tw.div`

    absolute top-0 left-0 w-full h-full clipPath bg-gray-200 bg-opacity-50

`

const UberLogo = tw.img`
    h-24 z-50

`

const Header = tw.div`

    flex justify-between items-center

`

const Profile = tw.div`
    flex items-center
`

const Name = tw.div`
    mr-4 
`

const UserImage = tw.img`
    h-12 w-12 rounded-full border border-gray-200 p-px object-cover cursor-pointer 
`

const ActionButtons = tw.div`
    flex
`

const ActionButton = tw.div`
    flex flex-col items-center flex-1 bg-gray-200 h-32  m-3 rounded-lg transform transition duration-500 ease-out hover:scale-105 hover:bg-gray-300 cursor-pointer
`

const ActionButtonImage = tw.img`
    h-3/5 pt-2
`

const InputButton = tw.div`
    flex items-center justify-center bg-gray-200 h-20 text-2xl  p-4 mx-3 my-8
`

export default Items
