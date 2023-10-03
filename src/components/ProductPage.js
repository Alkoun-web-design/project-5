import Container from '@mui/material/Container';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Chip from '@mui/material/Chip';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { Button, CardActions } from '@mui/material';
import { Link } from 'react-router-dom';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';



export default function ProductPage({
    setProductPage, 
    productPage, 
    handleAddItem,
    cart }) {

    const handleQuantityClick = (e) => {
        let variantQuantity = e.target.value;
        setProductPage({
            ...productPage,
            quantity:Number(variantQuantity)
        })
    };
    
    const handleVariantClick = (index) => {
        let variantPrice = productPage.variants[index].prices[0].amount;
        let id = productPage.variants[index].id;
        let label = productPage.variants[index].title;
        setProductPage({
            ...productPage, 
            variantId:id,
            variantLabel: label,
            price:variantPrice
        });
    };

    return(
        <>  
            
                <Container maxWidth="md" sx={{ mt:5, mb:5}}>
                    <Card sx={{p:1}}> 
                        <Button sx={{mb:1}}component={ Link } to="/">
                            <ArrowBackIcon/> Back to Store
                        </Button>
                        <Typography variant="caption" display="block" sx={{ mt: 2, justifyContent: "center" }}>
                            Please select {productPage.options} and the Quantity to add item to cart.
                        </Typography>
                        <Typography gutterBottom variant="caption">
                            Items in Cart: {cart.items.length} 
                        </Typography>
                        <Grid container spacing={2} justifyContent="center" alignItems="center">
                            <Grid item xs={6}>
                                <CardMedia
                                component="img"
                                height="500"
                                src={productPage.image}
                                alt={productPage.name}
                                />
                            </Grid>
                            <Grid item xs={6}>
                                <CardContent>
                                <Typography gutterBottom variant="h6" component="div" sx={{ marginBottom: 2 }}>
                                    {productPage.name}
                                </Typography>
                                <Typography variant="body2" display="block" sx={{ marginTop: 2 }}>
                                    {`${productPage.options}:`}
                                </Typography>
                                <Typography gutterBottom sx={{ mb: 2 }}>
                                {productPage.variants.map((variant, index) => (
                                  <Chip sx={{m:0.5}}
                                    key={index}
                                    size="medium"
                                    label={variant.title} 
                                    onClick={ () => handleVariantClick(index) }/>
                                ))}
                                </Typography>
                                    {(productPage.quantity) < 1 || (productPage.quantity) === undefined 
                                        ? <TextField
                                        variant="outlined"
                                        size="small"
                                        id="standard-number"
                                        label="Quantity:"
                                        type="number"
                                        onClick={ handleQuantityClick }
                                        InputLabelProps={{
                                            shrink: true,
                                        }}
                                        sx={{
                                            width: 100,
                                            mt: 1,
                                            mb: 1
                                        }}/> 
                                        : <TextField
                                            variant="outlined"
                                            size="small"
                                            id="standard-number"
                                            label="Quantity:"
                                            type="number"
                                            onClick={ handleQuantityClick }
                                            InputLabelProps={{
                                                shrink: true,
                                            }}
                                            sx={{
                                                width: 100,
                                                mt: 1,
                                                mb: 1
                                            }}/>
                                    }
                                <Typography variant="body2" display="block" sx={{ mt: 1 }}>
                                    Price:
                                </Typography>
                                <Typography variant="body2" defaultValue="0" sx={{ mb: 1 }}>
                                    {productPage.price}
                                </Typography>
                                </CardContent>
                                <CardActions
                                    sx={{
                                        justifyContent:"center"
                                    }}>
                                    {(productPage.price) === undefined || (+productPage.quantity) <= 0 || productPage.quantity === undefined 
                                        ? <Button 
                                            variant="contained" 
                                            size="medium" 
                                            color="success" 
                                            endIcon={<AddShoppingCartIcon/>}
                                            disabled>
                                                Add to Cart
                                        </Button>
                                        :<Button 
                                            variant="contained" 
                                            size="medium" 
                                            color="success"  
                                            endIcon={<AddShoppingCartIcon/>}
                                            onClick={ handleAddItem }
                                            >
                                                Add to Cart
                                        </Button> 
                                    }
                                    
                                </CardActions>
                            </Grid>
                        </Grid>
                    </Card>
                </Container>
            
        </>
    );
}