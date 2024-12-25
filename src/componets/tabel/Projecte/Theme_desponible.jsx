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
import Swal from "sweetalert2";
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

export default function StudentDashbord() {
  const [data, setData] = useState(initialData);
  const [currentTable, setCurrentTable] = useState('table1');
  const [openEditDialog, setOpenEditDialog] = useState(false);
  const [selectedRow, setSelectedRow] = useState(null);
  const [openAddDialog, setOpenAddDialog] = useState(false);

const [openDialog, setOpenDialog] = useState(false);
const [rejectionReason, setRejectionReason] = useState('');
const [showReasonInput, setShowReasonInput] = useState(false);
const [openConfirmDialog, setOpenConfirmDialog] = useState(false);


const [openSnackbar, setOpenSnackbar] = useState(false);

const navigate = useNavigate();


const handleEdi = (id) => {
  // يمكنك تعديل مسار الصفحة على حسب احتياجاتك
  navigate('/veiw');
};

const handleAdd = () => {
  // قم بفتح النافذة عند الضغط على الزر
  setOpenSnackbar(true);

  // أغلق النافذة بعد 15 ثانية
  setTimeout(() => {
    setOpenSnackbar(false);
  }, 1000);
};

const handleOpenDialog = () => {
  setOpenConfirmDialog(true);
};

const handleCloseDialog = () => {
  setOpenConfirmDialog(false);
};

const handleConfirm = () => {
  // Add your algorithm execution logic here
  console.log("Algorithm executed.");
  setOpenConfirmDialog(false);
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










const [newRow, setNewRow] = useState({
  id: '',
  Titel: '',
  Propose: '',
  Type: '',

  spe_master: '',

  Summary: '',
});



 


 

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
    { field: 'Titel', headerName: 'Titel', width: 190, align: 'center', headerAlign: 'center' },
    { field: 'Propose', headerName: 'Propose', width: 190, align: 'center', headerAlign: 'center' },
    { field: 'Type', headerName: 'Type', width: 150, align: 'center', headerAlign: 'center' },
    { field: 'spe_master', headerName: 'Spe Master', width:160, align: 'center', headerAlign: 'center' },
    { field: 'Summary', headerName: 'Summary', width:394, align: 'center', headerAlign: 'center' },


    




  ];
  

  const enhancedColumns =  currentTable === 'table1' 
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
          margin: '-5px -110px',
          maxWidth: '3002px',
          padding: '20px',
          backgroundColor: '#f4f6f8',
          borderRadius: '20px',
          boxShadow: '0 8px 16px rgba(0, 0, 0, 0.2)',
        }}
      >
        <Box sx={{ display: 'flex', alignItems: 'center',justifyContent:'center', mb: 2 }}>
  {['Appel à proposition'].map((item, index) => (
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
  onClick={handleOpenDialog}
  sx={{
    backgroundColor:"#fff",
      color: "#64b5f6",
      fontWeight:'bold',
      border:"1px solid #64b5f6",


    position: 'sticky',  // استخدام sticky بدلاً من fixed
marginTop:"-28px",
    width:'190px',
    height:"40px",     // وضع الزر في مكان مناسب من الأعلى
    left: '120px',         // وضع الزر في منتصف الصفحة أفقيًا
    transform: 'translateX(-485%)', // ضمان مركزية الزر

    zIndex: 1000,        // التأكد من أن الزر فوق العناصر الأخرى
    textTransform: 'none',
    borderRadius: '8px',
  }}
>
automatic assignment</Button>

)}


</Box>

{/* نافذة الإضافة */}
<Dialog
        open={openConfirmDialog}
        onClose={handleCloseDialog}
        PaperProps={{
          sx: { padding: 2, borderRadius: "12px", maxWidth: "400px" },
        }}
      >
        <DialogTitle
          sx={{
            fontSize: "1.5rem",
            fontWeight: "bold",
            color: "#1976d2",
            textAlign: "center",
          }}
        >
          Confirmation
        </DialogTitle>

        <DialogContent
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 2,
          }}
        >
          <Typography
            variant="body1"
            sx={{
              fontWeight: "bold",
              color: "#333",
              textAlign: "center",
            }}
          >
            Do you really want to execute this algorithm?
          </Typography>
        </DialogContent>

        <DialogActions sx={{ justifyContent: "center", gap: 2 }}>
          <Button
            onClick={handleCloseDialog}
            color="secondary"
            variant="outlined"
            sx={{ textTransform: "none", borderRadius: "8px" }}
          >
            No
          </Button>
          <Button
            onClick={handleConfirm}
            color="primary"
            variant="contained"
            sx={{ textTransform: "none", borderRadius: "8px" }}
          >
            Yes
          </Button>
        </DialogActions>
      </Dialog>




     

      {/* نافذة التعديل */}
     
    </ThemeProvider>
  );
}
