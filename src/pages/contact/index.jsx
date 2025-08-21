import './index.css'
import Layout from '../../layout/Layout';
import Stepped from '../../components/Stepped/Stepped';
import { MdOutlineEmail } from "react-icons/md";
import { MdOutlineLocalPhone } from "react-icons/md";
import { IoLogoFacebook } from "react-icons/io5";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";



const Contact = () => {
  return (
    <Layout>
      <section className="contact comment-ca-marche">
        <div>
          <h1 className="headding">Contacte-moi</h1>
          <h1 className="sous-headding">Pour toute question, collaboration ou simplement pour échanger sur l'art.</h1>
        </div>
        <div className='contact-se'>
          <div className="mini-coordonnees">
            <div className="cub">
              <h2>Coordonnées</h2>
              <div>
                <MdOutlineEmail className='icon-cub' transform='scale(2)'/>
                <p>pascalecanal.art@gmail.com</p>
              </div>
              <div>
                <MdOutlineLocalPhone className='icon-cub'/>
                <p>+33 6 86 59 60 29</p>
              </div>
            </div>
            <div className="cub">
              <h2>Suivez-moi</h2>
              <div>
                <IoLogoFacebook className='icon-cub'/><FaInstagram className='icon-cub'/><FaLinkedin className='icon-cub'/>
              </div>
            </div>
          </div>
          <Stepped />
        </div>

      </section>
    </Layout>
  );
};

export default Contact;
