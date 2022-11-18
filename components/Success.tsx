import Image from 'next/image'
import React from 'react'
import styled from 'styled-components'
import { H1, P } from './Common/Typography'

export const SuccessWrapper = styled.div`
    text-align: center;
`
export const SuccessImg = styled.img`
    width: 100%;
`

const Success = () => {
    return (
        <SuccessWrapper>
            <H1>Thanks</H1>
            <P>Your form was submitted</P>
            {/* <Image
                src="https://images.ctfassets.net/of7l7vtgqjoa/sGRM8vZEA0Qif4tfexBdY/4c1f549646299dee3be2fde79e86e97d/Brown___Beige_Aesthetic_Minimalist_Font_Initials_Logo.png"
                alt="Picture of the author"
                width={500}
                height={500}
            /> */}
            <SuccessImg src="https://images.ctfassets.net/of7l7vtgqjoa/sGRM8vZEA0Qif4tfexBdY/4c1f549646299dee3be2fde79e86e97d/Brown___Beige_Aesthetic_Minimalist_Font_Initials_Logo.png" alt="" />
        </SuccessWrapper>
    )
}

export default Success
