import * as React from 'react'
import styled from '@emotion/styled'

type CellProps = {
    alive: boolean,
    history: boolean,
    handleClick(): void
}

const Cell: React.FunctionComponent<CellProps> = ({ alive, handleClick, history }) => (
    <CellContainer  onClick={handleClick}>
        {alive ? "X" : history ? "#" : "O"}
    </CellContainer>
)

const CellContainer = styled('div')` 
    padding: 5px;
`


export default Cell