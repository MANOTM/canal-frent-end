import { Link } from 'react-router-dom';
import './search.css'
import logo from '../../assets/images/logo.avif'
import { Fragment, useState } from 'react';

function SearchBox() {
    const [result, setResult] = useState([])

    return (
        <div className="search-box">
            {/* Result of search */}
            {!result.length ||
                <div className="result">
                    <Fragment>
                        <Link to='' >
                            <img src='https://res.cloudinary.com/dzhi3sfz7/image/upload/v1754288197/paintings/w62qtpu42zl0ugdanys6.webp' />
                            <p>Flotte</p>
                        </Link> <Link to='' >
                            <img src='https://res.cloudinary.com/dzhi3sfz7/image/upload/v1754288197/paintings/w62qtpu42zl0ugdanys6.webp' />
                            <p>Flotte</p>
                        </Link>
                    </Fragment>
                </div>
            }
            {/* from */}
            <div className="form">
                <div className="form-logo">
                    <img src={logo} />
                </div>
                <input type="text" placeholder='Recherche un tableau...' />
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