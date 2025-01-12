import React from 'react';
import { Container, Typography, List, ListItem, ListItemText, Button, Box, Divider } from '@mui/material';

const CartPage = ({ cartItems, removeFromCart }) => {
  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + item.price, 0).toFixed(2);
  };

  return (
    <Container>
      <Typography variant="h4" component="h1" gutterBottom sx={{ my: 4 }}>
        Shopping Cart
      </Typography>
      {cartItems.length === 0 ? (
        <Typography>Your cart is empty</Typography>
      ) : (
        <>
          <List>
            {cartItems.map((item) => (
              <React.Fragment key={item.id}>
                <ListItem>
                  <ListItemText
                    primary={item.name}
                    secondary={`$${item.price}`}
                  />
                  <Button
                    variant="outlined"
                    color="error"
                    onClick={() => removeFromCart(item.id)}
                  >
                    Remove
                  </Button>
                </ListItem>
                <Divider />
              </React.Fragment>
            ))}
          </List>
          <Box sx={{ mt: 4, textAlign: 'right' }}>
            <Typography variant="h6">
              Total: ${calculateTotal()}
            </Typography>
            <Button
              variant="contained"
              color="primary"
              size="large"
              sx={{ mt: 2 }}
            >
              Checkout
            </Button>
          </Box>
        </>
      )}
    </Container>
  );
};

export default CartPage;