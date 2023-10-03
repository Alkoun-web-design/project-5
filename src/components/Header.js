// import Fab from '@mui/material/Fab';
// import Logo from '../images/7081401_3548737.jpg';
// import Badge from '@mui/material/Badge';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import Badge from '@mui/material/Badge';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import ListIcon from '@mui/icons-material/List';
import Button from '@mui/material/Button';
import {ReactComponent as SandSlogo} from '../images/sands-logo.svg';
import {ReactComponent as GreenIcon} from '../images/sands-green-logo.svg'


const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(3),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
}));

export default function Header({setIsShoppingCartOpen, setIsCategoriesOpen, badgeCounter}) {

  const handleShoppingCartClick = () => {
    setIsShoppingCartOpen(true);
  };

  const handleCategoriesClick = () => {
    setIsCategoriesOpen(true);
  };

  return (
    <Box sx={{ flexGrow: 1, bgColor: "#67720C"}} color="success">
      <AppBar position="sticky" color="success" >
        <Toolbar>
          <Box sx={{ display: { xs: 'flex', md: 'none'  } }}>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="open drawer"
              sx={{ mr: 2 }}
              onClick={ handleCategoriesClick }
            >
              <ListIcon />
          </IconButton>
          </Box>
          <Box sx={{ display: { xs: 'none', md: 'flex'  } }}>
            <SandSlogo style={{height: 60, m: 2}}/>
          </Box>
          <Box sx={{ display: { xs: 'flex', md: 'none'  } }}>
            <GreenIcon style={{height: 50 }}/>
          </Box>
          {/* <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ display: { xs: 'none', sm: 'block' } }}
          >
            Saeed & Sons
          </Typography> */}
          
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
            />
          </Search>
          <Box sx={{ flexGrow: 1 }} />
          <Box>
            <IconButton 
              variant="filled" 
              color="inherit" 
              size="medium" 
              onClick={ handleShoppingCartClick }>
              <Badge showZero badgeContent={badgeCounter} color="warning">
                <ShoppingCartIcon />
              </Badge>
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}