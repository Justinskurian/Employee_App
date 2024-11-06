import { Box, Button, Grid2, TextField, Typography } from '@mui/material'
import React from 'react'

const Form = () => {
  return (
    
    <Box sx={{ flexGrow: 1 }} style={{margin:'5%'}}>
      <Typography variant='h5' style={{color:'White'}}>New Employee Details</Typography>
      <br/><br/>

      <Grid2 container spacing={4}>

        <Grid2 size={12}>
        <TextField fullWidth id="outlined-basic" label="Name" variant="outlined" />
        </Grid2>

        <Grid2 size={12}>
        <TextField fullWidth id="outlined-basic" label="Designation" variant="outlined" />
        </Grid2>

        <Grid2 size={12}>
        <TextField fullWidth id="outlined-basic" label="Location" variant="outlined" />
        </Grid2>

        <Grid2 size={12}>
        <TextField fullWidth id="outlined-basic" label="Salary" variant="outlined" />
        </Grid2>
       
        <br/><br/>
        <Button variant='contained'>Send</Button> 

      </Grid2>
    </Box>
  )
}

export default Form
