import './index.css'
import Layout from '../../layout/Layout';
import ToggleTabs from '../../components/ToggleTaps/ToggleTabs';
import { IoCalendarOutline } from "react-icons/io5";
import { useState } from 'react';


const MesEvenements = () => {
  const [activeTab, setActiveTab] = useState("standard")
  return (
    <Layout>
      <div className='comment-ca-marche'>
        <div>
          <h1 className='headding'>Mes</h1>
          <h1 className='headding'>évènements</h1>
        </div>

        <div className="tap-toggel-ccm">
          <ToggleTabs activeTab={activeTab} btn={['À venir', 'Passés']} handleTabChange={setActiveTab} />
        </div>

        <div className="blur-background ">
          <div className="content-card">
            <div className="icon-container">
              <div className="icon-circle">
                <IoCalendarOutline className="calendar-icon"/>
              </div>
            </div>

            <h2 className="title">Aucun évènement {activeTab=='standard'?'à venir':'passés'}</h2>

            <p className="subtitle">Revenez bientôt pour découvrir nos prochains évènements.</p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default MesEvenements;
