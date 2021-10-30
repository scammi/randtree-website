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
            main: '#000',
        },
        secondary: {
            main: '#E2D686',
        },
        error: {
            main: red.A400,
        },
        text: {
            main: '#000',
        },
        background: {
            default: '#D4E6B5',
            component: '#000',
        },
    },
});

export default theme;
