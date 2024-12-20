import React, { useState } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import Swal from "sweetalert2";

import {
  Box,
  Button,
  ThemeProvider,
  createTheme,
  IconButton,
  Dialog,
  Grid,
  FormControlLabel, Radio, RadioGroup,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
  Select,
  MenuItem,
  InputLabel,
  FormControl
} from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

// بيانات كل جدول
const initialData = {
  table1: [
    { id: 1, from: 'John', to: 'Teacher', spe_master: 'CS', date_creation: '2023-12-19', relance: 'Yes', action: 'Pending' },
    { id: 2, from: 'Jane', to: 'Student', spe_master: 'IT', date_creation: '2023-08-14', relance: 'No', action: 'Completed' },
    { id: 3, from: 'John', to: 'Teacher', spe_master: 'CS', date_creation: '2023-12-19', relance: 'Yes', action: 'Pending' },
    { id: 4, from: 'Jane', to: 'Student', spe_master: 'IT', date_creation: '2023-08-14', relance: 'No', action: 'Completed' },
    { id: 5, from: 'John', to: 'Teacher', spe_master: 'CS', date_creation: '2023-12-19', relance: 'Yes', action: 'Pending' },
    { id: 6, from: 'Jane', to: 'Student', spe_master: 'IT', date_creation: '2023-08-14', relance: 'No', action: 'Completed' },
    { id: 7, from: 'John', to: 'Teacher', spe_master: 'CS', date_creation: '2023-12-19', relance: 'Yes', action: 'Pending' },
    { id: 8, from: 'Jane', to: 'Student', spe_master: 'IT', date_creation: '2023-08-14', relance: 'No', action: 'Completed' },
 
 
  ],
  table2: [
    { id: 1, from: 'Alice', to: 'Student', spe_master: 'Math', date_creation: '2023-07-12', relance: 'Yes', action: 'In Progress' },
    { id: 2, from: 'Bob', to: 'Teacher', spe_master: 'Physics', date_creation: '2023-05-20', relance: 'No', action: 'Pending' },
    { id: 3, from: 'Alice', to: 'Student', spe_master: 'Math', date_creation: '2023-07-12', relance: 'Yes', action: 'In Progress' },
    { id: 4, from: 'Bob', to: 'Teacher', spe_master: 'Physics', date_creation: '2023-05-20', relance: 'No', action: 'Pending' },
    { id: 5, from: 'Alice', to: 'Student', spe_master: 'Math', date_creation: '2023-07-12', relance: 'Yes', action: 'In Progress' },
    { id: 6, from: 'Bob', to: 'Teacher', spe_master: 'Physics', date_creation: '2023-05-20', relance: 'No', action: 'Pending' },
    { id: 7, from: 'Alice', to: 'Student', spe_master: 'Math', date_creation: '2023-07-12', relance: 'Yes', action: 'In Progress' },
    { id: 8, from: 'Bob', to: 'Teacher', spe_master: 'Physics', date_creation: '2023-05-20', relance: 'No', action: 'Pending' },
  ],
  
};

const theme = createTheme({
  components: {
    MuiDataGrid: {
      styleOverrides: {
        root: {
          backgroundColor: '#fff',
          border: '1px solid #d0d0d0',
          borderRadius: '15px',
        },
      },
    },
  },
});

