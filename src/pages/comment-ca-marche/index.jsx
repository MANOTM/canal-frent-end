import ToggleTabs from '../../components/ToggleTaps/ToggleTabs';
import Layout from '../../layout/Layout';
import './index.css'
import CommentCaMarcheData from '../../data/CommentCaMarche.json'
import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

const CommentCaMarche = () => {
  const [activeTab, setActiveTab] = useState("standard")
  const [isBlurring, setIsBlurring] = useState(false)
  const handleTabChange = (newTab) => {
    if (newTab !== activeTab) {
      setIsBlurring(true)

      setTimeout(() => {
        setActiveTab(newTab)
      }, 1000) // Change content halfway through blur

      setTimeout(() => {
        setIsBlurring(false)
      }, 2000) // Remove blur after 2 seconds
    }
  }

  return (
    <Layout>

      <div className='comment-ca-marche'>
        <div>
          <h1 className='headding'>Comment</h1>
          <h1 className='headding'>ça marche ?</h1>
        </div>
        <div className="tap-toggel-ccm">
          <ToggleTabs activeTab={activeTab} btn={['Achat Standard','Commande Personnalisée']} handleTabChange={handleTabChange} />
        </div>
        <div className="lines-articles">
          {CommentCaMarcheData.map((step, index) => <LineArticel step={step} index={index} activeTab={activeTab} isBlurring={isBlurring} />)}
        </div>
      </div>
    </Layout>
  );
};

const LineArticel = ({ step, index, activeTab, isBlurring }) => {

  return (
    <>
      {activeTab == 'custom' && !step.titleC ? '' :
        <div className={`line-article ${index % 2 === 0 ? "reverse-flex" : ""}`}>
          <div className="count-number">0{index + 1}</div>

          <AnimatePresence mode="wait">
            <motion.div
              className="la-blabla" animate={{
                filter: isBlurring ? "blur(8px)" : "blur(0px)",
                opacity: isBlurring ? 0.6 : 1,
              }}
              key={activeTab}
              initial={{ opacity: 0, y: 10 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
            >
              <h1>{activeTab === "custom" ? step.titleC : step.titleS}</h1>
              <p>{activeTab === "custom" ? step.textC : step.textS}</p>

            </motion.div>
          </AnimatePresence>


        </div>
      }
    </>
  )
}


export default CommentCaMarche;
