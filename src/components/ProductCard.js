import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import { CardActionArea } from '@mui/material';
import { Link } from 'react-router-dom';

export default function ProductCard({ name, image, options, variants, handle, setProductPage }) {

  const handleOpenProduct = () => {
    setProductPage({
      name: name,
      image: image,
      options: options,
      variants: variants,
      handle: handle 
    });
  };

  return (

      <Grid item >
        <Card  sx={{ p: 0.25, maxWidth: 170, minWidth: 170 }}>
          <CardActionArea component={ Link } to={handle} onClick={handleOpenProduct}>
            <CardMedia
              component="img"
              height="160"
              src={image}
              alt={name}
            />
            <CardContent>
              <Typography gutterBottom variant="subtitle2" component="div">
                {name}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </Grid>
    );
  }