import React from 'react';
import SettingsIcon from '@mui/icons-material/Settings';
import { IconButton, Typography } from '@mui/material';
import { URLViewModel } from 'src/features/Models/Models';

type EditCompatibilityGroupProps = {
    url: URLViewModel;
};

const URLDeleteButton = ({ url }: EditCompatibilityGroupProps) => {

    return (
        <>
            <IconButton disabled={url.createdById !== 1}>
                <SettingsIcon />
                <Typography variant="body1">Delete</Typography>
            </IconButton>
        </>
    );
};

export default URLDeleteButton;
