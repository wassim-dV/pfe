import React, { useState } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import {  IconButton, Modal, TextField, Typography } from '@mui/material';

import { Box, Button, ThemeProvider, createTheme } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import SearchIcon from '@mui/icons-material/Search';

const initialRows = [
  { id: 1, Name: 'John', LastName: 'Doe', Dateofrecruitment: '2000-12-19', Email: 'john.doe@example.com' , Grade: "Teacher" },
  { id: 2, Name: 'Jane', LastName: 'Smith', Dateofrecruitment: '1995-08-14', Email: 'jane.smith@example.com', Grade: "Student" },
  { id: 1, Name: 'John', LastName: 'Doe', Dateofrecruitment: '2000-12-19', Email: 'john.doe@example.com' , Grade: "Admistator" },
  { id: 2, Name: 'Jane', LastName: 'Smith', DateDateofrecruitmentOfBirth: '1995-08-14', Email: 'jane.smith@example.com', Grade: "Teacher" },
  { id: 1, Name: 'John', LastName: 'Doe', Dateofrecruitment: '2000-12-19', Email: 'john.doe@example.com' , Grade: "Teacher" },
  { id: 2, Name: 'Jane', LastName: 'Smith', Dateofrecruitment: '1995-08-14', Email: 'jane.smith@example.com', Grade: "Teacher" },
  { id: 1, Name: 'John', LastName: 'Doe', Dateofrecruitment: '2000-12-19', Email: 'john.doe@example.com' , Grade: "Teacher" },
  { id: 2, Name: 'Jane', LastName: 'Smith', Dateofrecruitment: '1995-08-14', Email: 'jane.smith@example.com', Grade: "Teacher" },
  { id: 1, Name: 'John', LastName: 'Doe', Dateofrecruitment: '2000-12-19', Email: 'john.doe@example.com' , Grade: "Teacher" },
  { id: 2, Name: 'Jane', LastName: 'Smith', Dateofrecruitment: '1995-08-14', Email: 'jane.smith@example.com', Grade: "Teacher" },
];

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

