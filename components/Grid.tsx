import React, { FunctionComponent, useState, useEffect } from 'react'
import styled from '@emotion/styled'

import Row from './Row'
type GridProps = {
    level: Level
}

interface Level {
    // type: string,
    initialState: boolean[][],
    // target?: [number, number]
}

const Board:FunctionComponent<GridProps> = ({ level }) => {
    const { 
        initialState,
        // type 
    } = level
    
    const [ boardState, setBoardState ] = useState(initialState)
    const [ historyState, setHistoryState ] = useState(initialState)
    const [ won, setWon ] = useState(false)
    const [ lost, setLost ] = useState(false)
    const [time, setTime] = useState(1)

    const mirrorBoard: boolean[][] =JSON.parse(JSON.stringify(boardState));

    const handleClick: (y: number, x: number) => () => void = (y, x) => () => {
        mirrorBoard[y][x] = true
        setBoardState(mirrorBoard)
    }

    const countNeighbors = (y: number, x: number): number => {
        const deltas = [-1, 0, 1]
        let aliveNeighbors = 0;

        for (let yDelta of deltas) for (let xDelta of deltas) {
            if (yDelta === 0 && xDelta === 0 ) {
    
                continue
            }
            let neighborX = x + xDelta;
            let neighborY = y + yDelta;

            // if neighbor cell is out of bounds, continue to next
            if (boardState[neighborY] === undefined || boardState[neighborY][neighborX] === undefined) {
            } else {
                if (boardState[neighborY][neighborX]) aliveNeighbors++
            }
            
        }
       
        return aliveNeighbors
    }
    
    // check if remaing cells remain
    const checkLost = (): boolean => {
        for (let row of boardState) for (let cell of row) if (cell) return false
        setLost(true)
        return true
    }

    const checkWon = (): boolean => {
        const mirrorHistory: boolean[][] =JSON.parse(JSON.stringify(historyState));

        let gameStatus = true

        boardState.forEach((row, y) => row.forEach((cell, x) => {
            
            if (!historyState[y][x] && cell) mirrorHistory[y][x] = true
            
            if (!mirrorHistory[y][x]) gameStatus = false

        }))

        if (gameStatus) setWon(true)
        setHistoryState(mirrorHistory)
        return won
    }


    // game cycle
    useEffect(() => {
        checkLost()
        checkWon()
        for (let y = 0; y < boardState.length; y++) for (let x = 0; x < boardState[y].length; x++) {  

            let cell = boardState[y][x]
            let neighbours = countNeighbors(y, x)
            
            if (cell) {
                mirrorBoard[y][x] = (neighbours === 2 || neighbours === 3) ? true : false
            } else {
                mirrorBoard[y][x] = neighbours === 3 ? true : false
            }
        }
        
        setBoardState(mirrorBoard)
        const timer = setInterval(() => setTime(time + 1), 1000)
        return () => clearInterval(timer)
    }, [time])

    
    const grid: JSX.Element[]  = Array.from(new Array(initialState.length), (_, y) =>( <Row key={`${y}-row`} y={y} cellHistory={historyState[y]} cellStates={boardState[y]} handleClick={handleClick} />))
    
    return (
        <BoardContainer id={'board-container'}>
            { won ? "Game Won" : false }
            { lost ? "Game Lost" : false }
            { grid }
        </BoardContainer>
    )
}

const BoardContainer = styled('div')` 
    display: flex;
    flex-direction: column-reverse;
    padding: 5px;
`


export default Board