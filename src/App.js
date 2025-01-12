import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Button, Badge } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Link as RouterLink } from 'react-router-dom';
import ProductsPage from './pages/ProductsPage';
import CartPage from './pages/CartPage';

function App() {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    setCartItems([...cartItems, product]);
  };

  const removeFromCart = (productId) => {
    setCartItems(cartItems.filter(item => item.id !== productId));
  };

  return (
    <Router>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <Button color="inherit" component={RouterLink} to="/">
              Roshan Shopping Cart
            </Button>
          </Typography>
          <Button>search</Button>
          <Button
            color="inherit"
            component={RouterLink}
            to="/cart"
            startIcon={
              <Badge badgeContent={cartItems.length} color="error">
                <ShoppingCartIcon />
              </Badge>
            }
          >
            Cart
          </Button>
        </Toolbar>
      </AppBar>

      <Routes>
        <Route path="/" element={<ProductsPage addToCart={addToCart} />} />
        <Route
          path="/cart"
          element={<CartPage cartItems={cartItems} removeFromCart={removeFromCart} />}
        />
      </Routes>
    </Router>
  );
}

export default App;