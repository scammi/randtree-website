import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';

import WhiteTextTypography from './WhiteTextTypography';

function Copyright() {
    return (
        <WhiteTextTypography variant="body2" color="textSecondary" align="center">
            {'This website is '}
            <Link color="inherit" href="" underline="always">
                open-source
            </Link>{'. '}
            <br />
            {new Date().getFullYear()}
        </WhiteTextTypography>
    );
}

const useStyles = makeStyles((theme) => ({
    footer: {
        backgroundColor: theme.palette.background.default,
        padding: theme.spacing(10),
    },
    margin: {
        marginTop: theme.spacing(2),
    },
}));

export default function Footer() {
    const classes = useStyles();

    return (
        < footer className={classes.footer} >
            <Copyright ClassName={classes.margin} />
        </footer >
    );
}
