export const initialStates: {[index: string]: boolean[][]} = {
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

        [false, false, false, false, false, false],
    ],
    "5x5-blinker-center": [
        [false, false, false, false, false],
        
        [false, false, true, false, false],

        [false, false, true, false, false],

        [false, false, true, false, false],

        [false, false, false, false, false],

        [false, false, false, false, false],
    ],
    "7x30-lightweight-spaceship-left": [
        [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false],
        [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false],
        [false, false, false, true, true, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false],
        [false, true, true, false, true, true, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false],
        [false, true, true, true, true, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false],
        [false, false, true, true, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false],
        [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false],
    ],
}
