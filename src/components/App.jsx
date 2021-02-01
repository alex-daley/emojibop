import React from 'react';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import makeStyles from '@material-ui/core/styles/makeStyles';
import groupBy from 'lodash/groupBy';
import startCase from 'lodash/startCase';
import Header from './Header';
import Footer from './Footer';
import EmojiAccordion from './EmojiAccordion';

const useStyles = makeStyles(theme => ({
  accordionContainer: {
    width: '100%',
    marginTop: theme.spacing(4)
  },
  header: {
    marginBottom: theme.spacing(2)
  },
  footer: {
    marginTop: theme.spacing(2)
  }
}));

function groupEmojis(emojis) {
  const groups = groupBy(emojis, emoji => emoji.group);
  return Object.entries(groups);
}

function titleCase(title) {
  // HACK: .replace for 'and' correction...
  return startCase(title).replace('And', 'and');
}

function App({ emojis }) {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);
  const [emoji, setEmoji] = React.useState(null);

  const emojiGroups = groupEmojis(emojis);

  const handleAccordionChange = (index) => {
    setExpanded(expanded !== index ? index : false);
  };

  return (
    <Container maxWidth="md">
      <Grid container spacing={2}>
        <div className={classes.accordionContainer}>
          <div className={classes.header}>
            <Header emojiGlyph={emoji?.glyph}/>
          </div>
          {emojiGroups.map(([name, emojis], index) => {
            return (
              <EmojiAccordion
                key={index}
                title={titleCase(name)}
                emojis={emojis}
                expanded={expanded === index}
                onChange={() => handleAccordionChange(index)}
                onEmojiClick={emoji => setEmoji(emoji)}
              />
            )
          })}
        </div>
        <div className={classes.footer}>
          <Footer/>
        </div>
      </Grid>
    </Container>
  );
}

export default App;
