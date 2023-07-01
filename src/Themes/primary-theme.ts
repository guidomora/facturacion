import { createTheme } from "@mui/material";
import { red } from "@mui/material/colors";


export const primaryTheme = createTheme({
    palette:{
        mode:"light",
        primary: {
            main:"#395B64"
        },
        secondary: {
            main:"#A5C8CA"
        },
        error: {
            // Seria otra forma de indicar la intensidad
            main: red.A400
        }
    },
})