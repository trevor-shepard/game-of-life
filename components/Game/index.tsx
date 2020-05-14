import React, { FunctionComponent, useState } from 'react'
import styled from '@emotion/styled'

import { initialStates } from '../../utils/initial-states'
import Grid from '../Grid'
import BaseButton from '../BaseButton'

import Theme from '../../utils/theme'


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
    const [ reset, setReset ] = useState(false)
    
    const levels: Levels = {
        0: {
            type: "expand",
            initialState: initialStates["4x4-block-center"]
        },
        1: {
            type: "expand",
            initialState: initialStates["5x5-blinker-center"]
        },
        2: {
            type: "expand",
            initialState: initialStates["6x6-toad-center"]
        },
        3: {
            type: "expand",
            initialState: initialStates["7x30-lightweight-spaceship-left"]
        },
    }

    const handleNext = () => {
        setReset(true)
        setLevel(level + 1)
        setWon(false)
        setLost(false)
        setReset(false)
    }
    
    return (
        <GameContainer>
            { won ? <BaseButton onClick={handleNext} text={'Next Level'} /> : null }
            <SneakyButton onClick={handleNext}>You're a cheater</SneakyButton>
            { reset ? null : <Grid key={level} level={levels[level]} won={won} setWon={setWon} lost={lost} setLost={setLost} />}
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
    position: relative;
`

const SneakyButton = styled('button')`
    position: absolute;
    left: 100px;
    top: 100px;
    border-color: ${Theme.default};
    color: ${Theme.default};
    background-color: ${Theme.default}

` 

export default Game