export default function Team() {
  const [rows, setRows] = useState(initialRows);
  const [selectedRows, setSelectedRows] = useState([]); // تتبع الصفوف المحددة
  const [openEditModal, setOpenEditModal] = useState(false);
  const [openAddModal, setOpenAddModal] = useState(false);
  const [editData, setEditData] = useState({ id: '', Name: '', LastName: '', Dateofrecruitment: '', Email: '' });
  const [newData, setNewData] = useState({ Name: '', LastName: '', Dateofrecruitment: '', Email: '' });
  const [searchTerm, setSearchTerm] = useState('');

  const handleEditClick = (row) => {
    setEditData(row);
    setOpenEditModal(true);
  };
  const handleSaveEdit = () => {
    setRows((prevRows) =>
      prevRows.map((row) => (row.id === editData.id ? editData : row))
    );
    setOpenEditModal(false);
  };
  const handleAddClick = () => {
    setNewData({ Name: '', LastName: '', Dateofrecruitment: '', Email: '' });
    setOpenAddModal(true);
  };
  const handleSaveAdd = () => {
    const newId = rows.length ? rows[rows.length - 1].id + 1 : 1;
    setRows((prevRows) => [
      ...prevRows,
      { id: newId, ...newData },
    ]);
    setOpenAddModal(false);
  };
  const handleRowClick = (params) => {
    const id = params.id;
    if (selectedRows.includes(id)) {
      setSelectedRows(selectedRows.filter((rowId) => rowId !== id)); // إزالة التحديد إذا كان موجودًا
    } else {
      setSelectedRows([...selectedRows, id]); // إضافة الصف المحدد
    }
  };
  const filteredRows = rows.filter((row) =>
    row.Name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    row.LastName.toLowerCase().includes(searchTerm.toLowerCase()) ||
    row.Email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleDeleteClick = () => {
    setRows(rows.filter((row) => !selectedRows.includes(row.id))); // حذف الصفوف المحددة
    setSelectedRows([]); // إعادة تعيين الصفوف المحددة بعد الحذف
  };

  const columns = [
    { field: 'id', headerName: 'ID', width: 70, align: 'center', headerAlign: 'center' },
    { field: 'Name', headerName: 'First Name', width: 150, align: 'center', headerAlign: 'center' },
    { field: 'LastName', headerName: 'Last Name', width: 150, align: 'center', headerAlign: 'center' },
    { field: 'Dateofrecruitment', headerName: 'Date of recruitment', width: 170, align: 'center', headerAlign: 'center' },
    { field: 'Email', headerName: 'Email', width: 210, align: 'center', headerAlign: 'center' },
    { field: 'Grade', headerName: 'Grade', width: 140, align: 'center', headerAlign: 'center' },
    {
      width:10,
    
        renderCell: (params) => (
          <Box sx={{ display: 'flex', justifyContent: 'center', gap: 1 }}>
            <IconButton onClick={() => handleEditClick(params.row)} color="primary">
              <EditIcon />
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
        <Box sx={{ display: 'flex', justifyContent: 'space-between', marginBottom: 2 }}>
        <Button variant="outlined" onClick={handleAddClick} sx={{   width:"120px" ,fontFamily: 'Poppins, sans-serif' , height:"40px"  }}>
          Add User
        </Button>
          <Button
            variant="outlined"
            onClick={handleDeleteClick}
            disabled={selectedRows.length === 0} // تعطيل الزر إذا لم يتم تحديد أي صف
            sx={{ width: '140px', fontFamily: 'Poppins, sans-serif' , height:"40px" , marginLeft:"-400px" }}
          >
            Delete User
          </Button>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <TextField
          
            label="Search"
            variant="outlined"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            size="small"
            sx={{ marginRight: 2, fontFamily: 'Poppins, sans-serif' }}
          />
          <IconButton onClick={() => setSearchTerm('')}>
          <SearchIcon />

          </IconButton>
        </Box>
        </Box>

        <DataGrid
          rows={rows}
          columns={columns}
          pageSize={5}
          onRowClick={handleRowClick} // تحديث الصفوف المحددة
          getRowClassName={(params) =>
            selectedRows.includes(params.id) ? 'selected-row' : ''
          } // تعيين صفوف محددة
          sx={{
            '& .MuiDataGrid-row:hover .MuiDataGrid-cell': {
              '& > div': {
                visibility: 'visible',
              },
            },
            '& .MuiDataGrid-cell': {
              '& > div': {
                visibility: 'hidden',
              },
            },
            '& .MuiDataGrid-cell, .MuiDataGrid-columnHeader': {
              fontFamily: 'Roboto, sans-serif',
              border: '1px solid #ddd',
            },
            '& .MuiDataGrid-columnHeader': {
              backgroundColor: '#f4f4f4',
              fontWeight: 'bold',
              color: '#333',
              fontSize:'21px',
              fontFamily:'bold',

              borderBottom: '2px solid #ddd',
            },
            '& .MuiDataGrid-row': {
              backgroundColor: '#fff',
            },
          }}
        />
        <Modal open={openEditModal} onClose={() => setOpenEditModal(false)}>
  <Box
    sx={{
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      width: '90%',
      maxWidth: 500,
      bgcolor: '#f9f9f9',
      boxShadow: '0 8px 24px rgba(0, 0, 0, 0.2)',
      p: 3,
      borderRadius: '16px',
      overflow: 'hidden',
    }}
  >
    <Box
      sx={{
        background: 'linear-gradient(135deg, #6a11cb 0%, #2575fc 100%)',
        color: 'white',
        textAlign: 'center',
        py: 2,
        mb: 2,
        borderRadius: '12px',
      }}
    >
      <Typography variant="h6" sx={{ fontWeight: 'bold', fontSize: '18px' }}>
        Edit User
      </Typography>
    </Box>
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
      <TextField
        label="First Name"
        fullWidth
        variant="outlined"
        value={editData.Name}
        onChange={(e) => setEditData({ ...editData, Name: e.target.value })}
      />
      <TextField
        label="Last Name"
        fullWidth
        variant="outlined"
        value={editData.LastName}
        onChange={(e) => setEditData({ ...editData, LastName: e.target.value })}
      />
      <TextField
        label="Email"
        fullWidth
        variant="outlined"
        value={editData.Email}
        onChange={(e) => setEditData({ ...editData, Email: e.target.value })}
      />
      <TextField
        label="Date of recruitment"
        type="date"
        fullWidth
        variant="outlined"
        InputLabelProps={{ shrink: true }}
        value={editData.Dateofrecruitment}
        onChange={(e) => setEditData({ ...editData, Dateofrecruitment: e.target.value })}
      />
      <TextField
        label="Grade"
        fullWidth
        variant="outlined"
        value={editData.Role}
        onChange={(e) => setEditData({ ...editData, Grade: e.target.value })}
      />
      <TextField
        label="Department"
        select
        fullWidth
        variant="outlined"
        value={editData.Department}
        onChange={(e) => setEditData({ ...editData, Department: e.target.value })}
        SelectProps={{ native: true }}
      >
        <option value="">Select Department</option>
        <option value="Computer Science">Computer Science</option>
        <option value="Business">Business</option>
      </TextField>
      <TextField
        label="Specialization"
        select
        fullWidth
        variant="outlined"
        value={editData.Specialization}
        onChange={(e) => setEditData({ ...editData, Specialization: e.target.value })}
        SelectProps={{ native: true }}
      >
        <option value="">Select Specialization</option>
        {editData.Department === 'Computer Science' && (
          <>
            <option value="AI">AI</option>
            <option value="Web Development">Web Development</option>
          </>
        )}
        {editData.Department === 'Business' && (
          <>
            <option value="Marketing">Marketing</option>
            <option value="Finance">Finance</option>
          </>
        )}
      </TextField>
    </Box>
    <Box sx={{ display: 'flex', justifyContent: 'space-between', gap: 2, mt: 3 }}>
      <Button
        fullWidth
        variant="contained"
        sx={{
          bgcolor: '#6a11cb',
          '&:hover': { bgcolor: '#2575fc' },
        }}
        onClick={handleSaveEdit}
      >
        Save
      </Button>
      <Button
        fullWidth
        variant="outlined"
        sx={{
          borderColor: '#6a11cb',
          color: '#6a11cb',
          '&:hover': {
            borderColor: '#2575fc',
            color: '#2575fc',
          },
        }}
        onClick={() => setOpenEditModal(false)}
      >
        Cancel
      </Button>
    </Box>
  </Box>
</Modal>
<Modal open={openAddModal} onClose={() => setOpenAddModal(false)}>
  <Box
    sx={{
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      width: 500,
      bgcolor: 'background.paper',
      boxShadow: 24,
      borderRadius: 2,
      overflow: 'hidden',
    }}
  >
    <Box
      sx={{
        bgcolor: '#2575fc',
        color: 'white',
        py: 2,
        px: 3,
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}
    >
      <Typography variant="h6" fontWeight="bold">
        Add New User
      </Typography>
      <Button
        onClick={() => setOpenAddModal(false)}
        sx={{
          color: 'white',
          minWidth: 0,
          padding: 0,
          '&:hover': { bgcolor: 'transparent' },
        }}
      >
        ✕
      </Button>
    </Box>
    <Box sx={{ px: 3, py: 3 }}>
      <TextField
        label="First Name"
        fullWidth
        margin="normal"
        value={newData.Name}
        onChange={(e) => setNewData({ ...newData, Name: e.target.value })}
      />
      <TextField
        label="Last Name"
        fullWidth
        margin="normal"
        value={newData.LastName}
        onChange={(e) => setNewData({ ...newData, LastName: e.target.value })}
      />
      <TextField
        label="Email"
        fullWidth
        margin="normal"
        value={newData.Email}
        onChange={(e) => setNewData({ ...newData, Email: e.target.value })}
      />
      <TextField
        label="Date of recruitment"
        type="date"
        fullWidth
        margin="normal"
        InputLabelProps={{ shrink: true }}
        value={newData.Dateofrecruitment}
        onChange={(e) => setNewData({ ...newData, Dateofrecruitment: e.target.value })}
      />
      <TextField
        label="Grade"
        fullWidth
        margin="normal"
        value={newData.Grade}
        onChange={(e) => setNewData({ ...newData, Grade: e.target.value })}
      />
      <Box sx={{ display: 'flex', justifyContent: 'space-between', gap: 2, mt: 3 }}>
        <Button
          fullWidth
          variant="contained"
          onClick={handleSaveAdd}
          sx={{
            bgcolor: '#2575fc',
            '&:hover': { bgcolor: '#6a11cb' },
          }}
        >
          Save
        </Button>
        <Button
          fullWidth
          variant="outlined"
          onClick={() => setOpenAddModal(false)}
          sx={{
            borderColor: '#2575fc',
            color: '#2575fc',
            '&:hover': {
              borderColor: '#6a11cb',
              color: '#6a11cb',
            },
          }}
        >
          Cancel
        </Button>
      </Box>
    </Box>
  </Box>
</Modal>

      </Box>
    </ThemeProvider>
  );
}
