import * as React from 'react'
import styled from '@emotion/styled'

type CellProps = {
    alive: boolean,
    history: boolean,
    handleClick(): void
}

const Cell: React.FunctionComponent<CellProps> = ({ alive, handleClick, history }) => {
    
    
    return alive ? (<AliveContainer  onClick={handleClick} /> ) : history ? (<HistoryContainer  onClick={handleClick} /> ) : (<DeadContainer  onClick={handleClick} /> )
       

}
const CellContainer = styled('div')` 
    padding: 5px;
    height: 5px;
    width: 5px;
    border: 1px solid black;
    border-radius: 3px;
    font-size: 10px;
    margin: 5px;
`

const AliveContainer = styled(CellContainer)`
    border-color: blue;
`

const DeadContainer = styled(CellContainer)`
    border-color: red
`

const HistoryContainer = styled(CellContainer)`
    border-color: yellow
`

export default Cell