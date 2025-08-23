import { Link } from "react-router-dom";
import Layout from "../../layout/Layout";
import './show.css'

function Show() {
    return (
        <Layout>

            <section className="show comment-ca-marche">
                <h1 className="headding">Pitchou</h1>
                <h1 className="sous-headding">Par Pascale Canal</h1>
                <div className="hero-show">
                    <div className="article-main-img">
                        <div className="imgs-right">
                            <img src="	https://res.cloudinary.com/dzhi3sfz7/image/upload/v1754288263/paintings/wcrjeoigew3nkqot5q3p.webp" alt="" />
                            <img src="	https://res.cloudinary.com/dzhi3sfz7/image/upload/v1754288263/paintings/wcrjeoigew3nkqot5q3p.webp" alt="" />
                        </div>
                        <img className="main-img-" src="	https://res.cloudinary.com/dzhi3sfz7/image/upload/v1754288263/paintings/wcrjeoigew3nkqot5q3p.webp" alt="" />
                    </div>
                    <div className="details">
                        <div className="buttom">
                            <div className="head-details">
                                <h3>Détails</h3>
                                <Link to='/conatct'>Contacter pour acheter</Link>
                            </div>
                            <div className="flexbox">
                                <div><h5>Prix:</h5> <p>250 €</p></div>
                                <div><h5>Dimensions:</h5> <p>50 cm x 50 cm</p></div>
                                <div><h5>Technique:</h5> <p>Peinture à l'huile sur toile</p></div>
                                <div><h5>Date de création:</h5> <p>2025</p></div>
                            </div>
                        </div>
                    </div>
                </div>
                <p className="info-par">Dans l’herbe tendre des premiers printemps, il chancelle, curieux et léger. Le veau d’Aubrac, promesse fragile d’une race fière, arbore déjà le pelage doré de ses aïeux. Dans ses yeux grands ouverts, l’innocence du monde, et au creux de ses pas hésitants, l’éveil d’une tradition. Il ne sait rien encore des saisons, mais il porte en lui la mémoire d’un troupeau, d’un plateau, d’un peuple. Veau d’Aubrac, souffle neuf dans la brume du matin, éclat de vie sur la terre ancestrale.</p>
            </section>
        </Layout>
    );
}

export default Show;