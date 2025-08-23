import { useState } from 'react';
import './index.css'
import { FaAngleDown } from "react-icons/fa6";
import Article from '../../components/Article/Article';
import Layout from '../../layout/Layout';
import { motion } from 'framer-motion';
import Pagination from '../../components/Pagination/Pagination';
import ArtFilter from '../../components/ArtFilter/ArtFilter';


function Tableaux() {
    const [open, setOpen] = useState(false)
    return (
        <Layout>
            <section className="home comment-ca-marche">
                <h1 className="headding">Pascale Canal</h1>
                <h1 className="sous-headding">Visitez ma e-galerie</h1>
                <div className="filter-form">
                    <div className="w-right">
                        <button className='filter-btn' onClick={() => setOpen(!open)}>Filter <FaAngleDown /></button>
                        {
                            open &&
                            <motion.div className="box-filter" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                                <ArtFilter />
                            </motion.div>
                        }
                    </div>
                </div>
                <div className="articles">
                    <Article />
                    <Article />
                    <Article />
                    <Article />
                </div>
                <div className="center-flex">
                    <Pagination />
                </div>
            </section>
        </Layout>
    );
}


export default Tableaux;