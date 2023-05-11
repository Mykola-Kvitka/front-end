import React, { useState } from 'react';
import { Button, TextField } from '@mui/material';
import Modal from '@mui/material/Modal';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { URLViewModel } from 'src/features/Models/Models';
import { useCreateURLMutation } from 'src/app/URLService';

const style = {
    // eslint-disable-next-line @typescript-eslint/prefer-as-const
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

const urls: URLViewModel = {
    id: 0,
    shortURL: '',
    originalURL: '',
    createdById: 0,
    createdDate: '',
    countOfRedirect: 0,
};


const AddNewURL = () => {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const [createurl, setCreateurl] = useState<URLViewModel>(urls);
    const [createURL] = useCreateURLMutation();
    const [validation, setValidation] = useState<boolean>(false);

    const isValidUrl = (url: string): boolean => {
        const correctUrlPattern = /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()!@:%_~#?&=]*)/i;
        return correctUrlPattern.test(url);
    };


    const onCreationButtonClick = async () => {
        if (isValidUrl(urls.originalURL)) {
            setValidation
            return;
        }

        await createURL(createurl);
        handleClose;
    };

    return (
        <>
            <Button variant="contained" onClick={() => handleOpen()}>
                New URL
            </Button>
            <div>
                <Modal
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                >
                    <Box sx={style}>
                        <Typography id="modal-modal-title" variant="h6" component="h2">
                            Add new url
                        </Typography>
                        <TextField
                            required
                            label={'Name'}
                            placeholder={'E.g., PostFunnel'}
                            error={validation}
                            helperText={validation ? 'url invalid' : ''}
                            defaultValue={urls.originalURL}
                            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                                setCreateurl({ ...urls, originalURL: e.target.value });
                            }}
                        />
                        <Button variant="contained" onClick={() => onCreationButtonClick()}>
                            Add
                        </Button>
                    </Box>
                </Modal>
            </div>
        </>
    );
};

export default AddNewURL;
