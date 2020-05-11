import React, { FunctionComponent, useState } from 'react'
import styled from '@emotion/styled'

import Grid from '../Grid'


interface Levels  {
    [level: string]: {
        type: string,
        initialState: boolean[][],
        target?: [number, number]
    }
}

const Game:FunctionComponent = () => {
    const [ won, setWon ] = useState(false)
    const [ lost, setLost ] = useState(false)
    const [ level, setLevel ] = useState(0)

    const initialStates: {[index: string]: boolean[][]} = {
        "4x4-block-center": [
            [false, false, false, false],

            [false, true, true, false],

            [false, true, true, false],
            
            [false, false, false, false],
        ],
        "6x6-toad-center": [
            [false, false, false, false, false, false],

            [false, false, false, false, false, false],

            [false, false, true, true, true, false],

            [false, true, true, true, false, false],

            [false, false, false, false, false, false],

            [false, false, false, false, false, false],
        ],
        "5x5-blinker-center": [
            [false, false, false, false, false],
            
            [false, false, true, false, false],

            [false, false, true, false, false],

            [false, false, true, false, false],

            [false, false, false, false, false],

        ] 
    }

    const levels: Levels = {
        "0": {
            type: "expand",
            initialState: initialStates["4x4-block-center"]
        },
        "1": {
            type: "expand",
            initialState: initialStates["6x6-toad-center"]
        },
        "2": {
            type: "expand",
            initialState: initialStates["5x5-blinker-center"]
        }
    }
    
    return (
        <GameContainer>
            { won ? <NextLevel onClick={() => setLevel(level + 1)}>Next</NextLevel> : null}
            <Grid level={levels[level]} won={won} setWon={setWon} lost={lost} setLost={setLost} />
        </GameContainer>
    )
}

const NextLevel = styled(`div`)`
    justify-content: center;
    align-items: center;
    border-radius: 8px;
    color: #3C1922;
    border-width: 1px;
`

const GameContainer = styled('div')` 
    height: 100%;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`




export default Game