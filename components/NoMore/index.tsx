import * as React from 'react'
import styled from '@emotion/styled'

type NoMoreProps = {
   display: boolean
}

const NoMore: React.FunctionComponent<NoMoreProps> = ({ display }) => {
    return display ? (<NoMoreContainer>thats it</NoMoreContainer>) : null
}  

const NoMoreContainer = styled('div')` 
    
`

export default NoMore