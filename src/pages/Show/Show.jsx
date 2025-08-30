import { Link, useParams } from "react-router-dom";
import Layout from "../../layout/Layout";
import './show.css'
import useFetch from "../../hooks/useFetch";
import room from '../../assets/images/mockup-living-room.webp'
import NotFound from "../404/NotFound";
import { useState } from "react";

function Show() {
    const { label } = useParams()
    const { data, loading, error } = useFetch(`/article/${label}`);
    const [mainSrc, setMainSrc] = useState(data?.mainImg);

    return (
        !loading && !error ?
            <Layout>
                <section className="show comment-ca-marche">
                    <h1 className="headding">{data?.name}</h1>
                    <h1 className="sous-headding">Par Pascale Canal</h1>
                    <div className="hero-show">
                        <div className="article-main-img">
                            <div className="imgs-right">
                                <img src={data?.mainImg} onClick={() => setMainSrc(data?.mainImg)} />
                                <img src={room} onClick={() => setMainSrc(room)} />
                            </div>
                            <div className="img-cadr">
                                <img className="main-img-" src={mainSrc || data?.mainImg} />
                                {mainSrc === room &&
                                    <img className="img-cadre-main" src={data?.mainImg} />
                                }
                            </div>
                        </div>
                        <div className="details">
                            <div className="buttom">
                                <div className="head-details">
                                    <h3>Détails</h3>
                                    <Link to='/conatct'>Contacter pour acheter</Link>
                                </div>
                                <div className="flexbox">
                                    <div><h5>Prix:</h5> <p>{data?.price} €</p></div>
                                    <div><h5>Dimensions:</h5> <p>50 cm x 50 cm</p></div>
                                    <div><h5>Technique:</h5> <p>Peinture à l'huile sur toile</p></div>
                                    <div><h5>Date de création:</h5> <p>2025</p></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <p className="info-par">{data?.desc}</p>
                </section>
            </Layout>
            : <NotFound />

    );
}

export default Show;