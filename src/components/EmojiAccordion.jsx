import React from 'react';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

function EmojiGlyph({ emoji }) {
  const style = {
    display: 'inline-block', 
    width: '24px'
  };

  return <span style={style}>{emoji.glyph}</span>
}

function EmojiAccordion({ title, emojis }) {
  return (
    <Accordion>
      <AccordionSummary expandIcon={<ExpandMoreIcon />}>
        <Typography>
          {title}
        </Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Typography>
          {emojis.map((emoji, i) => <EmojiGlyph key={i} emoji={emoji}/>)}
        </Typography>
      </AccordionDetails>
    </Accordion>
  )
}

export default EmojiAccordion;
