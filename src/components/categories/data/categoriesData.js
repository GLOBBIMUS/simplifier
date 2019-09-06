import { css } from "glamor";

let fadeIn = css.keyframes({
    '0%': { opacity: 0 },
    '25%': { opacity: 1 },
    '50%': { opacity: 1 },
    '75%': { opacity: 0 }
})

export const categories = {
    algorithms: {
        styles: css({
            " svg": {
                height: 200,
                width: 200
            },
            " #square12": {
                fill: "red"
            },
            " .lol": {
                fill: "blue"
            }
        }),
        svg: require('./categoryIcons/algorithms.svg'),
        description: "Algorithms"
    },
    default: {
        styles: css({
            " svg": {
                height: 200,
                width: 200
            },
            " .first": {
                opacity: 0,
                animation: `${fadeIn} 2s infinite`,
                animationDelay: `0s`
            },
            " .second": {
                opacity: 0,
                animation: `${fadeIn} 2s infinite`,
                animationDelay: `0.5s`
            },
            " .third": {
                opacity: 0,
                animation: `${fadeIn} 2s infinite`,
                animationDelay: `1s`
            }
        }),
        svg: require('./categoryIcons/default.svg'),
        description: "More Coming Soon!"
    }
}