import {
    colors,
    fonts,
    fontSizes,
    fontWeights,
    lineHeights,
    radii,
    space,
} from 'tokens'

import { createStitches, defaultThemeMap } from '@stitches/react'

export const {
    styled,
    css,
    globalCss,
    keyframes,
    getCssText,
    theme,
    createTheme,
    config,
} = createStitches({
    themeMap: {
        // faz o rest dos estilos padrões do stitchers, caso não use isso, ele vai substituir todos os estilos padrões por somente os que estão no token esoolhido
        ...defaultThemeMap,
        height: 'space',
        width: 'space',
    },

    theme: {
        colors,
        fontSizes,
        fontWeights,
        fonts,
        lineHeights,
        radii,
        space,
    },
})