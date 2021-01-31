import React from 'react';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import EmojiPopover from './EmojiPopover';

function EmojiGlyph({ emoji, onClick }) {
  const style = {
    display: 'inline-block',
    width: '32px',
    cursor: 'pointer'
  };

  return (
    <span onClick={e => onClick?.(e)} style={style}>
      {emoji.glyph}
    </span>
  );
}

function EmojiAccordion({ title, emojis, expanded, onChange }) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [emoji, setEmoji] = React.useState(null);

  return (
    <Accordion expanded={expanded} onChange={onChange}>
      <AccordionSummary expandIcon={<ExpandMoreIcon />}>
        <Typography>
          {title}
        </Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Typography variant='h5'>
          {emojis.map((emoji, i) => {
            return (
              <EmojiGlyph
                key={i}
                emoji={emoji}
                onClick={e => {
                  setAnchorEl(e.currentTarget);
                  setEmoji(emoji);
                }}
              />
            )
          })}
        </Typography>
        <EmojiPopover
          anchorEl={anchorEl}
          emoji={emoji}
          onClose={() => {
            setAnchorEl(null);
            setEmoji(null);
          }}
        />
      </AccordionDetails>
    </Accordion>
  )
}

export default EmojiAccordion;
