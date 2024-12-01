import React, { useState } from 'react';
import './ٍِCVS.css'; // أضف ملف CSS لتصميم الأزرار

function CVS() {
  const [file, setFile] = useState(null);
  const [step, setStep] = useState(1); // متغير لتتبع الخطوة الحالية

  // دالة لاختيار الملف عند الضغط على الزر
  const handleFileSelect = (event) => {
    const selectedFile = event.target.files[0];
    if (selectedFile) {
      setFile(selectedFile);
      setStep(2); // الانتقال إلى الخطوة التالية
    }
  };

  // دالة لتغيير الحالة عند سحب وإفلات الملف
  const handleDrop = (event) => {
    event.preventDefault();
    const droppedFile = event.dataTransfer.files[0];
    if (droppedFile) {
      setFile(droppedFile);
      setStep(2); // الانتقال إلى الخطوة التالية
    }
  };

  // دالة لتغيير حالة السحب عندما يتم سحب ملف فوق المنطقة
  const handleDragOver = (event) => {
    event.preventDefault();
  };

  // دالة عند اختيار أحد الخيارات
  const handleOptionClick = (option) => {
    alert(`You selected: ${option}`); // يمكنك استبدال التنبيه بعملية أخرى
  };

  return (
    <div className="cvs-container">
      {step === 1 && ( // الخطوة الأولى: تحميل الملف
        <>
          <div className="file-select-area">
            <input
              type="file"
              id="file-upload"
              onChange={handleFileSelect}
              style={{ display: 'none' }}
            />
            <label htmlFor="file-upload" className="file-select-button">
              <span className="icon-wrapper">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  className="upload-icon"
                >
                  <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" fill="none" />
                  <path
                    d="M12 8v8m0 0l4-4m-4 4l-4-4"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
              Select a file
            </label>
          </div>

          <h3 style={{ padding: '40px 10px' }}>OR</h3>
          <div
            className="file-drop-area"
            onDrop={handleDrop}
            onDragOver={handleDragOver}
          >
            <p>Drag and drop a file here</p>
          </div>
        </>
      )}

      {step === 2 && ( // الخطوة الثانية: عرض الخيارات
        <div >
        <h3 className="options-header"> select category :</h3>
        <div className="options">
          <button
            className="option-button"
            onClick={() => handleOptionClick('Student')}
          >
            Student
          </button>
          <button
            className="option-button"
            onClick={() => handleOptionClick('Teacher')}
          >
            Teacher
          </button>
          <button
            className="option-button"
            onClick={() => handleOptionClick('Company')}
          >
            Company
          </button>
        </div>
      </div>
      
      )}

      {file && <div className="file-info">Uploaded file: {file.name}</div>}
    </div>
  );
}

export default CVS;
