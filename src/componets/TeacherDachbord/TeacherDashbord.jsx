import React, { useState } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { GridToolbarContainer } from '@mui/x-data-grid';


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
  Typography,
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
    { id: 1, from: 'Jane',  spe_master: 'IT', date_creation: '2023-08-14', Status: 'No', action: 'Completed' },

        { id: 2, from: 'Jane',  spe_master: 'IT', date_creation: '2023-08-14', Status: 'No', action: 'Completed' },
    { id: 3, from: 'John',  spe_master: 'CS', date_creation: '2023-12-19', Status: 'Yes', action: 'Pending' },
    { id: 4, from: 'Jane', spe_master: 'IT', date_creation: '2023-08-14', Status: 'No', action: 'Completed' },
    { id: 5, from: 'John', spe_master: 'CS', date_creation: '2023-12-19', Status: 'Yes', action: 'Pending' },
    { id: 6, from: 'Jane',  spe_master: 'IT', date_creation: '2023-08-14', Status: 'No', action: 'Completed' },
    { id: 7, from: 'John', spe_master: 'CS', date_creation: '2023-12-19', Status: 'Yes', action: 'Pending' },
    { id: 8, from: 'Jane',  spe_master: 'IT', date_creation: '2023-08-14', Status: 'No', action: 'Completed' },
    { id: 9, from: 'John', spe_master: 'CS', date_creation: '2023-12-19', Status: 'Yes', action: 'Pending' },
    { id: 10, from: 'Jane', spe_master: 'IT', date_creation: '2023-08-14', Status: 'No', action: 'Completed' },
 
    { id: 11, from: 'Jane', spe_master: 'IT', date_creation: '2023-08-14', Status: 'No', action: 'Completed' },
 
 
  ],
  table2: [
    { id: 1, from: 'John',  spe_master: 'CS', date_creation: '2023-12-19', Status: 'Yes', action: 'Pending' },
    { id: 2, from: 'Jane',  spe_master: 'IT', date_creation: '2023-08-14', Status: 'No', action: 'Completed' },
    { id: 3, from: 'John',  spe_master: 'CS', date_creation: '2023-12-19', Status: 'Yes', action: 'Pending' },
    { id: 4, from: 'Jane', spe_master: 'IT', date_creation: '2023-08-14', Status: 'No', action: 'Completed' },
    { id: 5, from: 'John', spe_master: 'CS', date_creation: '2023-12-19', Status: 'Yes', action: 'Pending' },
    { id: 6, from: 'Jane',  spe_master: 'IT', date_creation: '2023-08-14', Status: 'No', action: 'Completed' },
    { id: 7, from: 'John', spe_master: 'CS', date_creation: '2023-12-19', Status: 'Yes', action: 'Pending' },
    { id: 8, from: 'Jane',  spe_master: 'IT', date_creation: '2023-08-14', Status: 'No', action: 'Completed' },
    { id: 9, from: 'John', spe_master: 'CS', date_creation: '2023-12-19', Status: 'Yes', action: 'Pending' },
    { id: 10, from: 'Jane', spe_master: 'IT', date_creation: '2023-08-14', Status: 'No',  StatusStyle: {
      color: 'green',  // تغيير اللون إلى الأخضر
      fontWeight: 'bold'
    }, action: 'Completed' },
 
    { id: 11, from: 'Jane', spe_master: 'IT', date_creation: '2023-08-14', Status: 'No', action: 'Completed' },
 
],

 
};

const theme = createTheme({
  components: {
    MuiDataGrid: {
      styleOverrides: {
        root: {
          backgroundColor: '#fff',
          border: '4px solid #d0d0d0',
          borderRadius: '15px',
        },
      },
    },
  },
});

