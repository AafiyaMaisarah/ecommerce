import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import as from './styles.module.css'

function ProductCard(props) {
    const { product } = props;
  return (
    <Card sx={{ maxWidth: 335, margin: "10px" }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="200"
          image={product.image}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {product.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {product.description}
          </Typography>
          <Typography variant="H7" color="text.secondary">
              
           <p>$ {product.price}</p>
          </Typography>
          <Typography variant="H6" color="text.secondary">
          Rating: {product.rating.rate}
               
             </Typography><br></br><br></br>
            <button className={as.cart}>ADD TO CART</button>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}


export default ProductCard;