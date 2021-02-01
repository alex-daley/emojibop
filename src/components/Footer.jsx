import React from 'react';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import Button from '@material-ui/core/Button';
import GitHubIcon from '@material-ui/icons/GitHub';
import makeStyles from '@material-ui/core/styles/makeStyles';

const useStyles = makeStyles(theme => ({
  buttonStyle: {
    marginTop: theme.spacing(2)
  }
}));

function Footer() {
  const classes = useStyles();

  return (
    <div>
      <Typography variant='body2'>
        Emojibop was created by Alex Daley as hobby project to showcase emojis founds
        in the Unicode 12.0 specification.
      </Typography>
      
      <Link href='https://home.unicode.org/'>
        <Typography variant='body2'>
          Click here to find out more about Unicode.
        </Typography>
      </Link>

      <Button
        className={classes.buttonStyle}
        variant="outlined"
        startIcon={<GitHubIcon />}
      >
        View Source
      </Button>
    </div>
  );
}

export default Footer;
