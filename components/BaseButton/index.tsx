import React, { FunctionComponent } from 'react'
import styled from '@emotion/styled'

type BaseButtonProps = {
    onClick: () => void,
    text: string
}

const BaseButton:FunctionComponent<BaseButtonProps> = ({ onClick, text }) => {
    return (
        <BaseButtonContainer onClick={onClick}>{text}</BaseButtonContainer>
    )
}


const BaseButtonContainer = styled(`button`)`
    justify-content: center;
    align-items: center;
    border-radius: 8px;
    border: 2px solid #3C1922;
    padding: 4px;
    height: 25px;
    background-color: #D9C791;
    font-weight: bold;
`

export default BaseButton