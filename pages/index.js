import {useEffect} from 'react'
import Head from 'next/head'
import tw from "tailwind-styled-components"
import Map from './components/Map'
import Items from './components/Items'
import PropTypes from 'prop-types'; 


export default function Home() {

  return (
    <Wrapper>
      <Head>
        <title> Uber </title>
        <link rel="icon" href="https://d3i4yxtzktqr9n.cloudfront.net/uber-sites/f452c7aefd72a6f52b36705c8015464e.jpg" />
      </Head>

      <Map />
      <Items />

      
    </Wrapper>
  )
}


const Wrapper = tw.div`
  flex flex-col min-h-screen
`