export default function DynamicTables() {
  const [data, setData] = useState(initialData);
  const [currentTable, setCurrentTable] = useState('table1');
  const [openEditDialog, setOpenEditDialog] = useState(false);
  const [selectedRow, setSelectedRow] = useState(null);

  const handleEdit = (id) => {
    const row = data[currentTable].find((row) => row.id === id);
    setSelectedRow(row);
    setOpenEditDialog(true);
  };

  const handleDialogClose = () => {
    setOpenEditDialog(false);
    setSelectedRow(null);
  };

  const handleSave = () => {
    setData((prevData) => ({
      ...prevData,
      [currentTable]: prevData[currentTable].map((row) =>
        row.id === selectedRow.id ? selectedRow : row
      ),
    }));
    handleDialogClose();
  };

  const handleFieldChange = (field, value) => {
    setSelectedRow((prevRow) => ({
      ...prevRow,
      [field]: value,
    }));
  };

  const handleDelete = (id) => {
    Swal.fire({
      title: "Do you want to delete this item?",
      text: `Are you sure you want to delete the item with ID: ${id}?`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Yes, delete it",
      cancelButtonText: "Cancel",
    }).then((result) => {
      if (result.isConfirmed) {
        setData((prevData) => ({
          ...prevData,
          [currentTable]: prevData[currentTable].filter((row) => row.id !== id),
        }));
  
        Swal.fire({
          title: "Deleted!",
          text: `The item with ID: ${id} has been deleted.`,
          icon: "success",
          confirmButtonColor: "#3085d6",
          confirmButtonText: "OK",
        });
      }
    });
  };

  const columns = [
    { field: 'id', headerName: 'ID', width: 80, align: 'center', headerAlign: 'center',   headerClassName: 'header-bold', // نمط CSS مخصص
    },
    { field: 'from', headerName: 'From', width: 180, align: 'center', headerAlign: 'center' },
    { field: 'to', headerName: 'To', width: 180, align: 'center', headerAlign: 'center' },
    { field: 'spe_master', headerName: 'Spe Master', width: 210, align: 'center', headerAlign: 'center' },
    { field: 'date_creation', headerName: 'Date Creation', width: 210, align: 'center', headerAlign: 'center' },
    { field: 'relance', headerName: 'Relance', width: 190, align: 'center', headerAlign: 'center' },
    {

      
      field: 'actions',
      headerName: 'Actions',
      width: 120,
      align: 'center',
      headerAlign: 'center',
      renderCell: (params) => (
        <Box sx={{ display: 'flex' }}>
          <IconButton
                       color='gray'
            onClick={() => handleEdit(params.row.id)}
          >
            <EditIcon />
          </IconButton>
          <IconButton
          
            color="gray"
            onClick={() => handleDelete(params.row.id)}
          >
            <DeleteIcon />
          </IconButton>
        </Box>
      ),
    },
  ];
  

  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          height: 600,
          width: '1200px',
          marginTop:"50px",
          marginLeft:"-100px",
          maxWidth: '1200px',
          padding: '10px',
          backgroundColor: '#f4f6f8',
          borderRadius: '20px',
          boxShadow: '0 8px 16px rgba(0, 0, 0, 0.2)',
        }}
      >
        <Box sx={{ display: 'flex', alignItems: 'center',justifyContent:'center', mb: 3 }}>
  {['Appel à proposition', 'Appel à encadrement'].map((item, index) => (
    <Box
      key={index}
      onClick={() => setCurrentTable(`table${index + 1}`)}
      sx={{
        cursor: 'pointer',
        textAlign: 'center',
        color: currentTable === `table${index + 1}` ? 'primary.main' : 'text.secondary',
        fontWeight: currentTable === `table${index + 1}` ? 'bold' : 'normal',
        position: 'relative',
        px: 2,
      }}
    >
      {item}
      {currentTable === `table${index + 1}` && (
        <Box
          sx={{
            position: 'absolute',
            bottom: -4,
            left: 0,
            right: 0,
            height: 3,
            backgroundColor: 'primary.main',
            borderRadius: 1,
          }}
        />
      )}
    </Box>
  ))}
