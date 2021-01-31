import React from 'react';
import Popover from '@material-ui/core/Popover';
import EmojiPopverTable from './EmojiPopoverTable';

const anchorOrigin = { vertical: 'bottom', horizontal: 'right' };
const transformOrigin = { vertical: 'top', horizontal: 'left' };

function EmojiPopver({ onClose, anchorEl, emoji }) {
  const open = Boolean(anchorEl && emoji);

  return (
    <Popover
      open={open}
      onClose={() => onClose?.()}
      anchorEl={anchorEl}
      anchorOrigin={anchorOrigin}
      transformOrigin={transformOrigin}
    >
      <EmojiPopverTable emoji={emoji} />
    </Popover>
  );
}

export default EmojiPopver;
