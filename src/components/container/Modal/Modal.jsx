/* import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

const Modal = (props) => {


  return (
    <div>
      <Modal
        {...props}
      >
        <Fade>
          <Box sx={style}>
            <Typography id="transition-modal-title" variant="h6" component="h2">
              Compra finalizada con éxito
            </Typography>
            <Typography id="transition-modal-description" sx={{ mt: 2 }}>
              El id de su orden es: {props.orderId} y el total es ${props.total} <hr></hr>
              Gracias por confiar en Fitness PRO !!
            </Typography>
          </Box>
          <Button variant="secondary" onClick={props.onHide}>
            Close
          </Button>
        </Fade>
      </Modal>
    </div>
  );
}

export default Modal; */