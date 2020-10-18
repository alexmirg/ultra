import React from 'react'
import { HomeObjTwo, HomeObjThree, HomeObjFour } from './Data'
import { InfoSection, Pricing } from '../../components'

const Products = () => {
    return (
        <>
            <InfoSection {...HomeObjTwo}/>
            <InfoSection {...HomeObjThree}/>
            <Pricing />
            <InfoSection {...HomeObjFour}/>
        </>
    )
}

export default Products
