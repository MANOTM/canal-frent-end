import Layout from '../../layout/Layout';
import './index.css'
import img from '../../assets/images/pascalecanal.avif'
import { Link } from 'react-router-dom';

const QuiSuisJe = () => {
  return (
    <Layout>
      <div className='comment-ca-marche'>
        <div>
          <h1 className='headding'>Qui suis-je ?</h1>
        </div>
        <div className="pascalecanal-">
          <h1>Pascale Canal</h1>
          <img src={img} alt="Pascale Canal" />
        </div>
        <div className="about-me">
          <p>Je cherche à saisir une présence, un regard, une atmosphère. Mon univers est peuplé de personnages, d'animaux et de paysages, posés à la lisière du réel et de l'émotion. Chaque tableau est un instant suspendu, un hommage à la simplicité qui nous relie à l'essentiel.</p>
          <p className='right'> <span>J'utilise la peinture à l'huile avec une palette volontairement réduite: le noir, le blanc, le gris, et quelques touches d'or. Ces couleurs ne sont pas seulement un choix esthétique, mais un véritable langage. Le noir porte la profondeur et l'intensité, le blanc apporte la lumière et l'espace pour respirer, le gris évoque le temps qui passe, les silences, les nuances. Quant à l'or, discret mais essentiel, il révèle l'émotion, la chaleur et l'éclat intérieur.</span></p>
          <p>Qu'il s'agisse d'un animal attachant, d'un visage inspirant ou d'un paysage familier, je cherche à peindre au-delà de l'image pour révéler ce qui vibre, ce qui touche, ce qui demeure.</p>
          <p className='right'> <span>Je réalise également des œuvres sur commande à partir de vos photos. Chaque projet devient alors une rencontre, un dialogue avec votre histoire, vos souvenirs, vos émotions, vos animaux. À travers chaque toile, j'essaie de faire émerger une trace, un reflet, un fragment d'âme, quelque chose de vrai et d'unique qui vous touche</span></p>
          <p>C'est de là que ma peinture s'inspire.</p>
        </div>
        <div className="buttons-ps">
          <Link to='/contact' className="btnactive">Me contacter</Link>
          <Link to='/'>Voir mes tableaux</Link>
        </div>
      </div>
    </Layout>
  );
};

export default QuiSuisJe;
