import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import EmaliApp from './Email_Manager/EmailApp';
import ProfilMain from '../../Profil/ProfilMain';

import MainAdmin from "./Email_Manager/EmailApp"
import CVSM from './ِCVS/CVSM';
import DeadlinMain from './Deadlindate/DeadlinMain';
import StatisticMain from './StaticticPage/StatisticMain';
import SoutnoceMain from './Projecte/ProjectMain';
import ThemeDispoMain from './Projecte/Theme_dispoMain';
import ListMain from './Soutnoc/List_de_veux/ListMain'
import CalandraMain from './Soutnoc/Calandra/CalandraMain';


function DhbordAdmin() {

  return (
    <>
 <Router>
  <Routes>
  <Route path="/" element={<StatisticMain />} /> {/* تعريف المسار */}
  <Route path="/Home" element={<StatisticMain />} /> {/* تعريف المسار */}

  <Route path="/projerct" element={<SoutnoceMain />} /> {/* تعريف المسار */}
  <Route path="/sotnoce" element={<ListMain />} /> {/* تعريف المسار */}

  <Route path="/Calandra" element={<CalandraMain />} /> {/* تعريف المسار */}

    <Route path="/cvs" element={<CVSM />} /> {/* تعريف المسار */}

    <Route path="/deadline" element={<DeadlinMain />} /> {/* تعريف المسار */}
    <Route path="/Email" element={<EmaliApp />} /> {/* تعريف المسار */}


    <Route path="/profil" element={<ProfilMain />} exact strict/>
    <Route path="/Theme" element={<ThemeDispoMain />} exact strict/>


    <Route path="/settings" element={<ProfilMain />} exact strict/>
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

export default DhbordAdmin