import React from 'react'
import { HomeObjFour } from './Data'
import { InfoSection, Pricing } from '../../components'

const Services = () => {
    return (
        <>
            <Pricing />
            <InfoSection {...HomeObjFour}/>
        </>
    )
}

export default Services
