import React, { useState } from "react";
import "./Deadlinedate.css";

const Deadlinedate = () => {
  const [selectedDeadline, setSelectedDeadline] = useState("propositions");
  const [deadlines, setDeadlines] = useState({
    propositions: { start: "", end: "" },
    encadrement: { start: "", end: "" },
    projectValidation: { start: "", end: "" },
    juryAssignment: { start: "", end: "" },
  });
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [showHelp, setShowHelp] = useState(false); // حالة لإظهار أو إخفاء المساعدة

  const handleChange = (e, type, field) => {
    setDeadlines((prev) => ({
      ...prev,
      [type]: {
        ...prev[type],
        [field]: e.target.value,
      },
    }));
  };

  const handleSubmit = () => {
    setShowConfirmation(true);
    setTimeout(() => setShowConfirmation(false), 2000);
  };

  return (
    <div className="time-management-container">
      <header className="header">
        <h1>📅 Gestion des Deadlines</h1>
        <p>Planifiez vos échéances pour une meilleure organisation</p>
        
      </header>

      <div className="content-wrapper">
        <div className="navbar">
          {[
            { id: "propositions", label: "Propositions" },
            { id: "encadrement", label: "Encadrement" },
            { id: "projectValidation", label: "Validation de Projet" },
            { id: "juryAssignment", label: "Attribution de Jury" },
          ].map((item) => (
            <button
              key={item.id}
              className={`nav-button ${
                selectedDeadline === item.id ? "active" : ""
              }`}
              onClick={() => setSelectedDeadline(item.id)}
            >
              {item.label}
            </button>
          ))}
        </div>

        <div className="deadline-item">
          <h2>{`🗓 ${selectedDeadline}`}</h2>
          <p className="description">
            {selectedDeadline === "propositions"
              ? "Dates pour soumettre vos propositions de projet."
              : selectedDeadline === "encadrement"
              ? "Délais pour l'attribution des encadrants."
              : selectedDeadline === "projectValidation"
              ? "Période pour valider votre projet."
              : "Dates pour l'organisation du jury."}
          </p>
          <div className="date-inputs">
            <div className="input-container">
              <label htmlFor="start-date">Date de début</label>
              <input
                style={{ width: "350px", textAlign: "center" }}
                id="start-date"
                type="date"
                value={deadlines[selectedDeadline].start}
                onChange={(e) => handleChange(e, selectedDeadline, "start")}
              />
            </div>
            <span className="to">à</span>
            <div className="input-container">
              <label htmlFor="end-date">Date de fin</label>
              <input
                style={{ width: "350px", textAlign: "center" }}
                id="end-date"
                type="date"
                value={deadlines[selectedDeadline].end}
                onChange={(e) => handleChange(e, selectedDeadline, "end")}
              />
            </div>
          </div>
          <button className="submit-button" onClick={handleSubmit}>
            Confirmer
          </button>

          <button style={{marginTop:"80px" , marginLeft:"1000px"}}  className="help-button" onClick={() => setShowHelp(true)}>
          ❓ 
        </button>
        </div>
      </div>

      {showConfirmation && (
        <div className="confirmation-toast">✅ Opération réussie !</div>
      )}

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
    </div>
  );
};

export default Deadlinedate;
