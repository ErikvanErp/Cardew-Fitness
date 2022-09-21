import { IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { useState } from 'react';

const DeleteButton = (props) => {
    const { onDeleteHandler, confirmationText } = props;
    const [open, setOpen] = useState(false);

    const handleOpen = () => {
        setOpen(true);
      };
    
      const handleClose = () => {
        setOpen(false);
      };

    return (
        <>
            <IconButton size="large" variant="contained" onClick={ handleOpen }>
                <DeleteIcon sx={{ color:"red"}} fontSize={"large"} />
            </IconButton>
            <Dialog open={open} onClose={handleClose}>
                <DialogTitle>
                    {"Confirm Deletion"}
                </DialogTitle>
                <DialogContent>
                <DialogContentText id="alert-dialog-description">
                    { confirmationText }
                </DialogContentText>
                </DialogContent>
                <DialogActions>
                <Button onClick={onDeleteHandler}>Delete</Button>
                <Button onClick={handleClose} autoFocus>
                    Cancel
                </Button>
                </DialogActions>
            </Dialog>
        </>
    )
}

export default DeleteButton;