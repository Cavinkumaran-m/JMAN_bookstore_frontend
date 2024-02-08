import React from "react";
import {
  Button,
  TextField,
  Box,
  Typography,
  Container,
  Paper,
  Link as MuiLink,
} from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import "./index.css";

const LoginPage = () => {
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    // Perform your validation and login logic here
    console.log("Login form submitted", event.target);

    // After login logic, navigate to a new route programmatically
    navigate("/dashboard");
  };

  return (
    <Container component="main" maxWidth="xs" className="container">
      <Paper elevation={3} className="paper">
        <Box className="formContainer">
          <Typography component="h1" variant="h5">
            Sign in to continue
          </Typography>
          <Box component="form" noValidate onSubmit={handleSubmit}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              id="password"
              label="Password"
              name="password"
              autoComplete="password"
              autoFocus
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              className="submitButton">
              Sign In
            </Button>
            <Box className="linksContainer">
              <MuiLink component={Link} to="/forgot-password" variant="body2">
                Forgot email?
              </MuiLink>
              <MuiLink component={Link} to="/register" variant="body2">
                Create account
              </MuiLink>
            </Box>
          </Box>
        </Box>
      </Paper>
    </Container>
  );
};

export default LoginPage;
