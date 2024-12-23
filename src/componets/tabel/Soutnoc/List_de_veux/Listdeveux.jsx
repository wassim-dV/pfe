import React, { useState } from 'react';
import { DataGrid } from '@mui/x-data-grid';

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
import { useNavigate } from "react-router-dom";

// بيانات كل جدول
const initialData = {
  table1: [
    { id: 1, Name: 'Jane',  Grade: 'Professor', Last_Name: '2023-08-14',Recruitment_date:'2023-08-14', Status: 'No', action: 'Completed' },

        { id: 2, Name: 'Jane',  Grade: 'Lecturer ', Last_Name: '2023-08-14',Recruitment_date:'2023-08-14', Status: 'No', action: 'Completed' },
    { id: 3, Name: 'John',  Grade: 'Senior Lecturer ', Last_Name: '2023-12-19',Recruitment_date:'2023-08-14', Status: 'Yes', action: 'Pending' },
    { id: 4, Name: 'Jane', Grade: 'Professor', Last_Name: '2023-08-14',Recruitment_date:'2023-08-14', Status: 'No', action: 'Completed' },
    { id: 5, Name: 'John', Grade: 'Lecturer ', Last_Name: '2023-12-19',Recruitment_date:'2023-08-14', Status: 'Yes', action: 'Pending' },
    { id: 6, Name: 'Jane',  Grade: 'Assistant Professor', Last_Name: '2023-08-14',Recruitment_date:'2023-08-14', Status: 'No', action: 'Completed' },
    { id: 7, Name: 'John', Grade: 'Senior Lecturer ', Last_Name: '2023-12-19',Recruitment_date:'2023-08-14', Status: 'Yes', action: 'Pending' },
    { id: 8, Name: 'Jane',  Grade: 'Assistant Professor', Last_Name: '2023-08-14',Recruitment_date:'2023-08-14', Status: 'No', action: 'Completed' },
    
 
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

export default function Listdeveux() {
  const [data, setData] = useState(initialData);
  const [currentTable, setCurrentTable] = useState('table1');
  const [openEditDialog, setOpenEditDialog] = useState(false);
  const [selectedRow, setSelectedRow] = useState(null);
  const [openAddDialog, setOpenAddDialog] = useState(false);

const [rejectionReason, setRejectionReason] = useState('');

const [themes, setThemes] = React.useState([
    { title: "Theme 1" },
    { title: "Theme 2" },
  ]);
  
  const [newThemeTitle, setNewThemeTitle] = React.useState("");
  
  const handleAddTheme = () => {
    if (newThemeTitle.trim()) {
      setThemes([...themes, { title: newThemeTitle }]);
      setNewThemeTitle("");
    }
  };
  
  const handleEditTheme = (index) => {
    const editedTheme = prompt("Edit Theme Title", themes[index].title);
    if (editedTheme) {
      const updatedThemes = [...themes];
      updatedThemes[index].title = editedTheme;
      setThemes(updatedThemes);
    }
  };
  
  const handleDeleteTheme = (index) => {
    const updatedThemes = themes.filter((_, i) => i !== index);
    setThemes(updatedThemes);
  };
  

const navigate = useNavigate();


const handleEdi = (id) => {
  // يمكنك تعديل مسار الصفحة على حسب احتياجاتك
  navigate('/add');
};



  const [status, setStatus] = useState(null); // New state for status












const handleReasonChange = (event) => {
  setRejectionReason(event.target.value); // تحديث سبب الرفض
};

const [newRow, setNewRow] = useState({
  id: '',
  Name: '',
  spe_master: '',
  Last_Name: '',
 
});

const handleAddSave = () => {
  setData((prevData) => ({
    ...prevData,
    [currentTable]: [...prevData[currentTable], { ...newRow, id: Date.now() }],
  }));
  setOpenAddDialog(false);
  setNewRow({
    id: '',
    Name: '',
    spe_master: '',
    Last_Name: '',
   
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

    { field: 'id', headerName: 'ID', width: 75, align: 'center', headerAlign: 'center',   headerClassName: 'header-bold', // نمط CSS مخصص
    },
    { field: 'Name', headerName: 'Name', width: 220, align: 'center', headerAlign: 'center' },
    { field: 'Last_Name', headerName: 'Last Name', width: 220, align: 'center', headerAlign: 'center' },
    { field: 'Recruitment_date', headerName: 'Recruitment date', width: 270, align: 'center', headerAlign: 'center' },
    { field: 'Grade', headerName: 'Grade', width:290, align: 'center', headerAlign: 'center' },
  
      {
        field: 'actions',
        headerName: 'Actions',
        width: 115,
        align: 'center',
        headerAlign: 'center',
        renderCell: (params) => (
          <Box sx={{ display: 'flex' }}>
            <IconButton
              color="gray"
              style={{alignContent:"center" ,justifyContent:'center' ,alignItems:"center"}}
              onClick={() => handleEdit(params.row.id)}
            >
              <EditIcon />
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
          height: 620,
          width: '1250px',
          marginLeft:'10px !important',
          marginTop:"40px",
          maxWidth: '3002px',
          padding: '20px',
          backgroundColor: '#f4f6f8',
          borderRadius: '20px',
          boxShadow: '0 8px 16px rgba(0, 0, 0, 0.2)',
        }}
      >
        <Box sx={{ display: 'flex', alignItems: 'center',justifyContent:'center', mb: 2 }}>
  {['jury wish List Modification'].map((item, index) => (
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
    top: '86px',    
    width:'160px',
    height:"40px",     // وضع الزر في مكان مناسب من الأعلى
    left: '-320px',         // وضع الزر في منتصف الصفحة أفقيًا
    transform: 'translateX(-120%)', // ضمان مركزية الزر

    zIndex: 1000,        // التأكد من أن الزر فوق العناصر الأخرى
    textTransform: 'none',
    borderRadius: '8px',
  }}
>
   Baram
</Button>


)}

<Button
  variant="contained"
  color="primary"
  sx={{
    backgroundColor:"#fff",
      color: "#64b5f6",
      fontWeight:'bold',
      border:"1px solid #64b5f6",


    position: 'sticky',  // استخدام sticky بدلاً من fixed
    top: '660px',    
    width:'190px',
    height:"40px",     // وضع الزر في مكان مناسب من الأعلى
    left: '-320px',         // وضع الزر في منتصف الصفحة أفقيًا
    transform: 'translateX(-660%)', // ضمان مركزية الزر

    zIndex: 1000,        // التأكد من أن الزر فوق العناصر الأخرى
    textTransform: 'none',
    borderRadius: '8px',
  }}
>
Automatic assignment






</Button>




<Button
  variant="contained"
  color="primary"
  
  sx={{
    backgroundColor:"#fff",
      color: "#64b5f6",
      fontWeight:'bold',
      border:"1px solid #64b5f6",


    position: 'sticky',  // استخدام sticky بدلاً من fixed
    top: '660px',    
    width:'210px',
    height:"40px",     // وضع الزر في مكان مناسب من الأعلى
    left: '-320px',         // وضع الزر في منتصف الصفحة أفقيًا
    transform: 'translateX(-580%)', // ضمان مركزية الزر

    zIndex: 1000,        // التأكد من أن الزر فوق العناصر الأخرى
    textTransform: 'none',
    borderRadius: '8px',
  }}
>
Download summary sheet
</Button>



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
      width: "500px",
      fontSize: "1.5rem",
      fontWeight: "bold",
      color: "#1976d2",
      textAlign: "center",
    }}
  >
    Add New Row
  </DialogTitle>

  <DialogContent sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
    {/* باقي الحقول */}
    
   

    {/* الحقل الجديد لاختيار عدد */}
    <Typography variant="subtitle1" sx={{ fontWeight: "bold", mb: "-10px" }}>
      Baram
    </Typography>
    <TextField
      margin="dense"
      label="Enter Baram"
      type="text"
      fullWidth
      onChange={(e) => handleFieldChange("number", e.target.value)}
      sx={{
        "& .MuiInputBase-root": {
          borderRadius: "8px",
        },
      }}
    />

<Typography variant="subtitle1" sx={{ fontWeight: "bold", mb: "-10px" }}>
      Coefficient
    </Typography>
    <TextField
      margin="dense"
      label="Enter Coefficient"
      type="number"
      fullWidth
      onChange={(e) => handleFieldChange("number", e.target.value)}
      sx={{
        "& .MuiInputBase-root": {
          borderRadius: "8px",
        },
      }}
    />

    {/* باقي الحقول */}
    
    

    {/* باقي الكود */}
    {/* ... */}
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
           fontSize: "1.5rem",
           fontWeight: "bold",
           color: "#1976d2",
           textAlign: "center",
         }}
       >
         Manage Themes
       </DialogTitle>
     
       <DialogContent
         sx={{
           display: "flex",
           flexDirection: "column",
           gap: 2,
         }}
       >
         {/* قائمة المواضيع */}
         <h3 style={{ margin: "10px 0", color: "#1565c0" }}>Themes</h3>
         <Grid container spacing={2}>
           {themes.map((theme, index) => (
             <Grid
               key={index}
               container
               alignItems="center"
               justifyContent="space-between"
               sx={{
                 padding: "10px",
                 backgroundColor: "#f5f5f5",
                 borderRadius: "8px",
                 marginBottom: "10px",
               }}
             >
               <Grid item xs={6}>
                 <span>{theme.title}</span>
               </Grid>
               <Grid item xs={6} sx={{ textAlign: "right" }}>
                 <Button
                   onClick={() => handleEditTheme(index)}
                   color="primary"
                   variant="outlined"
                   sx={{ textTransform: "none", marginRight: "10px" }}
                 >
                   Edit
                 </Button>
                 <Button
                   onClick={() => handleDeleteTheme(index)}
                   color="secondary"
                   variant="outlined"
                   sx={{ textTransform: "none" }}
                 >
                   Delete
                 </Button>
               </Grid>
             </Grid>
           ))}
         </Grid>
     
         {/* إضافة موضوع جديد */}
         <h3 style={{ margin: "10px 0", color: "#1565c0" }}>Add New Theme</h3>
         
         <Button
           onClick={handleEdi}
           color="primary"
           variant="contained"
           sx={{
             textTransform: "none",
             borderRadius: "8px",
             marginTop: "10px",
           }}
         >
           Add Theme
         </Button>
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
           Close
         </Button>
       </DialogActions>
     </Dialog>
     



      )}
    </ThemeProvider>
  );
}
