import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import CloseIcon from '@mui/icons-material/Close';
import { styled } from '@mui/material/styles';

import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

const apiUrl = process.env.REACT_APP_API_URL;


const Store = () => {
  
  const [data, setData] = useState([]);
  const [open, setOpen] = React.useState(false);
  const [formData, setFormData] =  useState({
    organizationName: '',
    organizationDetails: '',
    organizationAddress: '',
    organizationPhone: '',
    organizationEmail: '',
    taxId: '',
    registrationId: '',

  });


  const BootstrapDialog = styled(Dialog)(({ theme }) => ({
    '& .MuiDialogContent-root': {
      padding: theme.spacing(2),
    },
    '& .MuiDialogActions-root': {
      padding: theme.spacing(1),
    },
  }));

 useEffect(() => {
   const fetchData = async () => {
     try {
       const response = await axios.get(`${apiUrl}/organizations`);
       setData(response.data);
      //  console.log(response.data)
     } catch (error) {
       console.error('Error fetching data:', error);
     }
   };

   fetchData();
 }, []); // Empty dependency array ensures the effect runs only once on mount


const columns = [
  { field: 'id', headerName: 'ID', flex: 1 },
  { field: 'organizationName', headerName: 'Organization Name', flex: 1 },
  { field: 'organizationDetails', headerName: 'Organization Details', flex: 1 },
  { field: 'organizationAddress', headerName: 'Organization Address', flex: 1 },
  { field: 'organizationPhone', headerName: 'Organization Phone', flex: 1 },
  // { field: 'organizationEmail', headerName: 'Organization Email', flex: 1 },
  // { field: 'taxId', headerName: 'Tax ID', flex: 1 },
  // { field: 'registrationId', headerName: 'Registration ID', flex: 1 },
  // { field: 'createdAt', headerName: 'Created At', flex: 1 },
  // { field: 'updatedAt', headerName: 'Updated At', flex: 1 },

  {
    field: 'actions',
    headerName: 'Actions',
    width: 250,
    renderCell: (params) => (
      <div>
         <Button variant="outlined"  onClick={() => handleUpdate(params.row.id)}>Update</Button> 

        <Button variant="outlined" onClick={handleClickOpen}>Update</Button>

        <Button onClick={() => handleDelete(params.row.id)} color="error" variant="contained" startIcon={<DeleteIcon />}>Delete</Button>
      
      </div>
    ),
  },
];

const handleClickOpen = () => {
  setOpen(true);
};
const handleClose = () => {
  setOpen(false);
};



const handleUpdate = (id) => {
  // Implement the logic to update the organization with the given ID
   // Update the local data after successful update
   const findData  = data.filter((item) => item.id == id);
   setFormData(findData);
   
   
  console.log(findData);
};

const handleDelete = async (id) => {
  try {
    await axios.delete(`${apiUrl}/organizations/${id}`);
    // Update the data after successful deletion
    const updatedData = data.filter((item) => item.id !== id);
    setData(updatedData);
  } catch (error) {
    console.error('Error deleting data:', error);
  }
};

    return (
      <div variant="grid">
        <Card sx={{ minWidth: 275 }}>
          {/* <LinearProgress /> */}
          <CardContent>
            <Typography sx={{ fontSize: 20 }} color="text.secondary" gutterBottom >
             Organization
            </Typography>
           

            <Box sx={{ height: 600, width: '100%' }}>
           
            <DataGrid rows={data} columns={columns} initialState={{
                pagination: {
                    paginationModel: {
                    pageSize: 50,
                    },
                },
                }}
                rowsPerPageOptions={[5, 10, 20]}
                checkboxSelection
                disableRowSelectionOnClick
            />
            </Box>
           
          </CardContent>
        </Card>
       
     
      <BootstrapDialog onClose={handleClose} aria-labelledby="customized-dialog-title" open={open}>
        <DialogTitle sx={{ m: 0, p: 2 }} id="customized-dialog-title">
          Update Organination
        </DialogTitle>
        <IconButton aria-label="close" onClick={handleClose}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
        <DialogContent dividers>
        {Object.keys(formData).map((field) => (
           <TextField id="outlined-basic" variant="outlined"   key={field} fullWidth label={field} name={field} 
          //  value={formData[field]}
            // onChange={handleInputChange}
            margin="normal"
          />
        ))}
         
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleClose}>
            Save
          </Button>
        </DialogActions>
      </BootstrapDialog>
    </div>

      );  
}

export default Store