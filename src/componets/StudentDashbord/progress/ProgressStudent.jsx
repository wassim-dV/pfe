





import React, { useState } from "react";
import {
  Box,
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
  Checkbox,
  Paper,
  TextField,
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import AddCircleIcon from "@mui/icons-material/AddCircle";

const ProgressStudent = () => {
  const [list, setList] = useState([]); // List items
  const [open, setOpen] = useState(false); // Dialog state
  const [editIndex, setEditIndex] = useState(null); // Index for editing
  const [newItem, setNewItem] = useState(""); // New item value

  // Add or edit item in the list
  const handleAddItem = () => {
    if (newItem.trim()) {
      if (editIndex !== null) {
        const updatedList = [...list];
        updatedList[editIndex].text = newItem;
        setList(updatedList);
        setEditIndex(null);
      } else {
        setList([...list, { text: newItem, completed: false }]);
      }
      setNewItem(""); // Reset the input field
      setOpen(false); // Close dialog
    }
  };

  // Toggle completed status
  const handleToggleCompleted = (index) => {
    const updatedList = [...list];
    updatedList[index].completed = !updatedList[index].completed;
    setList(updatedList);
  };

  // Open dialog for editing
  const handleEditItem = (index) => {
    setNewItem(list[index].text);
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
        marginRight: "350px",
        marginTop: "50px",
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
          width: "1000px",
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
                  value={60}
                  disabled
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
                  60%
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
                          <Box sx={{ display: "flex", alignItems: "center" }}>
                            <Checkbox
                              checked={item.completed}
                              onChange={() => handleToggleCompleted(index)}
                              color="success"
                            />
                            <Typography
                              variant="body1"
                              sx={{
                                textDecoration: item.completed
                                  ? "line-through"
                                  : "none",
                              }}
                            >
                              {item.text}
                            </Typography>
                          </Box>
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
        maxWidth="sm"
      >
        <DialogTitle>
          {editIndex !== null ? "Edit Item" : "Add New Item"}
        </DialogTitle>
        <DialogContent>
          <TextField
            fullWidth
            variant="outlined"
            label="Item"
            value={newItem}
            onChange={(e) => setNewItem(e.target.value)}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpen(false)}>Cancel</Button>
          <Button onClick={handleAddItem} variant="contained">
            {editIndex !== null ? "Save" : "Add"}
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default ProgressStudent;
