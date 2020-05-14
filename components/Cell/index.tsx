/** @jsx jsx */
import { FunctionComponent, useEffect, useState } from 'react'
import { jsx } from '@emotion/core'
import {useSpring, animated as a} from 'react-spring'

import Theme from '../../utils/theme'

type CellProps = {
    alive: boolean,
    history: boolean,
    handleClick(): void
}

const CellContainer:FunctionComponent<CellProps> = ({ alive, history, handleClick}) => {
    const [ toggle, setToggle ] = useState(false)
    const [transform, set ] = useSpring(() => ({
        transform: `perspective(600px) rotateX(180deg)`,
        config: { mass: 5, tension: 500, friction: 80 }
    }))

    useEffect(() => {
        set({
            transform: toggle ? `perspective(600px) rotateX(0deg)` : `perspective(600px) rotateX(180deg)`,
            config: { mass: 5, tension: 500, friction: 80 }
        })
        setToggle(!toggle)
    }, [alive, history])

    return (     
            <a.div 
                onClick={handleClick}
                style={transform}
                css={{
                    padding: "5px",
                    height: "5px",
                    width: "5px",
                    border: "2px solid #3C1922",
                    borderRadius: "3px",
                    fontSize: "10px",
                    margin: "5px",
                    backgroundColor:`${ alive ? Theme.alive : history ? Theme.history : Theme.dead }`
                }} 
            />
    )
}



export default CellContainer