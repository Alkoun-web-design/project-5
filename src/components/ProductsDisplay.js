import ProductCard from './ProductCard';
import LoadingProductCard from './LoadingProductCard';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import { useProducts } from "medusa-react";

export default function ProductsDisplay({ setProductPage, handleAddItem, selectedIndex }) {
    
    const { products, isLoading } = useProducts({
        category_id: [selectedIndex],
    })
    
    return(
        <Container maxWidth="xl">
            <Typography gutterBottom variant="body1" component="div">
                Products
            </Typography>
            <Grid container spacing={2}>
                
                {isLoading && 
                    <>
                        <LoadingProductCard/>
                        <LoadingProductCard/>
                        <LoadingProductCard/>
                        <LoadingProductCard/>
                        <LoadingProductCard/> 
                    </>
                }

                {products && !products.length && 
                    <Container >
                        <Typography>No Products Yet</Typography>
                    </Container>
                } 

                {products && products.length > 0 && (
                    <>
                        {products.map((product) => (
                            <ProductCard 
                                key={product.id}
                                name={product.title}
                                image={product.thumbnail}
                                options={product.options[0].title}
                                variants={product.variants}
                                setProductPage={setProductPage}
                                handleAddItem={handleAddItem}
                                handle={product.handle}
                            />
                        ))}
                    </>
                )}
                
                
            </Grid>
        </Container>
    );
}