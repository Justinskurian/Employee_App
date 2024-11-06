import { AppBar, Box, Button, Toolbar, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
      
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <Typography
              variant="h6"
              component="div"
              sx={{ flexGrow: 1 }}
              align="left"
            >
              Employee App
            </Typography>

            <Button color="inherit">
              <Link to={"/"} style={{ textDecoration: "none", color: "white" }}>
                Home
              </Link>
            </Button>

            <Button color="inherit">
              <Link to={"/Form"} style={{ textDecoration: "none", color: "white" }}>
                Employee Form
              </Link>
            </Button>
           
          </Toolbar>
        </AppBar>
      </Box>

    </div>
  )
}

export default Navbar
