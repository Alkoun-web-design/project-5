import Stack from '@mui/material/Stack';
import DeleteIcon from '@mui/icons-material/Delete';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { useDeleteLineItem } from "medusa-react";


export default function ShoppingCartItem({ key, variant, title, description, image, unitPrice, quantity, subTotal, discount, total, cart, cartId }) {
    
    const deleteLineItem = useDeleteLineItem(cartId)

    const handleDeleteItem = () => {
        deleteLineItem.mutate({
            // lineId,
        })
    };

    
    return(
    <>
        <Stack container direction="row" justifyContent="start" alignItems="cemter" spacing={2}>
            <Stack direction="column" justifyContent="center" alignItems="start" spacing={1}>
                <img src={image} style={{height: 120}}></img>
            </Stack>
            <Stack direction="column" justifyContent="flex-start" alignItems="flex-start" spacing={1}>
                <Typography variant="caption" gutterBottom>{title}</Typography>
                <Typography variant="caption" gutterBottom>{description}</Typography>
                <Typography variant="caption" gutterBottom>Quantity: {quantity}</Typography>
                <Typography variant="caption" gutterBottom>Unit Price: {unitPrice}</Typography>
                <Typography variant="caption" gutterBottom>Total Price: {total}</Typography>
            </Stack>
            <Stack direction="column" justifyContent="center" alignItems="flex-end" spacing={1}>
                <Button onClick={ handleDeleteItem }>
                    <DeleteIcon color="success"/>
                </Button>
            </Stack>
        </Stack>
        <Divider />
    </>
    );
}