export default function TeacherDashbord() {
  const [data, setData] = useState(initialData);
  const [currentTable, setCurrentTable] = useState('table1');
  const [openEditDialog, setOpenEditDialog] = useState(false);
  const [selectedRow, setSelectedRow] = useState(null);

  const [openAddDialog, setOpenAddDialog] = useState(false);
const [newRow, setNewRow] = useState({
  id: '',
  from: '',
  spe_master: '',
  date_creation: '',
  Status: '',
  action: '',
});

const handleAddSave = () => {
  setData((prevData) => ({
    ...prevData,
    [currentTable]: [...prevData[currentTable], { ...newRow, id: Date.now() }],
  }));
  setOpenAddDialog(false);
  setNewRow({
    id: '',
    from: '',
    spe_master: '',
    date_creation: '',
    Status: '',
    action: '',
  });
};



 


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
    { field: 'from', headerName: 'From', width: 160, align: 'center', headerAlign: 'center' },
    { field: 'spe_master', headerName: 'Spe Master', width: 210, align: 'center', headerAlign: 'center' },
    { field: 'date_creation', headerName: 'Date Creation', width: 180, align: 'center', headerAlign: 'center' },
    {
      field: 'Status',
      headerName: 'Status',
      width: 150,
      renderCell: (params) => (
        <Box sx={{ display: 'flex', alignItems: 'center', headerAlign:"center" }}>
          <Box
            sx={{
              alignItems: 'center', headerAlign:"center",
              width: '30px',
              height: '30px',
              borderRadius: '50%',
              backgroundColor: params.value === 'Yes' ? 'green' : 'red',
              marginRight: '8px',
            }}
          />
          {params.value}
        </Box>
      ),
    },    {

      
      field: 'actions',
      headerName: 'Actions',
      width: 105,
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
          height: 620,
          width: '950px',
          marginLeft:'-95px !important',
          margin: '55px -110px',
          maxWidth: '3002px',
          padding: '20px',
          backgroundColor: '#f4f6f8',
          borderRadius: '20px',
          boxShadow: '0 8px 16px rgba(0, 0, 0, 0.2)',
        }}
      >
        <Box sx={{ display: 'flex', alignItems: 'center',justifyContent:'center', mb: 2 }}>
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
      <Box sx={{ display: 'flex', justifyContent: 'flex-end', mb: 2 }}>
      {currentTable === 'table1' && (
<Button
  variant="contained"
  color="primary"
  onClick={() => setOpenAddDialog(true)}
  sx={{
    backgroundColor:"#fff",
      color: "#64b5f6",
      fontWeight:'bold',
      border:"1px solid #64b5f6",


    position: 'sticky',  // استخدام sticky بدلاً من fixed
    top: '666px',    
    width:'160px',
    height:"40px",     // وضع الزر في مكان مناسب من الأعلى
    left: '120px',         // وضع الزر في منتصف الصفحة أفقيًا
    transform: 'translateX(-500%)', // ضمان مركزية الزر

    zIndex: 1000,        // التأكد من أن الزر فوق العناصر الأخرى
    textTransform: 'none',
    borderRadius: '8px',
  }}
>
  Propose a project
</Button>

)}


</Box>

{/* نافذة الإضافة */}
<Dialog
  open={openAddDialog}
  onClose={() => setOpenAddDialog(false)}
  PaperProps={{
    sx: { padding: 2, borderRadius: "12px", maxWidth: "600px" },
  }}
>
  <DialogTitle
    sx={{
    width:'500px',
      fontSize: "1.5rem",
      fontWeight: "bold",
      color: "#1976d2",
      textAlign: "center",
    }}
  >
    Add New Row
  </DialogTitle>

  <DialogContent sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
    {/* حقل Project Title */}
    <Typography variant="subtitle1" sx={{ fontWeight: "bold",mb:'-10px' }}>
      Project Title
    </Typography>
    
    <TextField
      margin="dense"
      label="Project Title"
      fullWidth
      onChange={(e) => handleFieldChange('projectTitle', e.target.value)}
      sx={{
        "& .MuiInputBase-root": {
          borderRadius: "8px",
        },
      }}
    />

<Typography variant="subtitle1" sx={{ fontWeight: "bold" , mb:'-10px'  }}>
      Field of Study
    </Typography>    <div style={{ display: "flex", gap: "16px" }}>
      <TextField
        margin="dense"
        label="Field of Study"
        fullWidth
        select
        onChange={(e) => handleFieldChange('fieldOfStudy', e.target.value)}
        sx={{
          "& .MuiInputBase-root": {
            borderRadius: "8px",
          },
        }}
      >
        <MenuItem value="computerScience">Computer Science</MenuItem>
        <MenuItem value="chemistry">Chemistry</MenuItem>
        <MenuItem value="math">Mathematics</MenuItem>
      </TextField>

      <TextField
        margin="dense"
        label="Specialization"
        fullWidth
        select
        onChange={(e) => handleFieldChange('specialization', e.target.value)}
        sx={{
          "& .MuiInputBase-root": {
            borderRadius: "8px",
          },
        }}
      >
        <MenuItem value="webDevelopment">Web Development</MenuItem>
        <MenuItem value="softwareEngineering">Software Engineering</MenuItem>
        <MenuItem value="dataScience">Data Science</MenuItem>
      </TextField>
    </div>

    <Typography variant="subtitle1" sx={{ fontWeight: "bold" , mb:'-10px' }}>
      Description
    </Typography>    <TextField
      margin="dense"
      label="Description"
      fullWidth
      multiline
      rows={4}
      onChange={(e) => handleFieldChange('description', e.target.value)}
      sx={{
        "& .MuiInputBase-root": {
          borderRadius: "8px",
        },
      }}
    />

  </DialogContent>

  <DialogActions sx={{ justifyContent: "center", gap: 2 }}>
    <Button
      onClick={() => setOpenAddDialog(false)}
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
      onClick={handleAddSave}
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



     

      {/* نافذة التعديل */}
      {selectedRow && (
        <Dialog 
  open={openEditDialog} 
  onClose={handleDialogClose}
  PaperProps={{
    sx: { padding: 2, borderRadius: "12px", maxWidth: "900px" },
  }}
>
  <DialogTitle 
    sx={{ 
      width:'500px',
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
      <h3 style={{ marginLeft: "18px", color: "#1565c0" }}>RelStatusance</h3>
      <RadioGroup
        value={selectedRow.Status}
        onChange={(e) => handleFieldChange('Status', e.target.value)}
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

    {selectedRow.Status === 'Yes' && (
      <TextField
        sx={{ width: "100%" }}
        label="Status Date"
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
