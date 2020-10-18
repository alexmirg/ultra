import React from 'react'
import {
    HomeObjOne,
    HomeObjTwo,
    HomeObjThree,
    HomeObjFour
} from './Data'

import {InfoSection, Pricing} from '../../components'

const Home = () => {
    return (
        <>
            <InfoSection {...HomeObjOne}/>
            <InfoSection {...HomeObjTwo}/>
            <InfoSection {...HomeObjThree}/>
            <Pricing />
            <InfoSection {...HomeObjFour}/>
        </>
    )
}

export default Home
