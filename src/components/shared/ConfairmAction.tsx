import { Box, Button, Stack } from '@mui/material';
import { confirmable, createConfirmation, type ConfirmDialogProps } from 'react-confirm';

const MyDialog = ({ show, proceed, message }: ConfirmDialogProps<{ message: string }, boolean>) => (
    <Box style={{ display: show ? 'block' : 'none' }} sx={{ position: 'fixed', top: 50, left: 50, right: 50, bottom: 50, display: 'flex', justifyContent: 'center', alignItems: 'center', zIndex: 9999 }}>
        <Box sx={{ margin: '20px auto', p: 5, borderRadius: 2, width: '400px', bgcolor: '#ecd6d6ff', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 2 }}>
            <p>{message}</p>
            <Stack sx={{ width: '100%' }} alignItems={'flex-end'} justifyContent={'flex-end'} direction={'row'} gap={2}>
                <Button sx={{ bgcolor: '#f11313ff', color: '#fff' }} variant="contained" onClick={() => proceed(false)}>No</Button>
                <Button sx={{ bgcolor: '#1396F1', color: '#fff' }} variant="contained" onClick={() => proceed(true)}>Yes</Button>
            </Stack>
        </Box>
    </Box>
);

export const confirm = createConfirmation(confirmable(MyDialog));