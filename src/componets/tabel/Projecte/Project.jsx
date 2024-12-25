import React, { useState } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import CheckIcon from '@mui/icons-material/Check';
import AddIcon from '@mui/icons-material/Add';
import { GrView } from "react-icons/gr";


import {
  Box,
  Button,
  ThemeProvider,
  createTheme,
  IconButton,
  Dialog,
  Alert,
  SnackbarContent,
  Snackbar,
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
  DialogContentText,
  FormControl
} from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { AddIcCallOutlined } from '@mui/icons-material';
import { useNavigate } from "react-router-dom";

// بيانات كل جدول
const initialData = {
  table1: [
    { id: 1, Titel: 'AI in Cybersecurity',  spe_master: 'RSD', Propose: 'Mohammed karim',Type:"classic", Summary: 'Artificial Intelligence (AI) is transforming cybersecurity by enhancing threat detection, incident response, and risk management. AI systems can analyze vast amounts of data in real time, identify patterns, and predict potential security breaches before they occur' },

    { id: 2, Titel: 'AI in Cybersecurity',  spe_master: 'SIC', Propose: 'Mohammed karim',Type:"classic", Summary: 'Artificial Intelligence (AI) is transforming cybersecurity by enhancing threat detection, incident response, and risk management. AI systems can analyze vast amounts of data in real time, identify patterns, and predict potential security breaches before they occur' },
{ id: 3, Titel: 'AI in Cybersecurity',  spe_master: 'GL', Propose: 'Mohammed karim',Type:"Innovative", Summary: 'Artificial Intelligence (AI) is transforming cybersecurity by enhancing threat detection, incident response, and risk management. AI systems can analyze vast amounts of data in real time, identify patterns, and predict potential security breaches before they occur' },
{ id: 4, Titel: 'AI in Cybersecurity', spe_master: 'IA', Propose: 'Mohammed karim',Type:"classic", Summary: 'Artificial Intelligence (AI) is transforming cybersecurity by enhancing threat detection, incident response, and risk management. AI systems can analyze vast amounts of data in real time, identify patterns, and predict potential security breaches before they occur'  },
{ id: 5, Titel: 'AI in Cybersecurity', spe_master: 'GL', Propose: 'Mohammed karim',Type:"Innovative", Summary: 'Artificial Intelligence (AI) is transforming cybersecurity by enhancing threat detection, incident response, and risk management. AI systems can analyze vast amounts of data in real time, identify patterns, and predict potential security breaches before they occur',  },
{ id: 6, Titel: 'AI in Cybersecurity',  spe_master: 'SIC', Propose: 'Mohammed karim',Type:"classic", Summary: 'Artificial Intelligence (AI) is transforming cybersecurity by enhancing threat detection, incident response, and risk management. AI systems can analyze vast amounts of data in real time, identify patterns, and predict potential security breaches before they occur'},
{ id: 7, Titel: 'AI in Cybersecurity', spe_master: 'RSD', Propose: 'Mohammed karim',Type:"Innovative", Summary: 'Artificial Intelligence (AI) is transforming cybersecurity by enhancing threat detection, incident response, and risk management. AI systems can analyze vast amounts of data in real time, identify patterns, and predict potential security breaches before they occur' },
{ id: 8, Titel: 'AI in Cybersecurity',  spe_master: 'IA', Propose: 'Mohammed karim',Type:"classic", Summary: 'Artificial Intelligence (AI) is transforming cybersecurity by enhancing threat detection, incident response, and risk management. AI systems can analyze vast amounts of data in real time, identify patterns, and predict potential security breaches before they occur'},
 
 
  ],
  table2: [
    { id: 1, First_Name: 'Jane',Laste_Name: 'Mohammed',  spe_master: 'SIC',  MoyenG: '16.20', actio2: 'Completed' },

    { id: 2, First_Name: 'Jane2',Laste_Name: 'karim',  spe_master: 'RSD', MoyenG: '16.20', actio2: 'Completed' },
        
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

export default function Soutnoc() {
  const [data, setData] = useState(initialData);
  const [currentTable, setCurrentTable] = useState('table1');
  const [openEditDialog, setOpenEditDialog] = useState(false);
  const [selectedRow, setSelectedRow] = useState(null);
  const [openAddDialog, setOpenAddDialog] = useState(false);

const [openDialog, setOpenDialog] = useState(false);
const [rejectionReason, setRejectionReason] = useState('');
const [showReasonInput, setShowReasonInput] = useState(false);


const [openSnackbar, setOpenSnackbar] = useState(false);

const navigate = useNavigate();


const handleEdi = (id) => {
  // يمكنك تعديل مسار الصفحة على حسب احتياجاتك
  navigate('/Theme');
};

const handleAdd = () => {
  // قم بفتح النافذة عند الضغط على الزر
  setOpenSnackbar(true);

  // أغلق النافذة بعد 15 ثانية
  setTimeout(() => {
    setOpenSnackbar(false);
  }, 1000);
};



  const [status, setStatus] = useState(null); // New state for status


const handleIconClick = () => {
  setOpenDialog(true); // فتح النافذة عند الضغط على الأيقونة
};
const handleDialogCheckoutClose = () => {
  setOpenDialog(false); // إغلاق النافذة
  setShowReasonInput(false); // إعادة ضبط حقل السبب
  setRejectionReason(''); // مسح النص المكتوب
};

const handleAcceptClick = () => {
    setStatus('accepted'); // Set status to accepted
    handleDialogCheckoutClose();
};

const handleRefuseClick = () => {
  setShowReasonInput(true); // عرض حقل السبب
};

 const handleSubmitRefusal = () => {
    if (rejectionReason.trim() !== '') {
      setStatus('refused'); // Set status to refused
      handleDialogCheckoutClose();
    }
  };




const handleReasonChange = (event) => {
  setRejectionReason(event.target.value); // تحديث سبب الرفض
};

const [newRow, setNewRow] = useState({
  id: '',
  Titel: '',
  spe_master: '',
  Propose: '',
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
    Titel: '',
    spe_master: '',
    Propose: '',
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
   
    { field: 'Titel', headerName: 'Titel', width: 180, align: 'center', headerAlign: 'center' },
    { field: 'Propose', headerName: 'Propose', width: 160, align: 'center', headerAlign: 'center' },
    { field: 'Type', headerName: 'Type', width: 160, align: 'center', headerAlign: 'center' },
    { field: 'spe_master', headerName: 'Spe Master', width:160, align: 'center', headerAlign: 'center' },
    { field: 'Summary', headerName: 'Summary', width:430, align: 'center', headerAlign: 'center' },


    




  ];
  

  const enhancedColumns = currentTable === 'table4'
  ? [
      ...columns,
      
      {
    field: 'valid',
    headerName: 'Valid',
    width: 120,
    align: 'center',
    headerAlign: 'center',
    renderCell: (params) => (
      <Box sx={{ display: 'flex', alignItems: 'center' }}>
      <IconButton
        sx={{
          backgroundColor: status === 'accepted' ? '#4caf50' : status === 'refused' ? '#f44336' : 'gray',
          color: '#fff',
          padding: '10px',
          borderRadius: '50%',
          '&:hover': {
            backgroundColor: status === 'accepted' ? '#45a045' : status === 'refused' ? '#e53935' : '#757575',
          },
        }}
        onClick={handleIconClick}
      >
        {status === 'accepted' ? 'Accepted' : status === 'refused' ? 'Refused' : <CheckCircleIcon />}
      </IconButton>

      <Dialog
        BackdropProps={{
          style: { backgroundColor: 'rgba(0, 0, 0, 0.2)' }, // شفافية الخلفية
        }}
        open={openDialog}
        onClose={handleDialogCheckoutClose}
        PaperProps={{
          sx: {
            width: '500px',
            padding: '20px',
            borderRadius: '12px',
            backgroundColor: '#f9f9f9',
            boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.2)',
          },
        }}
      >
        <DialogTitle
          sx={{
            fontWeight: 'bold',
            fontSize: '22px',
            color: '#333',
            textAlign: 'center',
            marginBottom: '10px',
          }}
        >
          Confirmation
        </DialogTitle>
        <DialogContent
          sx={{
            fontSize: '16px',
            color: '#555',
            textAlign: 'center',
            lineHeight: '1.5',
          }}
        >
          {!showReasonInput ? (
            <DialogContentText sx={{ marginBottom: '20px', fontWeight: '500' }}>
              Do you want to accept or refuse this proposition?
            </DialogContentText>
          ) : (
            <TextField
              autoFocus
              margin="dense"
              label="Reason for refusal"
              type="text"
              fullWidth
              value={rejectionReason}
              onChange={handleReasonChange}
              sx={{
                '& .MuiInputLabel-root': { color: '#888' },
                '& .MuiOutlinedInput-root': {
                  borderRadius: '8px',
                  '& fieldset': { borderColor: '#ddd' },
                  '&:hover fieldset': { borderColor: '#64b5f6' },
                  '&.Mui-focused fieldset': { borderColor: '#64b5f6' },
                },
              }}
            />
          )}
        </DialogContent>
        <DialogActions
          sx={{
            justifyContent: 'center',
            paddingTop: '10px',
          }}
        >
          {!showReasonInput ? (
            <>
              <Button
                onClick={handleAcceptClick}
                sx={{
                  backgroundColor: '#4caf50',
                  color: '#fff',
                  fontWeight: 'bold',
                  textTransform: 'none',
                  borderRadius: '8px',
                  padding: '8px 16px',
                  '&:hover': {
                    backgroundColor: '#45a045',
                  },
                }}
              >
                Accept
              </Button>
              <Button
                onClick={handleRefuseClick}
                sx={{
                  backgroundColor: '#f44336',
                  color: '#fff',
                  fontWeight: 'bold',
                  textTransform: 'none',
                  borderRadius: '8px',
                  padding: '8px 16px',
                  marginLeft: '10px',
                  '&:hover': {
                    backgroundColor: '#e53935',
                  },
                }}
              >
                Refuse
              </Button>
            </>
          ) : (
            <>
              <Button
                onClick={handleDialogCheckoutClose}
                sx={{
                  backgroundColor: '#757575',
                  color: '#fff',
                  fontWeight: 'bold',
                  textTransform: 'none',
                  borderRadius: '8px',
                  padding: '8px 16px',
                  '&:hover': {
                    backgroundColor: '#616161',
                  },
                }}
              >
                Cancel
              </Button>
              <Button
                onClick={handleSubmitRefusal}
                sx={{
                  backgroundColor: '#f44336',
                  color: '#fff',
                  fontWeight: 'bold',
                  textTransform: 'none',
                  borderRadius: '8px',
                  padding: '8px 16px',
                  marginLeft: '10px',
                  '&:hover': {
                    backgroundColor: '#e53935',
                  },
                }}
              >
                Submit
              </Button>
            </>
          )}
        </DialogActions>
      </Dialog>
    </Box>

    ),
  },
    ]
  : currentTable === 'table1' 
  ? [
      ...columns,
      
  
      {
        field: 'actions',
        headerName: 'Actions',
        width: 105,
        align: 'center',
        headerAlign: 'center',
        renderCell: (params) => (
          <Box sx={{ display: 'flex' }}>
            <IconButton
              color="gray"
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
    ]



  
    : currentTable === 'table2'
    ? [

      { field: 'id', headerName: 'ID', width: 89, align: 'center', headerAlign: 'center',   headerClassName: 'header-bold', // نمط CSS مخصص
      },
        { field: 'First_Name', headerName: 'First_Name', width: 250, align: 'center', headerAlign: 'center' },
    { field: 'Laste_Name', headerName: 'Last_Name', width: 250, align: 'center', headerAlign: 'center' },
    { field: 'spe_master', headerName: 'Spe Master', width:240, align: 'center', headerAlign: 'center' },
    { field: 'MoyenG', headerName: 'Myane General', width:240, align: 'center', headerAlign: 'center' },

        
    
        {
          field: 'actio2',
          headerName: 'Actions',
          width: 125,
          align: 'center',
          headerAlign: 'center',
          renderCell: (params) => (
            <Box sx={{ display: 'flex' }}>
              <IconButton
                color="gray"
                onClick= {handleEdi}
              >
                <GrView />
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
      ]
  



  : columns;


  

  

  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          height: 600,
          width: '1250px',
          marginLeft:'-95px !important',
          margin: '-2px -110px',
          maxWidth: '3002px',
          padding: '20px',
          backgroundColor: '#f4f6f8',
          borderRadius: '20px',
          boxShadow: '0 8px 16px rgba(0, 0, 0, 0.2)',
        }}
      >
        <Box sx={{ display: 'flex', alignItems: 'center',justifyContent:'center', mb: 2 }}>
  {['list des theme  choisie', 'etudien sans theme'].map((item, index) => (
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
          columns={enhancedColumns}
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
    marginTop:"-28px",   
    width:'220px',
    height:"40px",     // وضع الزر في مكان مناسب من الأعلى
    left: '120px',         // وضع الزر في منتصف الصفحة أفقيًا
    transform: 'translateX(-400%)', // ضمان مركزية الزر

    zIndex: 1000,        // التأكد من أن الزر فوق العناصر الأخرى
    textTransform: 'none',
    borderRadius: '8px',
  }}
>
Download the summary file
</Button>

)}


</Box>

{/* نافذة الإضافة */}


     

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
      value={selectedRow.Titel}
      onChange={(e) => handleFieldChange('Titel', e.target.value)}
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
        value={selectedRow.Propose}
        onChange={(e) => handleFieldChange('Propose', e.target.value)}
      />
    )}

    <h3 style={{ margin: "10px 0", color: "#1565c0" }}>Description</h3>
    <TextField
      margin="dense"
      label="Description"
      type="text"
      fullWidth
      InputLabelProps={{ shrink: true }}
      value={selectedRow.Propose}
      onChange={(e) => handleFieldChange('Propose', e.target.value)}
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
