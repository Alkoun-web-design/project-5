import ShoppingCartItem from './ShoppingCartItem';
import ProductionQuantityLimitsIcon from '@mui/icons-material/ProductionQuantityLimits';
import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';
import Drawer from '@mui/material/Drawer';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Typography'
import Divider from '@mui/material/Divider';
import Button from '@mui/material/Button';
import CloseIcon from '@mui/icons-material/Close';
import { useCart } from "medusa-react";


export default function ShoppingCart({isShoppingCartOpen, setIsShoppingCartOpen, setIsOrderFormOpen, setBadgeCounter, cartId }) {

    const { cart } = useCart()

    const handleCheckoutClick = () => {
        setIsOrderFormOpen(true);
    };

    const handleShoppingCartClose = () => {
        setIsShoppingCartOpen(false);
    }

    const handleBadgeCounter = () => {
        setBadgeCounter(cart.items.length);
    }

    return(
        <>
            <Drawer 
              anchor='right'
              open={isShoppingCartOpen}
              onClose={() => setIsShoppingCartOpen(false)}
            >
                <Box sx={{ p: 2, width: 350, zIndex: 2}}>
                    <Button onClick={ handleShoppingCartClose }>
                        <CloseIcon />
                    </Button>
                        <Typography variant="body1" gutterBottom>Shopping Cart</Typography>
                    <Divider />

                    {cart.items.length === 0 && (
                        <Typography variant="body2">No Items Yet</Typography>
                    )}

                    {cart.items.length > 0 && handleBadgeCounter() && (
                        
                        <>
                            {cart.items.map((item) => {
                                <ShoppingCartItem 
                                    key={item.id}
                                    variant={item.variant_id}
                                    title={item.title}
                                    description={item.description}
                                    image={item.thumbnail}
                                    unitPrice={item.unit_price}
                                    quantity={item.quantity}
                                    subTotal={item.sub_total}
                                    discount={item.discount}
                                    total={item.total}
                                />
                            })}
                        </>
                    )}
                    <Typography gutterBottom variant="caption">Total: {cart.total} </Typography>


                    <Typography gutterBottom variant="caption">Items in Cart: {cart?.items.length || 0} </Typography>
                    

                    <Box sx={{justifyContent:"center"}}>
                        <Button 
                            sx={{width: 300 }} 
                            variant="outlined" 
                            size="medium" 
                            color="success"
                            endIcon={<ShoppingCartCheckoutIcon />}
                            onClick={ handleCheckoutClick }
                            >
                            Checkout
                        </Button>
                    </Box>
                </Box>
            </Drawer>
        </>
    );
}