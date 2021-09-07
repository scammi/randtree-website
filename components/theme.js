import { createTheme } from '@material-ui/core/styles';
import { red } from '@material-ui/core/colors';

// Create a theme instance.
const theme = createTheme({
    typography: {
        fontFamily: [
            'EB Garamond',
            'regular',
        ].join(','),
        fontSize: 17,
    },
    palette: {
        primary: {
            main: '#1a1a1a',
        },
        secondary: {
            main: '#000',
        },
        error: {
            main: red.A400,
        },
        text: {
            main: '#fff',
        },
        background: {
            default: '#1a1a1a',
            component: '#000',
        },
    },
});

export default theme;
