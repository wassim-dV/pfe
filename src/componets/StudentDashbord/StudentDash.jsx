import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import StudentMain from './StudentMain/StudentMain';
import ProgressMain from './progress/prograssMain';
import ProfilMain from '../../Profil/ProfilMain';


function DshbordStudent() {

  return (
    <>
 <Router>
  <Routes>
  <Route path="/" element={<StudentMain />} /> {/* تعريف المسار */}
  <Route path="/Home" element={<StudentMain />} /> {/* تعريف المسار */}

  <Route path="/Veiw" element={<ProgressMain />} /> {/* تعريف المسار */}

  <Route path="/Profil" element={<ProfilMain />} exact strict/>




  </Routes>
</Router>



    </>
 
  )
}

export default DshbordStudent