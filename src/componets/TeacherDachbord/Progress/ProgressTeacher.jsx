import React, { useState } from "react";
import {
  Box,
  TextField,
  Button,
  Typography,
  Slider,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Grid,
  Card,
  CardContent,
  IconButton,
  Paper,
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import AddCircleIcon from "@mui/icons-material/AddCircle";

const ProgressTeacher = () => {
  const [progress, setProgress] = useState(50); // Slider value
  const [list, setList] = useState([]); // List items
  const [open, setOpen] = useState(false); // Dialog state
  const [editIndex, setEditIndex] = useState(null); // Index for editing
  const [newItem, setNewItem] = useState(""); // New item value
  const [formValues, setFormValues] = useState({
    theme: "",
    title: "",
    resume: "",
    technologies: "",
  });

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  // Add or edit item in the list
  const handleAddItem = () => {
    if (newItem.trim()) {
      if (editIndex !== null) {
        const updatedList = [...list];
        updatedList[editIndex] = newItem;
        setList(updatedList);
        setEditIndex(null);
      } else {
        setList([...list, newItem]);
      }
      setNewItem("");
      setOpen(false);
    }
  };

  // Open dialog for editing
  const handleEditItem = (index) => {
    setNewItem(list[index]);
    setEditIndex(index);
    setOpen(true);
  };

  // Delete item from the list
  const handleDeleteItem = (index) => {
    const updatedList = list.filter((_, i) => i !== index);
    setList(updatedList);
  };

  return (
    <Box
      sx={{
        marginRight:"350px",
        marginTop:"50px",
        p: 4,
        bgcolor: "#f3f4f6",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Paper
        elevation={4}
        sx={{
                  width:'1000px',

          maxWidth: "1200px",
          p: 4,
          bgcolor: "white",
          borderRadius: 3,
          boxShadow: "0px 4px 12px rgba(0,0,0,0.1)",
        }}
      >
        <Typography
          variant="h4"
          sx={{
            textAlign: "center",
            mb: 4,
            fontWeight: "bold",
            color: "#333",
          }}
        >
          Interactive Page
        </Typography>
        <Grid container spacing={4}>
          {/* Left Side: Progress and List */}
          <Grid item xs={12} md={6}>
          <Box
  sx={{
    p: 4,
    bgcolor: "#f1f5f9", // خلفية خفيفة
    borderRadius: 4,
    boxShadow: "0px 4px 10px rgba(0,0,0,0.1)", // ظل خفيف
  }}
>
  <Typography
    variant="h5"
    sx={{
      mb: 4,
      fontWeight: "bold",
      color: "#1e293b",
      textAlign: "center",
      fontFamily: "Roboto, Arial, sans-serif", // تحسين الخط
      textTransform: "uppercase",
      letterSpacing: 1.5,
    }}
  >
    Fill the Details
  </Typography>

  {/* Theme Section */}
  <Box sx={{ mb: 4 }}>
    <Typography
      variant="h6"
      sx={{
        display: "flex",
        alignItems: "center",
        color: "#334155",
        mb: 2,
        fontFamily: "Roboto, Arial, sans-serif",
        gap: 1,
      }}
    >
      <Box
        component="span"
        sx={{
          display: "inline-flex",
          alignItems: "center",
          justifyContent: "center",
          color: "#fff",
         
          borderRadius: "50%",
          fontSize: "0.9rem",
          fontWeight: "bold",
        }}
      >
        
      </Box>
      Theme
    </Typography>
    <Typography
      variant="body1"
      sx={{
        bgcolor: "#fff",
        p: 3,
        borderRadius: 2,
        boxShadow: "0px 3px 6px rgba(0,0,0,0.1)",
        color: "#1e293b",
        fontSize: "1.2rem",
        fontWeight: "500",
        fontFamily: "Roboto, Arial, sans-serif",
      }}
    >
      Mobile Development
    </Typography>
  </Box>

  {/* Resume Section */}
  <Box sx={{ mb: 4 }}>
    <Typography
      variant="h6"
      sx={{
        display: "flex",
        alignItems: "center",
        color: "#334155",
        mb: 2,
        fontFamily: "Roboto, Arial, sans-serif",
        gap: 1,
      }}
    >
      <Box
        component="span"
        sx={{
          display: "inline-flex",
          alignItems: "center",
          justifyContent: "center",
          color: "#fff",
        
          borderRadius: "50%",
          fontSize: "0.9rem",
          fontWeight: "bold",
        }}
      >
        
      </Box>
      Resume
    </Typography>
    <Typography
      variant="body1"
      sx={{
        bgcolor: "#fff",
        p: 3,
        borderRadius: 2,
        boxShadow: "0px 3px 6px rgba(0,0,0,0.1)",
        color: "#1e293b",
        fontSize: "1.1rem",
        fontWeight: "400",
        fontFamily: "Roboto, Arial, sans-serif",
      }}
    >
      Mobile app development focuses on creating software applications designed to run on mobile devices, optimizing user experience and performance.
    </Typography>
  </Box>

  {/* Technologies Section */}
  <Box>
    <Typography
      variant="h6"
      sx={{
        display: "flex",
        alignItems: "center",
        color: "#334155",
        mb: 2,
        fontFamily: "Roboto, Arial, sans-serif",
        gap: 1,
      }}
    >
      <Box
        component="span"
        sx={{
          display: "inline-flex",
          alignItems: "center",
          justifyContent: "center",
          color: "#fff",
          
          borderRadius: "50%",
          fontSize: "0.9rem",
          fontWeight: "bold",
        }}
      >
        
      </Box>
      Technologies
    </Typography>
    <Typography
      variant="body1"
      sx={{
        bgcolor: "#fff",
        p: 3,
        borderRadius: 2,
        boxShadow: "0px 3px 6px rgba(0,0,0,0.1)",
        color: "#1e293b",
        fontSize: "1.1rem",
        fontWeight: "400",
        fontFamily: "Roboto, Arial, sans-serif",
      }}
    >
      React Native, Flutter, Swift, Kotlin
    </Typography>
  </Box>
</Box>

          </Grid>

          {/* Right Side: Form */}
          <Grid item xs={12} md={6}>
            <Box
              sx={{
                p: 3,
                bgcolor: "#f8f9fa",
                borderRadius: 3,
                boxShadow: "0px 2px 8px rgba(0,0,0,0.1)",
                mb: 4,
              }}
            >
              <Typography
                variant="h6"
                sx={{
                  mb: 2,
                  fontWeight: "bold",
                  color: "#495057",
                }}
              >
                Progress
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: 2,
                }}
              >
                <Slider
                  value={progress}
                  onChange={(e, value) => setProgress(value)}
                  sx={{
                    flex: 1,
                    color: "#0d6efd",
                    height: 8,
                    "& .MuiSlider-thumb": {
                      width: 24,
                      height: 24,
                    },
                  }}
                />
                <Typography
                  variant="body1"
                  sx={{
                    fontWeight: "bold",
                    fontSize: "18px",
                  }}
                >
                  {progress}%
                </Typography>
              </Box>
            </Box>

            <Box
              sx={{
                bgcolor: "#f8f9fa",
                p: 3,
                borderRadius: 3,
                boxShadow: "0px 2px 8px rgba(0,0,0,0.1)",
              }}
            >
              <Typography
                variant="h6"
                sx={{
                  mb: 2,
                  fontWeight: "bold",
                  color: "#495057",
                }}
              >
                Project Backlog
              </Typography>
              <Box
                sx={{
                  maxHeight: "250px",
                  overflowY: "auto",
                  mb: 2,
                }}
              >
                <Grid container spacing={2}>
                  {list.map((item, index) => (
                    <Grid item xs={12} key={index}>
                      <Card sx={{ boxShadow: 2 }}>
                        <CardContent
                          sx={{
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "center",
                          }}
                        >
                          <Typography variant="body1">{item}</Typography>
                          <Box>
                            <IconButton onClick={() => handleEditItem(index)}>
                              <EditIcon color="primary" />
                            </IconButton>
                            <IconButton
                              onClick={() => handleDeleteItem(index)}
                            >
                              <DeleteIcon color="error" />
                            </IconButton>
                          </Box>
                        </CardContent>
                      </Card>
                    </Grid>
                  ))}
                </Grid>
              </Box>
              <Button
                variant="contained"
                startIcon={<AddCircleIcon />}
                onClick={() => setOpen(true)}
                fullWidth
                sx={{ mt: 3, bgcolor: "#0d6efd", color: "#fff" }}
              >
                Add to List
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Paper>

      {/* Dialog for Adding or Editing Item */}
      <Dialog
  open={open}
  onClose={() => setOpen(false)}
  fullWidth
  maxWidth="md" // زيادة حجم النافذة
  PaperProps={{
    sx: {
      borderRadius: 4, // زوايا مستديرة
      p: 4, // مسافات داخلية
      bgcolor: "#f7f9fc", // خلفية خفيفة
      boxShadow: "0px 8px 24px rgba(0,0,0,0.2)", // ظلال خفيفة
    },
  }}
>
  <DialogTitle
    sx={{
      fontSize: "2rem", // تكبير النص
      fontWeight: "bold",
      textAlign: "center", // توسيط العنوان
      color: "#0d6efd", // لون مميز
      mb: 2, // مسافة أسفل العنوان
    }}
  >
    {editIndex !== null ? "Edit Item" : "Add New Item"}
  </DialogTitle>

  <DialogContent
    sx={{
      display: "flex",
      flexDirection: "column",
      gap: 3, // مسافة بين الحقول
      px: 4, // حواف داخلية أفقية
    }}
  >
    <TextField
      fullWidth
      variant="outlined"
      label="Item"
      value={newItem}
      onChange={(e) => setNewItem(e.target.value)}
      InputProps={{
        sx: {
          fontSize: "1.5rem", // تكبير النص في الحقول
        },
      }}
      InputLabelProps={{
        sx: {
          fontSize: "1.25rem", // تكبير النص في التسمية
        },
      }}
    />
  </DialogContent>

  <DialogActions
    sx={{
      justifyContent: "space-between", // توزيع الأزرار
      px: 4, // حواف داخلية أفقية
      mt: 3, // مسافة علوية للأزرار
    }}
  >
    <Button
      onClick={() => setOpen(false)}
      sx={{
        fontSize: "1.25rem", // تكبير النص
        color: "#6c757d", // لون رمادي هادئ
        "&:hover": { bgcolor: "#e9ecef" }, // خلفية عند التمرير
      }}
    >
      Cancel
    </Button>
    <Button
      onClick={handleAddItem}
      variant="contained"
      sx={{
        fontSize: "1.25rem", // تكبير النص
        px: 4, // حواف داخلية أفقية أكبر
        bgcolor: "#0d6efd", // خلفية زرقاء
        color: "#fff", // لون النص
        "&:hover": { bgcolor: "#0a58ca" }, // لون أغمق عند التمرير
      }}
    >
      {editIndex !== null ? "Save" : "Add"}
    </Button>
  </DialogActions>
</Dialog>
    </Box>
  );
};

export default ProgressTeacher;




