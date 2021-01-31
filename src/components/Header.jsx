import React from 'react';
import Typography from '@material-ui/core/Typography';

function Header({ emojiGlyph }) {
  return (
    <Typography role='h1' variant='h2'>
     { `Emojibop ${emojiGlyph ?? '😎'}` }
    </Typography>
  );
}

export default Header;
