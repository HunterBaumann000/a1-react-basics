import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import RefreshIcon from '@mui/icons-material/Refresh';
import IconButton from '@mui/material/IconButton';

export default function FormDialog() {
  const [open, setOpen] = React.useState(false);
  
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const changeCountry = () => {
      console.log("Change country to: ");
      console.log("change number back to 0");
  }

  return (
    <div>
        
       <IconButton size="large" onClick={handleClickOpen}>
            <RefreshIcon variant="outlined"/>
       </IconButton>
     
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Change</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Type the desired country below. 
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="input"
            label="New Country Name"
            type="text"
            fullWidth
            variant="standard"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={function(event){ handleClose(); changeCountry();}}>Change!</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}