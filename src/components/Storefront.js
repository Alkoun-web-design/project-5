import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Divider from '@mui/material/Divider';
import CategoriesDrawer from './CategoriesDrawer';
import ProductsDisplay from './ProductsDisplay'
import Categories from './Categories';
import { useState } from 'react';
// import useMediaQuery from '@mui/material/useMediaQuery';
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import { ReactComponent as GrayLogo } from '../images/sands-gray-icon-nobg.svg';


export default function Storefront({  
    isCategoriesOpen, 
    setIsCategoriesOpen, 
    setProductPage,
    }) {
    
    const [selectedIndex, setSelectedIndex] = useState("pcat_01HA9N02T09VEB39QQC6HT31M7");

    const handleListItemClick = (event, index) => {
      setSelectedIndex(index);
    };    


    return(
        <>
            <Stack direction="row" divider={<Divider orientation="horizontal" />}>
                <Grid 
                    container
                    direction="row"
                    justifyContent="center"
                    alignItems="center"
                    style={{
                        position: "absolute", 
                        zIndex: -1
                    }}>    
                    <GrayLogo style={{  
                        height: 600,
                        width: 600,
                        }} />
                </Grid>      
                <Categories 
                    selectedIndex={selectedIndex}
                    handleListItemClick={handleListItemClick}
                />
                <CategoriesDrawer 
                    isCategoriesOpen={isCategoriesOpen} 
                    setIsCategoriesOpen={setIsCategoriesOpen}
                    selectedIndex={selectedIndex}
                    handleListItemClick={handleListItemClick}
                />
                <Box sx={{ p: 2 }}>  
                    <ProductsDisplay 
                        setProductPage={setProductPage}
                        selectedIndex={selectedIndex}
                    />
                </Box>
            </Stack>
        </>
    );
}