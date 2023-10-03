import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
// import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Typography from '@mui/material/Typography';
import Skeleton from '@mui/material/Skeleton';
import { useProductCategories } from "medusa-react";

export default function Categories({ selectedIndex, handleListItemClick }) {

    const {product_categories, isLoading,} = useProductCategories()

    return(
        <Paper elevated={3} sx={{ display: { xs: 'none', md: 'block' } }}>
            <Box sx={{ p: 2, width: 170, position: "sticky" }}>
            <Typography gutterBottom variant="body1" component="div">
                Categories
            </Typography>
            <List>

                {isLoading && 
                    <>
                        <Skeleton variant="text" width="100%"sx={{ mt: 1, mb: 1, fontSize: '1rem' }} />
                        <Divider />
                        <Skeleton variant="text" width="100%"sx={{  mt: 1, mb: 1, fontSize: '1rem' }} />
                        <Divider />
                        <Skeleton variant="text" width="100%"sx={{  mt: 1, mb: 1, fontSize: '1rem' }} />
                        <Divider />
                        <Skeleton variant="text" width="100%"sx={{  mt: 1, mb: 1, fontSize: '1rem' }} />
                        <Divider />
                        <Skeleton variant="text" width="100%"sx={{  mt: 1, mb: 1, fontSize: '1rem' }} />
                        <Divider />
                        <Skeleton variant="text" width="100%"sx={{  mt: 1, mb: 1, fontSize: '1rem' }} />
                        <Divider />
                        <Skeleton variant="text" width="100%"sx={{  mt: 1, mb: 1, fontSize: '1rem' }} />
                        <Divider />
                        <Skeleton variant="text" width="100%"sx={{  mt: 1, mb: 1, fontSize: '1rem' }} />
                        <Divider />
                        <Skeleton variant="text" width="100%"sx={{  mt: 1, mb: 1, fontSize: '1rem' }} />
                        <Divider />
                        <Skeleton variant="text" width="100%"sx={{  mt: 1, mb: 1, fontSize: '1rem' }} />
                        <Divider />
                        <Skeleton variant="text" width="100%"sx={{  mt: 1, mb: 1, fontSize: '1rem' }} />
                        <Divider />
                        <Skeleton variant="text" width="100%"sx={{  mt: 1, mb: 1, fontSize: '1rem' }} />
                        <Divider />
                    </>
                }

                {product_categories && !product_categories.length && (
                    <span>No Categories</span>
                )}
                
                {product_categories && product_categories.length > 0 && (
                    <>
                    {product_categories.map(
                        (category) => (
                            <>
                                <ListItem key={category.id} disablePadding>
                                    <ListItemButton 
                                        selected={selectedIndex === category.id}
                                        onClick={(event) => handleListItemClick(event, category.id)}>
                                    <Typography variant="subtitle2">{category.name}</Typography>
                                    </ListItemButton>
                                </ListItem>
                                <Divider />
                            </>
                        )
                    )}
                    </>
                )}

            </List>
            </Box>
        </Paper>
    );
} 