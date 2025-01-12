import React, { useState } from 'react';
import { Container, Grid, Card, CardMedia, CardContent, Typography, Button } from '@mui/material';

const products = [
  {
    id: 1,
    name: 'Men Printed Round Neck Polyester Green T-Shirt',
    price: 29.99,
    image: 'https://rukminim2.flixcart.com/image/612/612/xif0q/t-shirt/d/0/w/l-ts58-vebnor-original-imah7m24nvc7jcys.jpeg?q=70',
    description: 'Round Neck Polyester Green T-Shirt'
  },
  {
    id: 2,
    name: 'Men Solid Round Neck Polyester Black T-Shirt',
    price: 39.99,
    image: 'https://rukminim2.flixcart.com/image/612/612/xif0q/t-shirt/d/m/7/l-men-compression-tshirt-gym-and-sports-wear-tshirt-for-men-body-original-imagzukqqzfhqbax.jpeg?q=70',
    description: 'Solid Round Neck Polyester Black T-Shirt'
  },
  {
    id: 3,
    name: 'Men Relaxed Fit Mid Rise Dark Grey Jeans',
    price: 88,
    image: 'https://rukminim2.flixcart.com/image/612/612/xif0q/jean/n/y/l/28-united162-grey-united-denim-original-imagybzxwyyfesp9.jpeg?q=70',
    description: 'UNITED DENIM'
  },
  {
    id: 4,
    name: 'Kurta',
    price: 65,
    image: 'https://rukminim2.flixcart.com/image/612/612/xif0q/kurta/j/z/u/m-chainlster-sopani-original-imagtjhdf7azz8n2.jpeg?q=70',
    description: 'SOPANI'
  },
  {
    id: 5,
    name: 'Wallet',
    price: 45.99,
    image: 'https://rukminim2.flixcart.com/image/612/612/xif0q/wallet-card-wallet/k/t/p/leather-wallet-for-men-1-10-wa-maroon2052-5-wallet-wildhorn-10-original-imah4u5xn6rfcsxh.jpeg?q=70',
    description: 'GLORI STAR'
  },
  {
    id: 6,
    name: 'Analog Watch',
    price: 1379,
    image: 'https://rukminim2.flixcart.com/image/612/612/xif0q/watch/f/c/e/-original-imagz4wvdgmdhpwz.jpeg?q=70',
    description: 'Fastrack'
  }
];

const ProductsPage = ({ addToCart }) => {
  return (
    <Container>
      <Typography variant="h4" component="h1" gutterBottom sx={{ my: 4 }}>
        Products
      </Typography>
      <Grid container spacing={4}>
        {products.map((product) => (
          <Grid item key={product.id} xs={12} sm={6} md={4}>
            <Card>
              <CardMedia
                component="img"
                image={product.image}
                alt={product.name}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  {product.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {product.description}
                </Typography>
                <Typography variant="h6" color="primary" sx={{ mt: 2 }}>
                  ${product.price}
                </Typography>
                <Button
                  variant="contained"
                  color="primary"
                  onClick={() => addToCart(product)}
                  sx={{ mt: 2 }}
                >
                  Add to Cart
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default ProductsPage;