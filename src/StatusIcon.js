import React from 'react';
import { Tooltip } from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CancelIcon from '@mui/icons-material/Cancel';
import HourglassEmptyIcon from '@mui/icons-material/HourglassEmpty';
import BlockIcon from '@mui/icons-material/Block';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';

const StatusIcon = ({ is_active, invite_status }) => {
  if (is_active) {
    return (
      <Tooltip title="Active">
        <CheckCircleIcon style={{ color: 'green' }} />
      </Tooltip>
    );
  } else if (invite_status === 0) {
    return (
      <Tooltip title="Pending">
        <HourglassEmptyIcon style={{ color: 'orange' }} />
      </Tooltip>
    );
  } else if (invite_status === 2) {
    return (
      <Tooltip title="Rejected">
        <BlockIcon style={{ color: 'red' }} />
      </Tooltip>
    );
  } else if (invite_status === 3) {
    return (
      <Tooltip title="Withdrawn">
        <HighlightOffIcon style={{ color: 'gray' }} />
      </Tooltip>
    );
  } else {
    return (
      <Tooltip title="Inactive">
        <CancelIcon style={{ color: 'red' }} />
      </Tooltip>
    );
  }
};

export default StatusIcon;
