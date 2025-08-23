import './index.css'
import Layout from '../../layout/Layout';
import PrjForm from '../../components/Forms/PrjForm';
import { motion } from 'framer-motion'

const steps = [{ text: "Envoyez votre demande via ce formulaire", },
{
  text: "Discussion pour préciser votre projet et étudier sa faisabilité",
}, { text: "Un acompte de 30% sera demandé pour débuter le travail", },
{ text: "Réception de votre œuvre unique après validation et solde", },]
const CommandePersonnalisee = () => {
  return (
    <Layout>
      <div className='commande-personnaisee comment-ca-marche'>
        <div>
          <h1 className='headding'>Commande</h1>
          <h1 className='headding'>personnalisée</h1>
        </div>
        <div className="csf">
          <div className="right">
            <h2>Comment ça fonctionne</h2>
            <ul>
              {steps.map((key, idx) => <motion.li
                initial={{ opacity: 0, y: 30 }}   // start hidden & below
                whileInView={{ opacity: 1, y: 0 }} key={idx}><span className='count'>{++idx}</span> <span> {key.text}</span></motion.li>)}
            </ul>
          </div>
        </div>
        <PrjForm />
      </div>
    </Layout>
  );
};

export default CommandePersonnalisee;
