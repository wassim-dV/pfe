import React, { useState } from "react";
import "./UserSettings.css";

import { TextField, Button } from "@mui/material";

function UserSettings() {
  const [activeTab, setActiveTab] = useState("account"); // الحالة لتحديد القسم النشط

  // إعداد نمط الحقول النصية
  const textFieldStyle = {
    width: "100%",
    marginBottom: "15px",
    borderRadius: "8px",
    backgroundColor: "#f4f4f4",
  };

  // إعداد نمط الزر
  const buttonStyle = {
    padding: "12px 30px",
    borderRadius: "5px",
    fontSize: "14px",
    fontWeight: "600",
    backgroundColor: "#6200ea",
    color: "#fff",
    marginTop: "20px",
    textTransform: "none",
    boxShadow: "none",
    transition: "background-color 0.3s",
  };

  const handleMouseEnter = (e) => {
    e.target.style.backgroundColor = "#3700b3";
  };

  const handleMouseLeave = (e) => {
    e.target.style.backgroundColor = "#6200ea";
  };

  return (
    <div
      className="user-settings"
      style={{
        padding: "20px",
        maxWidth: "500px",
        margin: "63px",
        fontFamily: "Arial, sans-serif",
      }}
    >
      {/* قائمة التنقل */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          marginBottom: "30px",
          borderBottom: "1px solid #ddd",
        }}
      >
        <button
          onClick={() => setActiveTab("account")}
          style={{
            padding: "10px 20px",
            border: activeTab === "account" ? "1px solid #6200ea" : "#555",            background: activeTab === "account" ? "#fff" : "transparent",
            color: activeTab === "account" ? "#6200ea" : "#555",
            fontWeight: activeTab === "account" ? "bold" : "normal",
            cursor: "pointer",
            transition: "background-color 0.3s",
            borderRadius: "5px",
          }}
        >
          Account Settings
        </button>
        <button
          onClick={() => setActiveTab("password")}
          style={{
            padding: "10px 20px",
            border: activeTab === "password" ? " 3px solid #6200ea" : "#555",

            background: activeTab === "password" ? "#fff" : "transparent",
            color: activeTab === "password" ? "#6200ea" : "#555",
            fontWeight: activeTab === "password" ? "bold" : "normal",
            cursor: "pointer",
            transition: "background-color 0.3s",
            borderRadius: "5px",
          }}
        >
          Password and Security
        </button>
      </div>

      {/* عرض المحتوى بناءً على القسم النشط */}
      {activeTab === "account" && (
        <div>
          {/* قسم الصورة الشخصية */}
          <div
            style={{
              marginLeft:'-80px',
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              marginBottom: "30px",
              gap: "20px",
            }}
          >
            <img
              src="https://via.placeholder.com/120"
              alt="Profile"
              style={{
                marginRight:"-20px",
                width: "80px",
                height: "80px",
                borderRadius: "50%",
                objectFit: "cover",
              }}
            />
           <div
  style={{
    display: "flex",
    gap: "10px",
    marginLeft:'-20px',
    justifyContent: "center",
    alignItems: "center",
    padding: "1px",
    borderRadius: "12px",
  }}
>
  <Button
    style={{
      marginLeft:'29px',

      marginRight: "0",
      background: "linear-gradient(135deg, #3b82f6, #1e40af)",
      color: "#fff",
      borderRadius: "8px",
      padding: "8px 16px",
      fontWeight: "bold",
      textTransform: "uppercase",
      boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
      transition: "all 0.3s ease",
    }}
    onMouseOver={(e) => (e.target.style.transform = "scale(1.05)")}
    onMouseOut={(e) => (e.target.style.transform = "scale(1)")}
    variant="contained"
    color="primary"
    size="small"
  >
    Upload New
  </Button>
  <Button
    style={{
      border: "2px solid #1e40af",
      color: "#1e40af",
      background: "transparent",
      borderRadius: "8px",
      padding: "8px 16px",
      fontWeight: "bold",
      textTransform: "uppercase",
      transition: "all 0.3s ease",
    }}
    onMouseOver={(e) => {
      e.target.style.background = "#1e40af";
      e.target.style.color = "#fff";
    }}
    onMouseOut={(e) => {
      e.target.style.background = "transparent";
      e.target.style.color = "#1e40af";
    }}
    variant="outlined"
    color="secondary"
    size="small"
  >
    Remove Profile Picture
  </Button>
</div>

          </div>

          {/* قسم التفاصيل */}
          <div>
            <h3 style={{ marginBottom: "15px", color: "#555" }}>Details</h3>
            <div
  style={{
    display: "flex",
    flexWrap: "wrap",
    gap: "20px",
    marginBottom: "20px",
  }}
>
  <div style={{ display: "flex", gap: "20px", width: "100%" }}>
    {/* الحقل الأول */}
    <div style={{ flex: "1" }}>
      <label
        htmlFor="first-name"
        style={{
          display: "block",
          marginBottom: "5px",
          fontSize: "14px",
          fontWeight: "600",
          color: "#333",
        }}
      >
        First Name
      </label>
      <TextField
        id="first-name"
        value="First Name" // النص الثابت داخل الحقل
        style={{
          ...textFieldStyle,
          width: "450px",
          backgroundColor: "#f0f0f0", // لون خلفية يوحي بأنه غير قابل للتعديل
          borderRadius: "8px",
          boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
          transition: "box-shadow 0.3s ease, transform 0.2s ease",
        }}
        variant="outlined"
        size="small"
        InputProps={{
          readOnly: true, // يجعل الحقل ثابتًا وغير قابل للتعديل
        }}
      />
    </div>

    {/* الحقل الثاني */}
    <div style={{ flex: "1" }}>
      <label
        htmlFor="last-name"
        style={{
          display: "block",
          marginBottom: "5px",
          fontSize: "14px",
          fontWeight: "600",
          color: "#333",
        }}
      >
        Last Name
      </label>
      <TextField
        id="last-name"
  value="Last Name" // النص الثابت داخل الحقل
  style={{
    ...textFieldStyle,
    width: "450px",
    backgroundColor: "#f0f0f0", // لون خلفية يوحي بأنه غير قابل للتعديل
    borderRadius: "8px",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
    transition: "box-shadow 0.3s ease, transform 0.2s ease",
  }}
  variant="outlined"
  size="small"
  InputProps={{
    readOnly: true, // يجعل الحقل ثابتًا وغير قابل للتعديل
  }}
      />
    </div>
  </div>

  <div style={{ display: "flex", gap: "20px", width: "100%", marginTop: "10px" }}>
    {/* الحقل الثالث */}
    <div style={{ flex: "1" }}>
      <label
        htmlFor="email-address"
        style={{
          display: "block",
          marginBottom: "5px",
          fontSize: "14px",
          fontWeight: "600",
          color: "#333",
        }}
      >
        Email Address
      </label>
      <TextField
       id="email"
       value="user@gmail.com" // النص الثابت داخل الحقل
       style={{
         ...textFieldStyle,
         width: "450px",
         backgroundColor: "#f0f0f0", // لون خلفية يوحي بأنه غير قابل للتعديل
         borderRadius: "8px",
         boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
         transition: "box-shadow 0.3s ease, transform 0.2s ease",
       }}
       variant="outlined"
       size="small"
       InputProps={{
         readOnly: true, // يجعل الحقل ثابتًا وغير قابل للتعديل
       }}
      />
    </div>

    {/* الحقل الرابع */}
    <div style={{ flex: "1" }}>
      <label
  htmlFor="phone-number"
  style={{
    display: "block",
    marginBottom: "5px",
    fontSize: "14px",
    fontWeight: "600",
    color: "#333",
  }}
>
  Phone Number
</label>
<TextField
  id="phone-number"
  style={{
    ...textFieldStyle,
    width: "450px",
    backgroundColor: "#f0f0f0", // لون خلفية يوحي بأنه غير قابل للتعديل
    borderRadius: "8px",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
    transition: "box-shadow 0.3s ease, transform 0.2s ease",
  }}
  variant="outlined"
  size="small"
  
/>

    </div>
  </div>
</div>

            <Button
            sx={{backgroundColor:' #64b5f6 !important',
                ":hover !important":{
                  backgroundColor:'white  !important',
                  color:'#64b5f6  !important'
                }

            }}
              variant="contained"
              style={{
                padding: "12px 25px",
                backgroundColor: "#64b5f6",
                color: "#fff",
                borderRadius: "15px",
                fontSize: "16px",
                fontWeight: "bold",
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
                cursor: "pointer",
                transition: "background-color 0.3s, box-shadow 0.3s",
              }}
              onMouseEnter={(e) => {
                e.target.style.backgroundColor = "#42a5f5";
              }}
              onMouseLeave={(e) => {
                e.target.style.backgroundColor = "#64b5f6";
              }}              
            >
              Save Changes
            </Button>
          </div>
        </div>
      )}

      {activeTab === "password" && (
        <div>
          {/* قسم كلمة المرور */}
          <div>
  <h3 style={{ marginBottom: "15px", fontSize: "18px", fontWeight: "600", color: "#333" }}>
    Password
  </h3>

  <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
    {/* حقل Current Password */}
    <div>
      <label
        htmlFor="current-password"
        style={{
          display: "block",
          marginBottom: "5px",
          fontSize: "14px",
          fontWeight: "600",
          color: "#333",
        }}
      >
        Current Password
      </label>
      <TextField
        id="current-password"
        style={{
          ...textFieldStyle,
          width: "100%",
          backgroundColor: "#fff",
          borderRadius: "8px",
          boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
          transition: "box-shadow 0.3s ease, transform 0.2s ease",
        }}
        label="Current Password
"
        type="password"
        variant="outlined"
        size="small"
        onFocus={(e) => {
          e.target.style.boxShadow = "0 8px 16px rgba(0, 0, 0, 0.2)";
          e.target.style.transform = "scale(1.02)";
        }}
        onBlur={(e) => {
          e.target.style.boxShadow = "0 4px 6px rgba(0, 0, 0, 0.1)";
          e.target.style.transform = "scale(1)";
        }}
      />
    </div>

    {/* حقل New Password */}
    <div>
      <label
        htmlFor="new-password"
        style={{
          display: "block",
          marginBottom: "5px",
          fontSize: "14px",
          fontWeight: "600",
          color: "#333",
        }}
      >
        New Password
      </label>
      <TextField
        id="new-password"
        style={{
          ...textFieldStyle,
          width: "450px",
          backgroundColor: "#fff",
          borderRadius: "8px",
          boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
          transition: "box-shadow 0.3s ease, transform 0.2s ease",
        }}
        label="New Password
"
        type="password"
        variant="outlined"
        size="small"
        onFocus={(e) => {
          e.target.style.boxShadow = "0 8px 16px rgba(0, 0, 0, 0.2)";
          e.target.style.transform = "scale(1.02)";
        }}
        onBlur={(e) => {
          e.target.style.boxShadow = "0 4px 6px rgba(0, 0, 0, 0.1)";
          e.target.style.transform = "scale(1)";
        }}
      />
    </div>

    {/* حقل Confirm New Password */}
    <div>
      <label
        htmlFor="confirm-new-password"
        style={{
          display: "block",
          marginBottom: "5px",
          fontSize: "14px",
          fontWeight: "600",
          color: "#333",
        }}
      >
        Confirm New Password
      </label>
      <TextField
        id="confirm-new-password"
        style={{
          ...textFieldStyle,
          width: "450px",
          backgroundColor: "#fff",
          borderRadius: "8px",
          boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
          transition: "box-shadow 0.3s ease, transform 0.2s ease",
        }}
        label="Confirm New Password
"
        type="password"
        variant="outlined"
        size="small"
        onFocus={(e) => {
          e.target.style.boxShadow = "0 8px 16px rgba(0, 0, 0, 0.2)";
          e.target.style.transform = "scale(1.02)";
        }}
        onBlur={(e) => {
          e.target.style.boxShadow = "0 4px 6px rgba(0, 0, 0, 0.1)";
          e.target.style.transform = "scale(1)";
        }}
      />
    </div>
  </div>

  {/* زر Save Changes */}
  <div style={{ display: "flex", alignItems: "center", gap: "15px", marginTop: "15px" }}>
  {/* زر Save Changes */}
  <Button
    variant="contained"
    style={{
      padding: "12px 25px",
      backgroundColor: "#64b5f6",
      color: "#fff",
      borderRadius: "15px",
      fontSize: "16px",
      fontWeight: "bold",
      boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
      cursor: "pointer",
      transition: "background-color 0.3s, box-shadow 0.3s",
    }}
    onMouseEnter={(e) => {
      e.target.style.backgroundColor = "#42a5f5";
    }}
    onMouseLeave={(e) => {
      e.target.style.backgroundColor = "#64b5f6";
    }}
  >
    Save Changes
  </Button>

  {/* رابط Forgot password */}
  <a
    href="#"
    style={{
      fontSize: "14px",
      color: "#888",
      textDecoration: "none",
      transition: "color 0.3s",
    }}
    onMouseEnter={(e) => (e.target.style.color = "#6200ea")}
    onMouseLeave={(e) => (e.target.style.color = "#888")}
  >
    Forgot your password?
  </a>
</div>

</div>

        </div>
      )}
    </div>
  );
}

export default UserSettings;
