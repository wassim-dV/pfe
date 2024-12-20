import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


import TeacherMain from './TeacherMain/TeacherMain';
import SoutnoceMain from './Projects/SoutnoceMain';
import ThemeDispoMain from './Projects/Theme_dispoMain';
import ProgressTeacher from './Progress/ProgressTeacher';
import ProfilMain from '../../Profil/ProfilMain';
import ProgressMain from './Progress/ProgressMain';


function DashbordTeacher() {

  return (
    <>
 <Router>
  <Routes>
  <Route path="/" element={<TeacherMain />} /> {/* تعريف المسار */}
  <Route path="/Home" element={<TeacherMain />} /> {/* تعريف المسار */}

  <Route path="/sotnoce" element={<SoutnoceMain />} /> {/* تعريف المسار */}
    <Route path="/Theme" element={<ThemeDispoMain />} exact strict/>
    <Route path="/Veiw" element={<ProgressMain />} />
    <Route path="/Profil" element={<ProfilMain />} exact strict/>





  </Routes>
</Router>
{/* <CVSM /> */}
               {/* <StudentMain/>  */}

           {/* <CompanyMain/>  */}


      {/* <TeacherMain/>  */}

   {/* <EmaliApp /> */}

       {/* < MainAdmin/> */}
              {/* <ProfilMain />  */}




    </>
 
  )
}

export default DashbordTeacher