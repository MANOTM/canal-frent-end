import { useEffect, useState } from "react";
import "./index.css";
import { FaAngleDown } from "react-icons/fa6";
import Article from "../../components/Article/Article";
import Layout from "../../layout/Layout";
import { motion } from "framer-motion";
import Pagination from "../../components/Pagination/Pagination";
import ArtFilter from "../../components/ArtFilter/ArtFilter";
import api from "../../api/axios";

function Tableaux() {
    const [open, setOpen] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");
    const [articles, setArticles] = useState([]);


    useEffect(() => {
        const handleHashChange = () => {
            const hash = window.location.hash.slice(1);
            const pageFromHash = hash.startsWith("page-")
                ? Number.parseInt(hash.slice(5), 10)
                : 1;
            if (pageFromHash >= 1 && pageFromHash <= Math.max(1, totalPages)) {
                setCurrentPage(pageFromHash);
            }
        };


        handleHashChange(); // initial
        window.addEventListener("hashchange", handleHashChange);
        return () => window.removeEventListener("hashchange", handleHashChange);
    }, [totalPages]);

    // fetch articles whenever page changes

    useEffect(() => {
        const load = async () => {
            try {
                setLoading(true);
                setError("");

                const res = await api.get("/article", { params: { page: currentPage } });

                // Try common response shapes
                const payload = res.data || {};
                const items =
                    payload.articles ?? []; // prefer data, fallback to articles
                const pages = payload.totalPages ?? 1;

                setArticles(items);
                setTotalPages(Math.max(1, pages));
            } catch (e) {
                console.error(e);
                setError("Failed to load articles");
            } finally {
                setLoading(false);
            }
        };

        load();
    }, [currentPage]);

    const handlePageChange = (page) => {
        window.location.hash = `#page-${page}`;
        setCurrentPage(page);
    };

    return (
        <Layout>
            <section className="home comment-ca-marche">
                <h1 className="headding">Pascale Canal</h1>
                <h1 className="sous-headding">Visitez ma e-galerie</h1>

                <div className="filter-form">
                    <div className="w-right">
                        <button className="filter-btn" onClick={() => setOpen(!open)}>
                            Filter <FaAngleDown />
                        </button>
                        {open && (
                            <motion.div
                                className="box-filter"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                            >
                                <ArtFilter currentPage={currentPage} setLoading={setLoading} setError={setError} setArticles={setArticles} setTotalPages={setTotalPages} />
                            </motion.div>
                        )}
                    </div>
                </div>

                <div className="articles">
                    {!loading && !articles.length &&

                        <p className="noArticleFound">No articles found</p>

                    }
                    {loading ?
                        <>
                            <div className="skeleton"></div>
                            <div className="skeleton"></div>
                            <div className="skeleton"></div>
                            <div className="skeleton"></div>
                            <div className="skeleton"></div>
                            <div className="skeleton"></div>
                        </>
                        :
                        articles.map((a) => (
                            <Article key={a._id} Article={a} />
                        ))

                    }
                </div>

                <div className="center-flex">
                    <Pagination
                        currentPage={currentPage}
                        setCurrentPage={setCurrentPage}
                        totalPages={totalPages}
                    />
                </div>
            </section>
        </Layout>
    );
}

export default Tableaux;
