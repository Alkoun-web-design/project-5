import Drawer from '@mui/material/Drawer';
import Divider from '@mui/material/Divider';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import PublishIcon from '@mui/icons-material/Publish';
import TextField from '@mui/material/TextField';
import SendIcon from '@mui/icons-material/Send';

export default function OrderForm({isOrderFormOpen, setIsOrderFormOpen}) {
    return(
        <Drawer 
              anchor='right'
              open={isOrderFormOpen}
              onClose={() => setIsOrderFormOpen(false)}
            >
            <Box 
                component="form"
                sx={{ p: 2, 
                width: 350, 
                zIndex: 2,
                '& .MuiTextField-root': { m: 1, width: '25ch'},}}
                noValidate
                autoComplete="off">

                <Typography variant="h5" gutterBottom>Order Form</Typography>
                <Divider />
                    <div>
                        <TextField
                            required
                            id="outlined-required"
                            label="First Name"
                        />
                        <TextField
                            required
                            id="outlined-required"
                            label="Last Name"
                        />
                        <TextField
                            required
                            id="outlined-multiline-flexible"
                            label="Address"
                            multiline
                            maxRows={4}
                        />
                        <TextField
                            required
                            id="outlined-required"
                            label="Zip Code"
                        />
                        <TextField
                            required
                            id="outlined-required"
                            label="Phone Number"
                        />
                        <TextField
                            required
                            id="outlined-required"
                            label="Email Address"
                        />
                    </div>
                    <Box sx={{justifyContent:"center"}}>
                        <Button 
                            sx={{width: 300 }} 
                            variant="outlined" 
                            size="medium" 
                            color="success" 
                            endIcon={<PublishIcon />}
                            >
                            Submit Order
                        </Button>
                    </Box>
            </Box>
        </Drawer>
    );
}