import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Typography from '@mui/material/Typography';
import Skeleton from '@mui/material/Skeleton';
import Button from '@mui/material/Button';
import CloseIcon from '@mui/icons-material/Close';
import { useProductCategories } from "medusa-react";

export default function CategoriesDrawer({isCategoriesOpen, setIsCategoriesOpen, selectedIndex, handleListItemClick}) {

    const {product_categories, isLoading,} = useProductCategories()

    const handleCategoriesDrawerClose = () => {
        setIsCategoriesOpen(false);
    }

    return(
        <Drawer 
              anchor='left'
              open={isCategoriesOpen}
              onClose={() => setIsCategoriesOpen(false)}
            >
                <Paper elevated={3} sx={{ display: { xs: 'block', md: 'none' } }}>
                <Box sx={{ p: 2, width: 170, position: "sticky" }}>
                <Typography gutterBottom variant="h5" component="div">
                    Categories
                </Typography>
                <Button onClick={ handleCategoriesDrawerClose }>
                    <CloseIcon/>
                </Button>
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
        </Drawer>
    );
} 