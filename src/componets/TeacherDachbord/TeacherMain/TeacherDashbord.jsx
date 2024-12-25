import React, { useState } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import CheckIcon from '@mui/icons-material/Check';
import AddIcon from '@mui/icons-material/Add';
import Swal from "sweetalert2";

import { Link as RouterLink , useNavigate } from 'react-router-dom'; // إعادة تسمية Link الخاص بـ React Router

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

// بيانات كل جدول
const initialData = {
  table1: [
    { id: 1, Titel: 'AI in Cybersecurity',  spe_master: 'RSD', Propose: 'Dr.mohammed Karim',Type:"classic", Summary: 'Artificial Intelligence (AI) is transforming cybersecurity by enhancing threat detection, incident response, and risk management. AI systems can analyze vast amounts of data in real time, identify patterns, and predict potential security breaches before they occur' },

        { id: 2, Titel: 'AI in Cybersecurity',  spe_master: 'SIC', Propose: 'Dr.mohammed Karim',Type:"classic", Summary: 'Artificial Intelligence (AI) is transforming cybersecurity by enhancing threat detection, incident response, and risk management. AI systems can analyze vast amounts of data in real time, identify patterns, and predict potential security breaches before they occur' },
    { id: 3, Titel: 'AI in Cybersecurity',  spe_master: 'GL', Propose: 'Dr.mohammed Karim',Type:"Innovative", Summary: 'Artificial Intelligence (AI) is transforming cybersecurity by enhancing threat detection, incident response, and risk management. AI systems can analyze vast amounts of data in real time, identify patterns, and predict potential security breaches before they occur' },
    { id: 4, Titel: 'AI in Cybersecurity', spe_master: 'IA', Propose: 'Dr.mohammed Karim',Type:"classic", Summary: 'Artificial Intelligence (AI) is transforming cybersecurity by enhancing threat detection, incident response, and risk management. AI systems can analyze vast amounts of data in real time, identify patterns, and predict potential security breaches before they occur'  },
    { id: 5, Titel: 'AI in Cybersecurity', spe_master: 'GL', Propose: 'Dr.mohammed Karim',Type:"Innovative", Summary: 'Artificial Intelligence (AI) is transforming cybersecurity by enhancing threat detection, incident response, and risk management. AI systems can analyze vast amounts of data in real time, identify patterns, and predict potential security breaches before they occur',  },
    { id: 6, Titel: 'AI in Cybersecurity',  spe_master: 'SIC', Propose: 'Dr.mohammed Karim',Type:"classic", Summary: 'Artificial Intelligence (AI) is transforming cybersecurity by enhancing threat detection, incident response, and risk management. AI systems can analyze vast amounts of data in real time, identify patterns, and predict potential security breaches before they occur'},
    { id: 7, Titel: 'AI in Cybersecurity', spe_master: 'RSD', Propose: 'Dr.mohammed Karim',Type:"Innovative", Summary: 'Artificial Intelligence (AI) is transforming cybersecurity by enhancing threat detection, incident response, and risk management. AI systems can analyze vast amounts of data in real time, identify patterns, and predict potential security breaches before they occur' },
    { id: 8, Titel: 'AI in Cybersecurity',  spe_master: 'IA', Propose: 'Dr.mohammed Karim',Type:"classic", Summary: 'Artificial Intelligence (AI) is transforming cybersecurity by enhancing threat detection, incident response, and risk management. AI systems can analyze vast amounts of data in real time, identify patterns, and predict potential security breaches before they occur'},
    
 
 
  ],
  table2: [
    { id: 1, Titel: 'AI in Cybersecurity',  spe_master: 'RSD', Propose: 'Dr.mohammed Karim',Type:"classic", Summary: 'Artificial Intelligence (AI) is transforming cybersecurity by enhancing threat detection, incident response, and risk management. AI systems can analyze vast amounts of data in real time, identify patterns, and predict potential security breaches before they occur' },

        { id: 2, Titel: 'AI in Cybersecurity',  spe_master: 'SIC', Propose: 'Dr.mohammed Karim',Type:"classic", Summary: 'Artificial Intelligence (AI) is transforming cybersecurity by enhancing threat detection, incident response, and risk management. AI systems can analyze vast amounts of data in real time, identify patterns, and predict potential security breaches before they occur' },
    { id: 3, Titel: 'AI in Cybersecurity',  spe_master: 'GL', Propose: 'Dr.mohammed Karim',Type:"Innovative", Summary: 'Artificial Intelligence (AI) is transforming cybersecurity by enhancing threat detection, incident response, and risk management. AI systems can analyze vast amounts of data in real time, identify patterns, and predict potential security breaches before they occur' },
    { id: 4, Titel: 'AI in Cybersecurity', spe_master: 'IA', Propose: 'Dr.mohammed Karim',Type:"classic", Summary: 'Artificial Intelligence (AI) is transforming cybersecurity by enhancing threat detection, incident response, and risk management. AI systems can analyze vast amounts of data in real time, identify patterns, and predict potential security breaches before they occur'  },
    { id: 5, Titel: 'AI in Cybersecurity', spe_master: 'GL', Propose: 'Dr.mohammed Karim',Type:"Innovative", Summary: 'Artificial Intelligence (AI) is transforming cybersecurity by enhancing threat detection, incident response, and risk management. AI systems can analyze vast amounts of data in real time, identify patterns, and predict potential security breaches before they occur',  },
    { id: 6, Titel: 'AI in Cybersecurity',  spe_master: 'SIC', Propose: 'Dr.mohammed Karim',Type:"classic", Summary: 'Artificial Intelligence (AI) is transforming cybersecurity by enhancing threat detection, incident response, and risk management. AI systems can analyze vast amounts of data in real time, identify patterns, and predict potential security breaches before they occur'},
    { id: 7, Titel: 'AI in Cybersecurity', spe_master: 'RSD', Propose: 'Dr.mohammed Karim',Type:"Innovative", Summary: 'Artificial Intelligence (AI) is transforming cybersecurity by enhancing threat detection, incident response, and risk management. AI systems can analyze vast amounts of data in real time, identify patterns, and predict potential security breaches before they occur' },
    { id: 8, Titel: 'AI in Cybersecurity',  spe_master: 'IA', Propose: 'Dr.mohammed Karim',Type:"classic", Summary: 'Artificial Intelligence (AI) is transforming cybersecurity by enhancing threat detection, incident response, and risk management. AI systems can analyze vast amounts of data in real time, identify patterns, and predict potential security breaches before they occur'},
    
 
],
table3: [
  { id: 1, Titel: 'AI in Cybersecurity',  spe_master: 'RSD', Propose: 'Dr.mohammed Karim',Type:"classic", Summary: 'Artificial Intelligence (AI) is transforming cybersecurity by enhancing threat detection, incident response, and risk management. AI systems can analyze vast amounts of data in real time, identify patterns, and predict potential security breaches before they occur' },

  { id: 2, Titel: 'AI in Cybersecurity',  spe_master: 'SIC', Propose: 'Dr.mohammed Karim',Type:"classic", Summary: 'Artificial Intelligence (AI) is transforming cybersecurity by enhancing threat detection, incident response, and risk management. AI systems can analyze vast amounts of data in real time, identify patterns, and predict potential security breaches before they occur' },
{ id: 3, Titel: 'AI in Cybersecurity',  spe_master: 'GL', Propose: 'Dr.mohammed Karim',Type:"Innovative", Summary: 'Artificial Intelligence (AI) is transforming cybersecurity by enhancing threat detection, incident response, and risk management. AI systems can analyze vast amounts of data in real time, identify patterns, and predict potential security breaches before they occur' },
{ id: 4, Titel: 'AI in Cybersecurity', spe_master: 'IA', Propose: 'Dr.mohammed Karim',Type:"classic", Summary: 'Artificial Intelligence (AI) is transforming cybersecurity by enhancing threat detection, incident response, and risk management. AI systems can analyze vast amounts of data in real time, identify patterns, and predict potential security breaches before they occur'  },
{ id: 5, Titel: 'AI in Cybersecurity', spe_master: 'GL', Propose: 'Dr.mohammed Karim',Type:"Innovative", Summary: 'Artificial Intelligence (AI) is transforming cybersecurity by enhancing threat detection, incident response, and risk management. AI systems can analyze vast amounts of data in real time, identify patterns, and predict potential security breaches before they occur',  },
{ id: 6, Titel: 'AI in Cybersecurity',  spe_master: 'SIC', Propose: 'Dr.mohammed Karim',Type:"classic", Summary: 'Artificial Intelligence (AI) is transforming cybersecurity by enhancing threat detection, incident response, and risk management. AI systems can analyze vast amounts of data in real time, identify patterns, and predict potential security breaches before they occur'},
{ id: 7, Titel: 'AI in Cybersecurity', spe_master: 'RSD', Propose: 'Dr.mohammed Karim',Type:"Innovative", Summary: 'Artificial Intelligence (AI) is transforming cybersecurity by enhancing threat detection, incident response, and risk management. AI systems can analyze vast amounts of data in real time, identify patterns, and predict potential security breaches before they occur' },
{ id: 8, Titel: 'AI in Cybersecurity',  spe_master: 'IA', Propose: 'Dr.mohammed Karim',Type:"classic", Summary: 'Artificial Intelligence (AI) is transforming cybersecurity by enhancing threat detection, incident response, and risk management. AI systems can analyze vast amounts of data in real time, identify patterns, and predict potential security breaches before they occur'},


],

table4: [
  { id: 1, Titel: 'Jane',  spe_master: 'IA', Propose: '2023-08-14',Type:"classic", Summary:'Exploring AI application in education' },

        { id: 2, Titel: 'Jane',  spe_master: 'GL', Propose: '2023-08-14',Type:"classic", Summary:'Exploring AI application in education' , valid: 'Completed' },
    { id: 3, Titel: 'John',  spe_master: 'RSD', Propose: '2023-12-19',Type:"Innovative", Summary:'Exploring AI application in education' , action3: 'Pending' },
    { id: 4, Titel: 'Jane', spe_master: 'SIC', Propose: '2023-08-14',Type:"classic", Summary:'Exploring AI application in education' , action3: 'Completed' },
  
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
 const navigate = useNavigate();

const [openDialog, setOpenDialog] = useState(false);
const [rejectionReason, setRejectionReason] = useState('');
const [showReasonInput, setShowReasonInput] = useState(false);

  const [showHelp, setShowHelp] = useState(false); // حالة لإظهار أو إخفاء المساعدة

const [openSnackbar, setOpenSnackbar] = useState(false);


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





 





const handleEdi = (id) => {
  // يمكنك تعديل مسار الصفحة على حسب احتياجاتك
  navigate('/Veiw');
};

  const handleAddSave = () => {
    setData((prevData) => ({
      ...prevData,
      [currentTable]: [
        ...(prevData[currentTable] || []),
        { ...newRow, id: Date.now() },
      ],
    }));
  
    // إعادة تعيين الحقول وإغلاق النافذة
    setOpenAddDialog(false);
    setNewRow({
      id: "",
      Title: "",
      Propose: "",
      etudent2: "",
      spe_master: "",
      Type: "",
      PFEName: "",
      Summary: "",
      technologies: "",
      materialNeeds: "",
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
      const handleDialogClose2 = () => {
      setOpenEditDialog(false);
    };
    
    
      const handleFieldChange2 = (field, value) => {
      setSelectedRow((prevRow) => ({
        ...prevRow,
        [field]: value,
      }));
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
      setNewRow((prevRow) => ({
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
    { field: 'Titel', headerName: 'Titel', width: 160, align: 'center', headerAlign: 'center' },
    { field: 'Propose', headerName: 'Propose', width: 190, align: 'center', headerAlign: 'center' },
    { field: 'Type', headerName: 'Type', width: 150, align: 'center', headerAlign: 'center' },
    { field: 'spe_master', headerName: 'Spe Master', width:160, align: 'center', headerAlign: 'center' },
    { field: 'Summary', headerName: 'Summary', width:430, align: 'center', headerAlign: 'center' },


    




  ];
  

  const enhancedColumns = currentTable === 'table4'
  ? [
      ...columns,
      
      {
    field: 'valid',
    headerName: 'Valid',
    width: 100,
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



   : currentTable === 'table3' 
  ? [
      ...columns,
       
  
      {
        field: 'Actions3',
        headerName: 'Actions',
        width: 105,
        align: 'center',
        headerAlign: 'center',
        renderCell: (params) => (
          <Box sx={{ display: 'flex' }}>
          {/* زر الإضافة */}
          <IconButton color="primary" onClick={handleAdd}>
            <AddIcon />
          </IconButton>
    
          {/* رسالة الإشعار */}
           {/* Snackbar مع تنسيق مخصص */}
      <Snackbar
        open={openSnackbar}
        autoHideDuration={1000} // مدة عرض الرسالة
        onClose={() => setOpenSnackbar(false)} // إغلاق الرسالة عند انتهاء الوقت أو عند الإغلاق اليدوي
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }} // موضع الرسالة
      >
        <SnackbarContent
          sx={{
            backgroundColor: 'white',
            color: 'green',
            display: 'flex',
            alignItems: 'center',
            borderRadius: '8px',
            boxShadow: 2,
            padding: '8px 16px',
            fontSize: '16px',
          }}
          message={
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <CheckIcon sx={{ marginRight: '8px', color: 'green' }} />
              Add To Themes I supervise
            </Box>
          }
        />
      </Snackbar>
        </Box>
        ),
      },
    ]
    

    : currentTable === 'table2'
    ? [
        ...columns,
        
    
        {
          field: 'actio2',
          headerName: 'Actions',
          width: 105,
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
          margin: '5px -110px',
          maxWidth: '3002px',
          padding: '20px',
          backgroundColor: '#f4f6f8',
          borderRadius: '20px',
          boxShadow: '0 8px 16px rgba(0, 0, 0, 0.2)',
        }}
      >
        <Box sx={{ display: 'flex', alignItems: 'center',justifyContent:'center', mb: 2 }}>
  {['Appel à proposition', 'Appel à encadrement','Themes I Manage','validation'].map((item, index) => (
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
    marginTop:"-40px",    
    width:'160px',
    height:"40px",     // وضع الزر في مكان مناسب من الأعلى
    left: '120px',         // وضع الزر في منتصف الصفحة أفقيًا
    transform: 'translateX(-590%)', // ضمان مركزية الزر


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
      width: '500px',
      fontSize: "1.5rem",
      fontWeight: "bold",
      color: "#1976d2",
      textAlign: "center",
    }}
  >
    Add New Row
  </DialogTitle>

  <DialogContent sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
    <Typography variant="subtitle1" sx={{ fontWeight: "bold", mb: '-10px' }}>
      Project Title
    </Typography>
    <TextField
      margin="dense"
      label="Project Title"
      fullWidth
      value={newRow.Titel}
      onChange={(e) => handleFieldChange('Titel', e.target.value)}
      sx={{
        "& .MuiInputBase-root": {
          borderRadius: "8px",
        },
      }}
    />

    <Typography variant="subtitle1" sx={{ fontWeight: "bold", mb: '-10px' }}>
      Nom et prénom encadrant
    </Typography>
    <TextField
      margin="dense"
      label="Nom et prénom etudent 1"
      fullWidth
      value={newRow.Propose}
      onChange={(e) => handleFieldChange('Propose', e.target.value)}
      sx={{
        "& .MuiInputBase-root": {
          borderRadius: "8px",
        },
      }}
    />

    <Typography variant="subtitle1" sx={{ fontWeight: "bold", mb: '-10px' }}>
      Nom et prénom co-encadrant 
    </Typography>
    <TextField
      margin="dense"
      label="      Nom et prénom co-encadrant "
      fullWidth
      value={newRow.etudent2}
      onChange={(e) => handleFieldChange('etudent2', e.target.value)}
      sx={{
        "& .MuiInputBase-root": {
          borderRadius: "8px",
        },
      }}
    />

    <Typography variant="subtitle1" sx={{ fontWeight: "bold", mb: '-10px' }}>
      Master's Specialization
    </Typography>
    <TextField
      margin="dense"
      label="Master's Specialization"
      fullWidth
      select
      value={newRow.spe_master}
      onChange={(e) => handleFieldChange('spe_master', e.target.value)}
      sx={{
        "& .MuiInputBase-root": {
          borderRadius: "8px",
        },
      }}
    >
      <MenuItem value="GL">GL</MenuItem>
      <MenuItem value="IA">IA</MenuItem>
      <MenuItem value="RSD">RSD</MenuItem>
      <MenuItem value="SIC">SIC</MenuItem>
    </TextField>

    <Typography variant="subtitle1" sx={{ fontWeight: "bold", mb: '-10px' }}>
      Type 
    </Typography>
    <TextField
      margin="dense"
      label="Type"
      fullWidth
      select
      value={newRow.Type}
      onChange={(e) => handleFieldChange('Type', e.target.value)}
      sx={{
        "& .MuiInputBase-root": {
          borderRadius: "8px",
        },
      }}
    >
      <MenuItem value="classique">Classique</MenuItem>
      <MenuItem value="innovant">Innovant</MenuItem>
    </TextField>

    <Typography variant="subtitle1" sx={{ fontWeight: "bold", mb: '-10px' }}>
      Intitulé du PFE
    </Typography>
    <TextField
      margin="dense"
      label="Intitulé du PFE"
      fullWidth
      value={newRow.PFEName}
      onChange={(e) => handleFieldChange('PFEName', e.target.value)}
      sx={{
        "& .MuiInputBase-root": {
          borderRadius: "8px",
        },
      }}
    />

    <Typography variant="subtitle1" sx={{ fontWeight: "bold", mb: '-10px' }}>
      Summary
    </Typography>
    <TextField
      margin="dense"
      label="Summary"
      fullWidth
      multiline
      rows={4}
      value={newRow.Summary}
      onChange={(e) => handleFieldChange('Summary', e.target.value)}
      sx={{
        "& .MuiInputBase-root": {
          borderRadius: "8px",
        },
      }}
    />

    <Typography variant="subtitle1" sx={{ fontWeight: "bold", mb: '-10px' }}>
      Technologies utilisées
    </Typography>
    <TextField
      margin="dense"
      label="Technologies utilisées"
      fullWidth
      value={newRow.technologies}
      onChange={(e) => handleFieldChange('technologies', e.target.value)}
      sx={{
        "& .MuiInputBase-root": {
          borderRadius: "8px",
        },
      }}
    />

    <Typography variant="subtitle1" sx={{ fontWeight: "bold", mb: '-10px' }}>
      Besoins matériel
    </Typography>
    <TextField
      margin="dense"
      label="Besoins matériel"
      fullWidth
      value={newRow.materialNeeds}
      onChange={(e) => handleFieldChange('materialNeeds', e.target.value)}
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
          onClose={handleDialogClose2}
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
        
        <h3 style={{ margin: "10px 0", color: "#1565c0" }}>Titel</h3>
        
            <TextField
              margin="dense"
              label="Title"
              fullWidth
              value={selectedRow.Titel}
              onChange={(e) => handleFieldChange2('Titel', e.target.value)}
              sx={{
                "& .MuiInputBase-root": {
                  borderRadius: "8px",
                },
              }}
            />
        
        
            <h3 style={{ margin: "10px 0", color: "#1565c0" }}>      Nom et prénom encadrant 
            </h3>
        
            
            <TextField
              margin="dense"
              label="Propose"
              fullWidth
              value={selectedRow.Propose}
              onChange={(e) => handleFieldChange2('Propose', e.target.value)}
              sx={{
                "& .MuiInputBase-root": {
                  borderRadius: "8px",
                },
              }}
            />
            <h3 style={{ margin: "10px 0", color: "#1565c0" }}>        Nom et prénom co-encadrant 

        
        </h3>
        <TextField
          margin="dense"
          label="       Nom et prénom co-encadrant "
          fullWidth
          value={selectedRow.technologies}
          onChange={(e) => handleFieldChange2('etudent2', e.target.value)}
          sx={{
            "& .MuiInputBase-root": {
              borderRadius: "8px",
            },
          }}
        />
        
        
                <h3 style={{ margin: "10px 0", color: "#1565c0" }}>Type</h3>
        
                
        <Grid item xs={6}>
                <FormControl fullWidth margin="dense">
                  <InputLabel>Spe Master</InputLabel>
                  <Select
                    sx={{ borderRadius: "8px" }}
                    value={selectedRow.Type}
                    onChange={(e) => handleFieldChange2('Type', e.target.value)}
                    label="Spe Master"
                  >
                    <MenuItem value="classic">classic</MenuItem>
                    <MenuItem value="Innovative">Innovative</MenuItem>
                    
                  </Select>
                </FormControl>
              </Grid>
        
            <h3 style={{ margin: "10px 0", color: "#1565c0" }}>Trager To</h3>
             
        
              <Grid item xs={6}>
                <FormControl fullWidth margin="dense">
                  <InputLabel>Spe Master</InputLabel>
                  <Select
                    sx={{ borderRadius: "8px" }}
                    value={selectedRow.spe_master}
                    onChange={(e) => handleFieldChange2('spe_master', e.target.value)}
                    label="Spe Master"
                  >
                    <MenuItem value="GL">GL</MenuItem>
                    <MenuItem value="RSD">RSD</MenuItem>
                    <MenuItem value="IA">IA</MenuItem>
                    <MenuItem value="SIC">SIC</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
            
        
            
        
              <h3 style={{ margin: "10px 0", color: "#1565c0" }}>       Intitulé du PFE
        
        </h3>
        <TextField
          margin="dense"
          label="Intitulé du PFE"
          fullWidth
          value={selectedRow.technologies}
          onChange={(e) => handleFieldChange2('PFEName', e.target.value)}
          sx={{
            "& .MuiInputBase-root": {
              borderRadius: "8px",
            },
          }}
        />
        
              
               
        
           
        
            <h3 style={{ margin: "10px 0", color: "#1565c0" }}>Summary</h3>
            <TextField
              margin="dense"
              label="Summary"
              type="text"
              fullWidth
              InputLabelProps={{ shrink: true }}
              value={selectedRow.Summary}
              onChange={(e) => handleFieldChange2('Summary', e.target.value)}
              sx={{
                "& .MuiInputBase-root": {
                  borderRadius: "8px",
                },
              }}
            />
        
        <h3 style={{ margin: "10px 0", color: "#1565c0" }}>       Besoins matériel
        
        </h3>
        
        <TextField
              margin="dense"
              label="materialNeeds"
              fullWidth
              value={selectedRow.materialNeeds}
              onChange={(e) => handleFieldChange2('materialNeeds', e.target.value)}
              sx={{
                "& .MuiInputBase-root": {
                  borderRadius: "8px",
                },
              }}
            />
        
        
        <h3 style={{ margin: "10px 0", color: "#1565c0" }}>      Technologies utilisées
        </h3>
        
            
        <TextField
          margin="dense"
          label="      Technologies utilisées"
          fullWidth
          value={selectedRow.technologies}
          onChange={(e) => handleFieldChange2('technologies', e.target.value)}
          sx={{
            "& .MuiInputBase-root": {
              borderRadius: "8px",
            },
          }}
        />
        
        
        
          </DialogContent>
        
          <DialogActions sx={{ justifyContent: "center", gap: 2 }}>
            <Button
              onClick={handleDialogClose2}
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
    <button
  onClick={() => setShowHelp(true)}
  style={{
    background: "linear-gradient(45deg,rgb(26, 77, 188),rgb(232, 255, 242))",
    color: "#ffffff",
    border: "none",
    borderRadius: "50px",
    padding: "10px 10px",
    height:'50px',
    marginTop:"-120px",
    marginRight:"-1290px",

    fontSize: "1.3rem",
    fontWeight: "bold",
    cursor: "pointer",
    transition: "all 0.4s ease-in-out",
    boxShadow: "0 6px 12px rgba(0, 0, 0, 0.3)",
  }}
  onMouseEnter={(e) => {
    e.target.style.background = "linear-gradient(45deg,,rgb(26, 77, 188),rgb(232, 255, 242))";
    e.target.style.transform = "scale(1.1) rotate(-1deg)";
    e.target.style.boxShadow = "0 10px 20px rgba(0, 0, 0, 0.4)";
  }}
  onMouseLeave={(e) => {
    e.target.style.background = "linear-gradient(45deg,,rgb(26, 77, 188),rgb(232, 255, 242))";
    e.target.style.transform = "scale(1)";
    e.target.style.boxShadow = "0 6px 12px rgba(0, 0, 0, 0.3)";
  }}
>
  ❓
</button>




{showHelp && (
         <div className="help-modal">
         <div className="help-overlay" onClick={() => setShowHelp(false)}></div>
         <div className="help-content enhanced">
           <h2>ℹ️ Comment utiliser cette page</h2>
           <p>
             Cette application vous permet de gérer les délais pour différentes étapes de votre projet :
           </p>
           <ul>
             <li style={{marginRight:"110px"}}><strong>Propositions:</strong> Soumettez vos idées de projet.</li>
             <li ><strong>Encadrement:</strong> Sélectionnez les encadrants pour votre projet.</li>
             <li style={{marginRight:"70px"}}><strong>Validation de Projet:</strong> Obtenez la validation de votre projet.</li>
             <li style={{marginRight:"62px"}}><strong>Attribution de Jury:</strong> Organisez les membres du jury.</li>
           </ul>
           <button
           style={{  marginBottom:'-200px'
           }}
             className="close-button enhanced"
             onClick={() => setShowHelp(false)}
           >
             ✖ Fermer
           </button>
         </div>
       </div>
      )}

    </ThemeProvider>
    
  );
}
