import { Link } from 'react-router-dom';
import './search.css'
import logo from '../../assets/images/logo.avif'
import { Fragment, useEffect, useState } from 'react';
import api from '../../api/axios';

function SearchBox() {
    const [result, setResult] = useState([])
    const [input, setInput] = useState('')

    useEffect(() => {

        const searchArticles = async (search) => {
            if (!search.trim()){
                setResult([])
                return
            }
            try {
                const response = await api.get(`/article/search`, {
                    params: { search }, // sends ?search=...
                });
                setResult(response.data);
            } catch (error) {
                console.error("Error searching articles:", error);
                throw error;
            }
        }


        searchArticles(input)
    }, [input])

    return (
        <div className="search-box">
            {/* Result of search */}
            {!result.length ||
                <div className="result">
                    <Fragment>
                        {result.map((art, ind) =>
                            <Link to={`/${art.name}`} key={ind}>
                                <img src={art.mainImg} />
                                <p>{art.name}</p>
                            </Link>
                        )}
                    </Fragment>
                </div>
            }
            {/* from */}
            <div className="form">
                <div className="form-logo">
                    <img src={logo} />
                </div>
                <input type="text"
                    value={input}
                    onChange={e => setInput(e.target.value)} placeholder='Recherche un tableau...' />
                <button
                    className="return-top"
                    onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                >
                    Retour en haut
                </button>
            </div>
        </div>
    );
}

export default SearchBox;