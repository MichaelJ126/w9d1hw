import { createTheme } from'@mui/material'; 


export const theme = createTheme({
    typography: {
        fontFamily: 'Inter, system-ui, Avenir, Helvetica, Arial, sans-serif'
    },
    palette: {
        primary: {
            main: '#FF5722'
        },
        secondary: {
            main: '#808080',
            light: '#000000'
        },
        info: {
            main: '#494949'
        }
    }
})