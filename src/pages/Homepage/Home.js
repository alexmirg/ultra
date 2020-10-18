import React from 'react'
import {HomeObjOne, HomeObjTwo, HomeObjThree, HomeObjFour} from './Data'
import {InfoSection} from '../../components'

const Home = () => {
    return (
        <>
            <InfoSection {...HomeObjOne}/>
            <InfoSection {...HomeObjTwo}/>
            <InfoSection {...HomeObjThree}/>
            <InfoSection {...HomeObjFour}/>
        </>
    )
}

export default Home
