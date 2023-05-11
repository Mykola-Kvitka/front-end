import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { URLViewModel } from 'src/features/Models/Models';

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
type URLViewModelProps = {
    urls: URLViewModel;
};

export default function UrlView({ urls }: URLViewModelProps) {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <div>
            <Button onClick={handleOpen}>Open modal</Button>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        Повне посилання на сайт: {urls.originalURL}
                    </Typography>
                    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                        Коротке посилання на сайт: {urls.shortURL}
                    </Typography>
                    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                        Кількість переходів по посиланню: {urls.countOfRedirect}
                    </Typography>
                    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                        Створено: {urls.createdDate}
                    </Typography>
                </Box>
            </Modal>
        </div>
    );
}
