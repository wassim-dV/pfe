import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import CompanyMain from './CompanyMain/CompanyMain';
import ProfilMain from '../../Profil/ProfilMain';


function CompanyDash() {

  return (
    <>
 <Router>
  <Routes>
  <Route path="/" element={<CompanyMain />} /> {/* تعريف المسار */}
  <Route path="/Home" element={<CompanyMain />} /> {/* تعريف المسار */}

  <Route path="/Profil" element={<ProfilMain />} exact strict/>





  </Routes>
</Router>



    </>
 
  )
}

export default CompanyDash