import React from 'react';
import ReactMarkdown from 'markdown-to-jsx';
import { withStyles } from '@material-ui/core/styles';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';

const styles = (theme) => ({
  listItem: {
    marginTop: theme.spacing(1),
  },
});

const options = {
  overrides: {
    h1: {
      component: WhiteTextTypography,
      props: {
        gutterBottom: true,
        variant: 'h5',
      },
    },
    h2: { component: WhiteTextTypography, props: { gutterBottom: true, variant: 'h6' } },
    h3: { component: WhiteTextTypography, props: { gutterBottom: true, variant: 'subtitle1' } },
    h4: {
      component: WhiteTextTypography,
      props: { gutterBottom: true, variant: 'caption', paragraph: true },
    },
    p: { component: WhiteTextTypography, props: { paragraph: true } },
    a: { component: Link },
    li: {
      component: withStyles(styles)(({ classes, ...props }) => (
        <li className={classes.listItem}>
          <WhiteTextTypography component="span" {...props} />
        </li>
      )),
    },
  },
};

export default function Markdown(props) {
  return <ReactMarkdown options={options} {...props} />;
}