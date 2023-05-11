import React from 'react';
import { Box, Typography } from '@mui/material';

export default function About() {
    return (
        <Box
            sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                minHeight: '100vh',
                backgroundColor: 'white',
            }}
        >
            <Typography variant="body1" style={{ color: 'black' }}>
                Алгоритм використовує хеш-функцію MD5 для створення 16-байтового хеш-коду вхідної URL-адреси, а потім вибирає перші 6 байт хеш-коду для створення 6-символьної скороченої URL-адреси. Щоб скористатися сервісом по скороченю посилань, потрібно лише ввести URL-адресу на вході.
            </Typography>
        </Box>
    );
}


