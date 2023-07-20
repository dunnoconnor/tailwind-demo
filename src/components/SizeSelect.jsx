import React from 'react';
import { Slider } from '@mui/material';

function SizeSelect(props) {
    return (
        <Slider
        size="small"
        defaultValue={50}
        aria-label="Small"
        valueLabelDisplay="auto"
        />
    );
}

export default SizeSelect;