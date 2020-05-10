import React, { FunctionComponent } from 'react'
import styled from '@emotion/styled'

import Grid from './Grid'
type GameProps = {
    level: string
}

interface Levels  {
    [level: string]: {
        type: string,
        initialState: boolean[][],
        target?: [number, number]
    }
}

const Game:FunctionComponent<GameProps> = ({ level }) => {
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
        }
    }

    const currentLevel = levels[level]
    
    return (
        <GameContainer>
            <Grid level={currentLevel} />
        </GameContainer>
    )
}

const GameContainer = styled('div')` 
    height: 100%;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`


export default Game