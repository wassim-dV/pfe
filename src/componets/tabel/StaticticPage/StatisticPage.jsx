import React from "react";
import { Pie, Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  BarElement,
} from "chart.js";
import { motion } from "framer-motion";

ChartJS.register(ArcElement, Tooltip, Legend, CategoryScale, LinearScale, BarElement);

const Statistic = () => {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  const hoverEffect = { scale:1.02 };

  // Data for pie charts
  const userTypeData = {
    labels: ["Étudiants", "Enseignants", "Entreprises"],
    datasets: [
      {
        data: [60, 25, 15],
        backgroundColor: ["#3498db", "#2ecc71", "#e74c3c"],
        borderWidth: 2,
        borderColor: "#ffffff",
      },
    ],
  };

  const pfeTypeData = {
    labels: ["Classiques", "Innovants", "Stages en entreprise"],
    datasets: [
      {
        data: [40, 35, 25],
        backgroundColor: ["#9b59b6", "#1abc9c", "#f1c40f"],
        borderWidth: 2,
        borderColor: "#ffffff",
      },
    ],
  };

  const proposalStatusData = {
    labels: ["Validées", "Refusées", "En attente"],
    datasets: [
      {
        data: [50, 20, 30],
        backgroundColor: ["#27ae60", "#c0392b", "#f39c12"],
        borderWidth: 2,
        borderColor: "#ffffff",
      },
    ],
  };

  // Data for bar chart
  const studentsVsPfeData = {
    labels: ["GL", "IA", "SIC", "RSD"],
    datasets: [
      {
        label: "Étudiants inscrits",
        data: [120, 80, 100, 90],
        backgroundColor: "#3498db",
      },
      {
        label: "Propositions de PFE",
        data: [90, 60, 70, 50],
        backgroundColor: "#e67e22",
      },
    ],
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className="dashboard-container"
      style={{
        marginLeft:"-20px",
        fontFamily: "Arial, sans-serif",
        padding: "20px",
        width:"1260px",
        maxWidth:"1260px",
        backgroundColor: "#ecf0f1",
        borderRadius: "12px",
        boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
      }}
    >
      <h1 style={{ textAlign: "center", color: "#2c3e50", marginBottom: "20px" }}>
        Tableau de Bord
      </h1>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "20px" }}>
        {/* User Type Distribution */}
        <motion.div
          variants={fadeIn}
          whileHover={hoverEffect}
          className="chart-section"
          style={{
            padding: "15px",
            backgroundColor: "#ffffff",
            borderRadius: "12px",
            boxShadow: "0px 2px 8px rgba(0, 0, 0, 0.1)",
          }}
        >
          <h2 style={{ textAlign: "center", marginBottom: "10px" }}>
            Répartition des utilisateurs par type
          </h2>
          <div style={{ height: "250px" }}>
            <Pie data={userTypeData} options={{ maintainAspectRatio: false }} />
          </div>
        </motion.div>

        {/* PFE Type Distribution */}
        <motion.div
          variants={fadeIn}
          whileHover={hoverEffect}
          className="chart-section"
          style={{
            padding: "15px",
            backgroundColor: "#ffffff",
            borderRadius: "12px",
            boxShadow: "0px 2px 8px rgba(0, 0, 0, 0.1)",
          }}
        >
          <h2 style={{ textAlign: "center", marginBottom: "10px" }}>
            Répartition des PFE soumis par type
          </h2>
          <div style={{ height: "250px" }}>
            <Pie data={pfeTypeData} options={{ maintainAspectRatio: false }} />
          </div>
        </motion.div>

        {/* Proposal Status */}
        <motion.div
          variants={fadeIn}
          whileHover={hoverEffect}
          className="chart-section"
          style={{
            padding: "15px",
            backgroundColor: "#ffffff",
            borderRadius: "12px",
            boxShadow: "0px 2px 8px rgba(0, 0, 0, 0.1)",
          }}
        >
          <h2 style={{ textAlign: "center", marginBottom: "10px" }}>
            Statut des propositions
          </h2>
          <div style={{ height: "250px" }}>
            <Pie data={proposalStatusData} options={{ maintainAspectRatio: false }} />
          </div>
        </motion.div>

        {/* Students vs PFE Bar Chart */}
        <motion.div
          variants={fadeIn}
          whileHover={hoverEffect}
          className="chart-section"
          style={{
            padding: "15px",
            backgroundColor: "#ffffff",
            borderRadius: "12px",
            boxShadow: "0px 2px 8px rgba(0, 0, 0, 0.1)",
          }}
        >
          <h2 style={{ textAlign: "center", marginBottom: "10px" }}>
            Nombre d’étudiants et de propositions de PFE par option
          </h2>
          <div style={{ height: "250px" }}>
            <Bar data={studentsVsPfeData} options={{ maintainAspectRatio: false }} />
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Statistic;
