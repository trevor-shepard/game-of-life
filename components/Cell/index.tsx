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
    border: 2px solid #3C1922;
    border-radius: 3px;
    font-size: 10px;
    margin: 5px;
`

const AliveContainer = styled(CellContainer)`
    background-color: #B6EBF0;
`

const HistoryContainer = styled(CellContainer)`
    background-color: #FCE98F;
`

const DeadContainer = styled(CellContainer)`
    background-color: #94685F;
`


export default Cell