</Box>

        <DataGrid
          rows={data[currentTable]}
          columns={columns}
          pageSize={5}
          sx={{
            '& .MuiDataGrid-cell, .MuiDataGrid-columnHeader': {
              fontFamily: 'Roboto, sans-serif',
              fontSize:'18px',

              border: '1px solid #ddd',
            },
            '& .MuiDataGrid-columnHeader': {
              backgroundColor: '#f4f4f4',
              fontWeight: 'bold',
              fontSize:'25px',
              fontFamily:'bold',
              color: '#333',
              borderBottom: '2px solid #ddd',
            },
          }}
        
        />
      </Box>

      {/* نافذة التعديل */}
      {selectedRow && (
        <Dialog 
  open={openEditDialog} 
  onClose={handleDialogClose}
  PaperProps={{
    sx: { padding: 2, borderRadius: "12px", maxWidth: "600px" },
  }}
>
  <DialogTitle 
    sx={{ 
      fontSize: "1.5rem", 
      fontWeight: "bold", 
      color: "#1976d2", 
      textAlign: "center" 
    }}
  >
    Edit Row
  </DialogTitle>

  <DialogContent 
    sx={{ 
      display: "flex", 
      flexDirection: "column", 
      gap: 2 
    }}
  >
    <TextField
      margin="dense"
      label="Email Title"
      fullWidth
      value={selectedRow.from}
      onChange={(e) => handleFieldChange('from', e.target.value)}
      sx={{
        "& .MuiInputBase-root": {
          borderRadius: "8px",
        },
      }}
    />

    <h3 style={{ margin: "10px 0", color: "#1565c0" }}>Trager To</h3>
    <Grid container spacing={2}>
      <Grid item xs={6}>
        <FormControl fullWidth margin="dense">
          <InputLabel>To</InputLabel>
          <Select
            sx={{ borderRadius: "8px" }}
            value={selectedRow.to}
            onChange={(e) => handleFieldChange('to', e.target.value)}
            label="To"
          >
            <MenuItem value="Doe">Doe</MenuItem>
            <MenuItem value="Smith">Smith</MenuItem>
            <MenuItem value="Brown">Brown</MenuItem>
            <MenuItem value="Taylor">Taylor</MenuItem>
          </Select>
        </FormControl>
      </Grid>

      <Grid item xs={6}>
        <FormControl fullWidth margin="dense">
          <InputLabel>Spe Master</InputLabel>
          <Select
            sx={{ borderRadius: "8px" }}
            value={selectedRow.spe_master}
            onChange={(e) => handleFieldChange('spe_master', e.target.value)}
            label="Spe Master"
          >
            <MenuItem value="CS">CS</MenuItem>
            <MenuItem value="IT">IT</MenuItem>
            <MenuItem value="Math">Math</MenuItem>
            <MenuItem value="Physics">Physics</MenuItem>
          </Select>
        </FormControl>
      </Grid>
    </Grid>

    <h3 style={{ margin: "10px 0", color: "#1565c0" }}>Deadline</h3>
    <Grid container spacing={2}>
      <Grid item xs={5}>
        <FormControl fullWidth margin="dense">
          <TextField type="date" sx={{ borderRadius: "8px" }} />
        </FormControl>
      </Grid>

      <Grid item xs={6}>
        <FormControl fullWidth margin="dense">
          <TextField type="date" sx={{ borderRadius: "8px" }} />
        </FormControl>
      </Grid>
    </Grid>

    <FormControl
      sx={{
        display: "flex",
        alignItems: "center",
        marginBottom: "20px",
      }}
    >
      <h3 style={{ marginLeft: "18px", color: "#1565c0" }}>Relance</h3>
      <RadioGroup
        value={selectedRow.relance}
        onChange={(e) => handleFieldChange('relance', e.target.value)}
        row
        sx={{ alignItems: "center", marginLeft: "20px" }}
      >
        <FormControlLabel
          value="Yes"
          control={<Radio color="primary" />}
          label="Yes"
        />
        <FormControlLabel
          value="No"
          control={<Radio color="secondary" />}
          label="No"
        />
      </RadioGroup>
    </FormControl>

    {selectedRow.relance === 'Yes' && (
      <TextField
        sx={{ width: "100%" }}
        label="Relance Date"
        type="date"
        fullWidth
        InputLabelProps={{ shrink: true }}
        value={selectedRow.date_creation}
        onChange={(e) => handleFieldChange('date_creation', e.target.value)}
      />
    )}

    <h3 style={{ margin: "10px 0", color: "#1565c0" }}>Description</h3>
    <TextField
      margin="dense"
      label="Description"
      type="text"
      fullWidth
      InputLabelProps={{ shrink: true }}
      value={selectedRow.date_creation}
      onChange={(e) => handleFieldChange('date_creation', e.target.value)}
      sx={{
        "& .MuiInputBase-root": {
          borderRadius: "8px",
        },
      }}
    />
  </DialogContent>

  <DialogActions sx={{ justifyContent: "center", gap: 2 }}>
    <Button
      onClick={handleDialogClose}
      color="secondary"
      variant="outlined"
      sx={{
        textTransform: "none",
        borderRadius: "8px",
      }}
    >
      Cancel
    </Button>
    <Button
      onClick={handleSave}
      color="primary"
      variant="contained"
      sx={{
        textTransform: "none",
        borderRadius: "8px",
      }}
    >
      Save
    </Button>
  </DialogActions>
</Dialog>

      )}
    </ThemeProvider>
  );
}
