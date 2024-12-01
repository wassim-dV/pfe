import React, { useState } from 'react';
import { DataGrid } from '@mui/x-data-grid';
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
  table3: [
    { id: 1, from: 'Charlie', to: 'Teacher', spe_master: 'Bio', date_creation: '2023-11-30', relance: 'Yes', action: 'In Progress' },
    { id: 2, from: 'Dana', to: 'Student', spe_master: 'Chemistry', date_creation: '2023-03-25', relance: 'No', action: 'Completed' },
    { id: 3, from: 'Charlie', to: 'Teacher', spe_master: 'Bio', date_creation: '2023-11-30', relance: 'Yes', action: 'In Progress' },
    { id: 4, from: 'Dana', to: 'Student', spe_master: 'Chemistry', date_creation: '2023-03-25', relance: 'No', action: 'Completed' },
    { id: 5, from: 'Charlie', to: 'Teacher', spe_master: 'Bio', date_creation: '2023-11-30', relance: 'Yes', action: 'In Progress' },
    { id: 6, from: 'Dana', to: 'Student', spe_master: 'Chemistry', date_creation: '2023-03-25', relance: 'No', action: 'Completed' },
    { id: 7, from: 'Charlie', to: 'Teacher', spe_master: 'Bio', date_creation: '2023-11-30', relance: 'Yes', action: 'In Progress' },
    { id: 8, from: 'Dana', to: 'Student', spe_master: 'Chemistry', date_creation: '2023-03-25', relance: 'No', action: 'Completed' },
  ],
  table4: [
    { id: 1, from: 'Eve', to: 'Student', spe_master: 'Eng', date_creation: '2023-09-15', relance: 'Yes', action: 'Pending' },
    { id: 2, from: 'Frank', to: 'Teacher', spe_master: 'Art', date_creation: '2023-04-10', relance: 'No', action: 'Completed' },
    { id: 3, from: 'Eve', to: 'Student', spe_master: 'Eng', date_creation: '2023-09-15', relance: 'Yes', action: 'Pending' },
    { id: 4, from: 'Frank', to: 'Teacher', spe_master: 'Art', date_creation: '2023-04-10', relance: 'No', action: 'Completed' },
    { id: 5, from: 'Eve', to: 'Student', spe_master: 'Eng', date_creation: '2023-09-15', relance: 'Yes', action: 'Pending' },
    { id: 6, from: 'Frank', to: 'Teacher', spe_master: 'Art', date_creation: '2023-04-10', relance: 'No', action: 'Completed' },
    { id: 7, from: 'Eve', to: 'Student', spe_master: 'Eng', date_creation: '2023-09-15', relance: 'Yes', action: 'Pending' },
    { id: 8, from: 'Frank', to: 'Teacher', spe_master: 'Art', date_creation: '2023-04-10', relance: 'No', action: 'Completed' },
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
    if (window.confirm(`Are you sure you want to delete row with ID: ${id}?`)) {
      setData((prevData) => ({
        ...prevData,
        [currentTable]: prevData[currentTable].filter((row) => row.id !== id),
      }));
    }
  };

  const columns = [
    { field: 'id', headerName: 'ID', width: 70, align: 'center', headerAlign: 'center',   headerClassName: 'header-bold', // نمط CSS مخصص
    },
    { field: 'from', headerName: 'From', width: 140, align: 'center', headerAlign: 'center' },
    { field: 'to', headerName: 'To', width: 140, align: 'center', headerAlign: 'center' },
    { field: 'spe_master', headerName: 'Spe Master', width: 180, align: 'center', headerAlign: 'center' },
    { field: 'date_creation', headerName: 'Date Creation', width: 180, align: 'center', headerAlign: 'center' },
    { field: 'relance', headerName: 'Relance', width: 150, align: 'center', headerAlign: 'center' },
    {

      
      field: 'actions',
      headerName: 'Actions',
      width: 98,
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
          width: '100%',
          margin: '50px auto',
          maxWidth: '1000px',
          padding: '20px',
          backgroundColor: '#f4f6f8',
          borderRadius: '20px',
          boxShadow: '0 8px 16px rgba(0, 0, 0, 0.2)',
        }}
      >
        <Box sx={{ display: 'flex', alignItems: 'center',justifyContent:'center', mb: 3 }}>
  {['Appel à proposition', 'Appel à encadrement', 'Affectation de projet', 'Rappels de soutenance'].map((item, index) => (
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
              border: '1px solid #ddd',
            },
            '& .MuiDataGrid-columnHeader': {
              backgroundColor: '#f4f4f4',
              fontWeight: 'bold',
              color: '#333',
              borderBottom: '2px solid #ddd',
            },
          }}
        />
      </Box>

      {/* نافذة التعديل */}
      {selectedRow && (
        <Dialog open={openEditDialog} onClose={handleDialogClose}>
        <DialogTitle>Edit Row</DialogTitle>
        <DialogContent>
          <TextField
            margin="dense"
            label="Email titel"
            fullWidth
            value={selectedRow.from}
            onChange={(e) => handleFieldChange('from', e.target.value)}
          />
          <h3> Trager to</h3>
          <Grid container spacing={2}>
            
            <Grid item xs={6}>
              
              <FormControl fullWidth margin="dense">
                <InputLabel>To</InputLabel>
                <Select
                  sx={{ width: "100%" }}
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
                  sx={{ width: "100%" }}
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
          <h3>Dead line</h3>
          <Grid container spacing={2}>
            
            <Grid item xs={5}>
              
              
              <FormControl fullWidth margin="dense">
              <TextField
                  type="date">
                  </TextField>   
              </FormControl>
            </Grid>
            <Grid item xs={6}>
              <FormControl fullWidth margin="dense">
                 <TextField
                  type="date">
                  </TextField>                  
              </FormControl>
            </Grid>
          </Grid>

          <FormControlLabel
  control={
    <RadioGroup
      value={selectedRow.relance}
      onChange={(e) => handleFieldChange('relance', e.target.value)}
      row
      sx={{ alignItems: 'center' }} // لضمان أن جميع العناصر تكون في نفس السطر
    >
        <h3 style={{marginLeft:"18px"}}>Relance</h3>

      <FormControlLabel
        value="Yes"
        control={<Radio />}
        label="Yes"
        sx={{ marginLeft: "30px" }} // المسافة بين الزر والعنوان
      />
      <FormControlLabel
        value="No"
        control={<Radio />}
        label="No"
        sx={{ marginRight: "30px" }} // المسافة بين الزر والعنوان
      />
    </RadioGroup>
  }
  sx={{
    display: 'flex',
    alignItems: 'center', // محاذاة العنوان والأزرار بشكل أفقي
    marginBottom: '20px',
  }}
/>


          {selectedRow.relance === 'Yes' && (
            <TextField
                          sx={{width:"450px"}}

              label="Relance Date"
              type="date"
              fullWidth
              InputLabelProps={{ shrink: true }}
              value={selectedRow.date_creation}
              onChange={(e) => handleFieldChange('date_creation', e.target.value)}
            />
          )}
          <h3>Description</h3>


           <TextField
              margin="dense"
              label="Description"
              type="text"
              fullWidth
              InputLabelProps={{ shrink: true }}
              value={selectedRow.date_creation}
              onChange={(e) => handleFieldChange('date_creation', e.target.value)}
            />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleDialogClose} color="secondary">
            Cancel
          </Button>
          <Button onClick={handleSave} color="primary">
            Save
          </Button>
        </DialogActions>
      </Dialog>
      )}
    </ThemeProvider>
  );
}
